import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DEFAULT_API_STATE, DEFAULT_LOADER, Endpoints, IApiOptions, Loader, Methods, RequestOptions } from '@app/enums/api';
import { environment } from '@env/environment';
import { BehaviorSubject, catchError, finalize, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl!: string;
  private params = new Map<string, string | number>();
  private requestCount = 0;

  constructor(
    private httpClient: HttpClient,
    // private configService
    // private notificationService
  ) { 
    this.baseUrl = environment.apiUrl;
  }

  public request(url: Endpoints, method: Methods, apiOptions: IApiOptions = {}, requestOptions: RequestOptions): Observable<any> {
    if (!this.isLegalUrl()) { // don't make illegal requests [for edge cases]
      return throwError(() => 'illegal url');
    }

    if (this.requestCount === 0) {
      // this.configService.setRequestInProgress(true);
      // this.requestInProgressTimeout();
    }

    this.requestCount += 1;
    
    const normalizedUrl = `${this.baseUrl}${this.normalizeUrl(url, apiOptions.urlReplacements!)}`;
    console.log('📝 normalizeUrl: ', normalizedUrl);

    apiOptions.params =  apiOptions.params || {};
    let token;
    if (this.params.has('token')) {
      token = this.params.get('token');
    }
    apiOptions.headers = token ? new HttpHeaders({'Authorization': `Bearer ${token}`}) : undefined;

    if (!requestOptions.loader) {
			requestOptions.loader = DEFAULT_LOADER.loader;
		}

    if (!requestOptions.apiState) {
			requestOptions.apiState = DEFAULT_API_STATE.apiState;
		}
    
    requestOptions.apiState.isSuccededSubject.next(false);
    requestOptions.loader.isLoadingSubject.next(true);

    return this.httpClient
      .request(method, normalizedUrl, apiOptions)
      .pipe(
        catchError((res) => {
          requestOptions.apiState!.isSuccededSubject.next(false);
          requestOptions.loader!.isLoadingSubject.next(false);

          // this.notificationService.showErrorNotification(res.error || null);
          return throwError(() => res);
        }),
        tap((result) => {
          if(!result.isSucceeded && result.message) {
            // this.notificationService.showErrorNotification(result.message)
          }
          else if(result.isSucceeded) {
            requestOptions.apiState!.isSuccededSubject.next(true);
            // this.notificationService.showMessageNotification('Successfully!');
          }
        }),
        finalize(() => {
          requestOptions.loader!.isLoadingSubject.next(false);

          this.requestCount -= 1;
          if (this.requestCount === 0) {
            // this.configService.setRequestInProgress(false);
          }
        })
      );
  }

  private normalizeUrl(url: Endpoints, params: {[key: string]: string | number}) {
    return Object.keys(params || {})
      .reduce((urlToCheck, paramName) => urlToCheck.replace(`:${paramName}`, params[paramName].toString()), url);
  }

  private isLegalUrl() {
    return true;
  }

  public generateLoader(): Loader {
    const isLoadingSubject = new BehaviorSubject<boolean>(false);

		return {
			isLoadingSubject: isLoadingSubject,
      isLoading$: isLoadingSubject.asObservable()
		};
	}

  public setUrlParameter(parameter: string | number, name: string): void {
    this.params.set(name, parameter);
  }

  public clearUrlParameters(): void {
    this.params.clear();
  }
}

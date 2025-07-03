import { Injectable } from '@angular/core';
import { Endpoints, Loader, Methods } from '@app/enums/api';
import { UserLogInData } from '@app/enums/users';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loader?: Loader;
  private userData$ = new BehaviorSubject<any>(null);
  private usersData$ = new BehaviorSubject<any>(null);

  constructor(
    private localStorageService: LocalStorageService,
    private api: ApiService,
  ) { 
    this.userData$.next(this.localStorageService.getItem('user'));
    this.setApiUrlParams(this.localStorageService.getItem('user'));
    this.loader = api.generateLoader();
  }

  get data(): any {
    return this.userData$.getValue();
  }

  getUsersData(): Observable<any> {
    return this.usersData$.asObservable();
  }

  getUserData(): Observable<any> {
    return this.userData$.asObservable();
  }

  logIn(userLogInData: UserLogInData): Observable<any> {
    return this.api
      .request(
        Endpoints.LOGIN,
        Methods.POST,
        {
          params: {},
          body: userLogInData
        },
        { loader: this.loader }
      )
      .pipe(
        tap(async (userData) => {
          await this.userDataEvents(userData.resultObj);
        })
      )
  }

  logout(isManual: Boolean = false): void {
    if (isManual) { 
      // clean retailer data saved for auto login in order to prevent login after manual logout
      this.localStorageService.removeItem('prevWorkspaceData');
    } else {
      this.localStorageService.setItem('prevWorkspaceData', this.localStorageService.getItem('workspaceData'));
    }

    this.userData$.next(null);
    this.api.clearUrlParameters();
    this.localStorageService.removeItem('user');
    this.localStorageService.removeItem('filters');
    this.localStorageService.setItem('hardLogout', true);
  }

  isLoggedIn(): boolean {
    return Boolean(this.data);
  }

  userDataEvents(userData: any) {
    if (this.isInvalidToken(userData)) {
      return;
    }

    this.localStorageService.setItem('user', userData);
    this.setApiUrlParams(userData);
    this.userData$.next(userData);
    this.api.setUrlParameter(userData.accessToken, 'token');
  }

  isInvalidToken(userData: any) {
    return !userData?.accessToken;
  }

  private setApiUrlParams(data: any): void {
    if (!data) {
      return;
    }
    this.api.setUrlParameter(data.accessToken, 'token');
  }
}

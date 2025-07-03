import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private apiUrl = environment.apiUrl; // sửa theo URL backend của bạn

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/test`);
  }
}

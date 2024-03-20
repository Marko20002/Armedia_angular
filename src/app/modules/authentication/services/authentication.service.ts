import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{ jwt: string }> {
    return this.http.post<any>(`${this.apiUrl}/person/login`, { username, password })
      .pipe(
        map(response => {
          const jwt = response.jwt;
          localStorage.setItem('jwt', jwt);
          return response;
        })
      );
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('jwt');
  }

  register(person: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/person/register`, person)
      .pipe(
        catchError(error => {
          console.error('Registration failed:', error);
          return throwError(error);
        })
      );
  }
}

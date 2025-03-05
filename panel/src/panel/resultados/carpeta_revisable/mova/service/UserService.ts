import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.example.com/api/usuarios';

  constructor(private http: HttpClient) {}

  // Get user information
  getUser(id: string, filter: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    let params = new HttpParams();
    params = params.append('filter', JSON.stringify(filter));

    return this.http.get<any>(url, { params })
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  // Authenticate user
  authenticateUser(usuario: string, contraseña: string): Observable<any> {
    const url = `${this.apiUrl}/authenticate`;
    const body = { usuario, contraseña };

    return this.http.post<any>(url, body)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  // Update user information
  updateUser(id: string, nombre: string, email: string, telefono: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const body = { id, nombre, email, telefono };

    return this.http.put<any>(url, body)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  // Handle errors
  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError('Something bad happened; please try again later.');
  }
}
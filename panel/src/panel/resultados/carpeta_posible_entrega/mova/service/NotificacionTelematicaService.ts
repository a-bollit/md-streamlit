import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotificacionTelematicaService {
  private apiUrl = '/api/notificacionTelematica';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getNotificaciones(params: any): Observable<any> {
    let queryParams = new HttpParams();
    for (const key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(this.apiUrl, { headers: this.getHeaders(), params: queryParams })
      .pipe(
        catchError(this.handleError)
      );
  }

  createNotificacion(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateNotificacion(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteNotificacion(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = `${environment.mova.notificationService.appKey}/notifications`;

  constructor(private http: HttpClient) { }

  private getHttpOptions() {
    const token = localStorage.getItem('jwtToken');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  getNotifications(filtro: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?filtro=${filtro}`, this.getHttpOptions())
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  getNotification(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, this.getHttpOptions())
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  createNotification(notification: { titulo: string; mensaje: string; fecha: Date; }): Observable<any> {
    return this.http.post<any>(this.apiUrl, notification, this.getHttpOptions())
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  updateNotification(id: string, notification: { titulo: string; mensaje: string; fecha: Date; }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, notification, this.getHttpOptions())
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  deleteNotification(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, this.getHttpOptions())
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }
}
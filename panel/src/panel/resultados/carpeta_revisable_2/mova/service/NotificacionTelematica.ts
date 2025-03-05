import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class NotificacionTelematicaService {
  private apiUrl = '/api/notificaciones-telematicas';
  
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  // Método para obtener todas las notificaciones telemáticas
  getNotificacionesTelematicas(): Observable<any> {
    return this.http.get<any>(this.apiUrl, this.getHttpOptions())
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  // Método para obtener los detalles de una notificación telemática específica
  getNotificacionTelematica(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url, this.getHttpOptions())
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  // Método para enviar una nueva notificación telemática
  enviarNotificacionTelematica(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data, this.getHttpOptions())
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  // Método para actualizar los detalles de una notificación telemática específica
  actualizarNotificacionTelematica(id: number, data: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, data, this.getHttpOptions())
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  // Métodos privados para manejar el error y la autenticación

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.notificationService.showError(errorMessage);
    return throwError(errorMessage);
  }

  private getHttpOptions() {
    const token = this.authService.getToken();
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }
}
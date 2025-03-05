import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class GeaAcureService {
  private apiUrl = '/api/gea-acure';

  constructor(private http: HttpClient, private authService: AuthService, private notificationService: NotificationService) {}

  // GET: Lista de expedientes
  getExpedientes(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  // GET: Detalles específicos de un expediente
  getExpedienteById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  // POST: Registrar nuevo documento en un expediente
  registerDocumento(document: any): Observable<any> {
    return this.http.post(this.apiUrl, document, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  // PUT: Actualizar estado de un documento específico
  updateDocumento(id: number, document: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, document, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  // Headers con autenticación JWT
  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Manejo de errores
  private handleError(error: any): Observable<never> {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.notificationService.showError(errorMessage);
    return throwError(errorMessage);
  }
}
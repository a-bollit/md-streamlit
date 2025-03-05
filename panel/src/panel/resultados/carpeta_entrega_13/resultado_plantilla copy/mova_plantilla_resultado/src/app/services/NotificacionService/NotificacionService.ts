import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  private apiUrl = '/api/notificaciones';

  constructor(private http: HttpClient) {}

  private handleError(error: any): Observable<never> {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getNotificaciones(tipo?: string, estado?: string, fechaDesde?: Date, fechaHasta?: Date): Observable<any> {
    let params = new HttpParams();
    if (tipo) params = params.append('tipo', tipo);
    if (estado) params = params.append('estado', estado);
    if (fechaDesde) params = params.append('fechaDesde', fechaDesde.toISOString());
    if (fechaHasta) params = params.append('fechaHasta', fechaHasta.toISOString());

    return this.http.get<any[]>(this.apiUrl, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  createNotificacion(notificacion: {tipo: string, contenido: string, estado: string, fechaEmision: Date}): Observable<any> {
    return this.http.post<any>(this.apiUrl, notificacion)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateNotificacion(id: string, notificacion: {tipo: string, contenido: string, estado: string, fechaEmision: Date}): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, notificacion)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteNotificacion(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
}
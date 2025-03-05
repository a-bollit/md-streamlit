import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  private baseUrl: string;

  constructor(private http: HttpClient, private envService: EnvService) {
    this.baseUrl = this.envService.apiUrl;
  }

  private handleError(error: any): Observable<never> {
    console.error("An error occurred", error);
    return throwError("Something bad happened; please try again later.");
  }

  private getHttpOptions() {
    const token = localStorage.getItem('token') ?? '';
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }

  getDocumento(id: string): Observable<any> {
    const url = `${this.baseUrl}/api/documentos/${id}`;
    return this.http.get<any>(url, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  createDocumento(documento: { titulo: string, descripcion: string, contenido: string }): Observable<any> {
    const url = `${this.baseUrl}/api/documentos`;
    return this.http.post<any>(url, documento, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  updateDocumento(id: string, documento: { titulo: string, descripcion: string, contenido: string }): Observable<any> {
    const url = `${this.baseUrl}/api/documentos/${id}`;
    return this.http.put<any>(url, documento, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  deleteDocumento(id: string): Observable<any> {
    const url = `${this.baseUrl}/api/documentos/${id}`;
    return this.http.delete<any>(url, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }
}
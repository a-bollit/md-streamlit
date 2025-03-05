import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeaAcureService {
  private apiUrl = '/api/geaAcure';

  constructor(private http: HttpClient) { }

  // Create a new record
  createGeaAcure(record: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.apiUrl, record, { headers })
      .pipe(catchError(this.handleError));
  }

  // Get records with optional query parameters for filtering
  getGeaAcure(params?: { cdunidad?: string, dsunidad?: string, fcdesde?: string, fchasta?: string }): Observable<any[]> {
    let httpParams = new HttpParams();
    if (params) {
      if (params.cdunidad) httpParams = httpParams.set('cdunidad', params.cdunidad);
      if (params.dsunidad) httpParams = httpParams.set('dsunidad', params.dsunidad);
      if (params.fcdesde) httpParams = httpParams.set('fcdesde', params.fcdesde);
      if (params.fchasta) httpParams = httpParams.set('fchasta', params.fchasta);
    }
    return this.http.get<any[]>(this.apiUrl, { params: httpParams })
      .pipe(catchError(this.handleError));
  }

  // Update an existing record
  updateGeaAcure(id: string, record: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(`${this.apiUrl}/${id}`, record, { headers })
      .pipe(catchError(this.handleError));
  }

  // Delete a record by ID
  deleteGeaAcure(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
  
  // Error handling
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
}
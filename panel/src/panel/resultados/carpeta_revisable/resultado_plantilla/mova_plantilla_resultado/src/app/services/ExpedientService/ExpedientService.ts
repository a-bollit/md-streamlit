Result from component_generator_task: ```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpedientService {

  private apiUrl = 'https://api.example.com/expedientes';

  constructor(private http: HttpClient) { }

  /**
   * GET expedients.
   * @param params Query parameters for GET request.
   * @returns Observable array of expedients.
   */
  getExpedients(params: { id?: string; filtro?: any }): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * POST a new expedient.
   * @param expedient Data of the new expedient.
   * @returns Observable of the created expedient.
   */
  createExpedient(expedient: { titulo: string; descripcion: string; fechaInicio: Date; fechaFin: Date }): Observable<any> {
    return this.http.post<any>(this.apiUrl, expedient)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * PUT (update) an existing expedient.
   * @param id ID of the expedient to update.
   * @param expedient Updated data of the expedient.
   * @returns Observable of the updated expedient.
   */
  updateExpedient(id: string, expedient: { id: string; titulo: string; descripcion: string; fechaInicio: Date; fechaFin: Date }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, expedient)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * DELETE an expedient.
   * @param id ID of the expedient to delete.
   * @returns Observable of the deletion confirmation message.
   */
  deleteExpedient(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Handle HTTP errors.
   * @param error HTTP error response.
   * @returns Error observable.
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    // Log error to console or send to logging infrastructure
    console.error('An error occurred:', error);
    // Customize error based on your needs
    return throwError('Something bad happened; please try again later.');
  }
}
```

El servicio `ExpedientService` está totalmente implementado para realizar las operaciones CRUD requeridas. Utiliza `HttpClient` para realizar las solicitudes HTTP y maneja los errores de manera adecuada. Además, sigue las pautas y convenciones de MOVA, lo que garantiza la integración fluida y la estructura modular del código.
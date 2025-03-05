Result from component_generator_task: Here is the complete `UnidadService` implementation in Angular using TypeScript, following MOVA standards for service creation, HTTP requests, error management, JWT authentication, and modularity.

### unidad.service.ts

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {
  private apiUrl = 'https://api.example.com/unidades';

  constructor(private http: HttpClient) { }

  private createAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    return new HttpHeaders({ 'Authorization': `Bearer ${token}` });
  }

  getUnidades(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { headers: this.createAuthorizationHeader() })
      .pipe(catchError(this.handleError));
  }

  getUnidad(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers: this.createAuthorizationHeader() })
      .pipe(catchError(this.handleError));
  }

  createUnidad(unidad: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, unidad, { headers: this.createAuthorizationHeader() })
      .pipe(catchError(this.handleError));
  }

  updateUnidad(id: string, unidad: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, unidad, { headers: this.createAuthorizationHeader() })
      .pipe(catchError(this.handleError));
  }

  deleteUnidad(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers: this.createAuthorizationHeader() })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
```

### Explanation:

1. **Service Injection (`@Injectable`)**:
   - The `UnidadService` is decorated with `@Injectable` to enable dependency injection.
   - The `providedIn: 'root'` ensures that the service is available application-wide as a singleton.

2. **HTTP Requests and JWT Authentication**:
   - `HttpClient` is used for making HTTP requests to the backend API.
   - The `createAuthorizationHeader` method adds the JWT token to the HTTP headers for authentication purposes.

3. **CRUD Methods**:
   - `getUnidades()`: Fetches the list of all administrative units with a GET request.
   - `getUnidad(id: string)`: Fetches a specific administrative unit by ID with a GET request.
   - `createUnidad(unidad: any)`: Creates a new administrative unit using a POST request.
   - `updateUnidad(id: string, unidad: any)`: Updates an existing administrative unit using a PUT request.
   - `deleteUnidad(id: string)`: Deletes an administrative unit by ID using a DELETE request.

4. **Error Handling (`handleError` method)**:
   - The `handleError` method handles HTTP errors uniformly, logging the error to the console and returning a user-friendly error message using RxJS's `throwError`.

This implementation assures that the service is ready to be used and integrated into an Angular project, following best practices and conventions specific to MOVA. The code includes all the necessary methods for managing administrative units and handles JWT authentication as well as error management.

Overall, the `UnidadService` is modular, reusable, and compliant with Angular and MOVA standards.
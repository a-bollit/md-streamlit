Result from component_generator_task: ```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = 'https://api.example.com/api/documentos'; // Cambia esta URL por la URL real de tu backend

  constructor(private http: HttpClient) {}

  // Configurar headers con autenticación JWT
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Manejo de errores
  private handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  
  // GET - Obtener documentos
  getDocumentos(id: string, tipo: string): Observable<any> {
    const params = new HttpParams()
      .set('id', id)
      .set('tipo', tipo);
      
    return this.http.get<any>(this.apiUrl, { headers: this.getHeaders(), params })
      .pipe(
        catchError(this.handleError)
      );
  }

  // POST - Subir nuevo documento
  uploadDocumento(nombre: string, tipo: string, contenido: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('nombre', nombre);
    formData.append('tipo', tipo);
    formData.append('contenido', contenido);

    return this.http.post<any>(this.apiUrl, formData, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  // PUT - Actualizar documento existente
  updateDocumento(id: string, nombre: string, tipo: string, contenido: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('id', id);
    formData.append('nombre', nombre);
    formData.append('tipo', tipo);
    formData.append('contenido', contenido);

    return this.http.put<any>(`${this.apiUrl}/${id}`, formData, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  // DELETE - Eliminar documento
  deleteDocumento(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }
}
```

### Resumen del Servicio
- **Autenticación JWT**: El servicio utiliza un método `getHeaders` para obtener el token JWT almacenado y configurarlo en los headers de cada solicitud HTTP.
- **Gestión de errores**: Se implementa un método `handleError` que captura y maneja los errores de las solicitudes HTTP utilizando `catchError` de RxJS.
- **Operaciones CRUD**: El servicio implementa los métodos `getDocumentos`, `uploadDocumento`, `updateDocumento` y `deleteDocumento` para manejar las operaciones correspondientes de los documentos.
- **Uso de HttpClient**: Utiliza `HttpClient` para realizar las solicitudes HTTP a los endpoints definidos en la descripción funcional.

El archivo `document.service.ts` está ahora listo para ser utilizado en un proyecto Angular, asegurando que todas las dependencias y métodos están correctamente implementados y documentados según las directrices de MOVA.
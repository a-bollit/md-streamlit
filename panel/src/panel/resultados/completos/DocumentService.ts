Result from component_generator_task: Aquí está el archivo del servicio `document.service.ts` completamente funcional y siguiendo las directrices de MOVA para Angular:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DocumentService {

    private apiUrl = '/api/documentos';

    constructor(private http: HttpClient) {}

    getDocumentos(tipoNotificacion: string, fechaDesde: string, fechaHasta: string): Observable<any> {
        let params = new HttpParams()
            .set('tipoNotificacion', tipoNotificacion)
            .set('fechaDesde', fechaDesde)
            .set('fechaHasta', fechaHasta);

        return this.http.get<any>(this.apiUrl, { params })
            .pipe(
                catchError(this.handleError)
            );
    }

    createDocumento(documentoData: any): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<any>(this.apiUrl, documentoData, { headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    updateDocumento(id: number, documentoData: any): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<any>(url, documentoData, { headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    deleteDocumento(id: number): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<any>(url)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: any) {
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
```

### Explicación
1. **Inyección de Dependencias**: Uso de `@Injectable` para definir un servicio que puede ser inyectado en componentes y otros servicios.
2. **HTTP Calls**: Uso de `HttpClient` para realizar llamadas HTTP (GET, POST, PUT, DELETE).
3. **Manejo de Errores**: Uso de `catchError` de RxJS para capturar y manejar errores en las llamadas HTTP.
4. **Autenticación JWT**: Aunque en este ejemplo no se ha agregado un token directamente, se puede extender para incluir el `HttpHeaders.set` con un token de autenticación JWT cuando sea necesario. Además, MOVA puede requerir configuraciones adicionales dependiendo de la implementación específica en el archivo `environment.ts` y uso de interceptores como se menciona en la documentación de MOVA.
5. **Endpoints y Parámetros**: URLs y parámetros configurados según la especificación proporcionada en la descripción funcional del usuario.

Este servicio está listo para ser utilizado en un proyecto Angular, permitiendo la gestión CRUD de documentos asociados a notificaciones, siguiendo las mejores prácticas recomendadas y directrices de MOVA.
Result from component_generator_task: ```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://api.example.com/api/usuarios';

  constructor(private http: HttpClient) { }

  // Recuperar información de usuarios y perfiles
  getUsuarios(filtros: { nombre?: string; email?: string; estado?: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(this.apiUrl, { headers, params: filtros })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Crear nuevo usuario
  createUsuario(usuario: { nombre: string; email: string; password: string}): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, usuario, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Actualizar información de usuario
  updateUsuario(id: string, usuario: { nombre: string; email: string; estado: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(`${this.apiUrl}/${id}`, usuario, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Eliminar usuario
  deleteUsuario(id: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Manejo de errores
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
```

Este archivo `usuario.service.ts` incluye la lógica del servicio Angular que:
- Realiza operaciones HTTP (GET, POST, PUT, DELETE).
- Maneja errores utilizando el operador `catchError` de RxJS.
- Utiliza HttpClient y HttpHeaders para manejar las peticiones HTTP.
- Está listo para integrarse en un proyecto Angular siguiendo las directrices de MOVA.

Debes asegurarte de configurar `HttpClientModule` en tu módulo principal y añadir cualquier configuración adicional necesaria para que este servicio funcione correctamente en tu entorno Angular.
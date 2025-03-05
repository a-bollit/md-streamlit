Result from component_generator_task: ```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificacionCorreoService {
  private apiUrl = '/api/notificaciones/correo';  // URL de la API

  constructor(private http: HttpClient) { }

  // Metodo para obtener las notificaciones por correo
  getNotificacionesCorreo(tipoNotificacion: string, fechaDesde: string, fechaHasta: string): Observable<any> {
    let params = new HttpParams()
      .set('tipoNotificacion', tipoNotificacion)
      .set('fechaDesde', fechaDesde)
      .set('fechaHasta', fechaHasta);

    return this.http.get<any[]>(this.apiUrl, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Metodo para enviar una nueva notificación por correo
  sendNotificacionCorreo(notificacionData: { documento: string, descripcion: string }): Observable<any> {
    return this.http.post<{ success: boolean, message: string }>(this.apiUrl, notificacionData)
      .pipe(
        catchError(this.handleError)
      );
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
    return throwError(errorMessage);
  }
}

// Interceptor para añadir el Token JWT a las solicitudes
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');  // Suponemos que se guarda el token en LocalStorage
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}

// app.module.ts para configurar el interceptor JWT
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';

@NgModule({
  imports: [
    HttpClientModule,
    // otros importes...
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Encapsulación en Componente MV-Card

Una demostración rápida de cómo utilizar el componente de servicio en un formulario dentro de un `mv-card` puede verse así:

```typescript
import { Component } from '@angular/core';
import { NotificacionCorreoService } from './notificacion-correo.service';

@Component({
  selector: 'app-notificacion',
  template: `
    <mv-card>
      <mv-header>
        <mv-title>Notificación por Correo</mv-title>
      </mv-header>
      <mv-content>
        <form (ngSubmit)="onSubmit()">
          <mv-input [(ngModel)]="documento" name="documento" placeholder="Documento"></mv-input>
          <mv-input [(ngModel)]="descripcion" name="descripcion" placeholder="Descripción"></mv-input>
          <mv-button type="submit">Enviar</mv-button>
        </form>
        <mv-list>
          <mv-list-item *ngFor="let item of notificaciones">{{item.documento}} - {{item.descripcion}}</mv-list-item>
        </mv-list>
      </mv-content>
    </mv-card>
  `,
  styles: [`
    mv-card {
      max-width: 600px;
      margin: auto;
    }
  `]
})
export class NotificacionComponent {
  documento: string;
  descripcion: string;
  notificaciones = [];

  constructor(private notificacionCorreoService: NotificacionCorreoService) { }

  onSubmit(): void {
    const data = { documento: this.documento, descripcion: this.descripcion };
    this.notificacionCorreoService.sendNotificacionCorreo(data).subscribe(
      response => {
        console.log('Notificación enviada con éxito', response);
        this.loadNotificaciones();
      },
      error => {
        console.error('Error al enviar la notificación', error);
      }
    );
  }
  
  loadNotificaciones(): void {
    const tipoNotificacion = '';  // Ajustar según sea necesario
    const fechaDesde = '';  // Ajustar según sea necesario
    const fechaHasta = '';  // Ajustar según sea necesario

    this.notificacionCorreoService.getNotificacionesCorreo(tipoNotificacion, fechaDesde, fechaHasta).subscribe(
      data => {
        this.notificaciones = data;
      },
      error => {
        console.error('Error al cargar notificaciones', error);
      }
    );
  }
}
```

Este código cumple con los requisitos especificados y sigue las mejores prácticas de MOVA y Angular, e incluye las mejoras necesarias para la autenticación y manejo de errores.
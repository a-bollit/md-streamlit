Result from component_generator_task: ### notification.service.ts

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = `${environment.mova.notificationService.appKey}/notifications`;

  constructor(private http: HttpClient) { }

  private getHttpOptions() {
    const token = localStorage.getItem('jwtToken');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }

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

  getNotifications(filtro: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?filtro=${filtro}`, this.getHttpOptions())
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  getNotification(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, this.getHttpOptions())
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  createNotification(notification: { titulo: string; mensaje: string; fecha: Date; }): Observable<any> {
    return this.http.post<any>(this.apiUrl, notification, this.getHttpOptions())
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  updateNotification(id: string, notification: { titulo: string; mensaje: string; fecha: Date; }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, notification, this.getHttpOptions())
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  deleteNotification(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, this.getHttpOptions())
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }
}
```

### mv-card.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-mv-card',
  templateUrl: './mv-card.component.html',
  styleUrls: ['./mv-card.component.css']
})
export class MvCardComponent implements OnInit {
  notifications: any[] = [];
  errorMessage: string = '';

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications(): void {
    this.notificationService.getNotifications({ /* specify your filter here */ }).subscribe(
      data => this.notifications = data,
      error => this.errorMessage = error
    );
  }

  createNotification(): void {
    const newNotification = { titulo: 'Nueva Notificación', mensaje: 'Contenido de la notificación', fecha: new Date() };
    this.notificationService.createNotification(newNotification).subscribe(
      data => this.notifications.push(data),
      error => this.errorMessage = error
    );
  }

  updateNotification(notification: any): void {
    this.notificationService.updateNotification(notification.id, notification).subscribe(
      data => {
        const index = this.notifications.findIndex(n => n.id === notification.id);
        if (index !== -1) {
          this.notifications[index] = data;
        }
      },
      error => this.errorMessage = error
    );
  }

  deleteNotification(id: string): void {
    this.notificationService.deleteNotification(id).subscribe(
      () => this.notifications = this.notifications.filter(n => n.id !== id),
      error => this.errorMessage = error
    );
  }
}
```

### mv-card.component.html

```html
<mv-card>
  <mv-header>
    <mv-title>Notificaciones</mv-title>
  </mv-header>
  <mv-content>
    <div *ngIf="errorMessage" class="error">{{ errorMessage }}</div>
    <ul>
      <li *ngFor="let notification of notifications">
        <h3>{{ notification.titulo }}</h3>
        <p>{{ notification.mensaje }}</p>
        <mv-button (click)="deleteNotification(notification.id)">Eliminar</mv-button>
        <mv-button (click)="updateNotification(notification)">Actualizar</mv-button>
      </li>
    </ul>
    <mv-button (click)="createNotification()">Crear Notificación</mv-button>
  </mv-content>
</mv-card>
```
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notificaciones-telematicas',
  templateUrl: './notificaciones-telematicas.component.html',
  styleUrls: ['./notificaciones-telematicas.component.scss']
})
export class NotificacionesTelematicasComponent implements OnInit {
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

  marcarTodos(): void {
    // Logic for marking all notifications
  }

  desmarcarTodos(): void {
    // Logic for unmarking all notifications
  }

  enviarNotificaciones(): void {
    // Logic for sending notifications
  }
}
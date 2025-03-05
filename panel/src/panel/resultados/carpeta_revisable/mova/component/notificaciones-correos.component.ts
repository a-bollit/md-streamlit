import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { DocumentService } from '../services/document.service';
import { ExpedientService } from '../services/expedient.service';

@Component({
  selector: 'app-notificaciones-correos',
  templateUrl: './notificaciones-correos.component.html',
  styleUrls: ['./notificaciones-correos.component.scss']
})
export class NotificacionesCorreosComponent implements OnInit {
  notificaciones: any[] = [];
  errorMessage: string = '';
  allMarked: boolean = false;

  constructor(
    private notificationService: NotificationService,
    private documentService: DocumentService,
    private expedientService: ExpedientService) { }

  ngOnInit(): void {
    this.fetchNotifications();
  }

  fetchNotifications(): void {
    this.notificationService.getNotifications({ from: 'PestañasNotificaciones' }).subscribe(
      data => this.notificaciones = data,
      error => this.errorMessage = error
    );
  }

  markAll(): void {
    this.notificaciones.forEach(n => n.marcado = true);
    this.allMarked = true;
  }

  unmarkAll(): void {
    this.notificaciones.forEach(n => n.marcado = false);
    this.allMarked = false;
  }

  registerMarked(): void {
    const markedNotifications = this.notificaciones.filter(n => n.marcado);
    // Implemente la lógica para registrar las notificaciones marcadas usando los servicios adecuados
    console.log('Registrando:', markedNotifications);
  }

  sendMarked(): void {
    const markedNotifications = this.notificaciones.filter(n => n.marcado);
    // Implemente la lógica para enviar las notificaciones registradas usando los servicios adecuados
    console.log('Enviando:', markedNotifications);
  }

  // Métodos adicionales de lógica y validación según sea necesario
}
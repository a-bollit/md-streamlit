import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NotificacionService } from '../services/notificacion.service';

@Component({
  selector: 'app-notification-corr',
  templateUrl: './notification-corr.component.html',
  styleUrls: ['./notification-corr.component.scss']
})
export class NotificationCorrComponent implements OnInit {
  @Input() notificaciones: any[] = [];
  @Output() notificacionesSeleccionadas = new EventEmitter<any[]>();
  notificacionesSeleccionadasList: any[] = [];

  constructor(private notificacionService: NotificacionService) {}

  ngOnInit(): void {
  }

  toggleSeleccion(notificacion: any): void {
    const index = this.notificacionesSeleccionadasList.indexOf(notificacion);
    if (index === -1) {
      this.notificacionesSeleccionadasList.push(notificacion);
    } else {
      this.notificacionesSeleccionadasList.splice(index, 1);
    }
  }

  registrarNotificaciones(): void {
    this.notificacionesSeleccionadas.emit(this.notificacionesSeleccionadasList);
  }

  enviarNotificaciones(): void {
    // Lógica para enviar notificaciones
    this.notificacionesSeleccionadas.emit(this.notificacionesSeleccionadasList);
  }
}
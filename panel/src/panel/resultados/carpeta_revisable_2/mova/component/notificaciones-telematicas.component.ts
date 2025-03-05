import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NotificacionTelematicaService } from './notificacion-telematica.service';
import { NotificacionTelematica } from './models/notificacion-telematica.model';

@Component({
  selector: 'app-notificaciones-telematicas',
  templateUrl: './notificaciones-telematicas.component.html',
  styleUrls: ['./notificaciones-telematicas.component.scss']
})
export class NotificacionesTelematicasComponent {
  @Input() notificaciones: NotificacionTelematica[] = [];
  @Output() enviarNotificaciones: EventEmitter<NotificacionTelematica[]> = new EventEmitter();

  selectedNotificaciones: NotificacionTelematica[] = [];
  allSelected: boolean = false;

  constructor(private notificacionService: NotificacionTelematicaService) {}

  toggleSelection(notificacion: NotificacionTelematica): void {
    const index = this.selectedNotificaciones.indexOf(notificacion);
    if (index >= 0) {
      this.selectedNotificaciones.splice(index, 1);
    } else {
      this.selectedNotificaciones.push(notificacion);
    }
  }

  toggleAllSelection(): void {
    if (this.allSelected) {
      this.selectedNotificaciones = [];
      this.allSelected = false;
    } else {
      this.selectedNotificaciones = [...this.notificaciones];
      this.allSelected = true;
    }
  }

  enviarSeleccionadas(): void {
    if (this.selectedNotificaciones.length > 0) {
      this.enviarNotificaciones.emit(this.selectedNotificaciones);
    } else {
      alert('Selecciona al menos una notificación para enviar.');
    }
  }
}
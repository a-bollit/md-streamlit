import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NotificacionService } from './notificacion.service';

interface Notificacion {
  id: string;
  tipo: string;
  contenido: string;
  estado: string;
  fechaEmision: Date;
  firmado: boolean;
  repetida: boolean;
  anexos: any[];
}

@Component({
  selector: 'app-notification-note',
  templateUrl: './notification-note.component.html',
  styleUrls: ['./notification-note.component.scss']
})
export class NotificationNoteComponent {
  @Input() notificaciones: Notificacion[] = [];
  @Output() notificacionesSeleccionadas = new EventEmitter<Notificacion[]>();

  constructor(private notificacionService: NotificacionService) {}

  validarNotificacion(notificacion: Notificacion): boolean {
    const tieneTodosAnexos = notificacion.anexos && notificacion.anexos.length > 0;
    const documentosFirmados = notificacion.firmado;
    const esRepetida = this.notificaciones.some(n => n.id !== notificacion.id && n.repetida);
    return tieneTodosAnexos && documentosFirmados && !esRepetida;
  }

  onSeleccionarNotificacion(notificacion: Notificacion) {
    const validas = this.notificaciones.filter(this.validarNotificacion);
    this.notificacionesSeleccionadas.emit(validas);
  }

  obtenerNotificaciones() {
    this.notificacionService.getNotificaciones()
      .subscribe(data => {
        this.notificaciones = data;
      });
  }

  ngOnInit() {
    this.obtenerNotificaciones();
  }
}
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NotificacionService } from '@app/services/notificacion.service';

@Component({
  selector: 'app-notificacion-correos',
  templateUrl: './notificacion-correos.component.html',
  styleUrls: ['./notificacion-correos.component.scss']
})
export class NotificacionCorreosComponent {
  @Input() notificacionesCorreos: any[] = [];
  @Output() envioCompletado = new EventEmitter<void>();

  constructor(private notificacionService: NotificacionService) { }

  seleccionarTodo(): void {
    this.notificacionesCorreos.forEach(notificacion => notificacion.seleccionado = true);
  }

  desmarcarTodo(): void {
    this.notificacionesCorreos.forEach(notificacion => notificacion.seleccionado = false);
  }

  enviarNotificaciones(): void {
    const notificacionesSeleccionadas = this.notificacionesCorreos.filter(notificacion => notificacion.seleccionado);
    if (notificacionesSeleccionadas.length > 0) {
      this.notificacionService.enviarNotificaciones(notificacionesSeleccionadas).subscribe(response => {
        this.envioCompletado.emit();
      });
    }
  }
}
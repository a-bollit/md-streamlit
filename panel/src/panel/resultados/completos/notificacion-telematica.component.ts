import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NotificacionTelematicaService, NotificacionTelematica } from 'src/app/services/notificacion-telematica.service';

@Component({
  selector: 'app-notificacion-telematica',
  templateUrl: './notificacion-telematica.component.html',
  styleUrls: ['./notificacion-telematica.component.scss']
})
export class NotificacionTelematicaComponent implements OnInit {
  @Input() notificacionesTelematicas: NotificacionTelematica[] = [];
  @Output() envioCompletado = new EventEmitter<boolean>();
  
  constructor(private notificacionService: NotificacionTelematicaService) { }

  ngOnInit(): void {
    // Component initialization logic can go here
  }

  enviarNotificaciones(): void {
    // Ensure all notifications are ready to be sent
    const allValid = this.notificacionesTelematicas.every(notificacion => {
      return this.validarNotificacion(notificacion);
    });

    if (allValid) {
      this.notificacionesTelematicas.forEach(notificacion => {
        this.notificacionService.addNotificacion(notificacion).subscribe({
          next: () => {
            console.log('Notificacion enviada:', notificacion);
            this.envioCompletado.emit(true);
          },
          error: (err) => {
            console.error('Error enviando notificacion:', err);
            this.envioCompletado.emit(false);
          }
        });
      });
    } else {
      console.warn('Not all notifications are valid for sending.');
      this.envioCompletado.emit(false);
    }
  }

  validarNotificacion(notificacion: NotificacionTelematica): boolean {
    // Implement logic to validate the notification
    // Ensure attachments are loaded and documents are signed and registered
    return notificacion.cddocum && notificacion.dsdocum && notificacion.cdunidad && notificacion.fcemision ? true : false;
  }
}
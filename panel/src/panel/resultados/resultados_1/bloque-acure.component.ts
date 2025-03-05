import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NotificacionTelematicaService } from '../services/notificacion-telematica.service';
import { ExpedienteService } from '../services/expediente.service';

@Component({
  selector: 'app-bloque-acure',
  templateUrl: './bloque-acure.component.html',
  styleUrls: ['./bloque-acure.component.scss']
})
export class BloqueAcureComponent {
  @Input() data: Array<any> = [];
  @Output() update = new EventEmitter<any>();

  allSelected: boolean = false;

  constructor(
    private notificacionService: NotificacionTelematicaService,
    private expedienteService: ExpedienteService
  ) {}

  toggleSelectAll() {
    this.allSelected = !this.allSelected;
    this.data.forEach(notification => notification.selected = this.allSelected);
  }

  updateNotifications() {
    const selectedNotifications = this.data.filter(notification => notification.selected);
    if (selectedNotifications.length) {
      this.notificacionService.updateNotificacion('id', { notifications: selectedNotifications })
        .subscribe(
          response => {
            console.log('Update successful', response);
            this.update.emit(response);
          },
          error => {
            console.error('Update failed', error);
          }
        );
    }
  }
}
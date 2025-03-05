import { Component } from '@angular/core';
import { NotificacionesService } from '../services/notificaciones.service';
import { ExpedientesService } from '../services/expedientes.service';

@Component({
  selector: 'app-emision-notificaciones',
  templateUrl: './emision-notificaciones.component.html',
  styleUrls: ['./emision-notificaciones.component.scss']
})
export class EmisionNotificacionesComponent {
  documentos = [];
  mostrarTabla = false;
  mostrarAcciones = false;

  constructor(
    private notificacionesService: NotificacionesService,
    private expedientesService: ExpedientesService
  ) {}

  onBuscar(filtro: any) {
    this.expedientesService.obtenerDocumentos(filtro).subscribe((docs) => {
      this.documentos = docs;
      this.mostrarTabla = true;
    });
  }

  onSeleccionar(seleccion: any[]) {
    // Manejar la selección de documentos
  }

  onEnviar() {
    // Lógica para enviar notificaciones
  }

  onCancelar() {
    this.mostrarTabla = false;
    this.mostrarAcciones = false;
  }
}
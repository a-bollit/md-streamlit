import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.scss']
})
export class AccionesComponent {
  @Output() enviar = new EventEmitter<void>();
  @Output() cancelar = new EventEmitter<void>();

  onEnviar() {
    this.enviar.emit();
  }

  onCancelar() {
    this.cancelar.emit();
  }
}
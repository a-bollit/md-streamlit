import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta-confirmacion',
  templateUrl: './alerta-confirmacion.component.html',
  styleUrls: ['./alerta-confirmacion.component.scss']
})
export class AlertaConfirmacionComponent {
  @Input() mensaje: string;
  @Input() titulo: string;
  @Input() tipo: string;
  @Output() confirmarAccion = new EventEmitter<boolean>();

  onConfirm() {
    this.confirmarAccion.emit(true);
  }

  onCancel() {
    this.confirmarAccion.emit(false);
  }
}
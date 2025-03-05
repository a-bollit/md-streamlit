import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmar-alerta',
  templateUrl: './confirmar-alerta.component.html',
  styleUrls: ['./confirmar-alerta.component.scss']
})
export class ConfirmarAlertaComponent {
  @Input() mensaje: string;
  @Output() confirmado = new EventEmitter<boolean>();

  confirmAction(): void {
    this.confirmado.emit(true);
  }

  cancelAction(): void {
    this.confirmado.emit(false);
  }
}
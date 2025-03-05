import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DevolucionService } from '../services/devolucion.service';

@Component({
  selector: 'app-devolucion-form',
  templateUrl: './devolucion-form.component.html',
  styleUrls: ['./devolucion-form.component.scss']
})
export class DevolucionFormComponent {
  @Input() datosDevolucion: any;
  @Output() onAceptar: EventEmitter<any> = new EventEmitter();
  @Output() onCancelar: EventEmitter<void> = new EventEmitter();

  constructor(private devolucionService: DevolucionService) {}

  aceptar() {
    this.devolucionService.confirmarDevolucion(this.datosDevolucion).subscribe(
      response => this.onAceptar.emit(response),
      error => console.error('Error confirming devolucion:', error)
    );
  }

  cancelar() {
    this.onCancelar.emit();
  }
}
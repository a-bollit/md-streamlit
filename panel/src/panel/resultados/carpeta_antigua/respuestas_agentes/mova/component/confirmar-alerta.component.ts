import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertaService } from '../services/alerta.service'; // Asegúrese de que la ruta sea correcta

@Component({
  selector: 'app-confirmar-alerta',
  templateUrl: './confirmar-alerta.component.html',
  styleUrls: ['./confirmar-alerta.component.scss']
})
export class ConfirmarAlertaComponent {
  @Input() titulo: string;
  @Input() mensaje: string;
  @Input() siLabel: string = 'SI';
  @Input() noLabel: string = 'NO';
  @Output() onConfirm = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  constructor(private alertaService: AlertaService) {}

  confirmar(): void {
    this.onConfirm.emit();
    this.alertaService.ocultarAlerta();
  }

  cancelar(): void {
    this.onCancel.emit();
    this.alertaService.ocultarAlerta();
  }
}
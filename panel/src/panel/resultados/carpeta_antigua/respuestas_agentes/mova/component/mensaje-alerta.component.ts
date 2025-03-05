import { Component, Input } from '@angular/core';
import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-mensaje-alerta',
  templateUrl: './mensaje-alerta.component.html',
  styleUrls: ['./mensaje-alerta.component.scss']
})
export class MensajeAlertaComponent {
  @Input() titulo: string = '';
  @Input() mensaje: string = '';

  constructor(public alertaService: AlertaService) {}
}
import { Component, Input } from '@angular/core';
import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-nota-alerta',
  templateUrl: './nota-alerta.component.html',
  styleUrls: ['./nota-alerta.component.scss']
})
export class NotaAlertaComponent {
  @Input() titulo: string;
  @Input() mensaje: string;

  constructor(private alertaService: AlertaService) {}

  ngOnInit(): void {
    this.alertaService.mostrarAlerta(this.titulo, this.mensaje);
  }
}
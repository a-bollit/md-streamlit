import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerta-nota',
  templateUrl: './alertanota.component.html',
  styleUrls: ['./alertanota.component.scss']
})
export class AlertaNotaComponent {
  @Input() titulo: string;
  @Input() mensaje: string;
}
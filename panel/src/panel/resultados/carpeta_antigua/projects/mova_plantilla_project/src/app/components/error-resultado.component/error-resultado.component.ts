import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-error-resultado',
  templateUrl: './error-resultado.component.html',
  styleUrls: ['./error-resultado.component.scss']
})
export class ErrorResultadoComponent {

  @Input() errores: string[] = [];
  @Output() onCerrar: EventEmitter<void> = new EventEmitter<void>();

  constructor(private errorService: ErrorService) { }

  cerrar() {
    this.onCerrar.emit();
  }
}
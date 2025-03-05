import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SituacionService } from '../services/situacion.service';

@Component({
  selector: 'app-situacion-error',
  templateUrl: './situacion-error.component.html',
  styleUrls: ['./situacion-error.component.scss']
})
export class SituacionErrorComponent implements OnInit {
  @Input() errores: any[];
  @Output() onAccionCorregir = new EventEmitter<any>();

  constructor(private situacionService: SituacionService) {}

  ngOnInit(): void {}

  corregirError(accion: string, error: any) {
    this.onAccionCorregir.emit({ accion, error });
    // Implementar lógica adicional si fuese necesario
  }
}
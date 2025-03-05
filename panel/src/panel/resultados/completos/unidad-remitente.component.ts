import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UnidadService } from './unidad.service';

@Component({
  selector: 'app-unidad-remitente',
  templateUrl: './unidad-remitente.component.html',
  styleUrls: ['./unidad-remitente.component.scss']
})
export class UnidadRemitenteComponent implements OnInit {
  @Input() unidadSeleccionada: any;
  @Output() unidadChange = new EventEmitter<any>();
  unidades: any[] = [];

  constructor(private unidadService: UnidadService) { }

  ngOnInit(): void {
    this.obtenerUnidades();
  }

  obtenerUnidades(): void {
    this.unidadService.getUnidades().subscribe(
      (data: any[]) => {
        this.unidades = data;
      },
      (error: any) => {
        console.error('Error fetching unidades:', error);
      }
    );
  }

  onUnidadSeleccionada(event: any): void {
    this.unidadChange.emit(event.value);
  }
}
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UnidadService } from './unidad.service';

@Component({
  selector: 'app-unidad-remitente',
  templateUrl: './unidad-remitente.component.html',
  styleUrls: ['./unidad-remitente.component.scss']
})
export class UnidadRemitenteComponent implements OnInit {
  @Input() unidad: string;
  @Output() unidadChange: EventEmitter<string> = new EventEmitter<string>();
  unidades: string[] = [];

  constructor(private unidadService: UnidadService) {}

  ngOnInit(): void {
    this.loadUnidades();
  }

  loadUnidades(): void {
    this.unidadService.getUnidades().subscribe(
      (unidades) => {
        this.unidades = unidades;
      },
      (error) => {
        console.error('Error cargando las unidades:', error);
      }
    );
  }

  onUnidadChange(newUnidad: string): void {
    this.unidad = newUnidad;
    this.unidadChange.emit(this.unidad);
  }

  abrirBusquedaDetallada(): void {
    // Implementar la lógica para abrir el componente LovUnidadComponent
  }
}
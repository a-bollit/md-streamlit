import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CorreosService } from './correos.service';

@Component({
  selector: 'app-correos-notificaciones',
  templateUrl: './correos-notificaciones.component.html',
  styleUrls: ['./correos-notificaciones.component.scss']
})
export class CorreosNotificacionesComponent implements OnInit {

  @Input() notificaciones: any[] = [];
  @Output() onMarcarTodos: EventEmitter<void> = new EventEmitter<void>();
  @Output() onDesmarcarTodos: EventEmitter<void> = new EventEmitter<void>();

  constructor(private correosService: CorreosService) {}

  ngOnInit(): void {
    // Inicialización si es necesario
  }

  marcarTodos(): void {
    this.correosService.marcarTodasComoLeidas(this.notificaciones).subscribe(() => {
      this.onMarcarTodos.emit();
    });
  }

  desmarcarTodos(): void {
    this.correosService.desmarcarTodas(this.notificaciones).subscribe(() => {
      this.onDesmarcarTodos.emit();
    });
  }
}
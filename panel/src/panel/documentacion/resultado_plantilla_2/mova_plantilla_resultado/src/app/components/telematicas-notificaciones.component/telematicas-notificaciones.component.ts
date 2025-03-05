import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NotificacionTelematicaService } from 'src/app/services/notificacion-telematica.service';

@Component({
  selector: 'app-telematicas-notificaciones',
  templateUrl: './telematicas-notificaciones.component.html',
  styleUrls: ['./telematicas-notificaciones.component.scss']
})
export class TelematicasNotificacionesComponent implements OnInit {
  @Input() notificacionesTelematicas: any[] = [];
  @Output() onMarcarTodos = new EventEmitter<void>();
  @Output() onDesmarcarTodos = new EventEmitter<void>();

  constructor(private notificacionService: NotificacionTelematicaService) {}

  ngOnInit(): void {
    this.getNotificaciones();
  }

  getNotificaciones(): void {
    this.notificacionService.getNotificacionesTelematicas().subscribe(
      data => {
        this.notificacionesTelematicas = data;
      },
      error => {
        console.error('Error fetching notificaciones telematicas', error);
      }
    );
  }

  marcarTodos(): void {
    this.onMarcarTodos.emit();
  }

  desmarcarTodos(): void {
    this.onDesmarcarTodos.emit();
  }
}
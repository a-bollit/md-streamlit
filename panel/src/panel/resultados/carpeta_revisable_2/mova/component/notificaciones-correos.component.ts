import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificacionCorreo } from './notificacion-correo.model';
import { NotificacionService } from './notificacion.service';

@Component({
  selector: 'app-notificaciones-correos',
  templateUrl: './notificaciones-correos.component.html',
  styleUrls: ['./notificaciones-correos.component.scss']
})
export class NotificacionesCorreosComponent implements OnInit {
  @Input() notificaciones: NotificacionCorreo[] = [];
  @Output() enviarNotificaciones: EventEmitter<NotificacionCorreo[]> = new EventEmitter();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private notificacionService: NotificacionService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      unidadRemitente: ['', Validators.required],
      fechaDesde: ['', Validators.required],
      fechaHasta: ['', Validators.required]
    });
  }

  seleccionarTodas(): void {
    this.notificaciones = this.notificaciones.map(notificacion => ({
      ...notificacion,
      seleccionada: true
    }));
  }

  deseleccionarTodas(): void {
    this.notificaciones = this.notificaciones.map(notificacion => ({
      ...notificacion,
      seleccionada: false
    }));
  }

  enviar(): void {
    const notificacionesSeleccionadas = this.notificaciones.filter(n => n.seleccionada);
    this.enviarNotificaciones.emit(notificacionesSeleccionadas);
  }
}
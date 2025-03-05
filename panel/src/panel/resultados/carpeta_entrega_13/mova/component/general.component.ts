import { Component } from '@angular/core';
import { NotificacionService } from '../services/notificacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {
  notificacionForm: FormGroup;

  constructor(private fb: FormBuilder, private notificacionService: NotificacionService) {
    this.notificacionForm = this.fb.group({
      fechaDesde: ['', Validators.required],
      fechaHasta: ['', Validators.required],
      unidadRemitente: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.notificacionForm.valid) {
      const { fechaDesde, fechaHasta, unidadRemitente } = this.notificacionForm.value;
      // Call the service to register the notification
      this.notificacionService.createNotificacion({
        tipo: 'General',
        contenido: `Notificación desde ${fechaDesde} hasta ${fechaHasta} de ${unidadRemitente}`,
        estado: 'Nueva',
        fechaEmision: new Date()
      }).subscribe(
        response => {
          console.log('Notificación registrada:', response);
        },
        error => {
          console.error('Error al registrar la notificación:', error);
        }
      );
    } else {
      console.error('Formulario inválido');
    }
  }

  onCancel() {
    this.notificacionForm.reset();
  }
}
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificacionTelematicaService } from '../services/notificacion-telematica.service';

@Component({
  selector: 'app-telematic-notification',
  templateUrl: './telematic-notification.component.html',
  styleUrls: ['./telematic-notification.component.scss']
})
export class TelematicNotificationComponent implements OnInit {
  @Input() notifications: any[];
  notificationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private notificacionTelematicaService: NotificacionTelematicaService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.notificationForm = this.fb.group({
      unidadRemitente: ['', Validators.required],
      fechaDesde: ['', Validators.required],
      fechaHasta: ['', Validators.required],
      expediente: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]*$')]]
    });
  }

  onSubmit() {
    if (this.notificationForm.valid) {
      const formValues = this.notificationForm.value;
      this.notificacionTelematicaService.createNotification(formValues).subscribe(
        response => {
          console.log('Notificación creada exitosamente:', response);
        },
        error => {
          console.error('Error al crear la notificación:', error);
        }
      );
    }
  }

  markAll() {
    this.notifications.forEach(notification => notification.selected = true);
  }

  unmarkAll() {
    this.notifications.forEach(notification => notification.selected = false);
  }

  sendNotifications() {
    const selectedNotifications = this.notifications.filter(notification => notification.selected);
    selectedNotifications.forEach(notification => {
      this.notificacionTelematicaService.updateNotification(notification.id, { status: 'enviado' }).subscribe(
        response => {
          console.log('Notificación enviada exitosamente:', response);
          notification.status = 'enviado';
        },
        error => {
          console.error('Error al enviar la notificación:', error);
        }
      );
    });
  }

  isFormValid(): boolean {
    return this.notificationForm.valid;
  }
}
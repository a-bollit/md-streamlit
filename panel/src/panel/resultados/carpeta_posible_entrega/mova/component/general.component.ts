import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {
  @Output() onAceptar = new EventEmitter<void>();
  @Output() onCancelar = new EventEmitter<void>();

  notificationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private notificationService: NotificationService) {
    this.createForm();
  }

  private createForm() {
    this.notificationForm = this.formBuilder.group({
      unidadRemitente: ['', Validators.required],
      fcdesde: ['', Validators.required],
      fchasta: ['', Validators.required]
    });
  }

  aceptar() {
    if (this.notificationForm.valid) {
      const { fcdesde, fchasta } = this.notificationForm.value;
      if (new Date(fcdesde) > new Date(fchasta)) {
        alert('La fecha desde no puede ser mayor que la fecha hasta.');
        return;
      }
      if (new Date(fchasta) > new Date()) {
        alert('La fecha hasta no puede ser mayor que la fecha actual.');
        return;
      }
      this.notificationService.createNotification(this.notificationForm.value).subscribe(
        () => this.onAceptar.emit(),
        error => console.error('Error al crear la notificación', error)
      );
    }
  }

  cancelar() {
    this.onCancelar.emit();
  }
}
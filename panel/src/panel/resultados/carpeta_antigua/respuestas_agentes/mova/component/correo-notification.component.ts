import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-correo-notification',
  templateUrl: './correo-notification.component.html',
  styleUrls: ['./correo-notification.component.scss']
})
export class CorreoNotificationComponent implements OnInit {
  @Input() correoNotifications: any[];

  notificationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.notificationForm = this.fb.group({
      unidadRemitente: ['', Validators.required],
      fechaDesde: ['', Validators.required],
      fechaHasta: ['', Validators.required],
      expediente: ['', [Validators.required, Validators.pattern(/.*expedientePattern.*/)]]
    });
  }

  onSubmit() {
    if (this.notificationForm.valid) {
      const formData = this.notificationForm.value;
      // Assuming you have some methods in NotificationService to handle form data
      this.notificationService.processFormData(formData).subscribe(response => {
        // handle response
      });
    } else {
      Object.keys(this.notificationForm.controls).forEach(control => {
        this.notificationForm.controls[control].markAsTouched();
      });
    }
  }

  markAll() {
    this.correoNotifications.forEach(notification => notification.selected = true);
  }

  unmarkAll() {
    this.correoNotifications.forEach(notification => notification.selected = false);
  }

  processSelected() {
    const selectedNotifications = this.correoNotifications.filter(notification => notification.selected);
    // Assuming you have some methods in NotificationService to handle selected notifications
    this.notificationService.processNotifications(selectedNotifications).subscribe(response => {
      // handle response
    });
  }
}
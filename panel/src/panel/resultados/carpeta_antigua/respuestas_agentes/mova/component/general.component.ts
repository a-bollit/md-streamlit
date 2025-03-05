import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from './notification.service';
import { DatePickerService } from './datepicker.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  generalForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private datePickerService: DatePickerService
  ) {}

  ngOnInit() {
    this.generalForm = this.fb.group({
      unidadRemitente: ['', Validators.required],
      fechaDesde: ['', Validators.required],
      fechaHasta: ['', Validators.required],
      expediente: ['', [Validators.required, this.expedienteValidator.bind(this)]]
    });
  }

  expedienteValidator(control) {
    const expedienteValue = control.value;
    // Asynchronous validation can be added here
    return this.notificationService.validateExpediente(expedienteValue).then(isValid => {
      return isValid ? null : { invalidExpediente: true };
    });
  }

  onSubmit() {
    if (this.generalForm.valid) {
      const formData = this.generalForm.value;
      // Perform action with formData
      this.notificationService.createNotification(formData).subscribe(response => {
        console.log('Notification created', response);
      });
    } else {
      console.log('Form is invalid');
    }
  }

  get form() { return this.generalForm.controls; }
}
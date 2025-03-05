import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss']
})
export class GeneralFormComponent implements OnInit {
  @Input() unidadRemitente: string;
  @Input() fechaDesde: Date;
  @Input() fechaHasta: Date;
  @Input() expediente: string;

  generalForm: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormService) {}

  ngOnInit() {
    this.generalForm = this.fb.group({
      unidadRemitente: [this.unidadRemitente, Validators.required],
      fechaDesde: [this.fechaDesde, [Validators.required, this.dateValidator]],
      fechaHasta: [this.fechaHasta, [Validators.required, this.dateValidator, this.compareDatesValidator.bind(this)]],
      expediente: [this.expediente, Validators.required]
    });
  }

  dateValidator(control: { value: Date }) {
    const currentDate = new Date();
    if (control.value && control.value > currentDate) {
      return { invalidDate: true };
    }
    return null;
  }

  compareDatesValidator(control: { value: Date }) {
    if (this.generalForm) {
      const fechaDesdeValue = this.generalForm.get('fechaDesde').value;
      if (control.value && fechaDesdeValue && control.value < fechaDesdeValue) {
        return { invalidEndDate: true };
      }
    }
    return null;
  }

  onSubmit() {
    if (this.generalForm.valid) {
      this.formService.submitForm(this.generalForm.value).subscribe(response => {
        console.log('Form submitted successfully', response);
      }, error => {
        console.error('Error submitting form', error);
      });
    }
  }
}
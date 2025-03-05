import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-fecha-selector',
  templateUrl: './fecha-selector.component.html',
  styleUrls: ['./fecha-selector.component.scss']
})
export class FechaSelectorComponent {
  @Output() fechasSeleccionadas = new EventEmitter<{ fechaInicio: Date, fechaFin: Date }>();

  fechaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fechaForm = this.fb.group({
      fechaInicio: ['', [Validators.required, this.noFutureDate]],
      fechaFin: ['', [Validators.required, this.noFutureDate, this.noEarlierEndDate.bind(this)]],
    });
  }

  noFutureDate(control) {
    const today = new Date();
    if (control.value) {
      const date = new Date(control.value);
      if (date > today) {
        return { 'futureDate': true };
      }
    }
    return null;
  }

  noEarlierEndDate(control) {
    const startDate = new Date(this.fechaForm.get('fechaInicio')?.value);
    if (control.value) {
      const endDate = new Date(control.value);
      if (endDate < startDate) {
        return { 'earlierEndDate': true };
      }
    }
    return null;
  }

  onSubmit() {
    if (this.fechaForm.valid) {
      this.fechasSeleccionadas.emit(this.fechaForm.value);
    }
  }
}
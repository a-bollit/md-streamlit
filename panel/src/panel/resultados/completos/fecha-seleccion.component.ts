import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fecha-seleccion',
  templateUrl: './fecha-seleccion.component.html',
  styleUrls: ['./fecha-seleccion.component.scss']
})
export class FechaSeleccionComponent {
  @Input() fechaInicio!: Date;
  @Input() fechaFin!: Date;
  @Output() fechaChange = new EventEmitter<{ fechaInicio: Date, fechaFin: Date }>();

  fechaForm = new FormGroup({
    fechaInicio: new FormControl(this.fechaInicio, [Validators.required]),
    fechaFin: new FormControl(this.fechaFin, [Validators.required])
  });

  constructor() {
    this.fechaForm.valueChanges.subscribe(values => {
      if (this.fechaForm.valid && values.fechaInicio <= values.fechaFin) {
        this.fechaChange.emit(values);
      }
    });
  }

  ngOnChanges() {
    if (this.fechaForm) {
      this.fechaForm.setValue({ fechaInicio: this.fechaInicio, fechaFin: this.fechaFin }, { emitEvent: false });
    }
  }

  validarFechas() {
    const fechaInicio = this.fechaForm.get('fechaInicio')?.value;
    const fechaFin = this.fechaForm.get('fechaFin')?.value;

    if (fechaInicio > fechaFin) {
      this.fechaForm.get('fechaFin')?.setErrors({ beforeStartDate: true });
    } else {
      this.fechaForm.get('fechaFin')?.setErrors(null);
    }
  }
}
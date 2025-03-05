import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Devolucion } from './devolucion.model';

@Component({
  selector: 'app-devolucion-envio',
  templateUrl: './devolucion-envio.component.html',
  styleUrls: ['./devolucion-envio.component.scss']
})
export class DevolucionEnvioComponent {
  @Input() devolucion: Devolucion;
  @Output() devolucionChange = new EventEmitter<Devolucion>();

  devolucionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.devolucionForm = this.fb.group({
      unidad: ['', Validators.required],
      municipio: ['', Validators.required],
      direccion: ['', [Validators.required, Validators.minLength(10)]],
      fechaDesde: ['', Validators.required],
      fechaHasta: ['', Validators.required],
    }, { validator: this.dateValidator });
  }

  dateValidator(group: FormGroup) {
    const fechaDesde = group.get('fechaDesde').value;
    const fechaHasta = group.get('fechaHasta').value;
    return fechaDesde && fechaHasta && new Date(fechaDesde) <= new Date(fechaHasta) 
      ? null : { dateInvalid: true };
  }

  onSubmit() {
    if (this.devolucionForm.valid) {
      this.devolucion = { ...this.devolucion, ...this.devolucionForm.value };
      this.devolucionChange.emit(this.devolucion);
    }
  }
}
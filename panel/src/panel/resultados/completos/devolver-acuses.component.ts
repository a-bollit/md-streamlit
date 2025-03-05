import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevolverAcusesService } from './devolver-acuses.service';

@Component({
  selector: 'app-devolver-acuses',
  templateUrl: './devolver-acuses.component.html',
  styleUrls: ['./devolver-acuses.component.scss']
})
export class DevolverAcusesComponent implements OnInit {
  @Input() datosFecha: string;
  @Input() direccion: string;
  @Output() devolucionAcuse = new EventEmitter<any>();

  devolverForm: FormGroup;

  constructor(private fb: FormBuilder, private devolverAcusesService: DevolverAcusesService) {}

  ngOnInit() {
    this.devolverForm = this.fb.group({
      unidadAdministrativa: ['', Validators.required],
      direccion: [this.direccion, Validators.required],
      codigoPostal: ['', Validators.required],
      municipio: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.devolverForm.valid) {
      this.devolverAcusesService.confirmarDevolucion(this.devolverForm.value).subscribe(
        data => {
          this.devolucionAcuse.emit(data);
        },
        error => {
          console.error('Error al devolver acuse:', error);
        }
      );
    }
  }

  onCancel() {
    this.devolverForm.reset();
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../services/data.service'; // Assuming DataService is provided

@Component({
  selector: 'app-formulario-general',
  templateUrl: './formulario-general.component.html',
  styleUrls: ['./formulario-general.component.scss']
})
export class FormularioGeneralComponent implements OnInit {
  generalForm: FormGroup;
  datosGenerales: any;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.generalForm = this.fb.group({
      unidadRemitente: ['', Validators.required],
      fechaDesde: ['', Validators.required],
      fechaHasta: ['', Validators.required],
      expediente: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.generalForm.valid) {
      const formValues = this.generalForm.value;
      if (this.validateDates(formValues.fechaDesde, formValues.fechaHasta)) {
        this.dataService.validateExpediente(formValues.expediente).subscribe(
          (response) => {
            if (response.valid) {
              this.datosGenerales = formValues;
              this.snackBar.open('Datos validados y enviados correctamente', 'Cerrar', {
                duration: 3000,
              });
            } else {
              this.snackBar.open('Expediente inválido: anulado o finalizado', 'Cerrar', {
                duration: 3000,
              });
            }
          },
          (error) => {
            this.snackBar.open('Error al validar el expediente', 'Cerrar', {
              duration: 3000,
            });
          }
        );
      } else {
        this.snackBar.open('Las fechas no son válidas', 'Cerrar', {
          duration: 3000,
        });
      }
    } else {
      this.snackBar.open('El formulario no es válido', 'Cerrar', {
        duration: 3000,
      });
    }
  }

  validateDates(desde: Date, hasta: Date): boolean {
    return new Date(desde) < new Date(hasta);
  }
}
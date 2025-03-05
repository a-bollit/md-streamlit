import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevolService } from '../services/devol.service';

@Component({
  selector: 'app-devol',
  templateUrl: './devol.component.html',
  styleUrls: ['./devol.component.scss']
})
export class DevolComponent {
  devolForm: FormGroup;

  constructor(private fb: FormBuilder, private devolService: DevolService) {
    this.devolForm = this.fb.group({
      direccion: ['', Validators.required],
      codigoPostal: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      municipio: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.devolForm.valid) {
      this.devolService.submitDevolForm(this.devolForm.value).subscribe(
        response => {
          console.log('Devolución exitosa', response);
        },
        error => {
          console.error('Error en la devolución', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}
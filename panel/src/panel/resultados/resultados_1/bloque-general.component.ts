import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificacionTelematicaService } from '../../services/notificacion-telematica.service';
import { ExpedienteService } from '../../services/expediente.service';
import { UnidadService } from '../../services/unidad.service';

@Component({
  selector: 'app-bloque-general',
  templateUrl: './bloque-general.component.html',
  styleUrls: ['./bloque-general.component.scss']
})
export class BloqueGeneralComponent {

  @Input() cdorga_ereg: string;
  @Input() idorga_ereg: number;
  @Input() cdunidad: string;
  @Input() dsunidad: string;
  @Input() fcdesde: Date;
  @Input() fchasta: Date;
  @Input() cddeptno: string;
  @Input() cdtexp: string;
  @Input() cdnexp: number;
  @Input() cddigito: number;
  @Input() cdaexp: number;

  @Output() aceptar = new EventEmitter<void>();
  @Output() cancelar = new EventEmitter<void>();

  generalForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private notificacionService: NotificacionTelematicaService,
    private expedienteService: ExpedienteService,
    private unidadService: UnidadService
  ) {
    this.generalForm = this.fb.group({
      cdorga_ereg: ['', Validators.required],
      cdunidad: ['', Validators.required],
      dsunidad: ['', Validators.required],
      fcdesde: ['', Validators.required],
      fchasta: ['', Validators.required],
      cddeptno: ['', Validators.required],
      cdtexp: ['', Validators.required],
      cdnexp: [0, Validators.required],
      cddigito: [0, Validators.required],
      cdaexp: [0, Validators.required]
    });
  }

  onAceptar() {
    if (this.generalForm.valid) {
      this.aceptar.emit();
    } else {
      // Handle form validation errors
      console.error('Form is invalid');
    }
  }

  onCancelar() {
    this.cancelar.emit();
  }
}
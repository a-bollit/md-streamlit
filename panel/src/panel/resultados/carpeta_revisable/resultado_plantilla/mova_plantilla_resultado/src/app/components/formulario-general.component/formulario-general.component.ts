import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UnidadesService } from 'src/app/services/unidades.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-formulario-general',
  templateUrl: './formulario-general.component.html',
  styleUrls: ['./formulario-general.component.scss']
})
export class FormularioGeneralComponent implements OnInit {
  formulario: FormGroup;
  unidades: any[];

  constructor(
    private fb: FormBuilder,
    private unidadesService: UnidadesService,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      unidad: ['', Validators.required],
      fechaDesde: ['', Validators.required],
      fechaHasta: ['', Validators.required],
      expedienteDepartamento: ['', Validators.required],
      expedienteTipo: ['', Validators.required],
      expedienteNumero: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      expedienteDigito: ['', [Validators.required, Validators.maxLength(1)]],
      expedienteAno: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
    });
  }

  ngOnInit(): void {
    this.unidadesService.getUnidades().subscribe(data => {
      this.unidades = data;
    });
  }

  onAceptar(): void {
    if (this.validateForm()) {
      // Navigate to the tabs view
      this.router.navigate(['/tabs']);
    } else {
      this.notificationService.createNotification({
        titulo: 'Error en la validación',
        mensaje: 'Por favor, corrige los errores en el formulario.',
        fecha: new Date()
      }).subscribe();
    }
  }

  onCancelar(): void {
    this.formulario.reset();
    // Close the current view
    this.router.navigate(['/home']);
  }

  validateForm(): boolean {
    const fechaDesde = this.formulario.get('fechaDesde').value;
    const fechaHasta = this.formulario.get('fechaHasta').value;

    if (fechaDesde > fechaHasta) {
      this.notificationService.createNotification({
        titulo: 'Error en las fechas',
        mensaje: 'La "Fecha Hasta" debe ser posterior o igual a la "Fecha Desde".',
        fecha: new Date()
      }).subscribe();
      return false;
    }

    if (new Date(fechaDesde) > new Date() || new Date(fechaHasta) > new Date()) {
      this.notificationService.createNotification({
        titulo: 'Fechas no válidas',
        mensaje: 'Las fechas de consulta no pueden ser futuras.',
        fecha: new Date()
      }).subscribe();
      return false;
    }

    // Add additional validation as necessary

    return this.formulario.valid;
  }
}
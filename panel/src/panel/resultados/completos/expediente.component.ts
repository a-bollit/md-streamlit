import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpedienteService } from 'src/app/services/expediente.service';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.scss']
})
export class ExpedienteComponent implements OnInit {
  @Input() expediente: any;
  @Output() expedienteChange = new EventEmitter<any>();
  
  expedienteForm: FormGroup;

  constructor(private fb: FormBuilder, private expedienteService: ExpedienteService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.expedienteForm = this.fb.group({
      cddocum: [this.expediente?.cddocum, Validators.required],
      dsdocum: [this.expediente?.dsdocum, Validators.required],
      cdunidad: [this.expediente?.cdunidad, Validators.required],
      fcemision: [this.expediente?.fcemision, Validators.required],
      // ... otros campos según la especificación
    });
  }

  onSubmit(): void {
    if (this.expedienteForm.valid) {
      this.expedienteService.updateExpediente(this.expediente.id, this.expedienteForm.value).subscribe(() => {
        this.expedienteChange.emit(this.expedienteForm.value);
      });
    }
  }
}
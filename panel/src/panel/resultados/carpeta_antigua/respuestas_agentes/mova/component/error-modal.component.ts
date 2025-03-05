import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ErrorService } from './error.service'; // Suponiendo que la ruta del servicio de errores es esta

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent {
  @Input() errorMessage: string;
  @Input() errorDetails: string;
  @Output() errorConfirmed: EventEmitter<void> = new EventEmitter<void>();

  constructor(private errorService: ErrorService) {}

  closeModal() {
    this.errorConfirmed.emit();
  }
}
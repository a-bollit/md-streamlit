import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  @Input() errorMessage: string;

  closeError() {
    // Emit event to close the error modal
    // This could be an EventEmitter or any other closing logic
    console.log('Error modal closed');
  }
}
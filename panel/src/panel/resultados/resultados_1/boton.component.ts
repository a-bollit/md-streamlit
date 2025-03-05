import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent {
  @Input() label: string;
  @Input() type: string;
  @Output() click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() checked: boolean = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleCheck() {
    this.checked = !this.checked;
    this.change.emit(this.checked);
  }
}
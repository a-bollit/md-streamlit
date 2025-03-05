import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notification-actions',
  templateUrl: './notification-actions.component.html',
  styleUrls: ['./notification-actions.component.scss']
})
export class NotificationActionsComponent {
  @Input() notification: any;
  @Output() onUpdate = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();

  constructor() {}

  updateNotification() {
    this.onUpdate.emit();
  }

  deleteNotification() {
    this.onDelete.emit();
  }
}
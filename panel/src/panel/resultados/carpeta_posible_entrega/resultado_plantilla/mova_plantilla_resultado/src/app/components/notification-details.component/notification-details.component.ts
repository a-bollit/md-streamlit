import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.scss']
})
export class NotificationDetailsComponent {
  @Input() notification: any;
  @Output() onClose = new EventEmitter<void>();

  notificationForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<NotificationDetailsComponent>) {
    this.notificationForm = this.fb.group({
      documentNumber: [{ value: '', disabled: true }],
      description: [{ value: '', disabled: true }],
      sentDate: [{ value: '', disabled: true }],
      sender: [{ value: '', disabled: true }],
      status: [{ value: '', disabled: true }]
    });
  }

  ngOnInit() {
    if (this.notification) {
      this.notificationForm.patchValue({
        documentNumber: this.notification.documentNumber,
        description: this.notification.description,
        sentDate: this.notification.sentDate,
        sender: this.notification.sender,
        status: this.notification.status
      });
    }
  }

  closeDetails() {
    this.onClose.emit();
    this.dialogRef.close();
  }
}
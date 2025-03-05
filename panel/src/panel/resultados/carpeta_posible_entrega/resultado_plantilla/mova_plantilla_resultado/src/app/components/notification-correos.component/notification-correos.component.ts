import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CorreoService } from './correo.service';

@Component({
  selector: 'app-notification-correos',
  templateUrl: './notification-correos.component.html',
  styleUrls: ['./notification-correos.component.scss']
})
export class NotificationCorreosComponent implements OnInit {
  @Input() notifications: any[];
  @Output() updateCorreo = new EventEmitter<any>();

  notificationForm: FormGroup;

  constructor(private fb: FormBuilder, private correoService: CorreoService) {}

  ngOnInit() {
    this.notificationForm = this.fb.group({
      id: [''],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
      fechaEnvio: ['', Validators.required]
    });
  }

  editNotification(notification: any) {
    this.notificationForm.patchValue(notification);
  }

  saveNotification() {
    if (this.notificationForm.valid) {
      const notificationData = this.notificationForm.value;
      if (notificationData.id) {
        this.correoService.updateCorreo(notificationData.id, notificationData).subscribe(
          (response) => {
            this.updateCorreo.emit(response);
          },
          (error) => {
            console.error('Error updating notification:', error);
          }
        );
      } else {
        this.correoService.createCorreo(notificationData).subscribe(
          (response) => {
            this.updateCorreo.emit(response);
          },
          (error) => {
            console.error('Error creating notification:', error);
          }
        );
      }
    }
  }

  deleteNotification(id: string) {
    this.correoService.deleteCorreo(id).subscribe(
      (response) => {
        this.updateCorreo.emit(response);
      },
      (error) => {
        console.error('Error deleting notification:', error);
      }
    );
  }
}
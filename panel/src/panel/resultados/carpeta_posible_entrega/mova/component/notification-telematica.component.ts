import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NotificacionTelematicaService } from './notificacion-telematica.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './auth.service';
import { NotificationDetailsComponent } from './notification-details/notification-details.component';
import { NotificationActionsComponent } from './notification-actions/notification-actions.component';

@Component({
  selector: 'app-notification-telematica',
  templateUrl: './notification-telematica.component.html',
  styleUrls: ['./notification-telematica.component.scss']
})
export class NotificationTelematicaComponent implements OnInit {
  @Input() notifications: any[];
  @Output() updateNotification = new EventEmitter<any>();

  displayedColumns: string[] = ['description', 'expediente', 'status', 'actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(
    private notificacionService: NotificacionTelematicaService,
    private dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.notifications) {
      this.dataSource.data = this.notifications;
    }
  }

  filterNotifications(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDetails(notification: any): void {
    const dialogRef = this.dialog.open(NotificationDetailsComponent, {
      width: '400px',
      data: notification
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateNotification.emit(result);
      }
    });
  }

  performAction(action: string, notification: any): void {
    const dialogRef = this.dialog.open(NotificationActionsComponent, {
      width: '400px',
      data: { action, notification }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateNotification.emit(result);
      }
    });
  }
}
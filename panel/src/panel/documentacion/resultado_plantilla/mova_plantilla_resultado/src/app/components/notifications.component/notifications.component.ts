import { Component, OnInit } from '@angular/core';
import { NotificacionService } from '../services/notificacion.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  public notifications: any[] = [];
  public filteredNotifications: any[] = [];

  public selectedTab: string = 'PG_CORR';
  public tabs: { id: string, label: string }[] = [
    { id: 'PG_CORR', label: 'Correos' },
    { id: 'PG_NOTE', label: 'Telemáticas' }
  ];

  constructor(private notificacionService: NotificacionService) { }

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    this.notificacionService.getNotificaciones().subscribe(
      data => {
        this.notifications = data;
        this.filterNotifications();
      },
      error => {
        console.error('Error fetching notifications', error);
      }
    );
  }

  filterNotifications(): void {
    this.filteredNotifications = this.notifications.filter(notification =>
      this.selectedTab === 'PG_CORR' ? notification.tipo === 'Correo' : notification.tipo === 'Telemática'
    );
  }

  onTabChange(tab: string): void {
    this.selectedTab = tab;
    this.filterNotifications();
  }

  toggleReadStatus(notification): void {
    notification.leido = !notification.leido;
  }
}
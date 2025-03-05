import {Component, OnInit, ViewChild} from '@angular/core';
import {DeviceService} from '@mova/components/core';
import {MvLastNotifications} from '@mova/components/last-notifications';

@Component({
  selector: 'app-last-notifications-view',
  templateUrl: './last-notifications-view.html',
  styleUrls: ['./last-notifications-view.scss'],
})
export class LastNotificationView implements OnInit {
  // Componente de notificaciones
  @ViewChild('notificationComponent', {static: false})
    notificationComponent: MvLastNotifications;
  dispositivoDebug = -1;
  // Configuración del componente de notificaciones
  configuration: any;

  // Controla si estamos en una App móvil
  isMobileApp: boolean;

  constructor(
    private readonly _deviceService: DeviceService,
  ) { }

  ngOnInit() {
    // Definir la configuración para el plugin
    this.isMobileApp = this._deviceService.isMobileApp();
    this.configuration = {
      idDispositivoDebug: this.dispositivoDebug !== -1 ? this.dispositivoDebug : null,
      Debug: false,
      limit: 4,
    };
  }


  openNotification(notification: any) {
    console.log(notification);
  }
  update() {
    this.configuration.idDispositivoDebug = this.dispositivoDebug !== -1 ? this.dispositivoDebug : null;
    this.notificationComponent.updateNotifications(new Date());
  }
  deleteAll() {
    this.notificationComponent.deleteAllNotifications();
  }
  deleteNotification(event, notification: any) {
    console.log(notification);
    this.notificationComponent.deleteNotification(notification);
  }
}

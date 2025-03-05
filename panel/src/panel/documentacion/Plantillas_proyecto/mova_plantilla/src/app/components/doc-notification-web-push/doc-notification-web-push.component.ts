import {Component, OnInit} from '@angular/core';
import {NotificationWebPushService} from '@mova/components/core';


@Component({
  selector: 'app-doc-notification-web-push',
  templateUrl: './doc-notification-web-push.html',
  styleUrls: ['./doc-notification-web-push.scss'],
})
export class DocNotificationWebPush implements OnInit {
  // onNotificationReceived
  codeOnNotificationWebReceivedExampleTS = `
  ...

  /*
  ╔════════════════════════════════╗
  ║ Evento notificaciones push web ║
  ╚════════════════════════════════╝
  */


  /*
  Evento onNotification: Sobreescribir la reacción de la app ante la recepción de una notificacion web
  */
  onNotificationWebReceived(data: any): void {
    console.log('notification web received', data);
    const snackBarConfig = {
      text: \`Titulo: \${data.notification.title}\n\nMensaje: \${data.notification.body}\`,
      type: 'info',
    };
    this._appService.showSnackBar(snackBarConfig);
  }


  ...
  `;

  // onNotificationWebClick
  codeOnNotificationWebClickExampleTS = `
  ...

  /*
  Evento onNotification: Sobreescribir la reacción de la app ante el click a una notificacion web
  */
  onNotificationWebClick(data: any): void {
    console.log('notification web click', data);
    const snackBarConfig = {
      text: \`Titulo: \${data.notification.title}\n\nMensaje: \${data.notification.body}\`,
      type: 'info',
    };
    this._appService.showSnackBar(snackBarConfig);
  }

  ...
  `;

  // environment.ts
  codeEnvironmentTS = `
  export const environment = {
    mova: {
      environment: 'DES',
      ...
      notificationWebPushService: {
        ...
        appKey: '...',
      },
      ...
    },
    ...
  };
  `;

  // environment.val.ts
  codeEnvironmentValTS = `
  export const environment = {
    mova: {
      environment: 'VAL',
      ...
      notificationWebPushService: {
        ...
        appKey: '...',
      },
      ...
    },
    ...
  };
  `;

  // environment.prod.ts
  codeEnvironmentProdTS = `
  export const environment = {
    mova: {
      environment: 'PRO',
      ...
      notificationWebPushService: {
        ...
        appKey: '...',
      },
      ...
    },
    ...
  };
  `;

  // requestSubscriptionWebPush
  codeOnRequestExampleHTML = `
  <p><strong>Click en el método requestSubscriptionWebPush:</strong></p>
  <mv-button
    appearance="raised"
    color="primary"
    (clickEvent)="subscriptionClick()">
    requestSubscriptionWebPush()
  </mv-button>
  `;

  // requestSubscriptionWebPush
  codeOnRequestExampleTS = `
  import { NotificationWebPushService } from '@mova/components/core';

  ...

  // Objeto que devuelve la suscripcion
  subscriptionResponse: any;

  ...

  constructor(
    private _notificationWebPushService: notificationWebPushService
  ) { }

  subscriptionClick() {
    this._notificationWebPushService.requestSubscriptionWebPush().subscribe(
      (data) => {
        this.subscriptionResponse = data;
      }
    );
  }

  ...
  `;

  // unsubscribeWebPush
  codeOnUnsubscribeExampleHTML = `
  <p><strong>Click en el método unsubscribeWebPush:</strong></p>
  <mv-button
    appearance="raised"
    color="primary"
    (clickEvent)="unsubscribeClick()">
    unsubscribeWebPush()
  </mv-button>
  `;

  // unsubscribeWebPush
  codeOnUnsubscribeExampleTS = `
  import { NotificationWebPushService } from '@mova/components/core';

  ...

  // Objeto que devuelve la dessuscripcion
  unsubscriptionResponse: any;

  ...

  constructor(
    private _notificationWebPushService: notificationWebPushService
  ) { }

  unsubscribeClick(){
    this._notificationWebPushService.unsubscribeWebPush().subscribe(
      (data) => {
        this.unsubscriptionResponse = data;
      }
    );
  }

  ...
  `;

  // unsubscribeWebPush
  codeIsSubscribedExampleHTML = `
  <p><strong>Click en el método isSubscribed:</strong></p>
  <mv-button
    appearance="raised"
    color="primary"
    (clickEvent)="isSubscribedClick()">
    isSubscribed()
  </mv-button>
  `;

  // isSubscribed
  codeIsSubscribedExampleTS = `
  import { NotificationWebPushService } from '@mova/components/core';

  ...

  // Objeto que devuelve si estamos suscritos
  isSubscribedResponse: any;

  ...

  constructor(
    private _notificationWebPushService: notificationWebPushService
  ) { }

  isSubscribedClick(){
    this.isSubscribedResponse = this._notificationWebPushService.isSubscribed();
  }

  ...
  `;

  codeBackendJS = `
  ...

  const vapidHost = 'https://gestiona3.madrid.org/portalapps/webapps/mova2';
  const vapidPublicKey = '...';
  const vapidPrivateKey = '...';

  ...
  `;

  // Objeto que devuelve la suscripcion
  subscriptionResponse: any;
  // Objeto que devuelve la dessuscripcion
  unsubscriptionResponse: any;
  // Objeto que devuelve si estamos suscritos
  isSubscribedResponse: any;

  constructor(
    private readonly _notificationWebPushService: NotificationWebPushService,
  ) {}

  ngOnInit() {

  }

  subscriptionClick() {
    this._notificationWebPushService.requestSubscriptionWebPush().subscribe(
        (data) => {
          this.subscriptionResponse = data;
        },
    );
  }

  unsubscribeClick() {
    this._notificationWebPushService.unsubscribeWebPush().subscribe(
        (data) => {
          this.unsubscriptionResponse = data;
        },
    );
  }

  isSubscribedClick() {
    this.isSubscribedResponse = this._notificationWebPushService.isSubscribed();
  }
}

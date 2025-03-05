import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-notifications',
  templateUrl: './doc-notifications.html',
  styleUrls: ['./doc-notifications.scss'],
})
export class DocNotifications implements OnInit {
  // onNotificationReceived
  codeOnNotificationReceivedExampleTS = `
  ...

  /*
  ╔══════════════════════════════════════════════╗
  ║ Evento onNotification de notificationService ║
  ╚══════════════════════════════════════════════╝
  */

  /*
  Sobrescribir la reacción de la app ante la recepción de un mensaje
  Se recomienda respetar el código de propio de MOVA y mantener la estructura
  del código.
  */
  onNotificationReceived(data: any): void {

    let foreground = data.additionalData.foreground;
    // Parametro con un identificador
    let id = data.additionalData.infoapp.id;
    // Informacion environment
    // TODO: ver si se puede asignar a una variable de la clase como en todos los sitios
    let _configEnvironment = this._appService.getConfigEnvironment();

    /*
    ┌─────────────────────────────────────────┐
    │ Guardar la notificación en localStorage │
    └─────────────────────────────────────────┘
    ¡¡¡ IMPORTANTE !!! - Se guarda la notificación siempre, hay que recordar que este evento se
    dispara al recibir la notificación y al hacer click sobre ella, por lo que una misma notificación
    puede guardarse varias veces. La responsabilidad de no sacar información duplicada será del código
    que consulte las notificaciones guardadas que deberá controlar que muestra las que quiere mostrar,
    por ejemplo las notificaciones con foreground con valor true.
    */

    // Recuperar el histórico de notificaciones que pueda existir
    let historicoNotificaciones = this._localStorageService.getItem('MovaNotificacionesRecibidas');

    // Si no existe creamos el array
    if (typeof historicoNotificaciones === 'undefined') historicoNotificaciones = [];

    // Guardamos la notificación en el array, siempre se guarda al principio la más reciente
    historicoNotificaciones.unshift(data);

    // Aplicar límite de notificaciones a guardar.
    historicoNotificaciones.splice(_configEnvironment['mova']['notificationService']['receivedLimit']);

    // Guardamos el array de notificaciones en local
    this._localStorageService.setItem('MovaNotificacionesRecibidas', historicoNotificaciones);

    /*
    ┌───────────────────────────────────────────┐
    │ Lógica de respuesta ante una notificación │
    └───────────────────────────────────────────┘
    */

    /*
    La variables foreground con valor false significa que se ha hecho click en la notificación
    desde el centro de notificaciones de ios o desde la notificación nativa de Android.
    */
    if (foreground === false) {
      // Implementar la reacción en caso de hacer click en una incidencia recibida
      // Ejemplo de navegación a estado con identificador por parámetro
      //this._router.navigate(['ejemplo-estado'], { id: id});
    } else {

      /***********************************************************************************
       * INI - Comportamiento especial para iOS cuando la app esta en primer plano - INI *
       ***********************************************************************************/

      /*
      Si el entorno es iOS y estamos con la app abierta no vemos ninguna incidencia al recibirla,
      porque se queda solo en el centro de notificaciones, por lo que MOVA implementa la aparición
      de un mensaje para este caso.

      El template se encuentra incrustado en el fichero index.html con el id 'notificacion-ios-template.html'
      */

      /*
      La variables foreground con valor false significa que se ha hecho click en la notificación
      desde el centro de notificaciones de ios o desde la notificación nativa de Android.
      */
      if (foreground === false) {
        // Implementar la reacción en caso de hacer click en una incidencia recibida
        // Ejemplo de navegación a estado con identificador por parámetro
        //this._router.navigate(['ejemplo-estado'], { id: id});
      } else {

        /***********************************************************************************
         * INI - Comportamiento especial para iOS cuando la app esta en primer plano - INI *
         ***********************************************************************************/

        /*
        Si el entorno es iOS y estamos con la app abierta no vemos ninguna incidencia al recibirla,
        porque se queda solo en el centro de notificaciones, por lo que MOVA implementa la aparición
        de un mensaje para este caso.
        */
        if (
          (this._deviceService.getMobileInfo().platform == 'iOS') &&
          (_configEnvironment['mova']['notificationService']['alwaysShowIosTemplate'])
        ) {

          // Mostramos la notificacion en ios
          let notifData: any = {
            id: id,
            title: data.title,
            text: data.message,
            delay: 7500
          };


          // Funcion a ejecutar cuando hacemos click en la notificacion
          let self = this;
          notifData.notificationClick = function() {
            // Ejemplo de navegación a estado con identificador por parámetro
            //self._router.navigate(['ejemplo-estado'], { id: id});
          };

          this._appService.showNotificationTemplate(notifData);
        }

      /**********************************************************************************
       * FIN -Comportamiento especial para iOS cuando la app esta en primer plano - FIN *
       **********************************************************************************/
    }
  };

  ...
  `;

  // onRegistrationSuccess
  codeOnRegistrationSuccessExampleTS = `
  ...

  /*
  ╔══════════════════════════════════════════════╗
  ║ Evento onRegistration de notificationService ║
  ╚══════════════════════════════════════════════╝
  */

  /*
  Sobrescribir la reacción de la app ante el registro del dispositivo
  */
  onRegistrationSuccess(data: any): void {
  };


  ...
  `;

  // onRegistrationError
  codeOnRegistrationErrorExampleTS = `
  ...

  /*
  ╔══════════════════════════════════════════════╗
  ║ Evento onRegistration de notificationService ║
  ╚══════════════════════════════════════════════╝
  */

  /*
  Sobrescribir la reacción de la app ante el fallo en el registro del dispositivo
  */
  onRegistrationError(data: any): void {
  };

  ...
  `;

  // onRegistrationUser
  codeOnRegistrationUserExampleTS = `

  ...

  // Suscripción al método onUserRegistration del servicio App de MOVA
  subscriptionOnRegistrationUser: Subscription;

  ...

  ngOnInit(): void {
    ...

    // Reaccionar a la recepcion de un identificador de usuario por parte del sistema de autenticacion
    this.subscriptionOnRegistrationUser =
      this._appService.onRegistrationUserSend$.subscribe(
          (data: any) => {
            this.onRegistrationUser(data);
          },
      );
  }

  ...

  /*
  Evento onRegistrationUser: en este método se puede sobreescribir llamando a un servicio el identificador de usuario que
  se registra en las notificaciones push
  */
  onRegistrationUser(userLogin: any): void {
    console.log('Identificador inicial del usuario para las notificaciones push: ' + userLogin);

    // Eliminar este linea si se usa la opcion de abajo
    this._appService.onRegistrationUserReceive(userLogin);

    /*
    Ejemplo de llamada a un servicio que dado el login del usuario devuelve el identificador
    con el que se quiere registrar para las notificaciones push

    this.exampleService.getUserData$(userLogin).subscribe(
      (response) => {
        console.log('Identificador final del usuario para las notificaciones push: ' + response.idUsuario);
        this._appService.onRegistrationUserReceive(response.idUsuario);
      },
    );
    */
  }

  ...
  `;


  // example get MovaCloudMessagingToken
  codeGetTokenExampleTS = `
  import { LocalStorageService } from '@mova/components/core';

  ...

  constructor(
    private _localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this._localStorageService.getItem('MovaCloudMessagingToken');
  }

  ...
  `;

  // environment.ts
  codeEnvironmentTS = `
  export const environment = {
    mova: {
      environment: 'DES',
      ...
      notificationService: {
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
      notificationService: {
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
      notificationService: {
        ...
        appKey: '...',
      },
      ...
    },
    ...
  };
  `;

  constructor() { }

  ngOnInit() {
  }
}

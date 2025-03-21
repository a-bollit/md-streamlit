import {Component,
  isDevMode,
  NgZone,
} from '@angular/core';
import {Router, UrlTree} from '@angular/router';
import {Subscription} from 'rxjs';
import 'hammerjs';
import {environment} from '@environments/environment';
import {
  AppService,
  BackendService,
  AuthGuard,
  AuthenticationService,
  DeviceService,
  InterceptorService,
  LocalStorageService,
  NotificationService,
  NotificationWebPushService,
  SessionStorageService,
  FileUploaderService} from '@mova/components/core'

import {LateralMenu} from '@app/components/lateral-menu/lateral-menu.component';
// JSON de configuración por defecto de la App
import config from '../../../app/config-default.json';
// JSON de configuración por defecto del contenedor principal
import configMainFrame from '../../../app/config-default-main-frame.json';

declare const CPLUGIN: any;
declare global {
    interface Window { handleOpenURL: any; }
}

window.handleOpenURL = window.handleOpenURL || {};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /** ***********
   * Variables *
   *************/

  // Variable con la configuración de la App
  private readonly _isInitViewCheck : boolean;

  // Variable de la configuración del mainFrame (se utiliza en el HTML)
  configMainFrame: object = configMainFrame;
  // Suscripción al método updateConfig del servicio App de MOVA
  subscriptionUpdateConfig: Subscription;
  // Suscripción al método showContentLoading del servicio App de MOVA
  subscriptionMainFrameConfigApplied: Subscription;
  // Suscripción al método onNotification del servicio App de MOVA
  subscriptionNotification: Subscription;
  // Suscripción al método onRegistrationSuccess del servicio App de MOVA
  subscriptionOnRegistrationSuccess: Subscription;
  // Suscripción al método onRegistrationError del servicio App de MOVA
  subscriptionOnRegistrationError: Subscription;
  // Suscripción al método onUserRegistration del servicio App de MOVA
  subscriptionOnRegistrationUser: Subscription;
  // Suscripción al método onNotificationWeb del servicio App de MOVA
  subscriptionNotificationWebReceived: Subscription;
  // Suscripción al método onNotificationClickWeb del servicio App de MOVA
  subscriptionNotificationWebClick: Subscription;

  /** ***************
   * Constructores *
   *****************/

  constructor(
    private readonly _appService: AppService,
    private readonly _authenticationService: AuthenticationService,
    private readonly _backendService: BackendService,
    private readonly _deviceService: DeviceService,
    private readonly _interceptorService: InterceptorService,
    private readonly _localStorageService: LocalStorageService,
    private readonly _notificationService: NotificationService,
    private readonly _notificationWebPushService: NotificationWebPushService,
    private readonly _router: Router,
    private readonly _sessionStorageService: SessionStorageService,
    private readonly _fileUploaderService: FileUploaderService,
    private readonly _authGuard: AuthGuard,
  ) {
    // Reaccionar cuando la configuración del componente mvMainFrame cambie
    this.subscriptionMainFrameConfigApplied =
    this._appService.mainFrameConfigApplied$.subscribe(

        () => {
          /*
            Si se ha marcado la variable de recarga de la configuración del
            componente mvMainFrame con la configuración de este componente,
            AppComponent
            Esta variable se activa con cada navegación en el evento
            onActivate del componente mvMainFrame
            */
          if (this._appService.getReloadAppComponentMainFrameConfig()) {
          // No volver a cargar la configuración del appComponente para el
          // mvMainFrame de nuevo, solo una única vez
            this._appService.setReloadAppComponentMainFrameConfig(false);

            /** *********************************************
             * Configuración del header y del menú lateral *
             ***********************************************/

            const lateralMenuConfig = {
              'lateralComponents': {
                'component101': LateralMenu,
              },
            };

            // Cargar el menú lateral con los datos que queremos.
            const mainFrameConfig = {
              lateralMenuConfig,
            };

            // Actualizar la configuración del mvMainFrame
            // con la configuración del appComponent
            this._appService.updateMainFrameConfig(mainFrameConfig);
          }
        },
    );
  }

  /** *********
   * Métodos *
   ***********/

  ngOnInit(): void {
    // Modificar la navegación de la clase Router de Angular
    this._hackAngularRouterNavigate();

    /** *********************************************************************
     * Este es el punto de inicialización de los servicios *
     * con los valores de configuración del entorno *
     **************************************************************************/

    // Reaccionar a la carga de nuevas configuraciones de la App y de entorno
    this.subscriptionUpdateConfig = this._appService.updateConfig$.subscribe(

        (data: any) => {
        // Recoger la configuración de la App
          const appConfig = (data.appConfig) ? (data.appConfig) : config;
          // Recoger la configuración del entorno
          const environmentConfig =
              (data.environmentConfig) ? (data.environmentConfig) : environment;

          // ASIMILACIÓN DE CONFIGURACIONES
          // Asimilar la configuración de la App
          this._appService.setConfig(appConfig);
          // Asimilar la configuración por entorno
          this._appService.setConfigEnvironment(environmentConfig);

          // CONFIGURACIÓN DE SERVICIOS
          // Inicializar la configuración por entorno
          this._localStorageService.setConfig();
          this._deviceService.setConfig();
          this._interceptorService.setConfig();
          this._authGuard.setConfig();
          this._authenticationService.setConfig();
          this._sessionStorageService.setConfig();
          this._backendService.setConfig();
          this._notificationService.setConfig();
          this._notificationWebPushService.setConfig();
          this._fileUploaderService.setConfig();

          // CONFIGURACIÓN DE COMPONENTES GENERALES
          // Actualizar la configuración del componente mvMainFrame
          // (siempre después de tener las configuraciones de App y de entorno)
          this._appService.updateMainFrameConfig();
        },
    );
    // Lanzar la primera carga de configuración con las
    // configuraciones locales para la App y por entorno.
    this._appService.updateConfig(config, environment);

    // Reaccionar a la recepcion de notificaciones
    this.subscriptionNotification =
      this._appService.onNotificationReceived$.subscribe(
          (data: any) => {
            this.onNotificationReceived(data);
          },
      );
    // Reaccionar a la recepcion de notificaciones
    this.subscriptionOnRegistrationSuccess =
      this._appService.onRegistrationSuccess$.subscribe(
          (data: any) => {
            this.onRegistrationSuccess(data);
          },
      );
    // Reaccionar a la recepcion de notificaciones erróneas
    this.subscriptionOnRegistrationError =
      this._appService.onRegistrationError$.subscribe(
          (data: any) => {
            this.onRegistrationError(data);
          },
      );

    // Reaccionar a la recepcion de un identificador de usuario por parte del sistema de autenticacion
    this.subscriptionOnRegistrationUser =
      this._appService.onRegistrationUserSend$.subscribe(
          (data: any) => {
            this.onRegistrationUser(data);
          },
      );

    // Reaccionar a la recepcion de notificaciones web
    this.subscriptionNotificationWebReceived =
      this._appService.onNotificationWebReceived$.subscribe(
          (data: any) => {
            this.onNotificationWebReceived(data);
          },
      );

    // Reaccionar al click de notificaciones web
    this.subscriptionNotificationWebClick =
      this._appService.onNotificationWebClick$.subscribe(
          (data: any) => {
            this.onNotificationWebClick(data);
          },
      );

    // Función handleOpenURL de Cordova que hay que sobrescribir para que
    // al volver a la app desde autologin vaya a la vista de broker
    const self = this;
    document.addEventListener('deviceready', function() {
     /*  var meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'user-scalable=0';
      document.getElementsByTagName('head')[0].appendChild(meta); */

      window.handleOpenURL = function handleOpenURL(url) {
        setTimeout(() => {
          CPLUGIN.safariViewController.close();
          // Tenemos un ticket del broker
          const ticketParamName = '//ticket=';
          const ticketPosition = url.indexOf(ticketParamName);
          if (ticketPosition >= 0) {
            const ticket = url.substr(ticketPosition + ticketParamName.length);
            self._router.navigate(
                ['/broker-view'],
                {queryParams: {ticket},
                },
            );
          }
        }, 0);
      };
    });
  }

  ngAfterViewInit(): void {

  }

  /*
  ╔══════════════════════════════════╗
  ║ Evento notificaciones push movil ║
  ╚══════════════════════════════════╝
  */

  /*
  Evento onNotification: Sobreescribir la reacción de la app ante la recepción de un mensaje
  Se recomienda respetar el código de propio de MOVA y mantener la estructura
  del código.
  */
  onNotificationReceived(data: any): void {
    const foreground = data.additionalData.foreground;
    // Parametro con un identificador
    const id = data.additionalData.infoapp.id;
    // Informacion environment
    // TODO: ver si se puede asignar a una variable de la
    // clase como en todos los sitios
    const _configEnvironment = this._appService.getConfigEnvironment();

    /*
    ┌─────────────────────────────────────────┐
    │ Guardar la notificación en localStorage │
    └─────────────────────────────────────────┘
    ¡¡¡ IMPORTANTE !!! - Se guarda la notificación siempre, hay que recordar que
    este evento se dispara al recibir la notificación y al hacer click sobre
    ella, por lo que una misma notificación puede guardarse varias veces.
    La responsabilidad de no sacar información duplicada será del código que
    consulte las notificaciones guardadas que deberá controlar que muestra las
    que quiere mostrar, por ejemplo las notificaciones con foreground con valor
    true.
    */

    // Recuperar el histórico de notificaciones que pueda existir
    let historicoNotificaciones =
      this._localStorageService.getItem('MovaNotificacionesRecibidas');

    // Si no existe creamos el array
    if (typeof historicoNotificaciones === 'undefined') {
      historicoNotificaciones = [];
    }

    // Guardamos la notificación en el array, siempre se guarda al principio
    // la más reciente
    historicoNotificaciones.unshift(data);

    // Aplicar límite de notificaciones a guardar.
    historicoNotificaciones.splice(
        _configEnvironment['mova']['notificationService']['receivedLimit'],
    );

    // Guardamos el array de notificaciones en local
    this._localStorageService.setItem(
        'MovaNotificacionesRecibidas',
        historicoNotificaciones,
    );

    /*
    ┌───────────────────────────────────────────┐
    │ Lógica de respuesta ante una notificación │
    └───────────────────────────────────────────┘
    */

    /*
    La variables foreground con valor false significa que se ha hecho
    click en la notificación desde el centro de notificaciones de ios o desde
    la notificación nativa de Android.
    */
    if (foreground === false) {
      // Implementar la reacción en caso de hacer click en una incidencia
      // recibida
      // Ejemplo de navegación a estado con identificador por parámetro
      // this._router.navigate(['ejemplo-estado'], { id: id});
    } else {
      /** *********************************************************************
       * INI - Comportamiento especial para iOS cuando
       * la app esta en primer plano - INI *
       ************************************************************************/

      /*
      Si el entorno es iOS y estamos con la app abierta no vemos ninguna
      incidencia al recibirla, porque se queda solo en el centro de
      notificaciones, por lo que MOVA implementa la aparición
      de un mensaje para este caso.
      */
      if (
        (this._deviceService.getMobileInfo().platform === 'iOS') &&
                (_configEnvironment['mova']['notificationService']['alwaysShowIosTemplate'])
      ) {
        // Mostramos la notificación en ios
        const notifData: any = {
          id,
          title: data.title,
          text: data.message,
          delay: 7500,
        };


        // Función a ejecutar cuando hacemos click en la notificación
        notifData.notificationClick = () => {
          // Ejemplo de navegación a estado con identificador por parámetro
          // self._router.navigate(['ejemplo-estado'], { id: id});
        };
        this._appService.showNotificationTemplate(notifData);
      }

      /** *********************************************************************
       * FIN -Comportamiento especial para
       * iOS cuando la app esta en primer plano - FIN *
       ************************************************************************/
    }
  }

  /*
  Evento onRegistration: Sobreescribir la reacción de la app ante el registro del dispositivo
  */
  onRegistrationSuccess(data: any): void {
    console.log('notification push registration', data);
  }

  /*
  Evento onRegistration: Sobreescribir la reacción de la app ante el fallo en el registro del
  dispositivo
  */
  onRegistrationError(data: any): void {
    console.error('notification push registration error', data);
  }

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
      text: `Titulo: ${data.notification.title}\n\nMensaje: ${data.notification.body}`,
      type: 'info',
    };
    this._appService.showSnackBar(snackBarConfig);
  }

  /*
  Evento onNotification: Sobreescribir la reacción de la app ante el click a una notificacion web
  */
  onNotificationWebClick(data: any): void {
    console.log('notification web click', data);
    const snackBarConfig = {
      text: `Titulo: ${data.notification.title}\n\nMensaje: ${data.notification.body}`,
      type: 'info',
    };
    this._appService.showSnackBar(snackBarConfig);
  }

  /*
  Evento onRegistration: Sobreescribir la reacción de la app ante la suscripcion a notificaciones web
  */
  onRegistrationWebSuccess(data: any): void {
    console.log('notification web registration', data);
  }

  /*
  Evento onRegistration: Sobreescribir la reacción de la app ante el fallo en la suscripcion
  */
  onRegistrationWebError(data: any): void {
    console.error('notification web registration error', data);
  }

  /**
   *
   * ¡¡¡ IMPORTANTE !!!
   *
   * Sobrescribe los métodos
   * Router.prototype.navigate y Router.prototype.navigateByUrl
   * para mostrar el loading antes de empezar la navegación. Antes incluso de
   * que se desencadene el primer evento de navegación
   * 'NavigationStart'.
   *
   * Esta modificación es necesaria ya que una vez empiece la navegación la
   * vista se bloquea y no se ven los cambios, por lo que el loading no
   * aparecería nunca si no se consigue mostrar antes de empezar la navegación.
   * Además, durante el tiempo que tarde la navegación algunas animaciones
   * (ej: transformaciones con porcentajes) dejan de funcionar y la animación
   * se congela o funciona de forma extraña, por este motivo el loading de
   * navegación se ha diseñado solo con animaciones no conflictivas y con muchas
   * limitaciones.
   * Si se cambia de versión de Angular puede que este funcionamiento cambie
   * radicalmente y, no solo deje de funcionar, si no que puede dejar de
   * funcionar la navegación completamente.
   *
   */
  private _hackAngularRouterNavigate() {
    /** ***************************
     * Router.prototype.navigate *
     *****************************/
    const appService = this._appService;
    function validateCommands(commands: any) {
      for (let i = 0; i < commands.length; i++) {
        const cmd = commands[i];
        if (cmd === null) {
          throw new Error(
              `The requested path contains ${ cmd } segment at index ${ i}`,
          );
        }
      }
    }
    Router.prototype.navigate = function(commands, extras) {
      // MOVA --> Mostrar el loading
      appService.showContentProgressLoading(true);

      if (extras === void 0) {
        extras = {skipLocationChange: false};
      }
      validateCommands(commands);

      return new Promise((resolve) =>
        setTimeout(() =>{
          this.navigateByUrl(
              this.createUrlTree(commands, extras),
              extras,
          );
        }
        , 10),
      );
    };

    /** ********************************
     * Router.prototype.navigateByUrl *
     **********************************/

    function isUrlTree(v: any) {
      return v instanceof UrlTree;
    }

    Router.prototype.navigateByUrl = function(url, extras) {
      // MOVA --> Mostrar el loading
      appService.showContentProgressLoading(true);

      if (extras === void 0) {
        extras = {skipLocationChange: false};
      }
      if (isDevMode() && this.isNgZoneEnabled && !NgZone.isInAngularZone()) {
        this.console.warn(
            'Navigation triggered outside Angular zone,' +
            'did you forget to call \'ngZone.run()\'?',
        );
      }
      const urlTree = isUrlTree(url) ? url : this.parseUrl(url);
      const mergedTree =
          this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);

      return new Promise((resolve) =>
        setTimeout(() =>
          this.scheduleNavigation(
              mergedTree,
              'imperative',
              null,
              extras,
          ),
        10),
      );
    };
  }
}

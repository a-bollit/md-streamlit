import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AppService} from '@mova/components/core';
import configuracion from '../../config-default-main-frame.json';

@Component({
  selector: 'app-doc-menu',
  templateUrl: './doc-menu.html',
  styleUrls: ['./doc-menu.scss'],
})
export class DocMenu implements OnInit {
  // Evento principal de MOVA para configurar el tree-filter del menú lateral
  @Output() movaSetMainFrameConfig: EventEmitter<any> = new EventEmitter();

  codeUseExampleJSON = `
  "lateralMenuConfig": {
    "appShortName":"MOVA 2",
    "appLongName":"Framework Mobile & Web",
    "appDesc":"",
    "position": "start",
    "mode": "side",
    "modeSmall": "over",
    "alwaysOpen": true,
    "logoApp": "logo-app.png",
    "hasBackdrop": false,
    "hasBackdropSmall": true,
    "closeOnSelectItem": false
  }
  `;

  /*
  elementos menu
  */

  // appShortName
  codeAppShortNameExampleHTML = `
  <mv-button
    appearance="raised"
    color="primary"
    (click)="showAppShortName(true)">
    Activar appShortName
  </mv-button>

  <mv-button
    appearance="raised"
    color="primary"
    (click)="showAppShortName(false)">
    Resetear appShortName
  </mv-button>
  `;

  codeAppShortNameExampleTS = `
  showAppShortName(ShowShortName) {
    let appShortName = "Prueba";
    if(!ShowShortName) {
      appShortName = this.originalMenuConfig.lateralMenuConfig.appShortName;
    }

    let mainFrameConfig = this._appService.getMainFrameConfig();
    let lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.appShortName = appShortName;
    let headerAndlateralMenuConfigs = {
      "lateralMenuConfig": lateralMenuConfig
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }
  `;

  // appLongName
  codeAppLongNameExampleHTML = `
  <mv-button
    appearance="raised"
    color="primary"
    (clickEvent)="showAppLongName(true)">
    Activar appLongName
  </mv-button>

  <mv-button
    appearance="raised"
    color="primary"
    (click)="showAppLongName(false)">
    Resetear appLongName
  </mv-button>
  `;

  codeAppLongNameExampleTS = `
  showAppLongName(ShowLongName) {
    let appLongName = "App de prueba versión ciudadano";
    if(!ShowLongName){
      appLongName = this.originalMenuConfig.lateralMenuConfig.appLongName;
    }

    let mainFrameConfig = this._appService.getMainFrameConfig();
    let lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.appLongName = appLongName;
    let headerAndlateralMenuConfigs = {
      "lateralMenuConfig": lateralMenuConfig
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }
  `;

  // appDesc
  codeAppDescExampleHTML = `
  <mv-button
    appearance="raised"
    color="primary"
    (clickEvent)="setAlwaysOpen(true)">
    Cambiar alwaysOpen
  </mv-button>

  <mv-button
    appearance="raised"
    color="primary"
    (click)="setAlwaysOpen(false)">
    Resetear appDesc
  </mv-button>
  `;

  codeAppDescExampleTS = `
  setAlwaysOpen(alwaysOpen) {
    let mainFrameConfig = this._appService.getMainFrameConfig();
    let lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.alwaysOpen = alwaysOpen;
    let headerAndlateralMenuConfigs = {
      "lateralMenuConfig": lateralMenuConfig
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }
  `;

  // alwaysOpen
  codeAlwaysOpenExampleHTML = `
  <mv-button
    appearance="raised"
    color="primary"
    (clickEvent)="setAlwaysOpen(true)">
    Cambiar alwaysOpen
  </mv-button>

  <mv-button
    appearance="raised"
    color="primary"
    (click)="setAlwaysOpen(false)">
    Resetear appDesc
  </mv-button>
  `;

  codeAlwaysOpenExampleTS = `
  setAlwaysOpen(alwaysOpen) {
    let mainFrameConfig = this._appService.getMainFrameConfig();
    let lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.alwaysOpen = alwaysOpen;
    let headerAndlateralMenuConfigs = {
      "lateralMenuConfig": lateralMenuConfig
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }
  `;

  // closeOnSelectItem
  codeCloseOnSelectItemExampleHTML = `
  <mv-button
    appearance="raised"
    color="primary"
    (clickEvent)="setCloseOnSelectItem(true)">
    Cambiar closeOnSelectItem
  </mv-button>

  <mv-button
    appearance="raised"
    color="primary"
    (click)="setCloseOnSelectItem(false)">
    Resetear closeOnSelectItem
  </mv-button>
  `;

  codeCloseOnSelectItemExampleTS = `
  setCloseOnSelectItem(closeOnSelectItem) {
    let mainFrameConfig = this._appService.getMainFrameConfig();
    let lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.closeOnSelectItem = closeOnSelectItem;
    let headerAndlateralMenuConfigs = {
      "lateralMenuConfig": lateralMenuConfig
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }
  `;

  // logoApp
  codeLogoAppExampleHTML = `
  <mv-button
    appearance="raised"
    color="primary"
    (clickEvent)="showLogoApp(true)">
    Cambiar logoApp
  </mv-button>

  <mv-button
    appearance="raised"
    color="primary"
    (click)="showLogoApp(false)">
    Resetear logoApp
  </mv-button>
  `;

  codeLogoAppExampleTS = `
  showLogoApp(show) {
    let logoApp = 'examples/logo-app-blue.png';
    if(!show){
      logoApp = this.originalMenuConfig.lateralMenuConfig.logoApp;
    }

    let mainFrameConfig = this._appService.getMainFrameConfig();
    let lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.logoApp = logoApp;
    let headerAndlateralMenuConfigs = {
      "lateralMenuConfig": lateralMenuConfig
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }
  `;

  // mode
  codeModeExampleHTML = `
  <mv-button
    appearance="raised"
    color="primary"
    class="configButton"
    (clickEvent)="setChangeMode('over')">
    Mode over
  </mv-button>

  <mv-button
    appearance="raised"
    color="primary"
    class="configButton"
    (click)="setChangeMode('push')">
    Mode push
  </mv-button>

  <mv-button
    appearance="raised"
    color="primary"
    class="configButton"
    (click)="setChangeMode('side')">
    Mode side (default)
  </mv-button>

  `;

  codeModeExampleTS = `
  setChangeMode(mode) {

    let mainFrameConfig = this._appService.getMainFrameConfig();
    let lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.mode = mode;
    let headerAndlateralMenuConfigs = {
      "lateralMenuConfig": lateralMenuConfig
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }
  `;

  // modeSmall
  codeModeSmallExampleHTML = `
  <mv-button
    appearance="raised"
    color="primary"
    class="configButton"
    (clickEvent)="setChangeModeSmall('over')">
    ModeSmall over (default)
  </mv-button>

  <mv-button
    appearance="raised"
    color="primary"
    class="configButton"
    (click)="setChangeModeSmall('push')">
    ModeSmall push
  </mv-button>

  <mv-button
    appearance="raised"
    color="primary"
    class="configButton"
    (click)="setChangeModeSmall('side')">
    ModeSmall side
  </mv-button>

  `;

  codeModeSmallExampleTS = `
  setChangeModeSmall(mode) {

    let mainFrameConfig = this._appService.getMainFrameConfig();
    let lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.modeSmall = mode;
    let headerAndlateralMenuConfigs = {
      "lateralMenuConfig": lateralMenuConfig
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }
  `;

  // position
  codePositionExampleHTML = `
  <mv-button
    appearance="raised"
    color="primary"
    (clickEvent)="setChangePosition('end')">
    Cambiar position
  </mv-button>

  <mv-button
    appearance="raised"
    color="primary"
    class="configButton"
    (click)="setChangePosition('start')">
    resetear position
  </mv-button>
  `;

  codePositionExampleTS = `
  setChangePosition(position) {
    let mainFrameConfig = this._appService.getMainFrameConfig();
    let lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.position = position;
    let headerAndlateralMenuConfigs = {
      "lateralMenuConfig": lateralMenuConfig
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }
  `;


  /*

  eventos

  */

  // closeLateralMenu
  codeCloseLateralMenuHTML = `
  <mv-button
    color="primary"
    (clickEvent)="closeLateralMenu()">
    Cerrar menú lateral
  </mv-button>
  `;

  codeCloseLateralMenuTS = `
  import { AppService } from '@mova/components/core';

  ...

  constructor(
    private _appService: AppService
  ) { }

  ...

  closeLateralMenu() {
    this._appService.closeLateralMenu();
  }
  `;

  // openLateralMenu
  codeOpenLateralMenuHTML = `
  <mv-button
    color="primary"
    (clickEvent)="openLateralMenu()">
    Abrir menú lateral
  </mv-button>
  `;

  codeOpenLateralMenuTS = `
  import { AppService } from '@mova/components/core';

  ...

  constructor(
    private _appService: AppService
  ) { }

  ...

  openLateralMenu() {
    this._appService.openLateralMenu();
  }
  `;

  // toggleLateralMenu
  codeToggleLateralMenuHTML = `
  <mv-button
    color="primary"
    (clickEvent)="toggleLateralMenu()">
    Toggle menú lateral
  </mv-button>
  `;

  codeToggleLateralMenuTS = `
  import { AppService } from '@mova/components/core';

  ...

  constructor(
    private _appService: AppService
  ) { }

  ...

  toggleLateralMenu() {
    this._appService.toggleLateralMenu();
  }
  `;

  // lateralMenu
  codeLateralMenuExampleHTML = `

  <!-- Sección mova-default INI -->
  <section class="mova-default">

      <!-- Botón de acceso -->
      <section class="sidenav-left-login-button"
          *ngIf="!isLogged">
          <mv-button-login #hiddenButtonLogin hidden=true></mv-button-login>
          <mv-button adapt class="login-button" (clickEvent)="doLogin()">Acceder<mv-icon class="login-icon">lock_open</mv-icon></mv-button>
      </section>

      <!-- Datos del usuario -->
      <section class="sidenav-left-user-section"
          *ngIf="isLogged"
          >

          <section class="username-section">

              <mat-accordion multi>
                  <mat-expansion-panel>
                      <mat-expansion-panel-header>
                          <mat-panel-title>
                              <span class="username truncate">{{ username }}</span>
                          </mat-panel-title>
                      </mat-expansion-panel-header>

                      <section class="user-options">

                          <mv-tree-filter
                              class="sidenav-left-menu"
                              [treeFilterItems]="treeFilterElementsMenuUser"
                              showFilter=false
                              multiOpen=true
                              (selectItem)="onSelectItem($event)">
                          </mv-tree-filter>

                          <mv-button-login #hiddenButtonLogout hidden=true></mv-button-login>
                      </section>

                      <hr>

                  </mat-expansion-panel>
              </mat-accordion>
          </section>
      </section>

      <!-- Menú de opciones lateral -->
      <mv-tree-filter
          #mvTreeFilterLateralOptions
          class="sidenav-left-menu"
          [treeFilterItems]="treeFilterElementsMenu"
          showFilter=false
          multiOpen=true
          (selectItem)="onSelectItem($event)">
      </mv-tree-filter>

  </section>
  <!-- Sección mova-default FIN -->
  `;

  codeLateralMenuExampleTS = `import { Component, OnInit, ViewChild } from '@angular/core';
  import { AppService } from '@mova/components/core';
  import { AuthenticationService } from '@mova/components/core'
  import { MvButtonLogin } from '@mova/components/button-login';
  import { MvTreeFilter } from '@mova/components/tree-filter';
  import { Subscription, Subject } from 'rxjs';

  @Component({
    selector: 'lateral-menu',
    templateUrl: './lateral-menu.html',
    styleUrls: ['./lateral-menu.scss']
  })
  export class LateralMenu implements OnInit {

    @ViewChild(MvButtonLogin, {static: false}) hiddenButtonLogin: MvButtonLogin;
    @ViewChild(MvButtonLogin, {static: false}) hiddenButtonLogout: MvButtonLogin;
    @ViewChild('mvTreeFilterLateralOptions', {static: false}) mvTreeFilterLateralOptions: MvTreeFilter;

    // Variable con el estado del login
    isLogged: boolean;
    // Suscripción al estado de login
    subscriptionUpdateLoggedStatus: Subscription;
    // Nombre del usuario que se ha logado
    username: string;
    // Suscripción al método updateItems de appService
    subscriptionUpdateItems: Subscription;

    /*
    Elementos del tree-filter del usuario
    */
    treeFilterElementsMenuUser = [
      {
        "iconTitle": "fa-user",
        "iconTitleFontSet": "fas",
        "title" : "Perfil",
        "subtitle": "",
        "css" : "level0 item",
        "link": {
          "type": "state",
          "uri": "user-profile-view"
        }
      },
      {
        "iconTitle": "fa-times",
        "iconTitleFontSet": "fas",
        "title": "Desconectar",
        "subtitle": "",
        "css" : "level0 item logout-option",
        "link": {}
      }
    ]

    /*
    Elementos del tree-filter de contenidos
    */
    tipoMenuFlag: boolean = true;
    treeFilterElementsMenu = [];

    treeFilterElementsMenu1 = [
      {
        "iconTitle": "fa-home",
        "iconTitleFontSet": "fa",
        "iconTitleColor": "secondary-001",
        "title" : "Inicio",
        "subtitle": "",
        "css" : "level0 item",
        "link": {
          "type": "state",
          "uri": "main-menu"
        }
      },
      {
        "iconTitle": "list",
        "title": "Listado de usuarios",
        "subtitle": "",
        "css" : "level0 item",
        "link": {
          "type": "state",
          "uri": "client-list"
        }
      },
      {
        "iconTitle": "list",
        "title": "Listado simple de usuarios",
        "css" : "level0 item",
        "link": {
          "type": "state",
          "uri": "simple-client-list"
        }
      },
      {
        "iconTitle": "star_half",
        "iconTitleColor": "secondary-004",
        "title": "Valoración",
        "subtitle": "",
        "css" : "level0 item",
        "link": {
          "type": "state",
          "uri": "rate-view"
        }
      },
      {
        "iconTitle": "notifications",
        "iconTitleColor": "secondary-005",
        "title": "Configurar notificaciones",
        "subtitle": "",
        "css" : "level0 item",
        "link": {
          "type": "state",
          "uri": "notification-config-view"
        }
      },
      {
        "iconTitle": "map",
        "title": "Mapa",
        "subtitle": "",
        "css" : "level0 item",
        "link": {
          "type": "state",
          "uri": "layout-map-vgcm"
        }
      },
      {
        "iconTitle": "work",
        "title": "Formularios",
        "subtitle": "",
        "css" : "level1 item",
        "link": {
          "type": "state",
          "uri": "forms-menu"
        }
      },
      {
        "iconTitle": "school",
        "title" : "Documentación MOVA 2",
        "subtitle": "Información técnica sobre el framework",
        "css" : "level0 folder",
        "children": [
          {
            "iconTitle": "fa-book",
            "iconTitleFontSet": "fa",
            "title": "Ejemplos de maquetación",
            "css" : "level1 item",
            "link": {
              "type": "state",
              "uri": "layout"
            }
          },
          {
            "iconTitle": "fa-book",
            "iconTitleFontSet": "fa",
            "title": "Documentación",
            "css" : "level1 item",
            "link": {
              "type": "state",
              "uri": "documentation"
            }
          }
        ]
      }
    ];
    treeFilterElementsMenu2 = [
      {
        "iconTitle": "fa-home",
        "iconTitleFontSet": "fa",
        "iconTitleColor": "secondary-002",
        "title" : "Inicio2",
        "subtitle": "",
        "css" : "level0 item",
        "link": {
          "type": "state",
          "uri": "main-menu"
        }
      },
      {
        "iconTitle": "list",
        "title": "Listado de usuarios2",
        "subtitle": "subtitulo 2",
        "css" : "level0 item",
        "link": {
          "type": "state",
          "uri": "client-list"
        }
      },
      {
        "iconTitle": "work",
        "title": "Listado simple de usuarios 2",
        "css" : "level0 item",
        "link": {
          "type": "state",
          "uri": "simple-client-list"
        }
      }
    ];

    constructor(
      private _appService: AppService,
      private _authenticationService: AuthenticationService
    ) { }

    ngOnInit() {

      this.treeFilterElementsMenu = this.treeFilterElementsMenu1;
      // Reaccionar cuando el estado de login cambie
      this.subscriptionUpdateLoggedStatus = this._authenticationService.updateLoggedStatus$.subscribe(

        (data: any) => {

          this.isLogged = data;

          this.updateDataOnIsLoggedChange();
        }
      );

      // Reaccionar al evento de cambio de elementos
      this.subscriptionUpdateItems = this._appService.updateLateralMenu$.subscribe(
        (data: any) => {
          // Ejemplo de cambio de elementos
          this.treeFilterElementsMenu = data.cargarMenuSecundario ? this.treeFilterElementsMenu2 : this.treeFilterElementsMenu1;
        }
      );
    }

    ngAfterViewInit(): void {
      this.isLogged = this._authenticationService.isLogged();
      this.updateDataOnIsLoggedChange();
    }

    ngOnDestroy() {
      this.subscriptionUpdateLoggedStatus.unsubscribe();
      this.subscriptionUpdateItems.unsubscribe();
    }

    // Evento lanzado al seleccionar un elemento del menú lateral
    onSelectItem(item: any) {

      // Ocultar el menú lateral al hacer click en una opción que no sea un elemento padre
      if (item.children.length == 0) {

        if (item.css.indexOf('logout-option') > -1) { // La opción de desconexión no cierra el menú

          this.hiddenButtonLogout.clickNative();

        } else {

          this._appService.closeLateralMenu();
        }
      }
    }

    // Centraliza los cambios cuando se produce un cambio en el estado de login
    updateDataOnIsLoggedChange() {
      // Aquí realizo una simulación de mostrar/ocultar elementos cuando estoy logado
      let hideItems: string[] = ['Mapa', 'Formularios'];

      if (this.isLogged) {
        let globalCredentials = this._authenticationService.getCredentials();
        if (globalCredentials && globalCredentials.user) this.username = globalCredentials.userName;

        this.mvTreeFilterLateralOptions.hideItems(hideItems);
      }else{
        this.mvTreeFilterLateralOptions.showItems(hideItems);
      }
    }

    // Lanza el proceso de login
    doLogin() {

      this.hiddenButtonLogin.clickNative();
    }

    // Lanza el proceso de logout
    doLogout() {

      this.hiddenButtonLogout.clickNative();
    }

  }
  `;

  codeLateralMenuExampleSCSS = `
  @import '~@mova/components/_variables.scss';

  .card-code{
    margin-right: auto;
    margin-left: auto;
    max-width: $container-max-width-medium;
  }
  .configButton {
    margin:5px;
  }

  `;

  // updateLateralMenu
  codeUpdateLateralMenuHTML = `
  <mv-button
    appearance="raised"
    color="primary"
    (clickEvent)="updateLateralMenuExample()">
    Update menú lateral
  </mv-button>
  `;
  codeUpdateLateralMenuCallTS = `
  updateLateralMenuExample(secundario: boolean) {

    this._appService.updateLateralMenu({
      cargarMenuSecundario: secundario
    });
  }
  `;
  codeUpdateLateralMenuTS = `
  ...

  // Reaccionar al evento de cambio de elementos
  this.subscriptionUpdateItems = this._appService.updateLateralMenu$.subscribe(
    (data: any) => {
      // Ejemplo de cambio de elementos
      if(data) {
        this.treeFilterElementsMenu = data.cargarMenuSecundario ? this.treeFilterElementsMenu2 : this.treeFilterElementsMenu1;
      }
    }
  );
    ...
  `;

  codeUpdateLateralMenuSCSS = `
  // Nada que añadir
  `;

  codeLoginLogoutHTML = `
  <!-- Botón de acceso -->
  <section class="sidenav-left-login-button"
      *ngIf="!isLogged">
      <mv-button-login #hiddenButtonLogin hidden=true></mv-button-login>
      <mv-button adapt class="login-button" (clickEvent)="doLogin()">Acceder<mv-icon class="login-icon">lock_open</mv-icon></mv-button>
  </section>

  <!-- Datos del usuario -->
  <section class="sidenav-left-user-section"
      *ngIf="isLogged"
      >

      <section class="username-section">

          <mat-accordion multi>
              <mat-expansion-panel>
                  <mat-expansion-panel-header>
                      <mat-panel-title>
                          <span class="username truncate">{{ username }}</span>
                      </mat-panel-title>
                  </mat-expansion-panel-header>

                  <section class="user-options">

                      <mv-tree-filter
                          class="sidenav-left-menu"
                          [treeFilterItems]="treeFilterElementsMenuUser"
                          showFilter=false
                          multiOpen=true
                          (selectItem)="onSelectItem($event)">
                      </mv-tree-filter>

                      <mv-button-login #hiddenButtonLogout hidden=true></mv-button-login>
                  </section>

                  <hr>

              </mat-expansion-panel>
          </mat-accordion>
      </section>
  </section>
  `;
  codeLoginLogoutTS = `
  ....
  isLogged: boolean;
  ....

  ngOnInit() {

    this.treeFilterElementsMenu = this.treeFilterElementsMenu1;
    // Reaccionar cuando el estado de login cambie
    this.subscriptionUpdateLoggedStatus = this._authenticationService.updateLoggedStatus$.subscribe(

      (data: any) => {

        this.isLogged = data;

        this.updateDataOnIsLoggedChange();
      }
    );

    // Reaccionar al evento de cambio de elementos
    this.subscriptionUpdateItems = this._appService.updateLateralMenu$.subscribe(
      (data: any) => {
        // Ejemplo de cambio de elementos
        if(data) {
          this.treeFilterElementsMenu = data.cargarMenuSecundario ? this.treeFilterElementsMenu2 : this.treeFilterElementsMenu1;
        }
      }
    );
  }

  ngAfterViewInit(): void {
    this.isLogged = this._authenticationService.isLogged();
    this.updateDataOnIsLoggedChange();
  }
  ....
  // Centraliza los cambios cuando se produce un cambio en el estado de login
  updateDataOnIsLoggedChange() {
    // Aquí realizo una simulación de mostrar/ocultar elementos cuando estoy logado
    let hideItems: string[] = ['Mapa', 'Formularios'];

    if (this.isLogged) {
      let globalCredentials = this._authenticationService.getCredentials();
      if (globalCredentials && globalCredentials.user) this.username = globalCredentials.userName;

      this.mvTreeFilterLateralOptions.hideItems(hideItems);
    }else{
      this.mvTreeFilterLateralOptions.showItems(hideItems);
    }
  }

  // Lanza el proceso de login
  doLogin() {

    this.hiddenButtonLogin.clickNative();
  }

  // Lanza el proceso de logout
  doLogout() {

    this.hiddenButtonLogout.clickNative();
  }

  `;

  // Referencia a la configuracion original
  originalMenuConfig:any;

  constructor(
    private readonly _appService: AppService,
  ) { }

  ngOnInit() {
    this.originalMenuConfig = configuracion;
    this._appService.updateMainFrameConfig(this.originalMenuConfig);
  }

  /*
  elementos menu
  */
  showAppShortName(ShowShortName) {
    let appShortName = 'Prueba';
    if (!ShowShortName) {
      appShortName = this.originalMenuConfig.lateralMenuConfig.appShortName;
    }

    const mainFrameConfig = this._appService.getMainFrameConfig();
    const lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.appShortName = appShortName;
    const headerAndlateralMenuConfigs = {
      lateralMenuConfig,
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }

  showAppLongName(ShowLongName) {
    let appLongName = 'App de prueba versión ciudadano';
    if (!ShowLongName) {
      appLongName = this.originalMenuConfig.lateralMenuConfig.appLongName;
    }

    const mainFrameConfig = this._appService.getMainFrameConfig();
    const lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.appLongName = appLongName;
    const headerAndlateralMenuConfigs = {
      lateralMenuConfig,
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }

  showAppDesc(ShowAppDesc) {
    let appDesc = 'App de prueba versión ciudadano';
    if (!ShowAppDesc) {
      appDesc = this.originalMenuConfig.lateralMenuConfig.appDesc;
    }

    const mainFrameConfig = this._appService.getMainFrameConfig();
    const lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.appDesc = appDesc;
    const headerAndlateralMenuConfigs = {
      lateralMenuConfig,
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }

  setAlwaysOpen(alwaysOpen) {
    const mainFrameConfig = this._appService.getMainFrameConfig();
    const lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.alwaysOpen = alwaysOpen;
    const headerAndlateralMenuConfigs = {
      lateralMenuConfig,
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }

  setChangePosition(position: string) {
    const mainFrameConfig = this._appService.getMainFrameConfig();
    const lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.position = position;
    const headerAndlateralMenuConfigs = {
      lateralMenuConfig,
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }

  setChangeMode(mode: string) {
    const mainFrameConfig = this._appService.getMainFrameConfig();
    const lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.mode = mode;
    const headerAndlateralMenuConfigs = {
      lateralMenuConfig,
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }

  setChangeModeSmall(mode: string) {
    const mainFrameConfig = this._appService.getMainFrameConfig();
    const lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.modeSmall = mode;
    const headerAndlateralMenuConfigs = {
      lateralMenuConfig,
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }

  showLogoApp(show: boolean) {
    let logoApp = 'examples/logo-app-blue.png';
    if (!show) {
      logoApp = this.originalMenuConfig.lateralMenuConfig.logoApp;
    }

    const mainFrameConfig = this._appService.getMainFrameConfig();
    const lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.logoApp = logoApp;
    const headerAndlateralMenuConfigs = {
      lateralMenuConfig,
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }

  setCloseOnSelectItem(closeOnSelectItem: boolean) {
    const mainFrameConfig = this._appService.getMainFrameConfig();
    const lateralMenuConfig = mainFrameConfig.lateralMenuConfig;
    lateralMenuConfig.closeOnSelectItem = closeOnSelectItem;
    const headerAndlateralMenuConfigs = {
      lateralMenuConfig,
    };
    this._appService.updateMainFrameConfig(headerAndlateralMenuConfigs);
  }

  /*
  Eventos
  */
  closeLateralMenuExample() {
    this._appService.closeLateralMenu();
  }

  openLateralMenuExample() {
    this._appService.openLateralMenu();
  }

  toggleLateralMenuExample() {
    this._appService.toggleLateralMenu();
  }

  updateLateralMenuExample(secundario: boolean) {
    this._appService.updateLateralMenu({
      cargarMenuSecundario: secundario,
    });
  }
}

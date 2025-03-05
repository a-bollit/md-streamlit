import {Component, OnInit, ViewChild} from '@angular/core';
import {AppService, AuthenticationService} from '@mova/components/core';
import {MvButtonLogin} from '@mova/components/button-login';
import {MvTreeFilter} from '@mova/components/tree-filter';
import {Subscription} from 'rxjs';

@Component({
  selector: 'lateral-menu',
  templateUrl: './lateral-menu.html',
  styleUrls: ['./lateral-menu.scss'],
})
export class LateralMenu implements OnInit {
  @ViewChild(MvButtonLogin, {static: false})
    hiddenButtonLogin: MvButtonLogin;
  @ViewChild(MvButtonLogin, {static: false})
    hiddenButtonLogout: MvButtonLogin;
  @ViewChild('mvTreeFilterLateralOptions', {static: false})
    mvTreeFilterLateralOptions: MvTreeFilter;

  // Variable con el estado del login
  isLogged: boolean;
  // Suscripción al estado de login
  subscriptionUpdateLoggedStatus: Subscription;
  // Nombre del usuario que se ha logado
  username: string;
  // Suscripción al método updateItems de appService
  subscriptionUpdateItems: Subscription;
  readonly CSS_LVL0 = 'level0 item';
  readonly CSS_LVL1 = 'level1 item';
  /*
  Elementos del tree-filter del usuario
  */
  treeFilterElementsMenuUser = [
    {
      'iconTitle': 'fa-user',
      'iconTitleFontSet': 'fas',
      'title': 'Perfil',
      'subtitle': '',
      'css': this.CSS_LVL0,
      'link': {
        'type': 'state',
        'uri': 'user-profile-view',
      },
    },
    {
      'iconTitle': 'fa-times',
      'iconTitleFontSet': 'fas',
      'title': 'Desconectar',
      'subtitle': '',
      'css': 'level0 item logout-option',
      'link': {},
    },
  ]

  /*
  Elementos del tree-filter de contenidos
  */
  tipoMenuFlag = true;
  treeFilterElementsMenu = [];

  treeFilterElementsMenu1 = [
    {
      'iconTitle': 'fa-home',
      'iconTitleFontSet': 'fa',
      'iconTitleColor': 'secondary-001',
      'title': 'Inicio',
      'subtitle': '',
      'css': this.CSS_LVL0,
      'link': {
        'type': 'state',
        'uri': 'main-menu',
      },
    },
    {
      'iconTitle': 'list',
      'title': 'Listado de alumnos',
      'subtitle': '',
      'css': this.CSS_LVL0,
      'link': {
        'type': 'state',
        'uri': 'student-info',
      },
    },
    {
      'iconTitle': 'star_half',
      'iconTitleColor': 'secondary-004',
      'title': 'Valoración',
      'subtitle': '',
      'css': this.CSS_LVL0,
      'link': {
        'type': 'state',
        'uri': 'rate-view',
      },
    },
    {
      'iconTitle': 'notifications',
      'iconTitleColor': 'secondary-005',
      'title': 'Configurar notificaciones',
      'subtitle': '',
      'css': this.CSS_LVL0,
      'link': {
        'type': 'state',
        'uri': 'notification-config-view',
      },
    },
    {
      'iconTitle': 'notifications',
      'iconTitleColor': 'secondary-005',
      'title': 'Notificaciones',
      'subtitle': '',
      'css': this.CSS_LVL0,
      'link': {
        'type': 'state',
        'uri': 'last-notifications-view',
      },
    },
   /*  {
      'iconTitle': 'map',
      'title': 'Mapa',
      'subtitle': '',
      'css': this.CSS_LVL0,
      'link': {
        'type': 'state',
        'uri': 'layout-map-vgcm',
      },
    }, */
    {
      'iconTitle': 'map',
      'title': 'Documentación API GIS',
      'subtitle': 'Información técnica sobre el API GIS',
      'css': 'this.CSS_LVL0',
      'children': [
        {
          'iconTitle': 'fa-book',
          'iconTitleFontSet': 'fa',
          'title': 'Solicitud de uso de Mapas',
          'css': this.CSS_LVL1,
          'link': {
            'type': 'state',
            'uri': 'solicitud-mapas-apigis',
          },
        },
        {
          'iconTitle': 'fa-book',
          'iconTitleFontSet': 'fa',
          'title': 'Documentación',
          'css': this.CSS_LVL1,
          'link': {
            'type': 'state',
            'uri': 'documentation-apigis',
          },
        },
        {
          'iconTitle': 'fa-book',
          'iconTitleFontSet': 'fa',
          'title': 'Ejemplos de maquetación',
          'css': this.CSS_LVL1,
          'link': {
            'type': 'state',
            'uri': 'layout-apigis-examples',
          },
        },
      ],
    },
    {
      'iconTitle': 'work',
      'title': 'Formularios',
      'subtitle': '',
      'css': this.CSS_LVL1,
      'link': {
        'type': 'state',
        'uri': 'forms-menu',
      },
    },
    {
      'iconTitle': 'school',
      'title': 'Documentación MOVA 2',
      'subtitle': 'Información técnica sobre el framework',
      'css': 'level0 folder',
      'children': [
        {
          'iconTitle': 'fa-book',
          'iconTitleFontSet': 'fa',
          'title': 'Ejemplos de maquetación',
          'css': this.CSS_LVL1,
          'link': {
            'type': 'state',
            'uri': 'layout',
          },
        },
        {
          'iconTitle': 'fa-book',
          'iconTitleFontSet': 'fa',
          'title': 'Documentación',
          'css': this.CSS_LVL1,
          'link': {
            'type': 'state',
            'uri': 'documentation',
          },
        },
      ],
    },
  ];
  treeFilterElementsMenu2 = [
    {
      'iconTitle': 'fa-home',
      'iconTitleFontSet': 'fa',
      'iconTitleColor': 'secondary-002',
      'title': 'Inicio2',
      'subtitle': '',
      'css': this.CSS_LVL0,
      'link': {
        'type': 'state',
        'uri': 'main-menu',
      },
    },
    {
      'iconTitle': 'list',
      'title': 'Listado de usuarios2',
      'subtitle': 'subtitulo 2',
      'css': this.CSS_LVL0,
      'link': {
        'type': 'state',
        'uri': 'client-list',
      },
    },
    {
      'iconTitle': 'work',
      'title': 'Listado simple de usuarios 2',
      'css': this.CSS_LVL0,
      'link': {
        'type': 'state',
        'uri': 'simple-client-list',
      },
    },
  ];

  constructor(
    private readonly _appService: AppService,
    private readonly _authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.treeFilterElementsMenu = this.treeFilterElementsMenu1;
    // Reaccionar cuando el estado de login cambie
    this.subscriptionUpdateLoggedStatus =
      this._authenticationService.updateLoggedStatus$.subscribe(
          (data: any) => {
            this.isLogged = data;
            this.updateDataOnIsLoggedChange();
          },
      );

    // Reaccionar al evento de cambio de elementos
    this.subscriptionUpdateItems =
      this._appService.updateLateralMenu$.subscribe(
          (data: any) => {
          // Ejemplo de cambio de elementos
            if (data) {
              if (data.cargarMenuSecundario) {
                this.treeFilterElementsMenu = this.treeFilterElementsMenu2;
              } else {
                this.treeFilterElementsMenu = this.treeFilterElementsMenu1;
              }
            }
          },
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
    // Ocultar el menú lateral al hacer click en una opción que no sea
    // un elemento padre
    if (item.children.length === 0) {
      // La opción de desconexión no cierra el menú
      if (item.css.indexOf('logout-option') > -1) {
        this.hiddenButtonLogout.clickNative();
      } else {
        this._appService.closeLateralMenu();
      }
    }
  }

  // Centraliza los cambios cuando se produce un cambio en el estado de login
  updateDataOnIsLoggedChange() {
    // Aquí realizo una simulación de mostrar/ocultar elementos cuando estoy
    // logado
    const hideItems: string[] = ['Mapa', 'Formularios'];

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

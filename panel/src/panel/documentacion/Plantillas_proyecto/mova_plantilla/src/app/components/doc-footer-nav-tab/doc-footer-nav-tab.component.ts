import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-doc-footer-nav-tab',
  templateUrl: './doc-footer-nav-tab.html',
  styleUrls: ['./doc-footer-nav-tab.scss'],
})
export class DocFooterNavTab implements OnInit {

  // useExample
  codeUseExample1HTML = `
  <section class="view-default-style">

    <!-- Componente -->
    <mv-card class="card-code">
      <mv-card-title><strong>Navegación 1</strong></mv-card-title>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <mv-select-x
        [(ngModel)]="selectNavBarColor"
        label="Propiedad navBarColor"
        [options]="selectColors"
        (changeEvent)="changeColor()">
      </mv-select-x>

      <mv-select-x
        [(ngModel)]="selectNavBarColorBar"
        label="Propiedad navBarColorBar"
        [options]="selectColors"
        (changeEvent)="changeColor()">
      </mv-select-x>

      <mv-button
        link="/doc-footer-nav-tab"
        appearance="raised"
        color="primary"
        adapt=true>
        Volver a la documentación
      </mv-button>

    </mv-card>
  </section>
  `;

  codeUseExample1TS = `
  import {Component, OnInit, EventEmitter, Output} from '@angular/core';

  @Component({
    selector: 'app-doc-footer-nav-tab-example1',
    templateUrl: './doc-footer-nav-tab-example1.html',
    styleUrls: ['./doc-footer-nav-tab-example1.scss'],
  })
  export class DocFooterNavTabExample1 implements OnInit {
    // Evento principal de MOVA para configurar el nav tab
    @Output() movaSetMainFrameConfig: EventEmitter<any> = new EventEmitter();

    constructor(
    ) { }

    selectNavBarColor: any = "secondary-white";
    selectNavBarColorBar: any = "corporative";
    selectColors: any[] = [
      {
        "id": "primary",
        "text": "Primary"
      },
      {
        "id": "accent",
        "text": "Accent"
      },
      {
        "id": "warn",
        "text": "Warn"
      },
      {
        "id": "corporative",
        "text": "Corporative"
      },
      {
        "id": "secondary-001",
        "text": "Secondary-001"
      },
      {
        "id": "secondary-002",
        "text": "Secondary-002"
      },
      {
        "id": "secondary-003",
        "text": "Secondary-003"
      },
      {
        "id": "secondary-004",
        "text": "Secondary-004"
      },
      {
        "id": "secondary-005",
        "text": "Secondary-005"
      },
      {
        "id": "secondary-006",
        "text": "Secondary-006"
      },
      {
        "id": "secondary-007",
        "text": "Secondary-007"
      },
      {
        "id": "secondary-008",
        "text": "Secondary-008"
      },
      {
        "id": "secondary-009",
        "text": "Secondary-009"
      },
      {
        "id": "secondary-010",
        "text": "Secondary-010"
      },
      {
        "id": "secondary-011",
        "text": "Secondary-011"
      },
      {
        "id": "secondary-012",
        "text": "Secondary-012"
      },
      {
        "id": "secondary-white",
        "text": "Secondary-white"
      },
      {
        "id": "secondary-black",
        "text": "Secondary-black"
      }
    ]

    navBarConfig: any = {
      "showNavBar": true,
      "navBarLinks": [
        {
          "title": "Me gusta",
          "stateUrl": "/doc-footer-nav-tab-example1",
          "icon": "thumb_up"
        },
        {
          "title": "Accesibilidad",
          "stateUrl": "/doc-footer-nav-tab-example2",
          "icon": "accessibility"
        },
        {
          "title": "Datos",
          "stateUrl": "/doc-footer-nav-tab-example3",
          "icon": "dns"
        },
        {
          "title": "Finanzas",
          "stateUrl": "/doc-footer-nav-tab-example4",
          "fontSet": "fas",
          "icon": "fa-euro-sign"
        }
      ],
      "navBarMenu": [
        {
          "title": "Primera opción",
          "stateUrl": "/doc-checkbox"
        },
        {
          "title": "Segunda opción",
          "stateUrl": "/doc-birthdate"
        },
        {
          "title": "Tercera opción",
          "stateUrl": "/doc-input"
        }
      ]
    };

    ngOnInit() {
      this.changeColor();
    }

    changeColor(){
      let navBarConfig: any = this.navBarConfig;
      navBarConfig.navBarColor = this.selectNavBarColor;
      navBarConfig.navBarColorBar = this.selectNavBarColorBar;
      const headerAndlateralMenuConfigs = {
        navBarConfig,
      };
      this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    }

  }

  `;

  // Ejemplo 1 scss
  codeUseExample1SCSS = `
  @import '~@mova/components/_variables.scss';

  .card-code{
    margin-right: auto;
    margin-left: auto;
    max-width: $container-max-width-medium;
  }
  `

  // resto de ejemplos
  codeRestOfExamplesHTML = `
  ...

  <!-- Nada que añadir respecto al ejemplo principal -->

  ...
  `;

  codeRestOfExamplesTS = `
  ...

  // Nada que añadir respecto al ejemplo principal

  ...
   `;

  // navBarColorBar
  codeRestOfExamplesSCSS = `
  ...

  //  Nada que añadir respecto al ejemplo principal

  ...
  `;

  // Configuracion original
  navBarConfig: any = {
    "showNavBar": true,
    "navBarColor": "secondary-white",
    "navBarColorBar": "corporative",
    "navBarLinks": [
      {
        "title": "Inicio",
        "stateUrl": "/main-menu",
        "icon": "home"
      },
      {
        "title": "Documentación",
        "stateUrl": "/doc-footer-nav-tab",
        "fontSet": "fas",
        "icon": "fa-info"
      },
      {
        "title": "Dispositivo",
        "stateUrl": "/device-info",
        "icon": "smartphone"
      }
    ],
    "navBarMenu": [
      {
        "title": "Primera opción",
        "stateUrl": "/doc-checkbox"
      },
      {
        "title": "Segunda opción",
        "stateUrl": "/doc-birthdate"
      },
      {
        "title": "Tercera opción",
        "stateUrl": "/doc-input"
      }
    ]
  };

  constructor(
  ) { }

  ngOnInit() {
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-config-default-main-frame',
  templateUrl: './doc-config-default-main-frame.html',
  styleUrls: ['./doc-config-default-main-frame.scss'],
})
export class DocConfigDefaultMainFrame implements OnInit {
  // Archivo de configuracion
  codeConfigDefaultMainFrameJSON = `
  {
    "generalConfig": {
      "style": 1,
      "showLoadingMode": "mova2"
    },
    "headerConfig": {
      "fixed": true,
      "showBackButton": true,
      "showHeader": true,
      "showHeaderButtonLogin": true,
      "showLateralMenu": true,
      "showMenuButton": true,
      "type": "white-corporative_",
      "headerButtonLoginFontSet": "",
      "headerButtonLogoutFontSet": "",
      "headerButtonLoginIcon": "",
      "headerButtonLogoutIcon": ""
    },
    "lateralMenuConfig": {
      "appShortName":"",
      "appLongName":"",
      "appDesc":"",
      "position": "start",
      "mode": "side",
      "modeSmall": "over",
      "initOpen": true,
      "alwaysOpen": false,
      "logoApp": "logo-app.png",
      "closeOnSelectItem": false,
      "showLateralMenuButtonLogin": false,
      "showLateralMenuButtonLoginIfLogged": false,
      "lateralMenuButtonLoginAppearance": "stroked",
      "lateralMenuButtonLoginColor": "secondary-007",
      "lateralMenuButtonLoginColorLogout": "warn"
    },
    "navBarConfig": {
      "showNavBar": false,
      "navBarColor": "corporative",
      "navBarColorBar": "secondary-white",
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
        }
      ]
    }
  }
  `;

  constructor() { }

  ngOnInit() {
  }
}

import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-doc-footer-nav-tab-example2',
  templateUrl: './doc-footer-nav-tab-example2.html',
  styleUrls: ['./doc-footer-nav-tab-example2.scss'],
})
export class DocFooterNavTabExample2 implements OnInit {
  // Evento principal de MOVA para configurar el nav tab
  @Output() movaSetMainFrameConfig: EventEmitter<any> = new EventEmitter();
  
  navBarConfig: any = {
    "showNavBar": true,
    "navBarColor": "secondary-white",
    "navBarColorBar": "corporative",
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
    let navBarConfig: any = this.navBarConfig;
    const headerAndlateralMenuConfigs = {
      navBarConfig,
    };
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
  }

}

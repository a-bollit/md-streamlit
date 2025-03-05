import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {HeaderAction1} from '../header-action-1/header-action-1.component';
import {HeaderAction2} from '../header-action-2/header-action-2.component';
import {HeaderAction3} from '../header-action-3/header-action-3.component';

@Component({
  selector: 'app-doc-header',
  templateUrl: './doc-header.html',
  styleUrls: ['./doc-header.scss'],
})
export class DocHeader implements OnInit {
  // Evento principal de MOVA para configurar el tree-filter del menú lateral
  @Output() movaSetMainFrameConfig: EventEmitter<any> = new EventEmitter();

  // Uso del componente
  codeUseExampleJSON = `
  "headerConfig": {
    "actionComponents": {
      "component001": HeaderAction1Component,
      "component002": HeaderAction2Component,
      "component003": HeaderAction3Component
    },
    "headerTitle": "MOVA 2",
    "headerSubtitle": "Framework de desarrollo MOVA 2",
    "fixed": true,
    "showBackButton": true,
    "showMenuButton": true,
    "type": ""
  }
  `;

  // actionComponents
  codeActionComponentsExampleHTML = `
  <mv-button
    color="primary"
    (clickEvent)="changeActionComponents()">
    Cambiar actionComponents
  </mv-button>
  `;

  codeActionComponentsExampleTS = `
  import {
    HeaderAction1Component
  } from '../header-action-1/header-action-1.component';
  import {
    HeaderAction2Component
  } from '../header-action-2/header-action-2.component';
  import {
    HeaderAction3Component
  } from '../header-action-3/header-action-3.component';

  ...

  // Evento principal de MOVA para configurar el tree-filter del menú lateral
  @Output() movaSetMainFrameConfig: EventEmitter<any> = new EventEmitter();

  ...

  originalHeaderConfig:any = {
    "actionComponents": {
      "component001": HeaderAction1Component,
      "component002": HeaderAction2Component,
      "component003": HeaderAction3Component
    },
    "headerTitle": "MOVA 2",
    "headerSubtitle": "Framework de desarrollo MOVA 2",
    "fixed": true,
    "showBackButton": true,
    "showMenuButton": true,
    "type": ""
  }

  actionComponentsChangedFlag: boolean = true;

  constructor() {}

  ngOnInit() {}

  ...

  changeActionComponents() {
    let actionComponents = {};
    if(this.actionComponentsChangedFlag === true){
      actionComponents = this.originalHeaderConfig.actionComponents;
    }
    let headerConfig = {
      "actionComponents": actionComponents
    }
    let headerAndlateralMenuConfigs = {
     headerConfig
    }
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    this.actionComponentsChangedFlag = !this.actionComponentsChangedFlag;
  }

  `;

  // header-action-1
  codeActionComponentsExampleAction1HTML = `
  <mv-icon
    class="icon"
    aria-hidden="false"
    (click)="showAlert()"
    aria-label="Face"
  >
    face
  </mv-icon>
  `;

  codeActionComponentsExampleAction1TS = `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'header-action-1',
    templateUrl: './header-action-1.component.html',
    styleUrls: ['./header-action-1.component.scss']
  })
  export class HeaderAction1Component implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    showAlert() {
      alert('Acción 1 - Usuario');
    }
  }
  `;

  // header-action-2
  codeActionComponentsExampleAction2HTML = `
  <mv-icon
    class="icon"
    aria-hidden="false"
    (click)="showAlert()"
    aria-label="Favorito"
  >
    favorite
  </mv-icon>
  `;

  codeActionComponentsExampleAction2TS = `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'header-action-2',
    templateUrl: './header-action-2.component.html',
    styleUrls: ['./header-action-2.component.scss']
  })
  export class HeaderAction2Component implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    showAlert() {
      alert('Acción 2 - Favorito');
    }
  }
  `;

  // header-action-3
  codeActionComponentsExampleAction3HTML = `
  <mv-icon
    class="icon"
    aria-hidden="false"
    [matMenuTriggerFor]="configMenu"
    aria-label="Configuración"
  >
    settings
  </mv-icon>
  <mat-menu #configMenu="matMenu">
      <button
        mat-menu-item
        [matMenuTriggerFor]="vertebrates"
      >
        Vertebrates
      </button>
      <button
        mat-menu-item
        [matMenuTriggerFor]="invertebrates"
      >
        Invertebrates
      </button>
  </mat-menu>

  <mat-menu #vertebrates="matMenu">
      <button mat-menu-item [matMenuTriggerFor]="fish">Fishes</button>
      <button mat-menu-item [matMenuTriggerFor]="amphibians">Amphibians</button>
      <button mat-menu-item [matMenuTriggerFor]="reptiles">Reptiles</button>
      <button mat-menu-item>Birds</button>
      <button mat-menu-item>Mammals</button>
  </mat-menu>

  <mat-menu #invertebrates="matMenu">
      <button mat-menu-item>Insects</button>
      <button mat-menu-item>Molluscs</button>
      <button mat-menu-item>Crustaceans</button>
      <button mat-menu-item>Corals</button>
      <button mat-menu-item>Arachnids</button>
      <button mat-menu-item>Velvet worms</button>
      <button mat-menu-item>Horseshoe crabs</button>
  </mat-menu>

  <mat-menu #fish="matMenu">
      <button mat-menu-item>Baikal oilfish</button>
      <button mat-menu-item>Bala shark</button>
      <button mat-menu-item>Ballan wrasse</button>
      <button mat-menu-item>Bamboo shark</button>
      <button mat-menu-item>Banded killifish</button>
  </mat-menu>

  <mat-menu #amphibians="matMenu">
      <button mat-menu-item>Sonoran desert toad</button>
      <button mat-menu-item>Western toad</button>
      <button mat-menu-item>Arroyo toad</button>
      <button mat-menu-item>Yosemite toad</button>
  </mat-menu>

  <mat-menu #reptiles="matMenu">
      <button mat-menu-item>Banded Day Gecko</button>
      <button mat-menu-item>Banded Gila Monster</button>
      <button mat-menu-item>Black Tree Monitor</button>
      <button mat-menu-item>Blue Spiny Lizard</button>
      <button mat-menu-item disabled>Velociraptor</button>
  </mat-menu>
  `;

  codeActionComponentsExampleAction3TS = `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'header-action-3',
    templateUrl: './header-action-3.component.html',
    styleUrls: ['./header-action-3.component.scss']
  })
  export class HeaderAction3Component implements OnInit {

    constructor() { }

    ngOnInit() {
    }

  }
  `;

  // headerTitle
  codeHeaderTitleExampleHTML = `
  <mv-button
    color="primary"
    (clickEvent)="changeHeaderTitle()">
    Cambiar headerTitle
  </mv-button>
  `;

  codeHeaderTitleExampleTS = `

  ...

  // Evento principal de MOVA para configurar el tree-filter del menú lateral
  @Output() movaSetMainFrameConfig: EventEmitter<any> = new EventEmitter();

  ...

  originalHeaderConfig:any = {
    "actionComponents": {
      "component001": HeaderAction1Component,
      "component002": HeaderAction2Component,
      "component003": HeaderAction3Component
    },
    "headerTitle": "MOVA 2",
    "headerSubtitle": "Framework de desarrollo MOVA 2",
    "fixed": true,
    "showBackButton": true,
    "showMenuButton": true,
    "type": ""
  }

  titleChangedFlag: boolean = true;

  constructor() {}

  ngOnInit() {}

  ...

  changeHeaderTitle() {
    let title = "Título de prueba";
    if(this.titleChangedFlag === false){
      title = this.originalHeaderConfig.headerTitle;
    }
    let headerConfig = {
      "headerTitle": title,
    }
    let headerAndlateralMenuConfigs = {
     headerConfig
    }
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    this.titleChangedFlag = !this.titleChangedFlag;
  }
  `;

  // headerSubtitle
  codeHeaderSubtitleExampleHTML = `
  <mv-button
    color="primary"
    (clickEvent)="changeHeaderSubtitle()">
    Cambiar headerSubtitle
  </mv-button>
  `;

  codeHeaderSubtitleExampleTS = `

  ...

  // Evento principal de MOVA para configurar el tree-filter del menú lateral
  @Output() movaSetMainFrameConfig: EventEmitter<any> = new EventEmitter();

  ...

  originalHeaderConfig:any = {
    "actionComponents": {
      "component001": HeaderAction1Component,
      "component002": HeaderAction2Component,
      "component003": HeaderAction3Component
    },
    "headerTitle": "MOVA 2",
    "headerSubtitle": "Framework de desarrollo MOVA 2",
    "fixed": true,
    "showBackButton": true,
    "showMenuButton": true,
    "type": ""
  }

  subtitleChangedFlag: boolean = true;

  constructor() {}

  ngOnInit() {}

  ...

  changeHeaderSubtitle() {
    let subtitle = "Subtítulo de prueba";
    if(this.subtitleChangedFlag === false){
      subtitle = this.originalHeaderConfig.headerSubtitle;
    }
    let headerConfig = {
      "headerSubtitle": subtitle,
    }
    let headerAndlateralMenuConfigs = {
     headerConfig
    }
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    this.subtitleChangedFlag = !this.subtitleChangedFlag;
  }

  `;

  // fixed
  codeFixedExampleHTML = `
  <mv-button
    color="primary"
    (clickEvent)="changeHeaderFixed()">
    Cambiar fixed
  </mv-button>
  `;

  codeFixedExampleTS = `

  ...

  // Evento principal de MOVA para configurar el tree-filter del menú lateral
  @Output() movaSetMainFrameConfig: EventEmitter<any> = new EventEmitter();

  ...

  originalHeaderConfig:any = {
    "actionComponents": {
      "component001": HeaderAction1Component,
      "component002": HeaderAction2Component,
      "component003": HeaderAction3Component
    },
    "headerTitle": "MOVA 2",
    "headerSubtitle": "Framework de desarrollo MOVA 2",
    "fixed": true,
    "showBackButton": true,
    "showMenuButton": true,
    "type": ""
  }

  fixedChangedFlag: boolean = true;

  constructor() {}

  ngOnInit() {}

  ...

  changeHeaderFixed() {
    let fixed = false;
    if(this.fixedChangedFlag === false){
      fixed = this.originalHeaderConfig.fixed;
    }
    let headerConfig = {
      "fixed": fixed,
    }
    let headerAndlateralMenuConfigs = {
     headerConfig
    }
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    this.fixedChangedFlag = !this.fixedChangedFlag;
  }

  `;

  // showBackButton
  codeShowBackButtonExampleHTML = `
  <mv-button
    color="primary"
    (clickEvent)="changeHeaderShowBackButton()">
    Cambiar showBackButton
  </mv-button>
  `;

  codeShowBackButtonExampleTS = `

  ...

  // Evento principal de MOVA para configurar el tree-filter del menú lateral
  @Output() movaSetMainFrameConfig: EventEmitter<any> = new EventEmitter();

  ...

  originalHeaderConfig:any = {
    "actionComponents": {
      "component001": HeaderAction1Component,
      "component002": HeaderAction2Component,
      "component003": HeaderAction3Component
    },
    "headerTitle": "MOVA 2",
    "headerSubtitle": "Framework de desarrollo MOVA 2",
    "fixed": true,
    "showBackButton": true,
    "showMenuButton": true,
    "type": ""
  }

  showBackButtonChangedFlag: boolean = true;

  constructor() {}

  ngOnInit() {}

  ...

  changeHeaderShowBackButton() {
    let showBackButton = false;
    if(this.showBackButtonChangedFlag === false){
      showBackButton = this.originalHeaderConfig.showBackButton;
    }
    let headerConfig = {
      "showBackButton": showBackButton,
    }
    let headerAndlateralMenuConfigs = {
     headerConfig
    }
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    this.showBackButtonChangedFlag = !this.showBackButtonChangedFlag;
  }

  `;

  // showMenuButton
  codeShowMenuButtonExampleHTML = `
  <mv-button
    color="primary"
    (clickEvent)="changeHeaderShowMenuButton()">
    Cambiar showMenuButton
  </mv-button>
  `;

  codeShowMenuButtonExampleTS = `

  ...

  // Evento principal de MOVA para configurar el tree-filter del menú lateral
  @Output() movaSetMainFrameConfig: EventEmitter<any> = new EventEmitter();

  ...

  originalHeaderConfig:any = {
    "actionComponents": {
      "component001": HeaderAction1Component,
      "component002": HeaderAction2Component,
      "component003": HeaderAction3Component
    },
    "headerTitle": "MOVA 2",
    "headerSubtitle": "Framework de desarrollo MOVA 2",
    "fixed": true,
    "showBackButton": true,
    "showMenuButton": true,
    "type": ""
  }

  showMenuButtonChangedFlag: boolean = true;

  constructor() {}

  ngOnInit() {}

  ...

  changeHeaderShowMenuButton() {
    let showMenuButton = false;
    if(this.showMenuButtonChangedFlag === false){
      showMenuButton = this.originalHeaderConfig.showMenuButton;
    }
    let headerConfig = {
      "showMenuButton": showMenuButton,
    }
    let headerAndlateralMenuConfigs = {
     headerConfig
    }
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    this.showMenuButtonChangedFlag = !this.showMenuButtonChangedFlag;
  }

  `;

  // type
  codeTypeExampleHTML = `
  <mv-button
    color="primary"
    (clickEvent)="changeHeaderType()">
    Cambiar type
  </mv-button>
  `;

  codeTypeExampleTS = `

  ...

  // Evento principal de MOVA para configurar el tree-filter del menú lateral
  @Output() movaSetMainFrameConfig: EventEmitter<any> = new EventEmitter();

  ...

  originalHeaderConfig:any = {
    "actionComponents": {
      "component001": HeaderAction1Component,
      "component002": HeaderAction2Component,
      "component003": HeaderAction3Component
    },
    "headerTitle": "MOVA 2",
    "headerSubtitle": "Framework de desarrollo MOVA 2",
    "fixed": true,
    "showBackButton": true,
    "showMenuButton": true,
    "type": ""
  }

  typeChangedFlag: boolean = true;

  constructor() {}

  ngOnInit() {}

  ...

  changeHeaderType() {
    let type = 'white-corporative';
    if(this.typeChangedFlag === false){
      type = this.originalHeaderConfig.type;
    }
    let headerConfig = {
      "type": type,
    }
    let headerAndlateralMenuConfigs = {
     headerConfig
    }
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    this.typeChangedFlag = !this.typeChangedFlag;
  }

  `;

  originalHeaderConfig:any = {
    'actionComponents': {
      'component001': HeaderAction1,
      'component002': HeaderAction2,
      'component003': HeaderAction3,
    },
    'headerTitle': 'MOVA 2',
    'headerSubtitle': 'Framework de desarrollo MOVA 2',
    'fixed': true,
    'showBackButton': true,
    'showMenuButton': true,
    'type': '',
  }

  actionComponentsChangedFlag = true;
  titleChangedFlag = true;
  subtitleChangedFlag = true;
  fixedChangedFlag = true;
  showBackButtonChangedFlag = true;
  showMenuButtonChangedFlag = true;
  typeChangedFlag = true;

  constructor() { }

  ngOnInit() {}

  changeActionComponents() {
    let actionComponents = {};
    if (this.actionComponentsChangedFlag === true) {
      actionComponents = this.originalHeaderConfig.actionComponents;
    }
    const headerConfig = {
      actionComponents,
    };
    const headerAndlateralMenuConfigs = {
      headerConfig,
      'lateralMenuConfig': {
        'appShortName': 'MOVA 4',
        'appLongName': 'Framework Mobile & Web 4',
        'appDesc': '444444',
        'appVersion': '4.0',
        'position': 'end',
        'mode': 'push',
        'modeSmall': 'push',
        'alwaysOpen': false,
        'logoApp': 'logo-app.png',
        'closeOnSelectItem': false,
      },
    };
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    this.actionComponentsChangedFlag = !this.actionComponentsChangedFlag;
  }

  changeHeaderTitle() {
    let title = 'Título de prueba';
    if (this.titleChangedFlag === false) {
      title = this.originalHeaderConfig.headerTitle;
    }
    const headerConfig = {
      'headerTitle': title,
    };
    const headerAndlateralMenuConfigs = {
      headerConfig,
    };
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    this.titleChangedFlag = !this.titleChangedFlag;
  }

  changeHeaderSubtitle() {
    let subtitle = 'Subtítulo de prueba';
    if (this.subtitleChangedFlag === false) {
      subtitle = this.originalHeaderConfig.headerSubtitle;
    }
    const headerConfig = {
      'headerSubtitle': subtitle,
    };
    const headerAndlateralMenuConfigs = {
      headerConfig,
    };
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    this.subtitleChangedFlag = !this.subtitleChangedFlag;
  }

  changeHeaderFixed() {
    let fixed = false;
    if (this.fixedChangedFlag === false) {
      fixed = this.originalHeaderConfig.fixed;
    }
    const headerConfig = {
      fixed,
    };
    const headerAndlateralMenuConfigs = {
      headerConfig,
    };
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    this.fixedChangedFlag = !this.fixedChangedFlag;
  }

  changeHeaderShowBackButton() {
    let showBackButton = false;
    if (this.showBackButtonChangedFlag === false) {
      showBackButton = this.originalHeaderConfig.showBackButton;
    }
    const headerConfig = {
      showBackButton,
    };
    const headerAndlateralMenuConfigs = {
      headerConfig,
    };
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    this.showBackButtonChangedFlag = !this.showBackButtonChangedFlag;
  }

  changeHeaderShowMenuButton() {
    let showMenuButton = false;
    if (this.showMenuButtonChangedFlag === false) {
      showMenuButton = this.originalHeaderConfig.showMenuButton;
    }
    const headerConfig = {
      showMenuButton,
    };
    const headerAndlateralMenuConfigs = {
      headerConfig,
    };
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    this.showMenuButtonChangedFlag = !this.showMenuButtonChangedFlag;
  }

  changeHeaderType() {
    let type = 'white-corporative';
    if (this.typeChangedFlag === false) {
      type = this.originalHeaderConfig.type;
    }
    const headerConfig = {
      type,
    };
    const headerAndlateralMenuConfigs = {
      headerConfig,
    };
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    this.typeChangedFlag = !this.typeChangedFlag;
  }
}

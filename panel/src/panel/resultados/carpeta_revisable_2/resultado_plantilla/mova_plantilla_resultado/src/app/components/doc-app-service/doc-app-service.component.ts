import {Component, OnInit} from '@angular/core';
import {AppService} from '@mova/components/core';

@Component({
  selector: 'app-doc-app-service',
  templateUrl: './doc-app-service.html',
  styleUrls: ['./doc-app-service.scss'],
})
export class DocAppService implements OnInit {
  // indexOfWithAttr
  codeIndexOfWithAttrExampleHTML = `
  <p><strong>Array de ejemplo:</strong></p>
  {{ arrayExample | json }}

  <p><strong>Buscar por clave 'nombre' y valor 'Clara':</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="codeIndexOfWithAttrExample()">
    codeIndexOfWithAttrExample
  </mv-button>

  <p>Índice del elemento:</p>
  {{ index }}
  `;

  codeIndexOfWithAttrExampleTS = `
  import { AppService } from '@mova/components/core';

  ...

  arrayExample: any[] = [
    {
      "nombre": "Felipe",
      "apellidos": "Sanz Martínez"
    },
    {
      "nombre": "Antonio",
      "apellidos": "Díaz Suárez"
    },
    {
      "nombre": "Clara",
      "apellidos": "Medina Pérez"
    }
  ];
  index: number = -1;

  constructor(
    private _appService: AppService
  ) { }

  ngOnInit() {
  }

  codeIndexOfWithAttrExample(exampleType: string){
    this.index = this._appService.indexOfWithAttr(this.arrayExample, 'nombre', 'Clara');
  }

  ...
  `;

  // titleCase
  codeTitleCaseExampleHTML = `
  <p><strong>Texto de ejemplo:</strong></p>
  {{ exampleText }}

  <p><strong>llamada a titleCase:</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="codeTitleCaseExample()">
    titleCaseExample
  </mv-button>
  `;

  codeTitleCaseExampleTS = `
  import { AppService } from '@mova/components/core';

  ...

  exampleText: string = 'Texto que queremos poner en camel case';

  constructor(
    private _appService: AppService
  ) { }

  ngOnInit() {
  }

  codeTitleCaseExample(){
    this.exampleText = this._appService.titleCase(this.exampleText);
  }

  ...
  `;

  // getFormattedDate
  codeGetFormattedDateExampleHTML = `
  <p><strong>Texto de ejemplo:</strong></p>
  {{ exampleText }}

  <p><strong>llamada a titleCase:</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="codeTitleCaseExample()">
    titleCaseExample
  </mv-button>
  `;

  codeGetFormattedDateExampleTS = `
  import { AppService } from '@mova/components/core';

  ...

  exampleText: string = 'Texto que queremos poner en camel case';

  constructor(
    private _appService: AppService
  ) { }

  ngOnInit() {
  }

  codeTitleCaseExample(){
    this.exampleText = this._appService.titleCase(this.exampleText);
  }

  ...
  `;

  // getTechnicalModule
  codeGetTechnicalModuleExampleHTML = `
  <p><strong>Texto de ejemplo:</strong></p>
  {{ exampleText }}

  <p><strong>llamada a titleCase:</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="codeTitleCaseExample()">
    titleCaseExample
  </mv-button>
  `;

  codeGetTechnicalModuleExampleTS = `
  import { AppService } from '@mova/components/core';

  ...

  exampleText: string = 'Texto que queremos poner en camel case';

  constructor(
    private _appService: AppService
  ) { }

  ngOnInit() {
  }

  codeTitleCaseExample(){
    this.exampleText = this._appService.titleCase(this.exampleText);
  }

  ...
  `;

  codeGetRandomStringExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="getRandomStringExample()">
    getRandomString
  </mv-button>

  <p><strong>Resultado:</strong></p>
  {{ getRandomStringValue }}
  `;

  codeGetRandomStringExampleTS = `
  import { AppService } from '@mova/components/core';

  ...

  getRandomStringValue: string;

  constructor(
    private _appService: AppService
  ) { }

  ngOnInit() {
  }

  getRandomStringExample(){
    this.getRandomStringValue = this._appService.getRandomString(15, "abcdefghijklmnopqrstuvwxyz", true);
  }

  ...
  `;

  codeB64ToBlobExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="b64toBlobExample()">
    b64toBlob
  </mv-button>

  <p><strong>Resultado:</strong></p>
  {{ b64toBlobValue }}
  `;

  codeB64ToBlobExampleTS = `
  import { AppService } from '@mova/components/core';

  ...

  b64toBlobValue: string;

  constructor(
    private _appService: AppService
  ) { }

  ngOnInit() {
  }

  b64toBlobExample(){
    this.b64toBlobValue = this._appService.b64toBlob('iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
    'image/png');
  }

  ...
  `;

  codeShowLoadingExampleHTML = `

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="showLoadingExample()">
    showLoading
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="showLoadingExampleWithoutTimeout()">
    showLoading sin timeout
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="showLoadingExampleWithLargeTimeout()">
    showLoading 30 segundos
  </mv-button>

  `;

  codeShowLoadingExampleTS = `
  import { AppService } from '@mova/components/core';

  ...

  showLoadingValue: boolean = false;

  constructor(
    private _appService: AppService
  ) { }

  ngOnInit() {
  }

  showLoadingExample() {
    this._appService.showLoading(true, 5);
    const data: any = {
      text: 'En 5 segundos se dejara de mostrar el loading',
      type: 'info',
    };
    this._appService.showSnackBar(data);
  }
  showLoadingExampleWithoutTimeout() {
    this._appService.showLoading(true);
    const data: any = {
      text: 'En 20 segundos se dejara de mostrar el loading',
      type: 'info',
    };
    this._appService.showSnackBar(data);
  }
  showLoadingExampleWithLargeTimeout() {
    this._appService.showLoading(true, 30);
    const data: any = {
      text: 'En 30 segundos se dejara de mostrar el loading',
      type: 'info',
    };
    this._appService.showSnackBar(data);
  }
  showLoadingExampleWithDefaultText() {
    this._appService.showLoading(true, 10);
    const data: any = {
      text: 'Loading con texto por defecto',
      type: 'info',
    };
    this._appService.showSnackBar(data);
  }
  showLoadingExampleWithText() {
    this._appService.showLoading(true, 10, 'Recuperando los datos. Espere');
    const data: any = {
      text: 'Loading con texto personalizado',
      type: 'info',
    };
    this._appService.showSnackBar(data);
  }
  ...
  `;

  // Archivo de configuracion
  codeShowLoadingExampleConfigDefaultMainFrameJSON = `
  {
    "generalConfig": {
      ...
      "showLoadingMode": "mova2",
      "showLoadingText": "Cargando..."
    },
    ...
  }
  `;

  codeWindowOpenExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)=windowOpenExample()">
    windowOpen
  </mv-button>
  `;

  codeWindowOpenExampleTS = `
  import { AppService } from '@mova/components/core';

  ...

  constructor(
    private _appService: AppService
  ) { }

  ngOnInit() {
  }

  windowOpenExample(){
    this._appService.windowOpen('https://www.google.es');
  }

  ...
  `;

  arrayExample: any[] = [
    {
      'nombre': 'Felipe',
      'apellidos': 'Sanz Martínez',
    },
    {
      'nombre': 'Antonio',
      'apellidos': 'Díaz Suárez',
    },
    {
      'nombre': 'Clara',
      'apellidos': 'Medina Pérez',
    },
  ];
  index = -1;
  exampleText = 'Texto que queremos poner en camel case';
  exampleDate: Date = new Date();
  exampleDateFormatted: string;
  iosModule: string;
  androidModule: string;
  webAppModule: string;
  getTechnicalModuleValue: string;
  getRandomStringValue: string;
  b64toBlobValue: any;
  private _config: any;

  constructor(
    private readonly _appService: AppService,
  ) { }

  ngOnInit() {
    // Recuperar la configuración de la App
    this._config = this._appService.getConfig();

    this.iosModule = this._config['mova']['moduloTecnicoIos'];
    this.androidModule = this._config['mova']['moduloTecnicoAndroid'];
    this.webAppModule = this._config['mova']['moduloTecnicoWebapp'];
  }

  indexOfWithAttrExample() {
    this.index = this
        ._appService.indexOfWithAttr(this.arrayExample, 'nombre', 'Clara');
  }

  titleCaseExample() {
    this.exampleText = this._appService.titleCase(this.exampleText);
  }

  getFormattedDateExample(format: string) {
    this.exampleDateFormatted = this
        ._appService.getFormattedDate(format, this.exampleDate);
  }

  getTechnicalModuleExample() {
    this.getTechnicalModuleValue = this._appService.getTechnicalModule();
  }

  getRandomStringExample() {
    this.getRandomStringValue = this
        ._appService.getRandomString(30, 'abcdefghijklmnopqrstuvwxyz', true);
  }

  b64toBlobExample() {
    this.b64toBlobValue = this
        ._appService
        .b64toBlob('iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
            'image/png');
  }

  showLoadingExample() {
    this._appService.showLoading(true, 5);
    const data: any = {
      text: 'En 5 segundos se dejara de mostrar el loading',
      type: 'info',
    };
    this._appService.showSnackBar(data);
  }

  showLoadingExampleWithoutTimeout() {
    this._appService.showLoading(true);
    const data: any = {
      text: 'En 20 segundos se dejara de mostrar el loading',
      type: 'info',
    };
    this._appService.showSnackBar(data);
  }

  showLoadingExampleWithLargeTimeout() {
    this._appService.showLoading(true, 30);
    const data: any = {
      text: 'En 30 segundos se dejara de mostrar el loading',
      type: 'info',
    };
    this._appService.showSnackBar(data);
  }

  showLoadingExampleWithDefaultText() {
    this._appService.showLoading(true, 10);
    const data: any = {
      text: 'Loading con texto por defecto',
      type: 'info',
    };
    this._appService.showSnackBar(data);
  }

  showLoadingExampleWithText() {
    this._appService.showLoading(true, 10, 'Recuperando los datos. Espere');
    const data: any = {
      text: 'Loading con texto personalizado',
      type: 'info',
    };
    this._appService.showSnackBar(data);
  }

  windowOpenExample() {
    this._appService.windowOpen('https://www.google.es');
  }
}

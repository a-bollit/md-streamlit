import {Component, OnInit} from '@angular/core';
import {DeviceService, AppService} from '@mova/components/core';

// Variable que ofrece la libreria JS de plugins. Hay que definirla porque si
// no al compilar falla
declare const CPLUGIN: any;

@Component({
  selector: 'app-doc-plugin-safari-view-controller',
  templateUrl: './doc-plugin-safari-view-controller.html',
  styleUrls: ['./doc-plugin-safari-view-controller.scss'],
})
export class DocPluginSafariViewController implements OnInit {
  // Uso del componente
  codeUseExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="pluginExample()">
    Lanzar ejemplo
  </mv-button>
  `;

  codeUseExampleTS = `
  import { Component, OnInit } from '@angular/core';

  // Variable que ofrece la libreria JS de plugins. Hay que definirla porque
  // si no al compilar falla
  declare const CPLUGIN: any;

  @Component({
    selector: 'app-doc-plugin-safari-view-controller',
    templateUrl: './doc-plugin-safari-view-controller.html',
    styleUrls: ['./doc-plugin-safari-view-controller.scss']
  })
  export class DocPluginSafariViewController implements OnInit {

  ...

  constructor(
  ) {}

  pluginExample(){

    // Función que comprueba la url en la que se encuentra
    let callbackCheckUrl = function(event: any) {}

    //Muestra los errores que pueden producirse por consola
    let callbackError = function(event: any) {};

    // Lógica que se ejecuta cuando se finaliza la navegación.
    let callbackExit = function(event: any) {}

    var config: any = {};
    config.openedCallback = callbackCheckUrl;
    config.loadedCallback = callbackCheckUrl;
    config.closedCallback = callbackExit;
    config.errorCallback = callbackError;

    let url = 'https://www.google.es'
    
    if(this._deviceService.isMobileApp()) {
      CPLUGIN.safariViewController.open(url, config);
    }else{
      this._appService.windowOpen(url);
    }
  }

  `;

  constructor(
    private readonly _deviceService: DeviceService,
    private readonly _appService: AppService,
  ) { }

  ngOnInit() {

  }

  pluginExample() {
    // Función que comprueba la url en la que se encuentra
    const callbackCheckUrl = function(event: any) {};

    // Muestra los errores que pueden producirse por consola
    const callbackError = function(event: any) {};

    // Lógica que se ejecuta cuando se finaliza la navegación.
    const callbackExit = function(event: any) {};

    const config: any = {};
    config.openedCallback = callbackCheckUrl;
    config.loadedCallback = callbackCheckUrl;
    config.closedCallback = callbackExit;
    config.errorCallback = callbackError;

    const url = 'https://www.google.es';

    if (this._deviceService.isMobileApp()) {
      CPLUGIN.safariViewController.open(url, config);
    } else {
      this._appService.windowOpen(url);
    }
  }
}

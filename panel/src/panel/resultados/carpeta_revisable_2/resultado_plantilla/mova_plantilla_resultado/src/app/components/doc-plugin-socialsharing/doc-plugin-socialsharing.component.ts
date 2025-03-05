import {Component, OnInit} from '@angular/core';

// Para que no falle al compilar
declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window { plugins: any; }
}
declare const CPLUGIN: any;

@Component({
  selector: 'app-doc-plugin-socialsharing',
  templateUrl: './doc-plugin-socialsharing.html',
  styleUrls: ['./doc-plugin-socialsharing.scss'],
})
export class DocPluginSocialsharing implements OnInit {
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

  // Para que no falle al compilar
  declare global {
      interface Window { plugins: any; }
  }

  @Component({
    selector: 'app-doc-plugin-socialsharing',
    templateUrl: './doc-plugin-socialsharing.html',
    styleUrls: ['./doc-plugin-socialsharing.scss']
  })
  export class DocPluginSocialsharing implements OnInit {

  ...

  constructor(
  ) {}

  pluginExample(){
    function successCallback(result: any) {
      console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
      // On Android result.app since plugin version 5.4.0 this is no longer empty.
      // On iOS it's empty when sharing is cancelled (result.completed=false)
      console.log("Shared to app: " + result.app); 
    }

    function errorCallback(error: any) {
      console.log("Sharing failed with message: " + error);
    }
    var options: any = {
      message: 'Mensaje a compartir', // not supported on some apps (Facebook, Instagram)
      subject: 'Asunto', // fi. for email
      files: ['', ''], // an array of filenames either locally or remotely
      chooserTitle: 'Elige una app', // Android only, you can override the default share sheet title
      iPadCoordinates: '0,0,0,0', //IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
      successCallback: successCallback,
      errorCallback: errorCallback,
    };

    CPLUGIN.socialSharing.share(options);

  }

  `;

  constructor(
  ) { }

  ngOnInit() {

  }

  pluginExample() {
    function successCallback(result: any) {
      // On Android apps mostly return false even while it's true
      console.log(`Share completed? ${ result.completed}`);
      // On Android result.app since plugin version 5.4.0 this is no longer
      // empty. On iOS it's empty when sharing is cancelled
      // (result.completed=false)
      console.log(`Shared to app: ${ result.app}`);
    }

    function errorCallback(error: any) {
      console.log(`Sharing failed with message: ${ error}`);
    }
    const options: any = {
      // not supported on some apps (Facebook, Instagram)
      message: 'Mensaje a compartir',
      // fi. for email
      subject: 'Asunto',
      // an array of filenames either locally or remotely
      files: ['', ''],
      // Android only, you can override the default share sheet title
      chooserTitle: 'Elige una app',
      // IOS only iPadCoordinates for where the popover should be point.
      // Format with x,y,width,height
      iPadCoordinates: '0,0,0,0',
      successCallback,
      errorCallback,
    };

    CPLUGIN.socialSharing.share(options);
  }
}

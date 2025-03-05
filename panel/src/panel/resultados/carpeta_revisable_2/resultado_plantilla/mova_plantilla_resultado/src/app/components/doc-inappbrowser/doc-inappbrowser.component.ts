import {Component, ElementRef, ViewChild} from '@angular/core';
import {AppService} from '@mova/components/core';

declare const CPLUGIN: any;

@Component({
  selector: 'app-doc-inappbrowser',
  templateUrl: './doc-inappbrowser.html',
  styleUrls: ['./doc-inappbrowser.scss'],
})
export class DocInAppBrowser {
  docURL = 'https://www.npmjs.com/package/cordova-plugin-inappbrowser';
  platform;
  @ViewChild('downloadBar', null) downloadBar: ElementRef;

  metodoDeUsoExampleHTML = `
  <mv-button
      adapt=true
      appearance="raised"
      color="primary"
      (clickEvent)="AbrirNavegador()">
      Abrir InAppBrowser
  </mv-button>
  `;

  metodoDeUsoExampleTS = `
  ngOnInit() {
      // Recupero la plataforma para las configuraciones especificas,
      this.platform = CPLUGIN.device.platform;
  }

  AbrirNavegador(){
      let url = "https://www.comunidad.madrid/";

      // Configuración básica para web
      let config = {
          target: "_blank",
          params: ""
      };
      
      switch (this.platform) {
          case "Android":
              config.params = this.configurarAndroid();
              break;
          case "iOS":
              config.params = this.configurarIOS();
              break;
          default:
              break;
      }

      // Llamamos a inAppBrowser
      let ref = CPLUGIN.inAppBrowser.open(url, config);
  }
  /**
   * Configurar InAppBrowser para Android
   * @returns params 
   */
  configurarAndroid() {
      let params = "";
      // La descripción de cada configuración está disponible en:
      // https://www.npmjs.com/package/cordova-plugin-inappbrowser

      params += "closebuttoncaption=Volver a MOVA,";
      params += "closebuttoncolor=#000000,";
      params += "footer=yes,";
      params += "footercolor=#850d0f,";
      params += "hardwareback=yes,";
      params += "hidenavigationbuttons=no,";
      params += "hideurlbar=no,";
      params += "navigationbuttoncolor=#000000,";
      params += "toolbarcolor=#850d0f,";
      params += "lefttoright=no,";
      params += "zoom=yes,";
      params += "mediaPlaybackRequiresUserAction=no,";
      params += "shouldPauseOnSuspend=yes,";
      params += "useWideViewPort=yes,";
      params += "fullscreen=no,";
      return params;
  }
  /**
   * Configurar InAppBrowser para iOS
   * @returns params 
   */
  configurarIOS(){
      let params = "";
      params += "usewkwebview=yes,";
      // La descripción de cada configuración está disponible en:
      // https://www.npmjs.com/package/cordova-plugin-inappbrowser
      params += "hidden=false,";
      params += "beforeload=GET,";
      params += "clearcache=no,";
      params += "clearsessioncache=no,";
      params += "cleardata=no,";
      params += "closebuttoncolor=#000000,";
      params += "closebuttoncaption=Volver a MOVA,";
      params += "disallowoverscroll=no,";
      params += "hidenavigationbuttons=no,";
      params += "navigationbuttoncolor=#000000,";
      params += "toolbar=yes,";
      params += "toolbarcolor=#ffffff,";
      params += "toolbartranslucent=yes,";
      params += "lefttoright=no,";
      params += "enableViewportScale=no,";
      params += "mediaPlaybackRequiresUserAction=no,";
      params += "allowInlineMediaPlayback=no,";
      params += "presentationstyle=fullscreen,";
      params += "transitionstyle=coververtical,";
      params += "toolbarposition=top,";
      params += "hidespinner=no,";
      return params;
  }
  `;

  fixCodeSafariViewController = `
  <platform name="android">
  ...
  <config-file target="AndroidManifest.xml" parent="/manifest">
      <queries>
          <intent>
              <action android:name=
                  "android.support.customtabs.action.CustomTabsService" />
          </intent>
      </queries>
  </config-file>
...
</platform>
  `;
  constructor(
      private readonly _appService: AppService,
  ) {

  }

  ngOnInit() {
    // Recupero la plataforma para las configuraciones especificas,
    this.platform = CPLUGIN.device.platform;
  }

  AbrirNavegador() {
    const url = 'https://www.comunidad.madrid/';

    // Configuración básica para web
    const config = {
      target: '_blank',
      params: '',
    };

    switch (this.platform) {
      case 'Android':
        config.params = this.configurarAndroid();
        break;
      case 'iOS':
        config.params = this.configurarIOS();
        break;
      default:
        break;
    }

    // Llamamos a inAppBrowser
    CPLUGIN.inAppBrowser.open(url, config);
  }
  /**
   * Configurar InAppBrowser para Android
   * @returns params
   */
  configurarAndroid() {
    let params = '';
    // La descripción de cada configuración está disponible en:
    // https://www.npmjs.com/package/cordova-plugin-inappbrowser

    params += 'closebuttoncaption=Volver a MOVA,';
    params += 'closebuttoncolor=#000000,';
    params += 'footer=yes,';
    params += 'footercolor=#850d0f,';
    params += 'hardwareback=yes,';
    params += 'hidenavigationbuttons=no,';
    params += 'hideurlbar=no,';
    params += 'navigationbuttoncolor=#000000,';
    params += 'toolbarcolor=#850d0f,';
    params += 'lefttoright=no,';
    params += 'zoom=yes,';
    params += 'mediaPlaybackRequiresUserAction=no,';
    params += 'shouldPauseOnSuspend=yes,';
    params += 'useWideViewPort=yes,';
    params += 'fullscreen=no,';
    return params;
  }
  /**
   * Configurar InAppBrowser para iOS
   * @returns params
   */
  configurarIOS() {
    let params = '';
    params += 'usewkwebview=yes,';
    // La descripción de cada configuración está disponible en:
    // https://www.npmjs.com/package/cordova-plugin-inappbrowser
    params += 'hidden=false,';
    params += 'beforeload=GET,';
    params += 'clearcache=no,';
    params += 'clearsessioncache=no,';
    params += 'cleardata=no,';
    params += 'closebuttoncolor=#000000,';
    params += 'closebuttoncaption=Volver a MOVA,';
    params += 'disallowoverscroll=no,';
    params += 'hidenavigationbuttons=no,';
    params += 'navigationbuttoncolor=#000000,';
    params += 'toolbar=yes,';
    params += 'toolbarcolor=#ffffff,';
    params += 'toolbartranslucent=yes,';
    params += 'lefttoright=no,';
    params += 'enableViewportScale=no,';
    params += 'mediaPlaybackRequiresUserAction=no,';
    params += 'allowInlineMediaPlayback=no,';
    params += 'presentationstyle=fullscreen,';
    params += 'transitionstyle=coververtical,';
    params += 'toolbarposition=top,';
    params += 'hidespinner=no,';
    return params;
  }
}

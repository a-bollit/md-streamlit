import {Component, OnInit} from '@angular/core';
import {DeviceService} from '@mova/components/core';

@Component({
  selector: 'app-doc-device-service',
  templateUrl: './doc-device-service.html',
  styleUrls: ['./doc-device-service.scss'],
})
export class DocDeviceService implements OnInit {
  // -------------------------------------------------------------
  isMobileAppExampleHTML = `
  <p><strong>Ejemplo:</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="loadMobileApp()">
    loadMobileApp
  </mv-button>
  <pre class="jsonExample"> {{isMobileAppResponse}} </pre>
  `;
  isMobileAppExampleTS = `
  
  ...
  
  // Almaceno el dato devuelto de deviceService.isMobileApp
  isMobileAppResponse:any;
  constructor(
    private deviceService: DeviceService
  ) { }

  ...

  /**
   * Carga de datos de device-service de MobileApp
   */
  loadMobileApp() {
    console.log("Cargando loadMobileApp");
    this.isMobileAppResponse = this.deviceService.isMobileApp();
  }
  `;
  // -------------------------------------------------------------
  getMobileInfoExampleHTML = `
  <p><strong>Ejemplo:</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="loadGetMobileInfo()">
    loadGetMobileInfo
  </mv-button>
  <pre class="jsonExample"> {{mobileInfoResponse | json}}</pre>
  `;
  getMobileInfoExampleTS = `
  
  ...
  // Almaceno el dato devuelto de deviceService.getMobileInfo
  mobileInfoResponse:any;
  
  constructor(
    private deviceService: DeviceService
  ) { }

  ...

  /**
   * Carga de datos de device-service de GetMobileInfo
   */
  loadGetMobileInfo() {
    console.log("Cargando loadGetMobileInfo");
    this.mobileInfoResponse = this.deviceService.getMobileInfo();
  }
  `;
  // -------------------------------------------------------------
  getWebInfoExampleHTML = `
  <p><strong>Ejemplo:</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="loadGetWebInfo()">
    loadGetWebInfo
  </mv-button>
 <pre class="jsonExample"> {{webInfoResponse | json}}</pre>
  `;
  getWebInfoExampleTS = `
  
  ...

  // Almaceno el dato devuelto de deviceService.getWebInfo
  webInfoResponse:any;
  constructor(
    private deviceService: DeviceService
  ) { }

  ...
  /**
   * Carga de datos de device-service de GetWebInfo
   */
  loadGetWebInfo() {
    console.log("Cargando loadGetWebInfo");
    this.webInfoResponse = this.deviceService.getWebInfo();
  }
  `;

  isBrowserExampleHTML = `
  <p><strong>Ejemplo:</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="loadIsBrowser()">
    loadIsBrowser
  </mv-button>
  <pre class="jsonExample"> {{isBrowserResponse}} </pre>
  `;
  isBrowserExampleTS = `
  
  ...

  // Almaceno el dato devuelto de deviceService.isBrowser
  isBrowserResponse:any;
  constructor(
    private deviceService: DeviceService
  ) { }

  ...
  /**
   * Carga de datos de device-service de IsBrowser
   */
  loadIsBrowser() {
    console.log("Cargando loadIsBrowser");
    this.isBrowserResponse = this.deviceService.isBrowser();
  }
  
  `;

  isAndroidExampleHTML = `
  <p><strong>Ejemplo:</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="loadIsAndroid()">
    loadIsAndroid
  </mv-button>
  <pre class="jsonExample"> {{isAndroidResponse}} </pre>
  `;
  isAndroidExampleTS = `
  ...

  // Almaceno el dato devuelto de deviceService.isAndroid
  isAndroidResponse:any;
  constructor(
    private deviceService: DeviceService
  ) { }

  ...
  
  /**
   * Carga de datos de device-service de IsAndroid
   */
  loadIsAndroid(){
    console.log("Cargando loadIsAndroid");
    this.isAndroidResponse = this.deviceService.isAndroid();
  }
  `;

  isIOSExampleHTML = `
  <p><strong>Ejemplo:</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="loadIsIOS()">
    loadIsIOS
  </mv-button>
  <pre class="jsonExample"> {{isIOSResponse}} </pre>
  `;
  isIOSExampleTS = `
  ...

  // Almaceno el dato devuelto de deviceService.isIOS
  isIOSResponse:any;
  constructor(
    private deviceService: DeviceService
  ) { }

  ...
  /**
   * Carga de datos de device-service de IsIOS
   */
  loadIsIOS() {
    console.log("Cargando loadIsIOS");
    this.isIOSResponse = this.deviceService.isIOS();
  }

  `;


  hasNotchAndroidExampleHTML = `
    <p><strong>Ejemplo:</strong></p>
    <mv-button
      color="primary"
      appearance="raised"
      (clickEvent)="hasNotchAndroid()">
      hasNotchAndroid
    </mv-button>
    <pre class="jsonExample"> {{hasNotchAndroidResponse}} </pre>
  `;

  hasNotchAndroidExampleTS = `
  ...

  // Almaceno el dato devuelto de deviceService.hasNotchAndroid
  hasNotchAndroidResponse:any;
  constructor(
    private deviceService: DeviceService
  ) { }

  ...
  /**
   * Carga de datos de device-service de hasNotchAndroid
   */
  async hasNotchAndroid() {
    console.log("Cargando hasNotchAndroid");
    this.hasNotchAndroidResponse = await this.deviceService.hasNotchAndroid();
  }

  `;


  getNotchSizesExampleHTML = `
    <p><strong>Ejemplo:</strong></p>
    <mv-button
      color="primary"
      appearance="raised"
      (clickEvent)="getNotchSizesAndroid()">
      getNotchSizesAndroid
    </mv-button>
    <pre class="jsonExample"> {{getNotchSizesResponse}} </pre>
  `;

  getNotchSizesExampleTS = `
  ...

  // Almaceno el dato devuelto de deviceService.getNotchSizesAndroid
  getNotchSizesResponse:any;
  constructor(
    private deviceService: DeviceService
  ) { }

  ...
  /**
   * Carga de datos de device-service de getNotchSizesAndroid
   */
  async getNotchSizesAndroid() {
    console.log("Cargando getNotchSizesAndroid");
    this.getNotchSizesResponse = await this.deviceService.getNotchSizesAndroid();
  }

  `;

  // Almaceno el dato devuelto de deviceService.isMobileApp
  isMobileAppResponse:any;
  // Almaceno el dato devuelto de deviceService.isBrowser
  isBrowserResponse:any;
  // Almaceno el dato devuelto de deviceService.getMobileInfo
  mobileInfoResponse:any;
  // Almaceno el dato devuelto de deviceService.getWebInfo
  webInfoResponse:any;
  // Almaceno el dato devuelto de deviceService.isAndroid
  isAndroidResponse:any;
  // Almaceno el dato devuelto de deviceService.isIOS
  isIOSResponse:any;
  hasNotchAndroidResponse = '';
  getNotchSizesResponse: {};

  constructor(
    private readonly deviceService: DeviceService,
  ) { }

  /**
   * Cargo todos los datos de device-service
   */
  ngOnInit() {

  }
  /**
   * Carga de datos de device-service de MobileApp
   */
  loadMobileApp() {
    console.log('Cargando loadMobileApp');
    this.isMobileAppResponse = this.deviceService.isMobileApp();
  }
  /**
   * Carga de datos de device-service de IsBrowser
   */
  loadIsBrowser() {
    console.log('Cargando loadIsBrowser');
    this.isBrowserResponse = this.deviceService.isBrowser();
  }
  /**
   * Carga de datos de device-service de GetMobileInfo
   */
  loadGetMobileInfo() {
    console.log('Cargando loadGetMobileInfo');
    this.mobileInfoResponse = this.deviceService.getMobileInfo();
  }
  /**
   * Carga de datos de device-service de GetWebInfo
   */
  loadGetWebInfo() {
    console.log('Cargando loadGetWebInfo');
    this.webInfoResponse = this.deviceService.getWebInfo();
  }
  /**
   * Carga de datos de device-service de IsAndroid
   */
  loadIsAndroid() {
    console.log('Cargando loadIsAndroid');
    this.isAndroidResponse = this.deviceService.isAndroid();
  }
  /**
   * Carga de datos de device-service de IsIOS
   */
  loadIsIOS() {
    console.log('Cargando loadIsIOS');
    this.isIOSResponse = this.deviceService.isIOS();
  }

  /**
   * Carga de datos de device-service de hasNotchAndroid
   */
  async hasNotchAndroid() {
    const getNotch = await this.deviceService.hasNotchAndroid();
    this.hasNotchAndroidResponse = getNotch ? 'true' : 'false';
  }

  /**
   * Carga de datos de device-service de getNotchSizes
   */
  async getNotchSizesAndroid() {
    const notchSizes = await this.deviceService.getNotchSizesAndroid();
    this.getNotchSizesResponse = JSON.stringify(notchSizes);
  }
}

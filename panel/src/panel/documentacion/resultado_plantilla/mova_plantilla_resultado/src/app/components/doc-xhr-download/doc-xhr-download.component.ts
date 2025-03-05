import {
  HttpClient,
  HttpErrorResponse, HttpEvent,
  HttpEventType,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import {Component,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import {AppService, DeviceService} from '@mova/components/core';
import {MvFileUploader} from '@mova/components/file-uploader';
import {Subscription, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators/catchError';
import {
  DocFileUploaderService,
} from '@app/services/doc-file-uploader/doc-file-uploader.service';

declare const CPLUGIN: any;

@Component({
  selector: 'app-doc-xhr-download',
  templateUrl: './doc-xhr-download.html',
  styleUrls: ['./doc-xhr-download.scss'],
})
export class DocXHRDownload implements OnInit {

  @ViewChild('mvFileUploaderFirstExample', {static: false}) mvFileUploaderFirstExample: MvFileUploader;
  @ViewChild('mvFileUploaderSecondExample', {static: false}) mvFileUploaderSecondExample: MvFileUploader;

  // Extensiones permitidas del file uploader
  uploaderAllowedExtensions: string[] = ['.pdf'];
  // Tamaño máximo permitido por el uploader
  maxSize: number = 5 * 1024 * 1024;
  // Respuesta del primer uploader
  getLastSuccededUploadResponseJSONFirstExample: any;
  // Respuesta del segundo uploader
  getLastSuccededUploadResponseJSONSecondExample: any;
  // Texto del primer boton
  buttonTextFirstExample: string = 'Descarga httpRequest';
  // Texto del segundo boton
  buttonTextSecondExample: string = 'Descarga Xml';
  // Texto del primer boton original
  buttonOriginalTextFirstExample: string = 'Descarga httpRequest';
  // Texto del segundo boton original
  buttonOriginalTextSecondExample: string = 'Descarga Xml';
  // Archivo descargado
  downloadedFile: any;
  // Url de descarga del primer ejemplo
  downloadUrlFirstExample: string;
  // Url de descarga del segundo ejemplo
  downloadUrlSecondExample: string;
  // Url de pdf para el visor
  pdfSrcWithHeadersExample: string;
  // Primera barra de progreso
  progressValueFirstExample: number = 0;
  // Segunda barra de progreso
  progressValueSecondExample: number = 0;
  // Plataforma
  platform = 'none';
  // Mostrar el visor o no
  showUploader = false;
  // Configuración de entorno
  private _configEnvironment: any;

  metodoDeUsoHttpRequestHTML = `
  <p><strong>1. Subir un archivo pdf de ejemplo para descarga y visualización</strong></p>
  <mv-file-uploader
    #mvFileUploaderFirstExample
    [maxSizeBytes]="maxSize"
    chunked=true
    [allowedExtensions]="uploaderAllowedExtensions"
    (onUploadSuccess)="onSuccessCallbackFirstExample()">
  </mv-file-uploader>

  <p *ngIf="progressValueFirstExample != 0">Estado de la descarga:</p>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" *ngIf="progressValueFirstExample != 0">
      <mat-progress-bar mode="determinate" color="warn" [value]="progressValueFirstExample"></mat-progress-bar>
      <div id="progress-bar-text">
        {{ (progressValueFirstExample | number: '1.0-0') + '%' }}
      </div>
    </div>

    <div
      class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
      <p *ngIf="downloadUrlFirstExample">Url de descarga: {{ downloadUrlFirstExample }}</p>
    </div>
  </div>

  <p><strong>2. Visualización del archivo descargado</strong></p>

  <p>Abre el fichero pdf en el visor a partir de una llamada REST</p>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <mv-button
        [disabled]="!getLastSuccededUploadResponseJSONFirstExample"
        adapt=true
        chunked=true
        appearance="raised"
        color="primary"
        (clickEvent)="openFilePdfViewerHttpRequestButton()">
        Abrir archivo en visor pdf (app y web)
      </mv-button>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" *ngIf="showUploader">
      <mv-pdf-viewer
        [url]="pdfSrcWithHeadersExample">
      </mv-pdf-viewer>
    </div>

    <p>Obtiene el fichero con httpRequest y lo descarga</p>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <mv-button
        [disabled]="!getLastSuccededUploadResponseJSONFirstExample || platform != ''"
        adapt=true
        chunked=true
        appearance="raised"
        color="primary"
        (clickEvent)="downloadFileBrowserHttpRequestExampleClick()">
        Descargar el archivo (solo web)
      </mv-button>
    </div>

    <p>Obtiene el fichero con httpRequest y lo abre en el navegador</p>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <mv-button
        [disabled]="!getLastSuccededUploadResponseJSONFirstExample || platform != ''"
        adapt=true
        chunked=true
        appearance="raised"
        color="primary"
        (clickEvent)="openFileBrowserHttpRequestExampleClick()">
        Abrir archivo en el navegador (solo web)
      </mv-button>
    </div>

    <p>Obtiene el fichero con httpRequest y lo abre con el plugin</p>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <mv-button
        [disabled]="!getLastSuccededUploadResponseJSONFirstExample || platform == ''"
        adapt=true
        chunked=true
        appearance="raised"
        color="primary"
        (clickEvent)="openFilePluginHttpRequestExampleClick()">
        Abrir archivo con plugin file-opener2 (solo app)
      </mv-button>
    </div>
  </div>
  `;

  metodoDeUsoHttpRequestTS = `
  import {
    HttpClient,
    HttpErrorResponse, HttpEvent,
    HttpEventType,
    HttpHeaders,
    HttpRequest,
  } from '@angular/common/http';
  import {Component,
    OnInit,
    ElementRef,
    ViewChild,
    ChangeDetectorRef,
  } from '@angular/core';
  import {AppService, DeviceService} from '@mova/components/core';
  import {MvFileUploader} from '@mova/components/file-uploader';
  import {Subscription, Observable, throwError} from 'rxjs';
  import {catchError} from 'rxjs/internal/operators/catchError';
  import {
    DocFileUploaderService,
  } from '@app/services/doc-file-uploader/doc-file-uploader.service';

  declare const CPLUGIN: any;

  ...

  @ViewChild('mvFileUploaderFirstExample', {static: false}) mvFileUploaderFirstExample: MvFileUploader;
  @ViewChild('mvFileUploaderSecondExample', {static: false}) mvFileUploaderSecondExample: MvFileUploader;

  // Extensiones permitidas del file uploader
  uploaderAllowedExtensions: string[] = ['.pdf'];
  // Tamaño máximo permitido por el uploader
  maxSize: number = 300 * 1024 * 1024;
  // Respuesta del primer uploader
  getLastSuccededUploadResponseJSONFirstExample: any;
  // Texto del primer boton
  buttonTextFirstExample: string = 'Descarga httpRequest';
  // Texto del primer boton original
  buttonOriginalTextFirstExample: string = 'Descarga httpRequest';
  // Archivo descargado
  downloadedFile: any;
  // Url de descarga del primer ejemplo
  downloadUrlFirstExample: string;
  // Url de pdf para el visor
  pdfSrcWithHeadersExample: string;
  // Primera barra de progreso
  progressValueFirstExample: number = 0;
  // Plataforma
  platform = 'none';
  // Mostrar el visor o no
  showUploader = false;
  // Configuración de entorno
  private _configEnvironment: any;

  constructor(
    private readonly _appService: AppService,
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly _http: HttpClient,
    private readonly _deviceService: DeviceService,
    private readonly _docFileUploaderService: DocFileUploaderService,
  ) {
  }

  ngOnInit() {
    this.platform = this._deviceService.getMobileInfo().platform;
    this._configEnvironment = this._appService.getConfigEnvironment();
  }

  /**
   * Evento onSuccess del uploader 1
   */
  onSuccessCallbackFirstExample(){
    this.getLastSuccededUploadResponseJSONFirstExample = this.mvFileUploaderFirstExample.getLastSuccededUploadResponse();
  }

  /**
   * Evento click en el boton de visualizar pdf con descarga httpRequest
   */
  openFilePdfViewerHttpRequestButton(){
    // Cogemos los datos del archivo subido de ejemplo HttpRequest
    const fileId = this.getLastSuccededUploadResponseJSONFirstExample.data.file_id;
    const pdfUrl = this._configEnvironment['mova']['fileUploaderComponent']['uriUpload'] + '/' + fileId;
    this.downloadUrlFirstExample = pdfUrl;
    this.showPdfViewer(pdfUrl);
  }

  /**
   * Abre el pdf en el visor
   * @param url del archivo subido
   */
  showPdfViewer(pdfUrl: string){
    this.showUploader = true;

    // Hacemos llamada para obtener un token de autorizacion
    this._docFileUploaderService.getToken$().subscribe(
      (response: any) => {
        const obj: any = {
          httpHeaders: {Authorization: 'Bearer ' + response.access_token},
        };
        // Ponemos la url de visualizacion del pdf + token de autorizacion obtenido
        this.pdfSrcWithHeadersExample = pdfUrl + '&parametros_llamada=' + JSON.stringify(obj);
      },
    );
  }

  /**
   * Ejemplo de descarga de HttpRequest
   */
  downloadHttpRequest() {
    return new Observable((observer: any) => {
      this.buttonTextFirstExample = 'Descargando...';
      this.showUploader = false;
      this.downloadedFile = null;
      const fileId = this.getLastSuccededUploadResponseJSONFirstExample.data.file_id;
      const fileSize = this.getLastSuccededUploadResponseJSONFirstExample.data.size_in_bytes;
      this.downloadUrlFirstExample = this._configEnvironment['mova']['fileUploaderComponent']['uriUpload'] + '/' + fileId;

      // Primero obtenemos un token para poder bajar el arhivo
      this._docFileUploaderService.getToken$().subscribe(
        (response: any) => {
          const accessToken = response.access_token;
          // Tipo de descarga
          const responseType = 'blob';
          // Configuración de Headers
          const headers = new HttpHeaders()
              .set('Authorization', 'Bearer ' + accessToken);

          // Configuración de la descarga
          const req = new HttpRequest('GET', this.downloadUrlFirstExample, {
            headers,
            showLoading: true,
            reportProgress: true,
            dataType: 'jsonp',
            responseType,
          });
          const platform = this.platform;
          this.progressValueFirstExample = 0;

          // Suscripción de la descarga
          this._http.request(req)
              .pipe(catchError(this.handleError))
              .subscribe((event: HttpEvent<any>) => {
                switch (event.type) {
                  case HttpEventType.Sent:
                    console.log('Request enviado');
                    break;
                  case HttpEventType.ResponseHeader:
                    console.log('Response header recibido');
                    break;
                  case HttpEventType.DownloadProgress:
                    const kbLoaded = Math.round(event.loaded / 1024);
                    console.log('Descargando ' + kbLoaded + 'Kb');
                    this.progressValueFirstExample = (event.loaded / fileSize * 100 | 0);
                    this._changeDetectorRef.detectChanges();
                    break;
                  case HttpEventType.Response:
                    console.log('Descargado', event.body);
                    this.buttonTextFirstExample = this.buttonOriginalTextFirstExample;
                    observer.next({
                      'content': event.body,
                      'name': fileId,
                      'mimetype': event.headers.get('content-type'),
                      'platform': platform
                    });
                    observer.complete();
                    break;
                }
              });
          },
          (error: any) => {
            console.error('Ha ocurrido un error obteniendo el token', error);
            observer.error(error);
          }
      );
    });
  }

  /**
   * Evento click en el boton de descargar el pdf con el navegador
   */
  downloadFileBrowserHttpRequestExampleClick(){
    this.downloadHttpRequest().subscribe(
      response => {
        this.downloadFileBrowser(response);
      }
    );
  }

  /**
   * Descarga el pdf mediante el navegador web
   */
  downloadFileBrowser(file: any){
    // Para el resto creamos un elemento a y hacemos click para iniciar
    // la descarga
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(file.content);
    link.download = file.name;
    document.body.appendChild(link);
    link.dispatchEvent(
      new MouseEvent(
        'click',
        {bubbles: true, cancelable: true, view: window},
      ),
    );
    setTimeout(() => {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(link.href);
    }, 100);

    link.remove();
  }

  /**
   * Evento click en el boton de visualizar el pdf en el navegador
   */
  openFileBrowserHttpRequestExampleClick(){
    this.downloadHttpRequest().subscribe(
      response => {
        this.openFileBrowser(response);
      }
    );
  }

  /**
   * Abre el pdf en el navegador web
   */
  openFileBrowser(file: any){
    // Usamos FileReader para pasar de un blob a un arrayBuffer, y con ello hacer windowOpen
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file.content);
    fileReader.onloadend = function(event) {
      let arrayBuffer = fileReader.result;
      var file = new Blob([arrayBuffer], {type: 'application/pdf'});
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    };
  }

  /**
   * Evento click en el boton de abrir el pdf en movil con plugin
   */
  openFilePluginHttpRequestExampleClick(){
    this.downloadHttpRequest().subscribe(
      response => {
        this.openFilePlugin(response);
      }
    );
  }

  /**
   * Abre el pdf con el plugin file opener2
   */
  openFilePlugin(file: any){
    const blob = file.content;
    // Configuración para guardarlo el teléfonos
    const mobileConf = {
      fileName: file.name,
      directoryPath: '',
      externalRootDirectory: false,
      documentsDirectory: false,
    };
    console.log('mobileConf', mobileConf);

    // Configuración especifica para cada dispositivo
    if (file.platform === 'Android') {
      mobileConf.directoryPath = 'Download';
      mobileConf.externalRootDirectory = true;
    }
    if (file.platform === 'iOS') {
      mobileConf.documentsDirectory = true;
    }

    // Configuración para guardar el fichero en el dispositivo
    let self = this;

    const config = {
      fileName: mobileConf.fileName,
      directoryPath: mobileConf.directoryPath,
      externalRootDirectory: mobileConf.externalRootDirectory,
      documentsDirectory: mobileConf.documentsDirectory,
      successCallback: (response:any) => {
        console.log('write File success', response);
        // Abrir el fichero con la aplicación del sistema
        CPLUGIN.file.openFile({
          filePath: response.nativeURL,
          showOpenDialog: true,
          fileMIMEType: 'application/pdf',
          errorCallback: (error:any)=> {
            console.error('open file error', error);
          },
          successCallback: (openResponse:any) => {
            console.log('open file success', openResponse);
          },
        });
      },
      errorCallback: (error:any) => {
        console.log('write File error');
        console.log(error);
      },
      oData: blob,
    };
    console.log(config);
    CPLUGIN.file.writeFile(config);
  }

  handleError(error: HttpErrorResponse) {
    this.buttonTextFirstExample = this.buttonOriginalTextFirstExample;
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = 'Error: ' + error.error.message;
    } else {
      // Server-side errors
      errorMessage = 'Error Code: ' + error.status + '\nMessage:' + error.message;
    }
    const snackConfig = {
      text: errorMessage,
      type: 'danger',
    };
    this._appService.showSnackBar(snackConfig);
    return throwError(errorMessage);
  }
  `;
  metodoDescargaIcs = `
  getEventCalendar() {
    this.dataService.postEventoCalendarioAsICS()
    .then(response => {
    response = new Blob([response], { type: 'text/calendar;charset=utf-8' });
    var href = window.URL.createObjectURL(response);
    if (this.isCordova()) {
      this.downloadWithCordova(response);
    } else {
      this.downloadInWeb(response);
    }
    })
  .catch(error => {
    const errorData = {
      title: 'Error',
      text: 'Se ha producido un error. Vuelva a intentarlo más tarde.',
      showLoginButton: false,
      titleWarn: true,
    };
    this.appService.openDialogError(errorData);
  });
}

private isCordova() {
return typeof cordova !== 'undefined';
}

downloadWithCordova(blob: any){
const mobileConf = {
fileName: 'calendario.ics',
directoryPath: '',
externalRootDirectory: false,
documentsDirectory: false,
};
console.log('mobileConf', mobileConf);

// Configuración especifica para cada dispositivo
if (CPLUGIN.device.platform === 'Android') {
mobileConf.directoryPath = 'Download';
mobileConf.externalRootDirectory = true;
}
if (CPLUGIN.device.platform === 'iOS') {
mobileConf.documentsDirectory = true;
}

// Configuración para guardar el fichero en el dispositivo
let self = this;

const config = {
fileName: mobileConf.fileName,
directoryPath: mobileConf.directoryPath,
externalRootDirectory: mobileConf.externalRootDirectory,
documentsDirectory: mobileConf.documentsDirectory,
successCallback: (response:any) => {
  console.log('write File success', response);
  // Abrir el fichero con la aplicación del sistema
   CPLUGIN.file.openFile({
    filePath: response.nativeURL,
    showOpenDialog: true,
    fileMIMEType: 'application/ics',
    errorCallback: (error:any)=> {
      console.error('open file error', error);
    },
    successCallback: (openResponse:any) => {
      console.log('open file success', openResponse);
    },
  }); 
},
errorCallback: (error:any) => {
  console.log('write File error');
  console.log(error);
},
oData: blob,
};
console.log(config);
CPLUGIN.file.writeFile(config);
}

private downloadInWeb(blob: Blob) {
const fileName = 'calendario.ics';
const blobUrl = window.URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = blobUrl;
link.download = fileName;
document.body.appendChild(link);
link.dispatchEvent(
  new MouseEvent(
    'click',
    {bubbles: true, cancelable: true, view: window},
  ),
);
setTimeout(() => {
  // For Firefox it is necessary to delay revoking the ObjectURL
  window.URL.revokeObjectURL(link.href);
}, 100);

link.remove();
}

  `
 botonDescarga=`
   Su implementación de html
  `
 notasHTML =`
 ---Notas---
  - En config xml añadir
    <edit-config file="app/src/main/AndroidManifest.xml" mode="merge" target="/manifest/application">               
        <application android:usesCleartextTraffic="true"  
        android:requestLegacyExternalStorage="true" />         
    </edit-config>
  - En packages.json
    Añadir el siguiente plugin:
      "cordova-plugin-file-opener2": "^3.0.5",
  - Añadir esta variable si aún no lo está en su fichero .ts
      declare const cordova: any;
 `
  metodoDeUsoXmlHTML = `
  <p><strong>1. Subir un archivo pdf de ejemplo para descarga y visualización</strong></p>
  <mv-file-uploader
    #mvFileUploaderSecondExample
    [maxSizeBytes]="maxSize"
    chunked=true
    [allowedExtensions]="uploaderAllowedExtensions"
    (onUploadSuccess)="onSuccessCallbackSecondExample()">
  </mv-file-uploader>

  <p *ngIf="progressValueSecondExample != 0">Estado de la descarga:</p>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" *ngIf="progressValueSecondExample != 0">
      <mat-progress-bar mode="determinate" color="warn" [value]="progressValueSecondExample"></mat-progress-bar>
      <div id="progress-bar-text">
        {{ (progressValueSecondExample | number: '1.0-0') + '%' }}
      </div>
    </div>

    <div
      class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
      <p *ngIf="downloadUrlSecondExample">Url de descarga: {{ downloadUrlSecondExample }}</p>
    </div>
  </div>

  <p><strong>2. Visualización del archivo descargado</strong></p>

  <p>Abre el fichero pdf en el visor a partir de una llamada REST</p>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <mv-button
        [disabled]="!getLastSuccededUploadResponseJSONSecondExample"
        adapt=true
        chunked=true
        appearance="raised"
        color="primary"
        (clickEvent)="openFilePdfViewerXmlButton()">
        Abrir archivo en visor pdf (app y web)
      </mv-button>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" *ngIf="showUploader">
      <mv-pdf-viewer
        [url]="pdfSrcWithHeadersExample">
      </mv-pdf-viewer>
    </div>

    <p>Obtiene el fichero con XMLHttpRequest y lo descarga</p>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <mv-button
        [disabled]="!getLastSuccededUploadResponseJSONSecondExample || platform != ''"
        adapt=true
        chunked=true
        appearance="raised"
        color="primary"
        (clickEvent)="downloadFileBrowserXmlExampleClick()">
        Descargar el archivo (solo web)
      </mv-button>
    </div>

    <p>Obtiene el fichero con XMLHttpRequest y lo abre en el navegador</p>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <mv-button
        [disabled]="!getLastSuccededUploadResponseJSONSecondExample || platform != ''"
        adapt=true
        chunked=true
        appearance="raised"
        color="primary"
        (clickEvent)="openFileBrowserXmlExampleClick()">
        Abrir archivo en el navegador (solo web)
      </mv-button>
    </div>

    <p>Obtiene el fichero con XMLHttpRequest y lo abre con el plugin</p>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <mv-button
        [disabled]="!getLastSuccededUploadResponseJSONSecondExample || platform == ''"
        adapt=true
        chunked=true
        appearance="raised"
        color="primary"
        (clickEvent)="openFilePluginXmlExampleClick()">
        Abrir archivo con plugin file-opener2 (solo app)
      </mv-button>
    </div>
  </div>
  `;

  metodoDeUsoXmlTS = `
  import {
    HttpClient,
    HttpErrorResponse, HttpEvent,
    HttpEventType,
    HttpHeaders,
    HttpRequest,
  } from '@angular/common/http';
  import {Component,
    OnInit,
    ElementRef,
    ViewChild,
    ChangeDetectorRef,
  } from '@angular/core';
  import {AppService, DeviceService} from '@mova/components/core';
  import {MvFileUploader} from '@mova/components/file-uploader';
  import {Subscription, Observable, throwError} from 'rxjs';
  import {catchError} from 'rxjs/internal/operators/catchError';
  import {
    DocFileUploaderService,
  } from '@app/services/doc-file-uploader/doc-file-uploader.service';

  declare const CPLUGIN: any;

  ...

  @ViewChild('mvFileUploaderFirstExample', {static: false}) mvFileUploaderFirstExample: MvFileUploader;
  @ViewChild('mvFileUploaderSecondExample', {static: false}) mvFileUploaderSecondExample: MvFileUploader;

  // Extensiones permitidas del file uploader
  uploaderAllowedExtensions: string[] = ['.pdf'];
  // Tamaño máximo permitido por el uploader
  maxSize: number = 300 * 1024 * 1024;
  // Respuesta del segundo uploader
  getLastSuccededUploadResponseJSONSecondExample: any;
  // Texto del segundo boton
  buttonTextSecondExample: string = 'Descarga Xml';
  // Texto del segundo boton original
  buttonOriginalTextSecondExample: string = 'Descarga Xml';
  // Archivo descargado
  downloadedFile: any;
  // Url de descarga del segundo ejemplo
  downloadUrlSecondExample: string;
  // Url de pdf para el visor
  pdfSrcWithHeadersExample: string;
  // Segunda barra de progreso
  progressValueSecondExample: number = 0;
  // Plataforma
  platform = 'none';
  // Mostrar el visor o no
  showUploader = false;
  // Configuración de entorno
  private _configEnvironment: any;

  constructor(
    private readonly _appService: AppService,
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly _http: HttpClient,
    private readonly _deviceService: DeviceService,
    private readonly _docFileUploaderService: DocFileUploaderService,
  ) {
  }

  ngOnInit() {
    this.platform = this._deviceService.getMobileInfo().platform;
    this._configEnvironment = this._appService.getConfigEnvironment();
  }

  /**
   * Evento onSuccess del uploader 2
   */
  onSuccessCallbackSecondExample(){
    this.getLastSuccededUploadResponseJSONSecondExample = this.mvFileUploaderSecondExample.getLastSuccededUploadResponse();
  }

  /**
   * Evento click en el boton de visualizar pdf con descarga Xml
   */
  openFilePdfViewerXmlButton(){
    // Cogemos los datos del archivo subido de ejemplo Xml
    const fileId = this.getLastSuccededUploadResponseJSONSecondExample.data.file_id;
    const pdfUrl = this._configEnvironment['mova']['fileUploaderComponent']['uriUpload'] + '/' + fileId;
    this.downloadUrlSecondExample = pdfUrl;
    this.showPdfViewer(pdfUrl);
  }

  /**
   * Abre el pdf en el visor
   * @param url del archivo subido
   */
  showPdfViewer(pdfUrl: string){
    this.showUploader = true;

    // Hacemos llamada para obtener un token de autorizacion
    this._docFileUploaderService.getToken$().subscribe(
      (response: any) => {
        const obj: any = {
          httpHeaders: {Authorization: 'Bearer ' + response.access_token},
        };
        // Ponemos la url de visualizacion del pdf + token de autorizacion obtenido
        this.pdfSrcWithHeadersExample = pdfUrl + '&parametros_llamada=' + JSON.stringify(obj);
      },
    );
  }

  /**
   * Ejemplo de descarga de fichero con xhr
   */
  downloadXml() {
    return new Observable((observer: any) => {
      this.buttonTextSecondExample = 'Descargando...';
      this.showUploader = false;
      this.downloadedFile = null;
      const fileId = this.getLastSuccededUploadResponseJSONSecondExample.data.file_id;
      const fileSize = this.getLastSuccededUploadResponseJSONSecondExample.data.size_in_bytes;
      this.downloadUrlSecondExample = this._configEnvironment['mova']['fileUploaderComponent']['uriUpload'] + '/' + fileId;

      // Primero obtenemos un token para poder bajar el arhivo
      this._docFileUploaderService.getToken$().subscribe(
        (response: any) => {
          const accessToken = response.access_token;

          const xhr = new XMLHttpRequest();
          xhr.open('GET', this.downloadUrlSecondExample, true);
          xhr.responseType = 'blob';
          xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);

          const platform = this.platform;
          this.progressValueSecondExample = 0;
          let self = this;

          // Evento al terminar la descarga
          xhr.onload = function() {
            // Si la descarga no dio ningun problema, guardamos
            if (this.status === 200) {
              console.log('Descargado');
              self.buttonTextSecondExample = self.buttonOriginalTextSecondExample;
              self._changeDetectorRef.detectChanges();
              observer.next({
                'content': this.response,
                'name': fileId,
                'mimetype': this.getResponseHeader('content-type'),
                'platform': platform
              });
              observer.complete();
            }
          };

          // Evento del progreso de la descarga
          xhr.onprogress = (event) => {
            const kbLoaded = Math.round(event.loaded / 1024);
            console.log('Descargando ' + kbLoaded + 'Kb');
            this.progressValueSecondExample = (event.loaded / fileSize * 100 | 0);
            this._changeDetectorRef.detectChanges();
          };

          xhr.onerror = (error) => {
            console.error(error);
            this.buttonTextSecondExample = this.buttonOriginalTextSecondExample;
            observer.error(error);
          };

          // Llamada para la descarga
          xhr.send();

        }
      ),
      error => {
        observer.error(error);
      }
    })
  }

  /**
   * Evento click en el boton de descargar el pdf con el navegador
   */
  downloadFileBrowserXmlExampleClick(){
    this.downloadXml().subscribe(
      response => {
        this.downloadFileBrowser(response);
      }
    );
  }

  /**
   * Descarga el pdf mediante el navegador web
   */
  downloadFileBrowser(file: any){
    // Para el resto creamos un elemento a y hacemos click para iniciar
    // la descarga
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(file.content);
    link.download = file.name;
    document.body.appendChild(link);
    link.dispatchEvent(
      new MouseEvent(
        'click',
        {bubbles: true, cancelable: true, view: window},
      ),
    );
    setTimeout(() => {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(link.href);
    }, 100);

    link.remove();
  }

  /**
   * Evento click en el boton de visualizar el pdf en el navegador
   */
  openFileBrowserXmlExampleClick(){
    this.downloadXml().subscribe(
      response => {
        this.openFileBrowser(response);
      }
    );
  }

  /**
   * Abre el pdf en el navegador web
   */
  openFileBrowser(file: any){
    // Usamos FileReader para pasar de un blob a un arrayBuffer, y con ello hacer windowOpen
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file.content);
    fileReader.onloadend = function(event) {
      let arrayBuffer = fileReader.result;
      var file = new Blob([arrayBuffer], {type: 'application/pdf'});
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    };
  }

  /**
   * Evento click en el boton de abrir el pdf en movil con plugin
   */
  openFilePluginXmlExampleClick(){
    this.downloadXml().subscribe(
      response => {
        this.openFilePlugin(response);
      }
    );
  }

  /**
   * Abre el pdf con el plugin file opener2
   */
  openFilePlugin(file: any){
    const blob = file.content;
    // Configuración para guardarlo el teléfonos
    const mobileConf = {
      fileName: file.name,
      directoryPath: '',
      externalRootDirectory: false,
      documentsDirectory: false,
    };
    console.log('mobileConf', mobileConf);

    // Configuración especifica para cada dispositivo
    if (file.platform === 'Android') {
      mobileConf.directoryPath = 'Download';
      mobileConf.externalRootDirectory = true;
    }
    if (file.platform === 'iOS') {
      mobileConf.documentsDirectory = true;
    }

    // Configuración para guardar el fichero en el dispositivo
    let self = this;

    const config = {
      fileName: mobileConf.fileName,
      directoryPath: mobileConf.directoryPath,
      externalRootDirectory: mobileConf.externalRootDirectory,
      documentsDirectory: mobileConf.documentsDirectory,
      successCallback: (response:any) => {
        console.log('write File success', response);
        // Abrir el fichero con la aplicación del sistema
        CPLUGIN.file.openFile({
          filePath: response.nativeURL,
          showOpenDialog: true,
          fileMIMEType: 'application/pdf',
          errorCallback: (error:any)=> {
            console.error('open file error', error);
          },
          successCallback: (openResponse:any) => {
            console.log('open file success', openResponse);
          },
        });
      },
      errorCallback: (error:any) => {
        console.log('write File error');
        console.log(error);
      },
      oData: blob,
    };
    console.log(config);
    CPLUGIN.file.writeFile(config);
  }

  handleError(error: HttpErrorResponse) {
    this.buttonTextFirstExample = this.buttonOriginalTextFirstExample;
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = 'Error: ' + error.error.message;
    } else {
      // Server-side errors
      errorMessage = 'Error Code: ' + error.status + '\nMessage: ' + error.message;
    }
    const snackConfig = {
      text: errorMessage,
      type: 'danger',
    };
    this._appService.showSnackBar(snackConfig);
    return throwError(errorMessage);
  }
  `;

  constructor(
    private readonly _appService: AppService,
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly _http: HttpClient,
    private readonly _deviceService: DeviceService,
    private readonly _docFileUploaderService: DocFileUploaderService,
  ) {
  }

  ngOnInit() {
    this.platform = this._deviceService.getMobileInfo().platform;
    this._configEnvironment = this._appService.getConfigEnvironment();
  }

  /**
   * Evento onSuccess del uploader 1
   */
  onSuccessCallbackFirstExample(){
    this.getLastSuccededUploadResponseJSONFirstExample = this.mvFileUploaderFirstExample.getLastSuccededUploadResponse();
  }

  /**
   * Evento onSuccess del uploader 2
   */
  onSuccessCallbackSecondExample(){
    this.getLastSuccededUploadResponseJSONSecondExample = this.mvFileUploaderSecondExample.getLastSuccededUploadResponse();
  }

  /**
   * Evento click en el boton de visualizar pdf con descarga httpRequest
   */
  openFilePdfViewerHttpRequestButton(){
    // Cogemos los datos del archivo subido de ejemplo HttpRequest
    const fileId = this.getLastSuccededUploadResponseJSONFirstExample.data.file_id;
    const pdfUrl = this._configEnvironment['mova']['fileUploaderComponent']['uriUpload'] + '/' + fileId;
    this.downloadUrlFirstExample = pdfUrl;
    this.showPdfViewer(pdfUrl);
  }

  /**
   * Evento click en el boton de visualizar pdf con descarga Xml
   */
  openFilePdfViewerXmlButton(){
    // Cogemos los datos del archivo subido de ejemplo Xml
    const fileId = this.getLastSuccededUploadResponseJSONSecondExample.data.file_id;
    const pdfUrl = this._configEnvironment['mova']['fileUploaderComponent']['uriUpload'] + '/' + fileId;
    this.downloadUrlSecondExample = pdfUrl;
    this.showPdfViewer(pdfUrl);
  }

  /**
   * Abre el pdf en el visor
   * @param url del archivo subido
   */
  showPdfViewer(pdfUrl: string){
    this.showUploader = true;

    // Hacemos llamada para obtener un token de autorizacion
    this._docFileUploaderService.getToken$().subscribe(
      (response: any) => {
        const obj: any = {
          httpHeaders: {Authorization: `Bearer ${ response.access_token}`},
        };
        // Ponemos la url de visualizacion del pdf + token de autorizacion obtenido
        this.pdfSrcWithHeadersExample = `${pdfUrl }&parametros_llamada=${ JSON.stringify(obj)}`;
      },
    );
  }

  /**
   * Ejemplo de descarga de HttpRequest
   */
  downloadHttpRequest() {
    return new Observable((observer: any) => {
      this.buttonTextFirstExample = 'Descargando...';
      this.showUploader = false;
      this.downloadedFile = null;
      const fileId = this.getLastSuccededUploadResponseJSONFirstExample.data.file_id;
      const fileSize = this.getLastSuccededUploadResponseJSONFirstExample.data.size_in_bytes;
      this.downloadUrlFirstExample = this._configEnvironment['mova']['fileUploaderComponent']['uriUpload'] + '/' + fileId;

      // Primero obtenemos un token para poder bajar el arhivo
      this._docFileUploaderService.getToken$().subscribe(
        (response: any) => {
          const accessToken = response.access_token;
          // Tipo de descarga
          const responseType = 'blob';
          // Configuración de Headers
          const headers = new HttpHeaders()
              .set('Authorization', 'Bearer ' + accessToken);

          // Configuración de la descarga
          const req = new HttpRequest('GET', this.downloadUrlFirstExample, {
            headers,
            showLoading: true,
            reportProgress: true,
            dataType: 'jsonp',
            responseType,
          });
          const platform = this.platform;
          this.progressValueFirstExample = 0;

          // Suscripción de la descarga
          this._http.request(req)
              .pipe(catchError(this.handleError))
              .subscribe((event: HttpEvent<any>) => {
                switch (event.type) {
                  case HttpEventType.Sent:
                    console.log('Request enviado');
                    break;
                  case HttpEventType.ResponseHeader:
                    console.log('Response header recibido');
                    break;
                  case HttpEventType.DownloadProgress:
                    const kbLoaded = Math.round(event.loaded / 1024);
                    console.log(`Descargando ${ kbLoaded }Kb`);
                    this.progressValueFirstExample = (event.loaded / fileSize * 100 | 0);
                    this._changeDetectorRef.detectChanges();
                    break;
                  case HttpEventType.Response:
                    console.log('Descargado', event.body);
                    this.buttonTextFirstExample = this.buttonOriginalTextFirstExample;
                    observer.next({
                      'content': event.body,
                      'name': fileId,
                      'mimetype': event.headers.get('content-type'),
                      'platform': platform
                    });
                    observer.complete();
                    break;
                }
              });
          },
          (error: any) => {
            console.error('Ha ocurrido un error obteniendo el token', error);
            observer.error(error);
          }
      );
    });
  }

  /**
   * Ejemplo de descarga de fichero con xhr
   */
  downloadXml() {
    return new Observable((observer: any) => {
      this.buttonTextSecondExample = 'Descargando...';
      this.showUploader = false;
      this.downloadedFile = null;
      const fileId = this.getLastSuccededUploadResponseJSONSecondExample.data.file_id;
      const fileSize = this.getLastSuccededUploadResponseJSONSecondExample.data.size_in_bytes;
      this.downloadUrlSecondExample = this._configEnvironment['mova']['fileUploaderComponent']['uriUpload'] + '/' + fileId;

      // Primero obtenemos un token para poder bajar el arhivo
      this._docFileUploaderService.getToken$().subscribe(
        (response: any) => {
          const accessToken = response.access_token;

          const xhr = new XMLHttpRequest();
          xhr.open('GET', this.downloadUrlSecondExample, true);
          xhr.responseType = 'blob';
          xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);

          const platform = this.platform;
          this.progressValueSecondExample = 0;
          let self = this;

          // Evento al terminar la descarga
          xhr.onload = function() {
            // Si la descarga no dio ningun problema, guardamos
            if (this.status === 200) {
              console.log('Descargado');
              self.buttonTextSecondExample = self.buttonOriginalTextSecondExample;
              self._changeDetectorRef.detectChanges();
              observer.next({
                'content': this.response,
                'name': fileId,
                'mimetype': this.getResponseHeader('content-type'),
                'platform': platform
              });
              observer.complete();
            }
          };

          // Evento del progreso de la descarga
          xhr.onprogress = (event) => {
            const kbLoaded = Math.round(event.loaded / 1024);
            console.log(`Descargando ${ kbLoaded }Kb`);
            this.progressValueSecondExample = (event.loaded / fileSize * 100 | 0);
            this._changeDetectorRef.detectChanges();
          };

          xhr.onerror = (error) => {
            console.error(error);
            this.buttonTextSecondExample = this.buttonOriginalTextSecondExample;
            observer.error(error);
          };

          // Llamada para la descarga
          xhr.send();

        }
      ),
      error => {
        observer.error(error);
      }
    })
  }

  /**
   * Evento click en el boton de descargar el pdf con el navegador
   */
  downloadFileBrowserHttpRequestExampleClick(){
    this.downloadHttpRequest().subscribe(
      response => {
        this.downloadFileBrowser(response);
      }
    );
  }

  /**
   * Evento click en el boton de descargar el pdf con el navegador
   */
  downloadFileBrowserXmlExampleClick(){
    this.downloadXml().subscribe(
      response => {
        this.downloadFileBrowser(response);
      }
    );
  }

  /**
   * Descarga el pdf mediante el navegador web
   */
  downloadFileBrowser(file: any){
    // Para el resto creamos un elemento a y hacemos click para iniciar
    // la descarga
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(file.content);
    link.download = file.name;
    document.body.appendChild(link);
    link.dispatchEvent(
      new MouseEvent(
        'click',
        {bubbles: true, cancelable: true, view: window},
      ),
    );
    setTimeout(() => {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(link.href);
    }, 100);

    link.remove();
  }

  /**
   * Evento click en el boton de visualizar el pdf en el navegador
   */
  openFileBrowserHttpRequestExampleClick(){
    this.downloadHttpRequest().subscribe(
      response => {
        this.openFileBrowser(response);
      }
    );
  }

  /**
   * Evento click en el boton de visualizar el pdf en el navegador
   */
  openFileBrowserXmlExampleClick(){
    this.downloadXml().subscribe(
      response => {
        this.openFileBrowser(response);
      }
    );
  }

  /**
   * Abre el pdf en el navegador web
   */
  openFileBrowser(file: any){
    // Usamos FileReader para pasar de un blob a un arrayBuffer, y con ello hacer windowOpen
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file.content);
    fileReader.onloadend = function(event) {
      let arrayBuffer = fileReader.result;
      var file = new Blob([arrayBuffer], {type: 'application/pdf'});
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    };
  }

  /**
   * Evento click en el boton de abrir el pdf en movil con plugin
   */
  openFilePluginHttpRequestExampleClick(){
    this.downloadHttpRequest().subscribe(
      response => {
        this.openFilePlugin(response);
      }
    );
  }

  /**
   * Evento click en el boton de abrir el pdf en movil con plugin
   */
  openFilePluginXmlExampleClick(){
    this.downloadXml().subscribe(
      response => {
        this.openFilePlugin(response);
      }
    );
  }

  /**
   * Abre el pdf con el plugin file opener2
   */
  openFilePlugin(file: any){
    const blob = file.content;
    // Configuración para guardarlo el teléfonos
    const mobileConf = {
      fileName: file.name,
      directoryPath: '',
      externalRootDirectory: false,
      documentsDirectory: false,
    };
    console.log('mobileConf', mobileConf);

    // Configuración especifica para cada dispositivo
    if (file.platform === 'Android') {
      mobileConf.directoryPath = 'Download';
      mobileConf.externalRootDirectory = true;
    }
    if (file.platform === 'iOS') {
      mobileConf.documentsDirectory = true;
    }

    // Configuración para guardar el fichero en el dispositivo
    let self = this;

    const config = {
      fileName: mobileConf.fileName,
      directoryPath: mobileConf.directoryPath,
      externalRootDirectory: mobileConf.externalRootDirectory,
      documentsDirectory: mobileConf.documentsDirectory,
      successCallback: (response:any) => {
        console.log('write File success', response);
        // Abrir el fichero con la aplicación del sistema
        CPLUGIN.file.openFile({
          filePath: response.nativeURL,
          showOpenDialog: true,
          fileMIMEType: 'application/pdf',
          errorCallback: (error:any)=> {
            console.error('open file error', error);
          },
          successCallback: (openResponse:any) => {
            console.log('open file success', openResponse);
          },
        });
      },
      errorCallback: (error:any) => {
        console.log('write File error');
        console.log(error);
      },
      oData: blob,
    };
    console.log(config);
    CPLUGIN.file.writeFile(config);
  }

  handleError(error: HttpErrorResponse) {
    this.buttonTextFirstExample = this.buttonOriginalTextFirstExample;
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    const snackConfig = {
      text: errorMessage,
      type: 'danger',
    };
    this._appService.showSnackBar(snackConfig);
    return throwError(errorMessage);
  }

}

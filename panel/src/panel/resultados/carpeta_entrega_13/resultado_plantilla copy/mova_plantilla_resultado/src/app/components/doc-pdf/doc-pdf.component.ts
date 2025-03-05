import {Component, OnInit, ViewChild} from '@angular/core';
import {DocFileUploaderService} from '../../services/doc-file-uploader/doc-file-uploader.service';
import {MvFileUploader} from '@mova/components/file-uploader';
import {MvPdfViewer} from '@mova/components/pdf-viewer';
import {AppService} from '@mova/components/core';

@Component({
  selector: 'app-doc-pdf',
  templateUrl: './doc-pdf.html',
  styleUrls: ['./doc-pdf.scss'],
})
export class DocPdf implements OnInit {
  @ViewChild(
      'mvFileUploaderExample',
      {static: false},
  ) mvFileUploaderExample: MvFileUploader;

  @ViewChild(
      'mvPdfViewerExample',
      {static: false},
  ) mvPdfViewerExample: MvPdfViewer;

  //variable para controlar si se muestra un texto indicando si exisitio error al cargar el pdf
  errorOnLoadingPdf :boolean = false;

 

  // Importación del componente
  codeMovaModuleTS = `
  ...
  import {MvPdfViewerModule} from '@mova/components/pdf-viewer';
  ...

  @NgModule({
    declarations: [
    ],
    imports: [
      ...
      MvPdfViewerModule,
      ...
    ],
    providers: [
    ],
    exports: [
      ...
      MvPdfViewerModule,
      ...
    ],
  })
  export class MovaModule {}
`;

  // Uso del componente
  codeUseExampleHTML = `
  <mv-input
    adapt=true
    label="Url del pdf"
    [(ngModel)]="pdfSrc">
  </mv-input>

  <mv-button
    adapt=true
    appearance="raised"
    color="primary"
    [disabled]="componentUrl == pdfSrcExample"
    (clickEvent)="changeVisorSrc()">
    Mostrar pdf
  </mv-button>



  <mv-pdf-viewer
    [url]="componentUrl"
    hidePrintButton=true
    >
  </mv-pdf-viewer>
  `;

  codeUseExampleTS = `
  ...

  pdfSrcExample: string = 'https://gestiona3.madrid.org/portalapps/util/pdf_ejemplo/MOVA2_NORMATIVA.pdf';
  pdfSrcExampleErroneo: string = 'https://gestiona3.madrid.org/portalapps/util/pdf_ejemplo/MOVA2_NORMATIVA.pdf';
  componentUrl: string;
  pdfSrcSignedExample: string = 'https://gestiona3.madrid.org/portalapps/util/pdf_ejemplo/ejemplo_firmado.pdf';

  constructor(
  ) { }

  ngOnInit() {
    this.changeVisorSrc();
  }

  changeVisorSrc(){
    this.componentUrl = this.pdfSrcExample;
  }

  ...
  `;

  codeHidePrintButtonExampleHTML = `
  <mv-pdf-viewer
    [url]="componentUrl"
    hidePrintButton=true>
  </mv-pdf-viewer>
  `;

  codeHidePrintButtonExampleTS = `
  ...

  // Nada que añadir respecto al ejemplo principal

  ...
  `;

  codeHideDownloadButtonExampleHTML = `
  <mv-pdf-viewer
    [url]="componentUrl"
    hideDownloadButton=true>
  </mv-pdf-viewer>
  `;

  codeHideDownloadButtonExampleTS = `
  ...

  // Nada que añadir respecto al ejemplo principal

  ...
  `;

  codeHideLoadButtonExampleHTML = `
  <mv-pdf-viewer
    [url]="componentUrl"
    hideLoadButton=true>
  </mv-pdf-viewer>
  `;

  codeHideLoadButtonExampleTS = `
  ...

  // Nada que añadir respecto al ejemplo principal

  ...
  `;
  codeHideEditButtonExampleHTML = `
  <mv-pdf-viewer
    [url]="componentUrl"
    hideEditButton=true>
  </mv-pdf-viewer>
  `;

  codeHideEditButtonExampleTS = `
  ...

  // Nada que añadir respecto al ejemplo principal

  ...
  `;

  codeUrlExampleHTML = `
  <mv-pdf-viewer
    [url]="pdfSrcSignedExample">
  </mv-pdf-viewer>
  `;

  codeUrlExampleTS = `
  ...

  // Nada que añadir respecto al ejemplo principal

  ...
  `;

  codeUrlExampleWithHeadersHTML = `
  <p><strong>Ejemplo de visualización de pdf con cabeceras http:</strong></p>
  <p>1. Subir un pdf</p>

  <mv-file-uploader
    #mvFileUploaderExample
    [allowedExtensions]="allowedExtensions"
    [maxSizeBytes]="maxSizeBytes"
    fileDescription="Suba un pdf de menos de 100MB para después visualizarlo con el visor de pdf"
    chunked=true
    (onUploadSuccess)="onUploadSuccess()"></mv-file-uploader>

  <p>2. Obtenemos un token de autorización y visualizamos el pdf pasando como cabecera el token obtenido:</p>
  <mv-button
    *ngIf="showUploader"
    adapt=true
    appearance="raised"
    color="primary"
    (clickEvent)="changeVisorSrcWithHeaders()">
    Visualizar pdf
  </mv-button>

  <mv-pdf-viewer
    *ngIf="showUploader"
    [url]="pdfSrcWithHeadersExample">
  </mv-pdf-viewer>
  `;url

  codeUrlExampleWithHeadersTS = `
  ...

  allowedExtensions: string[] = ['.pdf'];
  authToken: string;
  maxSizeBytes: number = 100 * 1024 * 1024;
  pdfSrcWithHeadersExample: string;
  showUploader: boolean = false;
  uploadResponse: any;

  private _configEnvironment: any;

  constructor(
    private _appService: AppService,
    private readonly _docFileUploaderService: DocFileUploaderService,
  ) {
    this._configEnvironment = this._appService.getConfigEnvironment();
  }

  ...

  changeVisorSrcWithHeaders(){
    // Obtenemos id del pdf subido
    this.uploadResponse = this.mvFileUploaderExample.getLastSuccededUploadResponse();
    const fileId = this.uploadResponse.data.file_id;
    // Url de descarga del pdf subido
    const pdfUrl = this._configEnvironment['mova']['fileUploaderComponent']['uriUpload'] + '/' + fileId

    // Hacemos llamada para obtener un token de autorizacion
    this._docFileUploaderService.getToken$().subscribe(
      (response: any) => {
        const obj: any = {
          httpHeaders: { Authorization: 'Bearer ' + response.access_token }
        }

        // Ponemos la url de visualizacion del pdf + token de autorizacion obtenido
        this.pdfSrcWithHeadersExample = pdfUrl + '&parametros_llamada=' + JSON.stringify(obj);
      }
    )
  }

  onUploadSuccess(){
    this.showUploader = true;
  }

  ...
  `;

  codeAddConfigParamsExampleHTML = `
  <mv-pdf-viewer
    #mvPdfViewerExample
    [url]="componentUrl">
  </mv-pdf-viewer>

  <p>A continuación, se muestran algunos ejemplos de uso de los parámetros de configuración:</p>

  <mv-button
    adapt=true
    appearance="raised"
    color="primary"
    (clickEvent)="addConfigParamZoomExample()">
    Poner zoom = 5
  </mv-button>

  <mv-button
    adapt=true
    appearance="raised"
    color="primary"
    (clickEvent)="addConfigParamSearchExample()">
    Buscar palabra 'mova'
  </mv-button>

  <mv-button
    adapt=true
    appearance="raised"
    color="primary"
    (clickEvent)="addConfigParamPageExample()">
    Ir a la página 3
  </mv-button>
  `;

  codeAddConfigParamsExampleTS = `
  import {MvPdfViewer} from '@mova/components/pdf-viewer';

  ...

  @ViewChild(
      'mvPdfViewerExample',
      {static: false},
  ) mvPdfViewerExample: MvPdfViewer;

  ...

  /*
  ** Usamos el parametro de zoom
  */
  addConfigParamZoomExample(){
    this.mvPdfViewerExample.addConfigParams('&zoom=50');
  }

  /*
  ** Usamos el parametro de busqueda de texto
  */
  addConfigParamSearchExample(){
    this.mvPdfViewerExample.addConfigParams('&search=mova');
  }

  /*
  ** Usamos el parametro de cambio de pagina
  */
  addConfigParamPageExample(){
    this.mvPdfViewerExample.addConfigParams('&page=3');
  }

  ...
  `;

  //errorloading
  codeErrorLoadingExampleHTML = `
  <mv-pdf-viewer
    (errorOnLoading)="errorDectected($event)"
    [url]="pdfSrcExampleErroneo"
  >
  </mv-pdf-viewer>
`;

  codeErrorLoadingExampleTS = `
  /*
  ** ejemplo de funcion para recoger los errores el evento recibe un objeto que
  ** contiene un mensaje y su tipo en este caso se utiliza una variable para recoger 
  ** el objeto y mostrarlo en un label  
  */
  import {MvPdfViewer} from '@mova/components/pdf-viewer';
  errorPdf: any;
  ...

  errorDectected(error: any)
  {
    this.errorOnLoadingPdfPruebaCompleta = true; // esto es un ejemplo para mostrar el label (el archivo pdf...)en el caso de que exista dicho error
    this.errorPdf = "El archivo pdf no existe: mensaje:" + error.mensaje + ' --- ' + error.tipo;
  }

  ...
  `;

  // environment.ts
  codeEnvironmentTS = `
  export const environment = {
    mova: {
      ...
      pdfViewerComponent: {
        uriViewer: 'https://gestiona3.madrid.org/portalapps/util/pdf-viewer_1.3',
      },
      ...
    },
    ...
  };
  `;

  // environment.val.ts
  codeEnvironmentValTS = `
  export const environment = {
    mova: {
      ...
      pdfViewerComponent: {
        uriViewer: 'https://gestiona3.madrid.org/portalapps/util/pdf-viewer_1.3',
      },
      ...
    },
    ...
  };
  `;

  // environment.prod.ts
  codeEnvironmentProdTS = `
  export const environment = {
    mova: {
      ...
      pdfViewerComponent: {
        uriViewer: 'https://gestiona3.madrid.org/portalapps/util/pdf-viewer_1.3',
      },
      ...
    },
    ...
  };
  `;

  pdfSrcExample = 'https://gestiona3.madrid.org/portalapps/util/pdf_ejemplo/MOVA2_NORMATIVA.pdf';
  pdfSrcExampleErroneo = 'https://gestiona3.madrid.org/portalapps/util/pdf_ejemplo/MOVA2_NORMATIVA33.pdf';
  componentUrl: string;
  pdfSrcSignedExample = 'https://gestiona3.madrid.org/portalapps/util/pdf_ejemplo/ejemplo_firmado.pdf';

  allowedExtensions: string[] = ['.pdf'];
  authToken: string;
  maxSizeBytes: number = 100 * 1024 * 1024;
  pdfSrcWithHeadersExample: string;
  showUploader = false;
  uploadResponse: any;
  errorPdf:any;
  showPdf: boolean;

  private readonly _configEnvironment: any;

  constructor(
    private readonly _appService: AppService,
    private readonly _docFileUploaderService: DocFileUploaderService,
  ) {
    this._configEnvironment = this._appService.getConfigEnvironment();
  }

  ngOnInit() {
    
    this.changeVisorSrc();
    this.showPdf = false;
   
  }

  changeVisorSrc() {
    this.errorOnLoadingPdf = false;
    this.componentUrl = this.pdfSrcExample;
    this.showPdf = true;
  }

  changeVisorSrcWithHeaders() {
    // Obtenemos id del pdf subido
    this.uploadResponse = this.mvFileUploaderExample.getLastSuccededUploadResponse();
    const fileId = this.uploadResponse.data.file_id;
    // Url de descarga del pdf subido
    const pdfUrl = `${this._configEnvironment['mova']['fileUploaderComponent']['uriUpload'] }/${ fileId}`;

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

  onUploadSuccess() {
    this.showUploader = true;
  }

  /*
  ** Usamos el parametro de zoom
  */
  addConfigParamZoomExample(){
    this.mvPdfViewerExample.addConfigParams('&zoom=50');
  }

  /*
  ** Usamos el parametro de busqueda de texto
  */
  addConfigParamSearchExample(){
    this.mvPdfViewerExample.addConfigParams('&search=mova');
  }

  /*
  ** Usamos el parametro de cambio de pagina
  */
  addConfigParamPageExample(){
    this.mvPdfViewerExample.addConfigParams('&page=3');
  }


  

  /*
  ** Función de ejemplo para recoger el error al cargar un pdf no existente
  */
  errorDectected(event: any)
  {
    console.log("pasa");
    this.errorOnLoadingPdf = true; // esto es un ejemplo para mostrar un label en el caso de que exista dicho error 
    this.errorPdf = "El archivo pdf no existe: mensaje:" + event.mensaje + ' --- ' + event.tipo;
    
  }
  
 

}


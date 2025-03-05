import {Component, OnInit, ViewChild} from '@angular/core';
import {MvFileUploader} from '@mova/components/file-uploader';
import {
  DocFileUploaderService,
} from '@app/services/doc-file-uploader/doc-file-uploader.service';
import {AppService} from '@mova/components/core';

@Component({
  selector: 'app-doc-file-uploader',
  templateUrl: './doc-file-uploader.html',
  styleUrls: ['./doc-file-uploader.scss'],
})
export class DocFileUploader implements OnInit {
  @ViewChild(
      'mvFileUploaderResponseExample',
      {static: false},
  ) mvFileUploaderResponseExample: MvFileUploader;
  @ViewChild(
      'mvFileUploaderFirstExample',
      {static: false},
  ) mvFileUploaderFirstExample: MvFileUploader;
  @ViewChild(
      'mvFileUploaderSecondExample',
      {static: false},
  ) mvFileUploaderSecondExample: MvFileUploader;

  // Importación del componente
  codeMovaModuleTS = `
  ...
  import {MvFileUploaderModule} from '@mova/components/file-uploader';
  ...

  @NgModule({
    declarations: [
    ],
    imports: [
      ...
      MvFileUploaderModule,
      ...
    ],
    providers: [
    ],
    exports: [
      ...
      MvFileUploaderModule,
      ...
    ],
  })
  export class MovaModule {}
`;

  // Archivo de entorno
  codeEnvironmentTS = `
  export const environment = {
    ...
    fileUploaderComponent: {
      uriTokenBase: 'https://accedeintra.val.comunidad.madrid/oauth2/token',
      authorizationHeader: 'bm1sRnBkbFVSS3VEbGh1UUNPdmhzR2xEYVZVYToxVFJ4cGVRdVduQnpuWDJIdWxpenFXbjhCRVFh', // clave valsan v4
      scope: 'JAPI_SC_APLICACION openid',
      uriUpload: 'https://apiscmintra.val.comunidad.madrid/t/dacm.comunidad.madrid/ejemploalumnosjapi/v1/files'   
    },
    ...
  }
  `;

  // Archivo de entorno val con
  codeEnvironmentValTS = `
  export const environment = {
    ...
    fileUploaderComponent: {
      uriTokenBase: 'https://accedeintra.val.comunidad.madrid/oauth2/token',
      authorizationHeader: 'bm1sRnBkbFVSS3VEbGh1UUNPdmhzR2xEYVZVYToxVFJ4cGVRdVduQnpuWDJIdWxpenFXbjhCRVFh', // clave valsan v4
      scope: 'JAPI_SC_APLICACION openid',
      uriUpload: 'https://apiscmintra.val.comunidad.madrid/t/dacm.comunidad.madrid/ejemploalumnosjapi/v1/files'   
    },
    ...
  }
  `;

  // Archivo de entorno prod con
  codeEnvironmentProdTS = `
  export const environment = {
    ...
    fileUploaderComponent: {
      uriTokenBase: 'https://accedeintra.val.comunidad.madrid/oauth2/token',
      authorizationHeader: 'bm1sRnBkbFVSS3VEbGh1UUNPdmhzR2xEYVZVYToxVFJ4cGVRdVduQnpuWDJIdWxpenFXbjhCRVFh', // clave valsan v4
      scope: 'JAPI_SC_APLICACION openid',
      uriUpload: 'https://apiscmintra.val.comunidad.madrid/t/dacm.comunidad.madrid/ejemploalumnosjapi/v1/files'   
    },
    ...
  }
  `;

  codeUseExampleServiceTS = `
  ...

  constructor(
    private readonly _appService: AppService,
    private readonly _http: HttpClient,
  ) {
    this._configEnvironment = this._appService.getConfigEnvironment();
  }

  /*
  * Servicio para obtener un token de autorizacion
  */
  getToken$(): Observable<any[]> {
    const requestUrl = this._configEnvironment['mova']['fileUploaderComponent']['uriBase'];

    let oRequest: any = new HttpParams();
    oRequest = oRequest.append('grant_type', 'client_credentials');

    const headers = new HttpHeaders()
      .set('Authorization', 'Basic ' + this._configEnvironment['mova']['fileUploaderComponent']['authHeader'])
      .set('Content-Type', 'application/x-www-form-urlencoded')
    return this._http.post<any>(requestUrl, oRequest, {headers});
  }

  /**
   * Servicio para obtener un archivo del backend
   */
   downloadFile$(accessToken: string, fileUrl: string): Observable<any> {
     const headers = new HttpHeaders()
       .set('Authorization', 'Bearer ' + accessToken);
     return this._http.get<any>(fileUrl, {headers, responseType: 'blob' as 'json'});
   }

   ...
  `;

  codeUseExampleTS = `
  ...

  @ViewChild(
      'mvFileUploaderResponseExample',
      {static: false},
  ) mvFileUploaderResponseExample: MvFileUploader;
  @ViewChild(
      'mvFileUploaderFirstExample',
      {static: false},
  ) mvFileUploaderFirstExample: MvFileUploader;
  @ViewChild(
      'mvFileUploaderSecondExample',
      {static: false},
  ) mvFileUploaderSecondExample: MvFileUploader;

  ...

  exampleAllowedExtensions: string[] = ['.docx', '.pdf'];
  maxSizeBytesChunked: number = 300 * 1024 * 1024;
  getExampleResponseFirstJSON: any;
  getExampleResponseSecondJSON: any;

  ...

  constructor(
  ) { }

  ngOnInit() {
  }

  getLastSuccededUploadResponseClick(component: string){
    switch (component) {
      case 'mvFileUploaderFirstExample':
        this.getExampleResponseFirstJSON = this.mvFileUploaderFirstExample.getLastSuccededUploadResponse();
        break;
      case 'mvFileUploaderSecondExample':
        this.getExampleResponseSecondJSON = this.mvFileUploaderSecondExample.getLastSuccededUploadResponse();
        break;
      case 'mvFileUploaderResponseExample':
        this.getLastSuccededUploadResponseJSON = this.mvFileUploaderResponseExample.getLastSuccededUploadResponse();
        break;

      default:
        break;
    }
  }

  downloadFile(component: string){
    let fileId;
    switch (component) {
      case 'mvFileUploaderFirstExample':
        this.getExampleResponseFirstJSON = this.mvFileUploaderFirstExample.getLastSuccededUploadResponse();
        if(this.getExampleResponseFirstJSON){
          fileId = this.getExampleResponseFirstJSON.data.file_id;
        }
        break;
      case 'mvFileUploaderSecondExample':
        this.getExampleResponseSecondJSON = this.mvFileUploaderSecondExample.getLastSuccededUploadResponse();
        if(this.getExampleResponseSecondJSON){
          fileId = this.getExampleResponseSecondJSON.data.file_id;
        }
        break;
      default:
        break;
    }

    // Url de descarga del pdf subido
    const pdfUrl = this._configEnvironment['mova']['fileUploaderComponent']['uriUpload'] + '/' + fileId;
    this._docFileUploaderService.getToken$().subscribe(
      (response: any) => {
        const accessToken = response.access_token;

        this._docFileUploaderService.downloadFile$(accessToken, pdfUrl).subscribe(
          (response2: any) => {
            const blobUrl = URL.createObjectURL(response2);
            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = fileId;
            link.click();
          }
        )
      }
    )
  }

  ...
  `;

  codeUseExampleHTML = `<p><strong>Ejemplo de file-uploader:</strong></p>
  <mv-file-uploader
    #mvFileUploaderFirstExample
    [allowedExtensions]="exampleAllowedExtensions"
    fileDescription="Suba el archivo de solicitud de Beca para el curso 2021/2022 completo."
    required=true></mv-file-uploader>

  <p><strong>Obtener respuesta:</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="getLastSuccededUploadResponseClick('mvFileUploaderFirstExample')">
    getLastSuccededUploadResponse()
  </mv-button>

  <p *ngIf="getExampleResponseFirstJSON"><strong>Respuesta:</strong></p>
  <p class="response">{{ getExampleResponseFirstJSON | json }}</p>

  <p><strong>Descargar archivo:</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="downloadFile('mvFileUploaderFirstExample')">
    descargar archivo
  </mv-button>

  <p><strong>Ejemplo de file-uploader con subida por chunks:</strong></p>
  <mv-file-uploader
    #mvFileUploaderSecondExample
    [maxSizeBytes]="maxSizeBytesChunked"
    fileDescription="Para solicitar su prestación debe adjuntar el modelo 435 de la Tesorería General de la Seguridad Social completo."
    chunked=true></mv-file-uploader>

  <p><strong>Obtener respuesta:</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="getLastSuccededUploadResponseClick('mvFileUploaderSecondExample')">
    getLastSuccededUploadResponse()
  </mv-button>

  <p *ngIf="getExampleResponseSecondJSON"><strong>Respuesta:</strong></p>
  <p class="response">{{ getExampleResponseSecondJSON | json }}</p>

  <p><strong>Descargar archivo:</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="downloadFile('mvFileUploaderSecondExample')">
    descargar archivo
  </mv-button>
  `;

  codeAllowedExtensionsExampleTS = `
  ...

  exampleAllowedExtensions: string[] = ['.docx', '.pdf'];

  ...
  `;

  codeAllowedExtensionsExampleHTML = `
  <mv-file-uploader
    [allowedExtensions]="exampleAllowedExtensions">
  </mv-file-uploader>
  `;

  codeChunkedExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  codeChunkedExampleHTML = `
  <mv-file-uploader
    chunked=true
    [maxSizeBytesChunked]="maxSizeBytesChunked">
  </mv-file-uploader>
  `;

  codeDisabledExampleTS = `
  ...

  maxSizeBytesChunked: number = 300 * 1024 * 1024;

  ...
  `;

  codeDisabledExampleHTML = `
  <p><strong>Con disabled a true:</strong></p>

  <mv-file-uploader
    disabled=true>
  </mv-file-uploader>

  <p><strong>Con disabled a false:</strong></p>

  <mv-file-uploader
    disabled=false>
  </mv-file-uploader>

  <p><strong>Sin disabled (comportamiento por defecto):</strong></p>

  <mv-file-uploader>
  </mv-file-uploader>
  `;

  codeFileDescriptionExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  codeFileDescriptionExampleHTML = `
  <p><strong>Con fileDescription:</strong></p>

  <mv-file-uploader
    fileDescription="Debe adjuntar y subir el documento relleno">
  </mv-file-uploader>

  <p><strong>Sin fileDescription:</strong></p>

  <mv-file-uploader>
  </mv-file-uploader>

  `;

  codeMaxConcurrentUploadsExampleTS = `
  ...

  selectMaxConcurrentUploads: any;
  selectOptionsMaxConcurrentUploads: any[] = [
    {
      "id": 1,
      "text": "1"
    },
    {
      "id": 2,
      "text": "2"
    },
    {
      "id": 3,
      "text": "3"
    },
    {
      "id": 4,
      "text": "4"
    },
    {
      "id": 5,
      "text": "5"
    },
    {
      "id": 6,
      "text": "6"
    },
    {
      "id": 7,
      "text": "7"
    },
    {
      "id": 8,
      "text": "8"
    },
    {
      "id": 9,
      "text": "9"
    },
    {
      "id": 10,
      "text": "10"
    }
  ]

  ...
  `;

  codeMaxConcurrentUploadsExampleHTML = `
  <p><strong>Con maxConcurrentUploads:</strong></p>
  <p>Seleccione el número de subidas de chunks simultáneas:</p>
  <mv-select-x
    [(ngModel)]="selectMaxConcurrentUploads"
    [options]="selectOptionsMaxConcurrentUploads">
  </mv-select-x>

  <mv-file-uploader
    chunked="true"
    [maxConcurrentUploads]="selectMaxConcurrentUploads"
    [maxSizeBytes]="maxSizeBytesChunked">
  </mv-file-uploader>

  <p><strong>Sin maxConcurrentUploads (comportamiento por defecto, 5):</strong></p>

  <mv-file-uploader
    chunked="true">
  </mv-file-uploader>
  `;

  codeMaxSizeBytesExampleTS = `
  ...

  maxSize5KBExample: number = 5 * 1024;

  ...
  `;

  codeMaxSizeBytesExampleHTML = `
  <p><strong>Con maxConcurrentUploads:</strong></p>

  <mv-select-x
    [(ngModel)]="selectMaxConcurrentUploads"
    [options]="selectOptionsMaxConcurrentUploads">
  </mv-select-x>

  <mv-file-uploader
    [maxConcurrentUploads]="selectMaxConcurrentUploads">
  </mv-file-uploader>
`;

  codeRequiredExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  codeRequiredExampleHTML = `
  <p><strong>Con required a true:</strong></p>

  <mv-file-uploader
    required=true>
  </mv-file-uploader>

  <p><strong>Con required a false:</strong></p>

  <mv-file-uploader
    required=false>
  </mv-file-uploader>

  <p><strong>Sin required (comportamiento por defecto):</strong></p>

  <mv-file-uploader>
  </mv-file-uploader>
  `;

  codeRequiredHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  codeRequiredHintExampleHTML = `
  <p><strong>Con required a true:</strong></p>

  <mv-file-uploader
    required=true>
  </mv-file-uploader>

  <p><strong>Con required a false:</strong></p>

  <mv-file-uploader
    required=false>
  </mv-file-uploader>

  <p><strong>Sin maxSizeBytes (comportamiento por defecto):</strong></p>

  <mv-file-uploader>
  </mv-file-uploader>
  `;

  codeTokenTipeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  codeTokenTipeExampleHTML = `
  <p><strong>Con tokenType 'client_credentials':</strong></p>

  <mv-file-uploader
    tokenType="client_credentials">
  </mv-file-uploader>

  <p><strong>Con tokenType 'application':</strong></p>

  <mv-file-uploader
    tokenType="application">
  </mv-file-uploader>

  <p><strong>Sin tokenType (comportamiento por defecto, 'client_credentials'):</strong></p>

  <mv-file-uploader></mv-file-uploader>
  `;

  codeStorageTypeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  codeStorageTypeExampleHTML = `
  <p><strong>Con storageType 'COMPARTIDO':</strong></p>

  <mv-file-uploader
    storageType="COMPARTIDO">
  </mv-file-uploader>
  `;

  codeShowLogExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  codeShowLogExampleHTML = `
  <p><strong>Con showLog a true:</strong></p>

  <mv-file-uploader
    showLog=true>
  </mv-file-uploader>

  <p><strong>Con showLog a false:</strong></p>

  <mv-file-uploader
    showLog=false>
  </mv-file-uploader>

  <p><strong>Sin showLog (comportamiento por defecto, true):</strong></p>

  <mv-file-uploader>
  </mv-file-uploader>
  `;

  codeValidateFirstExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  codeValidateFirstExampleHTML = `
  <p><strong>Con validateFirst a true:</strong></p>

  <mv-file-uploader
    required=true
    validateFirst=true>
  </mv-file-uploader>

  <p><strong>Con validateFirst a false:</strong></p>

  <mv-file-uploader
    required=true
    validateFirst=false>
  </mv-file-uploader>

  <p><strong>Sin validateFirst (comportamiento por defecto):</strong></p>

  <mv-file-uploader
    required=true>
  </mv-file-uploader>
  `;

  codeValidateOnTypeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  codeValidateOnTypeExampleHTML = `
  <p><strong>Con validateOnType a true:</strong></p>

  <mv-file-uploader
    required=true
    validateOnType=true>
  </mv-file-uploader>

  <p><strong>Con validateOnType a false:</strong></p>

  <mv-file-uploader
    required=true
    validateOnType=false>
  </mv-file-uploader>

  <p><strong>Sin validateOnType (comportamiento por defecto):</strong></p>

  <mv-file-uploader
    required=true>
  </mv-file-uploader>
  `;

  codeGetLastSuccededUploadResponseExampleTS = `
  import {MvFileUploader} from '@mova/components/file-uploader';

  ...

  @ViewChild('mvFileUploaderExample', {static: false}) mvFileUploaderExample: MvFileUploader;

  ...

  getLastSuccededUploadResponseJSON: any;

  constructor(
  ) { }

  ngOnInit() {
  }

  getLastSuccededUploadResponseClick(){
    this.getLastSuccededUploadResponseJSON = this.mvFileUploaderExample.getLastSuccededUploadResponse();
  }

  ...
  `;

  codeGetLastSuccededUploadResponseExampleHTML = `
  <p><strong>Obtener respuesta:</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="getLastSuccededUploadResponseClick()">
    getLastSuccededUploadResponse()
  </mv-button>

  <p><strong>Respuesta:</strong></p>
  <p class="response">{{ getLastSuccededUploadResponseJSON | json }}</p>
  `;

  codeOnUploadErrorExampleHTML = `
  <p><strong>Ejemplo de callback de error:</strong></p>

  <mv-file-uploader
    (onUploadError)="onErrorCallback()">
  </mv-file-uploader>
  `;

  codeOnUploadErrorExampleTS = `
  ...

  onErrorCallback(){
    alert('Ha ocurrido un error')
  }

  ...
  `;

  codeOnUploadSuccessExampleHTML = `
  <p><strong>Ejemplo de callback de subida correcta:</strong></p>

  <mv-file-uploader
    (onUploadSuccess)="onSuccessCallback()">
  </mv-file-uploader>
  `;

  codeOnUploadSuccessExampleTS = `
  ...

  onSuccessCallback(){
    alert('Archivo subido correctamente')
  }

  ...
  `;

  // Variables
  exampleAllowedExtensions: string[] = ['.docx', '.pdf'];
  maxSize5KBExample: number = 50 * 1024;
  maxSizeBytesChunked: number = 300 * 1024 * 1024;
  getLastSuccededUploadResponseJSON: any;
  getExampleResponseFirstJSON: any;
  getExampleResponseSecondJSON: any;
  selectMaxConcurrentUploads: any;
  selectOptionsMaxConcurrentUploads: any[] = [
    {
      'id': 1,
      'text': '1',
    },
    {
      'id': 2,
      'text': '2',
    },
    {
      'id': 3,
      'text': '3',
    },
    {
      'id': 4,
      'text': '4',
    },
    {
      'id': 5,
      'text': '5',
    },
    {
      'id': 6,
      'text': '6',
    },
    {
      'id': 7,
      'text': '7',
    },
    {
      'id': 8,
      'text': '8',
    },
    {
      'id': 9,
      'text': '9',
    },
    {
      'id': 10,
      'text': '10',
    },
  ]

  private readonly _configEnvironment: any;

  constructor(
    private readonly _appService: AppService,
    private readonly _docFileUploaderService: DocFileUploaderService,
  ) {
    this._configEnvironment = this._appService.getConfigEnvironment();
  }

  ngOnInit() {
  }

  getLastSuccededUploadResponseClick(component: string) {
    switch (component) {
      case 'mvFileUploaderFirstExample':
        this.getExampleResponseFirstJSON = this.mvFileUploaderFirstExample
            .getLastSuccededUploadResponse();
        break;
      case 'mvFileUploaderSecondExample':
        this.getExampleResponseSecondJSON = this.mvFileUploaderSecondExample
            .getLastSuccededUploadResponse();
        break;
      case 'mvFileUploaderResponseExample':
        this.getLastSuccededUploadResponseJSON = this.mvFileUploaderResponseExample
            .getLastSuccededUploadResponse();
        break;

      default:
        break;
    }
  }

  downloadFile(component: string) {
    let fileId;
    switch (component) {
      case 'mvFileUploaderFirstExample':
        this.getExampleResponseFirstJSON = this.mvFileUploaderFirstExample.getLastSuccededUploadResponse();
        if (this.getExampleResponseFirstJSON) {
          fileId = this.getExampleResponseFirstJSON.data.file_id;
        }
        break;
      case 'mvFileUploaderSecondExample':
        this.getExampleResponseSecondJSON = this.mvFileUploaderSecondExample.getLastSuccededUploadResponse();
        if (this.getExampleResponseSecondJSON) {
          fileId = this.getExampleResponseSecondJSON.data.file_id;
        }
        break;
      default:
        break;
    }

    // Url de descarga del pdf subido
    const pdfUrl = `${this._configEnvironment['mova']['fileUploaderComponent']['uriUpload'] }/${ fileId}`;
    this._docFileUploaderService.getToken$().subscribe(
        (response: any) => {
          const accessToken = response.access_token;

          this._docFileUploaderService.downloadFile$(accessToken, pdfUrl).subscribe(
              (response2: any) => {
                const blobUrl = URL.createObjectURL(response2);
                const link = document.createElement('a');
                link.href = blobUrl;
                link.download = fileId;
                link.click();
              },
          );
        },
    );
  }

  onErrorCallback() {
    alert('Ha ocurrido un error');
  }

  onSuccessCallback() {
    alert('Archivo subido correctamente');
  }
}

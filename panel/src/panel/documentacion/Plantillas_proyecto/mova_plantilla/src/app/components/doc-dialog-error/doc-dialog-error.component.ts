import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {AppService} from '@mova/components/core';

@Component({
  selector: 'app-doc-dialog-error',
  templateUrl: './doc-dialog-error.html',
  styleUrls: ['./doc-dialog-error.scss'],
})
export class DocDialogError implements OnInit {
  // Uso del componente
  codeUseExampleHTML = `

  <p><strong>Ejemplo de diálogo:</strong></p>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogErrorExample()">
    Lanzar diálogo
  </mv-button>

  <p><strong>Ejemplo de error no controlado:</strong></p>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="ejemploUsoNoControlado()">
    Lanzar diálogo
  </mv-button>

  <p><strong>Ejemplo de error controlado:</strong></p>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="ejemploUsoControlado()">
    Lanzar diálogo
  </mv-button>
  `;

  codeUseExampleTS = `
  import { AppService } from '@mova/components/core';

  ...

  constructor(
    private _appService: AppService
  ) { }

  ngOnInit() {
  }

  /** Ejemplo de diálogo de error local
   * Lanzar manualmente el dialogo de error
   */
  exampleDialogErrorExample(){
    const errorData: any = {
      title: 'Título del error',
      text: 'Descripción del error',
      errorText: this.MSG_DETAIL_ERROR,
      titleWarn: true,
      showAcceptButton: true,
      showLoginButton: true,
      showInitButton: true,
      disableClose: true,
      showDetail: true,
      acceptAppearance: 'raised',
      loginAppearance: 'flat',
      initAppearance: 'flat',
      acceptColor: 'warn',
      loginColor: 'primary',
      initColor: 'primary',
    }

    this._appService.openDialogError(errorData);
  }

  /** Ejemplo de error de una llamada http controlado por MOVA2
   * Llamada http 404
   */
  ejemploUsoMovaError() {
    console.log("Ejemplo de uso no controlado");

    const url = "http://gestiona3.madrid.org/portalapps/webapps/mova2/mova_mov_error";
    const params: any = {};

    this.http.get<any[]>(url, { params })
    .subscribe(
        data => console.log(data),
        err => console.log(err)
    );
  }
  /** Ejemplo de error 2 de una llamada http controlado por MOVA2
   * Llamada http 500 
   */
  ejemploUsoMovaError2() {
    console.log("Ejemplo de uso no controlado");

    const url = "https://gestiona3.madrid.org/mova_rest_servicios/v1/consultas/do?idApp=aaaa";
    const params: any = {};

    this.http.get<any[]>(url, { params })
    .subscribe(
        data => console.log(data),
        err => console.log(err)
    );
  }

  /** Ejemplo de error de una llamada http capturando el error
   * Llamada http capturando error
   */
  ejemploUsoCustomError() {
    console.log("Ejemplo de uso controlado");

    const url = "http://gestiona3.madrid.org/portalapps/webapps/mova2/mova_mov_error";
    
    const headers = new HttpHeaders()
      .set('mv-hide-error','true');

    this.http.get<any[]>(url,  {'headers': headers} )
    .subscribe(
        data => console.log(data),
        err => {
          console.log("Error controlado");
        }
    );
  }
  ...
  `;

  // acceptAppearance
  codeAcceptAppearanceExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogErrorAcceptAppearance()">
    Lanzar diálogo
  </mv-button>
  `;

  codeAcceptAppearanceExampleTS = `
  ...

  exampleDialogErrorAcceptAppearance(){
    const errorData: any = {
      title: 'Error',
      text: this.MSG_ERROR,
      acceptAppearance: 'fab'
    }
    this._appService.openDialogError(errorData);

  }

  ...
  `;

  // acceptColor
  codeAcceptColorExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogErrorAcceptColor()">
    Lanzar diálogo
  </mv-button>
  `;

  codeAcceptColorExampleTS = `
  ...

  exampleDialogErrorAcceptColor(){
    const errorData: any = {
      title: 'Error',
      text: this.MSG_ERROR,
      acceptColor: 'warn'
    }
    this._appService.openDialogError(errorData);

  }

  ...
  `;

  // acceptText
  codeAcceptTextExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogErrorAcceptText()">
    Lanzar diálogo
  </mv-button>
  `;

  codeAcceptTextExampleTS = `
  ...

  exampleDialogErrorAcceptText(){
    const errorData: any = {
      title: 'Error',
      text: this.MSG_ERROR,
      acceptText: 'Confirmación'
    }
    this._appService.openDialogError(errorData);

  }

  ...
  `;

  // errorText
  codeErrorTextExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogErrorTextAppearance()">
    Lanzar diálogo
  </mv-button>
  `;

  codeErrorTextExampleTS = `
  ...

  exampleDialogErrorTextAppearance(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      acceptText: 'Confirmación',
      errorText: 'Error en la línea de código 195'
    }
    this._appService.openDialogError(errorData);

  }

  ...
  `;

  // disableClose
  codeDisableCloseExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogDisableClose()">
    Lanzar diálogo
  </mv-button>
  `;

  codeDisableCloseExampleTS = `
  ...

  exampleDialogDisableClose(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      disableClose: true
    }
    this._appService.openDialogError(errorData);

  }

  ...
  `;

  // initAppearance
  codeInitAppearanceExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogErrorInitAppearance()">
    Lanzar diálogo
  </mv-button>
  `;

  codeInitAppearanceExampleTS = `
  ...

  exampleDialogErrorInitAppearance(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      initAppearance: 'fab'
    }
    this._appService.openDialogError(errorData);

  }

  ...
  `;

  // initColor
  codeInitColorExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogErrorInitColor()">
    Lanzar diálogo
  </mv-button>
  `;

  codeInitColorExampleTS = `
  ...

  exampleDialogErrorInitColor(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      initColor: 'warn'
    }
    this._appService.openDialogError(errorData);

  }

  ...
  `;

  // loginAppearance
  codeLoginAppearanceExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogErrorLoginAppearance()">
    Lanzar diálogo
  </mv-button>
  `;

  codeLoginAppearanceExampleTS = `
  ...

  exampleDialogErrorLoginAppearance(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      loginAppearance: 'fab'
    }
    this._appService.openDialogError(errorData);

  }

  ...
  `;

  // loginColor
  codeLoginColorExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogErrorLoginColor()">
    Lanzar diálogo
  </mv-button>
  `;

  codeLoginColorExampleTS = `
  ...

  exampleDialogErrorLoginColor(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      loginColor: 'warn'
    }
    this._appService.openDialogError(errorData);

  }

  ...
  `;

  // showAcceptButton
  codeShowAcceptButtonExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleShowAcceptButtonTrue()">
    Lanzar diálogo
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleShowAcceptButtonFalse()">
    Lanzar diálogo
  </mv-button>
  `;

  codeShowAcceptButtonExampleTS = `
  ...

  exampleShowAcceptButtonTrue(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showAcceptButton: true
    }
    this._appService.openDialogError(errorData);

  }

  exampleShowAcceptButtonFalse(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showAcceptButton: false
    }
    this._appService.openDialogError(errorData);

  }

  ...
  `;

  // showCloseButton
  codeShowCloseButtonExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleShowCloseButtonTrue()">
    Lanzar diálogo
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleShowCloseButtonFalse()">
    Lanzar diálogo
  </mv-button>
  `;

  codeShowCloseButtonExampleTS = `
  ...

  exampleShowCloseButtonTrue(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showCloseButton: true
    }
    this._appService.openDialogError(errorData);

  }

  exampleShowCloseButtonFalse(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showCloseButton: false
    }
    this._appService.openDialogError(errorData);

  }

  ...
  `;

  // showInitButton
  codeShowInitButtonExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleShowInitButtonTrue()">
    Lanzar diálogo
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleShowInitButtonFalse()">
    Lanzar diálogo
  </mv-button>
  `;

  codeShowInitButtonExampleTS = `
  ...

  exampleShowInitButtonTrue(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showInitButton: true
    }
    this._appService.openDialogError(errorData);

  }

  exampleShowInitButtonFalse(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showInitButton: false
    }
    this._appService.openDialogError(errorData);

  }

  ...
  `;

  // showLoginButton
  codeShowLoginButtonExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleShowLoginButtonTrue()">
    Lanzar diálogo
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleShowLoginButtonFalse()">
    Lanzar diálogo
  </mv-button>
  `;

  codeShowLoginButtonExampleTS = `
  ...

  exampleShowLoginButtonTrue(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showLoginButton: true
    }
    this._appService.openDialogError(errorData);

  }

  exampleShowLoginButtonFalse(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showLoginButton: false
    }
    this._appService.openDialogError(errorData);

  }

  ...
  `;

  // showLoginButton
  codeShowDetailExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleShowDetailTrue()">
    Lanzar diálogo
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleShowDetailFalse()">
    Lanzar diálogo
  </mv-button>
  `;

  codeShowDetailExampleTS = `
  ...

  exampleShowDetailTrue(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      errorText: this.MSG_DETAIL_ERROR,
      showDetail: true
    }
    this._appService.openDialogError(errorData);

  }

  exampleShowDetailFalse(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      errorText: this.MSG_DETAIL_ERROR,
      showDetail: false
    }
    this._appService.openDialogError(errorData);


  }

  ...
  `;

  // successCallback
  codeSuccessCallbackExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSuccessCallbackExample()">
    Lanzar diálogo
  </mv-button>
  `;

  codeSuccessCallbackExampleTS = `
  ...

  
  exampleSuccessCallbackExample(){
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
    }

    function successCallback(result: any){
      console.log(result);
      if(result.accept){
        alert('botón accept pulsado');
      }else if(result.close){
        alert('botón close pulsado');
      }else if(result.out){
        alert('Se ha pulsado fuera del dialog');
      }else if(result.login){
        alert('botón login pulsado');
      }else if(result.init){
        alert('botón inicio pulsado');
      }
    }

    errorData['successCallback'] = successCallback;
    this._appService.openDialogError(errorData);
  }
  ...
  `;
  codeSuccessCallbackExampleReturn = `
    {
      accept: false,
      close: false,
      out: true,
      login: false,
      init: false
    }
  `;
  // titleWarn
  codeTitleWarnExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleTitleWarnTrue()">
    Lanzar diálogo
  </mv-button>
  `;

  codeTitleWarnExampleTS = `
  ...

  exampleTitleWarnTrue(){
    const errorData: any = {
      title: 'Error',
      text: this.MSG_ERROR,
      titleWarn: true
    }

  }

  ...
  `;

  // titleAccent
  codeTitleAccentExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleTitleAccentTrue()">
    Lanzar diálogo
  </mv-button>
  `;

  codeTitleAccentExampleTS = `
  ...

  exampleTitleAccentTrue(){
    const errorData: any = {
      title: 'Error',
      titleAccent: true,
      text: 'Ha ocurrido un error'
    }

  }

  ...
  `;

  // title
  codeTitleExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleTitle()">
    Lanzar diálogo
  </mv-button>
  `;

  codeTitleExampleTS = `
  ...

  exampleTitle(){
    const errorData: any = {
      title: 'Error crítico',
      titleWarn: true,
      text: 'Ha ocurrido un error'
    }

  }

  ...
  `;
  readonly MSG_ERROR = 'Ha ocurrido un error';
  readonly MSG_DETAIL_ERROR = 'Detalle del error';
  constructor(
    private readonly _appService: AppService,
    private readonly http: HttpClient,
  ) { }

  ngOnInit() {
  }


  exampleDialogErrorAcceptAppearance() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      acceptAppearance: 'fab',
    };
    this._appService.openDialogError(errorData);
  }

  exampleDialogErrorAcceptColor() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      acceptColor: 'warn',
    };
    this._appService.openDialogError(errorData);
  }

  exampleDialogErrorAcceptText() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      acceptText: 'Confirmación',
    };
    this._appService.openDialogError(errorData);
  }

  exampleDialogDisableClose() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      disableClose: true,
    };
    this._appService.openDialogError(errorData);
  }

  exampleDialogErrorTextAppearance() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      acceptText: 'Confirmación',
      errorText: 'Error en la línea de código 195',
    };
    this._appService.openDialogError(errorData);
  }

  exampleDialogErrorInitAppearance() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      initAppearance: 'fab',
    };
    this._appService.openDialogError(errorData);
  }

  exampleDialogErrorInitColor() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      initColor: 'warn',
    };
    this._appService.openDialogError(errorData);
  }

  exampleDialogErrorLoginAppearance() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      loginAppearance: 'fab',
    };
    this._appService.openDialogError(errorData);
  }

  exampleDialogErrorLoginColor() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      loginColor: 'warn',
    };
    this._appService.openDialogError(errorData);
  }

  exampleShowAcceptButtonTrue() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showAcceptButton: true,
    };
    this._appService.openDialogError(errorData);
  }

  exampleShowAcceptButtonFalse() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showAcceptButton: false,
    };
    this._appService.openDialogError(errorData);
  }

  exampleShowInitButtonTrue() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showInitButton: true,
    };
    this._appService.openDialogError(errorData);
  }

  exampleShowInitButtonFalse() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showInitButton: false,
    };
    this._appService.openDialogError(errorData);
  }

  exampleShowCloseButtonTrue() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showCloseButton: true,
    };
    this._appService.openDialogError(errorData);
  }

  exampleShowCloseButtonFalse() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showCloseButton: false,
    };
    this._appService.openDialogError(errorData);
  }

  exampleShowLoginButtonTrue() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showLoginButton: true,
    };
    this._appService.openDialogError(errorData);
  }

  exampleShowLoginButtonFalse() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      showLoginButton: false,
    };
    this._appService.openDialogError(errorData);
  }

  exampleShowDetailTrue() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      errorText: this.MSG_DETAIL_ERROR,
      showDetail: true,
    };
    this._appService.openDialogError(errorData);
  }

  exampleShowDetailFalse() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
      errorText: this.MSG_DETAIL_ERROR,
      showDetail: false,
    };
    this._appService.openDialogError(errorData);
  }

  exampleTitle() {
    const errorData: any = {
      title: 'Error crítico',
      titleWarn: true,
      text: this.MSG_ERROR,
    };
    this._appService.openDialogError(errorData);
  }

  exampleTitleWarnTrue() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
    };
    this._appService.openDialogError(errorData);
  }

  exampleTitleAccentTrue() {
    const errorData: any = {
      title: 'Error',
      titleAccent: true,
      text: this.MSG_ERROR,
    };
    this._appService.openDialogError(errorData);
  }

  exampleSuccessCallbackExample() {
    const errorData: any = {
      title: 'Error',
      titleWarn: true,
      text: this.MSG_ERROR,
    };

    function successCallback(result: any) {
      console.log(result);
      if (result.accept) {
        alert('botón accept pulsado');
      } else if (result.close) {
        alert('botón close pulsado');
      } else if (result.out) {
        alert('Se ha pulsado fuera del dialog');
      } else if (result.login) {
        alert('botón login pulsado');
      } else if (result.init) {
        alert('botón inicio pulsado');
      }
    }

    errorData['successCallback'] = successCallback;
    this._appService.openDialogError(errorData);
  }

  /** Ejemplo de diálogo de error local
   * Lanzar manualmente el dialogo de error
   */
  exampleDialogErrorExample() {
    const errorData: any = {
      title: 'Error obtiendo datos de expiente',
      text: 'No se han podido obtener los datos del expendiente 2023-11233339. Compruebe que su número de expediente es correcto Si es correcto.\nCierre la aplicación y vuelva a intentarlo en unos minutos',
      errorText: this.MSG_DETAIL_ERROR,
      titleWarn: true,
      showAcceptButton: true,
      showLoginButton: true,
      showInitButton: true,
      disableClose: true,
      showDetail: false,
      acceptAppearance: 'raised',
      loginAppearance: 'flat',
      initAppearance: 'flat',
      acceptColor: 'warn',
      loginColor: 'primary',
      initColor: 'primary',
    };

    this._appService.openDialogError(errorData);
  }

  /** Ejemplo de error de una llamada http controlado por MOVA2
   * Llamada http 404
   */
  ejemploUsoMovaError() {
    console.log('Ejemplo de uso no controlado');

    const url = 'http://gestiona3.madrid.org/portalapps/webapps/mova2/mova_mov_error';
    const params: any = {};

    this.http.get<any[]>(url, {params})
        .subscribe(
            (data) => console.log(data),
            (err) => console.log(err),
        );
  }
  /** Ejemplo de error 2 de una llamada http controlado por MOVA2
   * Llamada http 500
   */
  ejemploUsoMovaError2() {
    console.log('Ejemplo de uso no controlado');

    const url = 'https://gestiona3.madrid.org/mova_rest_servicios/v1/consultas/do?idApp=aaaa';
    const params: any = {};

    this.http.get<any[]>(url, {params})
        .subscribe(
            (data) => console.log(data),
            (err) => console.log(err),
        );
  }

  /** Ejemplo de error de una llamada http capturando el error
   * Llamada http capturando error
   */


  httpCallCapturingErrorMessage = false;

  ejemploUsoCustomError() {
    console.log('Ejemplo de uso controlado');

    const url = 'http://gestiona3.madrid.org/portalapps/webapps/mova2/mova_mov_error';

    const headers = new HttpHeaders()
        .set('mv-hide-error', 'true');

    this.http.get<any[]>(url, {headers} )
        .subscribe(
            (data) => console.log(data),
            (err) => {
              this.httpCallCapturingErrorMessage = true;
              /*
              console.log('Error controlado');

              const errorData: any = {
                title: 'Se produjo un error',
                text:
                  'Error cargando las aplicaciones del usuario.<br><br>' +
                  'Compruebe su conexión a internet<br>y vuelva a intentarlo' +
                  ' en unos segundos',
                errorText: '',
                titleWarn: true,
                showAcceptButton: true,
                showLoginButton: false,
                showInitButton: true,
                disableClose: true,
                showDetail: false,
                acceptAppearance: 'raised',
                loginAppearance: 'raised',
                initAppearance: 'raised',
                acceptColor: 'warn',
                loginColor: 'secondary',
                initColor: 'secondary',
              };

              function successCallback(result: any) {
                console.log('botón pulsado');
              }

              errorData['successCallback'] = successCallback;

              this._appService.openDialogError(errorData);

              */
            },
        );
  }
}

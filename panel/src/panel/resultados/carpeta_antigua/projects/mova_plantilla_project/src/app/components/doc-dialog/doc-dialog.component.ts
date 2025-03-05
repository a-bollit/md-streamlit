import {Component, OnInit} from '@angular/core';
import {AppService} from '@mova/components/core';

@Component({
  selector: 'app-doc-dialog',
  templateUrl: './doc-dialog.html',
  styleUrls: ['./doc-dialog.scss'],
})
export class DocDialog implements OnInit {
  // Uso del componente
  codeUseExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogExample()">
    Lanzar diálogo
  </mv-button>
  `;

  codeUseExampleTS = `
  import { AppService } from '@mova/components/core';

  ...

  readonly MSG_CONFIRMACION = 'Confirmación';
  readonly MSG_TEXTO_SALIR = '¿Estás seguro que deseas salir? Si sales perderás los datos permanentemente.';
  
  constructor(
    private _appService: AppService
  ) { }

  ngOnInit() {
  }

  exampleDialogExample(){
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Salir',
      cancelText: 'Cancelar'
    }


    this._appService.openDialog(data);
  }

  ...
  `;

  // acceptAppearance
  codeAcceptAppearanceExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogAcceptAppearance()">
    Lanzar diálogo
  </mv-button>
  `;

  codeAcceptAppearanceExampleTS = `
  ...

  exampleDialogAcceptAppearance(){
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      acceptAppearance: 'fab'
    }


    this._appService.openDialog(data);
  }

  ...
  `;

  // acceptColor
  codeAcceptColorExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogAcceptColor()">
    Lanzar diálogo
  </mv-button>
  `;

  codeAcceptColorExampleTS = `
  ...

  exampleDialogAcceptColor(){
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      acceptAppearance: 'fab'
    }


    this._appService.openDialog(data);
  }

  ...
  `;

  // acceptText
  codeAcceptTextExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogAcceptText()">
    Lanzar diálogo
  </mv-button>
  `;

  codeAcceptTextExampleTS = `
  ...

  exampleDialogAcceptText(){
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: this.MSG_CONFIRMACION,
      cancelText: 'Cancelar'
    }


    this._appService.openDialog(data);
  }

  ...
  `;

  // cancelAppearance
  codeCancelAppearanceExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogCancelAppearance()">
    Lanzar diálogo
  </mv-button>
  `;

  codeCancelAppearanceExampleTS = `
  ...

  exampleDialogCancelAppearance(){
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      cancelAppearance: 'fab'
    }


    this._appService.openDialog(data);
  }

  ...
  `;

  // cancelColor
  codeCancelColorExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogCancelColor()">
    Lanzar diálogo
  </mv-button>
  `;

  codeCancelColorExampleTS = `
  ...

  exampleDialogCancelColor(){
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      cancelColor: 'primary'
    }


    this._appService.openDialog(data);
  }

  ...
  `;

  // cancelText
  codeCancelTextExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleDialogCancelText()">
    Lanzar diálogo
  </mv-button>
  `;

  codeCancelTextExampleTS = `
  ...

  exampleDialogCancelText(){
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Quiero salir'
    }


    this._appService.openDialog(data);
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
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      showAcceptButton: true
    }


    this._appService.openDialog(data);
  }

  exampleShowAcceptButtonFalse(){
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      showAcceptButton: false
    }


    this._appService.openDialog(data);
  }

  ...
  `;

  // showCancelButton
  codeShowCancelButtonExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleShowCancelButtonTrue()">
    Lanzar diálogo
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleShowCancelButtonFalse()">
    Lanzar diálogo
  </mv-button>
  `;

  codeShowCancelButtonExampleTS = `
  ...

  exampleShowCancelButtonTrue(){
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      showCancelButton: true
    }


    this._appService.openDialog(data);
  }

  exampleShowCancelButtonFalse(){
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      showCancelButton: false
    }


    this._appService.openDialog(data);
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
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      showCloseButton: true
    }


    this._appService.openDialog(data);
  }

  exampleShowCloseButtonFalse(){
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      showCloseButton: false
    }


    this._appService.openDialog(data);
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
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      showCloseButton: true
    }

    function successCallback(result: any){
      if(result.accept){
        alert('botón Aceptar pulsado');
      }else if(result.cancel){
        alert('botón Cancelar pulsado');
      }else if(result.close){
        alert('Dialogo cerrado');
      }else if(result.out){
        alert('Click fuera del dialogo');
      }
    }

    data['successCallback'] = successCallback;

    this._appService.openDialog(data);
  }

  ...
  `;

  returnSuccessCallbackExampleTS = `
  {
    accept: false,
    cancel: false,
    out: true,
    close: false
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
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      titleWarn: true
    }


    this._appService.openDialog(data);
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
    let data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      titleAccent: true
    }


    this._appService.openDialog(data);
  }

  ...
  `;
  readonly MSG_CONFIRMACION = 'Confirmación';
  readonly MSG_TEXTO_SALIR = '¿Estás seguro que deseas salir? Si sales perderás los datos permanentemente.';

  constructor(
    private readonly _appService: AppService,
  ) { }

  ngOnInit() {
  }

  exampleDialogExample() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Salir',
      cancelText: 'Cancelar',
    };


    this._appService.openDialog(data);
  }

  exampleDialogAcceptAppearance() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      acceptAppearance: 'fab',
    };


    this._appService.openDialog(data);
  }

  exampleDialogAcceptColor() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      acceptColor: 'warn',
    };


    this._appService.openDialog(data);
  }

  exampleDialogAcceptText() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: this.MSG_CONFIRMACION,
      cancelText: 'Cancelar',
    };


    this._appService.openDialog(data);
  }

  exampleDialogCancelAppearance() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      cancelAppearance: 'fab',
    };


    this._appService.openDialog(data);
  }

  exampleDialogCancelColor() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      cancelColor: 'primary',
    };


    this._appService.openDialog(data);
  }

  exampleDialogCancelText() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Quiero salir',
    };


    this._appService.openDialog(data);
  }

  exampleShowAcceptButtonTrue() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      showAcceptButton: true,
    };


    this._appService.openDialog(data);
  }

  exampleShowAcceptButtonFalse() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      showAcceptButton: false,
    };


    this._appService.openDialog(data);
  }

  exampleShowCancelButtonTrue() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      showCancelButton: true,
    };


    this._appService.openDialog(data);
  }

  exampleShowCancelButtonFalse() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      showCancelButton: false,
    };


    this._appService.openDialog(data);
  }

  exampleShowCloseButtonTrue() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      showCloseButton: true,
    };


    this._appService.openDialog(data);
  }

  exampleShowCloseButtonFalse() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      showCloseButton: false,
    };


    this._appService.openDialog(data);
  }

  exampleTitleWarnTrue() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      titleWarn: true,
    };


    this._appService.openDialog(data);
  }

  exampleTitleAccentTrue() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      titleAccent: true,
    };


    this._appService.openDialog(data);
  }

  exampleSuccessCallbackExample() {
    const data: any = {
      title: this.MSG_CONFIRMACION,
      text: this.MSG_TEXTO_SALIR,
    };

    function successCallback(result: any) {
      if (result.accept) {
        alert('botón Aceptar pulsado');
      } else if (result.cancel) {
        alert('botón Cancelar pulsado');
      } else if (result.close) {
        alert('Dialogo cerrado');
      } else if (result.out) {
        alert('Click fuera del dialogo');
      }
    }

    data['successCallback'] = successCallback;
    this._appService.openDialog(data);
  }
}

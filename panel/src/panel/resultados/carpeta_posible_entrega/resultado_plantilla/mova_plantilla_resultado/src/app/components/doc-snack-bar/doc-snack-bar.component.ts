import {Component, OnInit} from '@angular/core';
import {AppService} from '@mova/components/core';

@Component({
  selector: 'app-doc-snack-bar',
  templateUrl: './doc-snack-bar.html',
  styleUrls: ['./doc-snack-bar.scss'],
})
export class DocSnackBar implements OnInit {
  // Uso del componente
  codeUseExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackBar()">
    Lanzar snack bar
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

  exampleSnackBar(){
    let data: any = {
      text: 'Desconexión realizada correctamente'
    }
    this._appService.showSnackBar(data);
  }

  ...
  `;

  // ActionText
  codeActionTextExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackActionTextExample()">
    Lanzar snack bar
  </mv-button>
  `;

  codeActionTextExampleTS = `
  ...

  exampleSnackActionTextExample(){
    let data: any = {
      text: 'Elementos borrados',
      actionText: 'Deshacer'
    }
    this._appService.showSnackBar(data);
  }

  ...
  `;

  // afterDismissed
  codeAfterDismissedExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackAfterDismissedExample()">
    Lanzar snack bar
  </mv-button>
  `;

  codeAfterDismissedExampleTS = `
  ...

  exampleSnackAfterDismissedExample(){
    let data: any = {
      text: 'Acción realizada'
    }

    function afterDismissed(){
      alert('Acción afterDismissed');
    }

    data['afterDismissed'] = afterDismissed;

    this._appService.showSnackBar(data);
  }

  ...
  `;

  // duration
  codeDurationExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackDurationExample(1000)">
    Lanzar duration 1000ms
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackDurationExample(8000)">
    Lanzar duration 8000ms
  </mv-button>
  `;

  codeDurationExampleTS = `
  ...

  exampleSnackDurationExample(duration: number){
    let data: any = {
      text: 'Acción realizada',
      duration: duration
    }
    this._appService.showSnackBar(data);
  }

  ...
  `;

  // onAction
  codeOnActionExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackOnActionExample()">
    Lanzar snack bar
  </mv-button>
  `;

  codeOnActionExampleTS = `
  ...

  exampleSnackOnActionExample(){
    let data: any = {
      text: 'Acción realizada',
      actionText: 'Aceptar'
    }

    function onAction(){
      alert('Acción onAction');
    }

    data['onAction'] = onAction;

    this._appService.showSnackBar(data);
  }

  ...
  `;

  // Type
  codeTypeExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackType('info')">
    Lanzar snack info
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackType('warning')">
    Lanzar snack warn
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackType('danger')">
    Lanzar snack danger
  </mv-button>
  `;

  codeTypeExampleTS = `
  ...

  exampleSnackType(type: string){
    let data: any;
    switch (type) {
      case 'warning':
        data = {
          text: 'Acción tipo warn',
          type: type
        }
        break;
      case 'info':
        data = {
          text: 'Acción tipo info',
          type: type
        }
        break;
      case 'danger':
        data = {
          text: 'Acción tipo danger',
          type: type
        }
        break;
      default:
        break;
    }
    this._appService.showSnackBar(data);
  }

  ...
  `;

  // Text
  codeTextExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackTextExample()">
    Lanzar snack bar
  </mv-button>
  `;

  codeTextExampleTS = `
  ...

  exampleSnackTextExample(){
    let data: any = {
      text: 'La acción ha resultado satisfactoria'
    }
    this._appService.showSnackBar(data);
  }

  ...
  `;

  // verticalPosition
  codeVerticalPositionExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackVerticalPosition('top')">
    Lanzar snack 'top'
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackVerticalPosition('bottom')">
    Lanzar snack 'bottom'
  </mv-button>
  `;

  codeVerticalPositionExampleTS = `
  ...

  exampleSnackVerticalPosition(verticalPosition: string){
    let data: any = {
      text: 'Acción realizada',
      verticalPosition: verticalPosition
    }
    this._appService.showSnackBar(data);
  }

  ...
  `;

  // horizontalPosition
  codeHorizontalPositionExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackHorizontalPosition('start')">
    Lanzar snack 'start'
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackHorizontalPosition('center')">
    Lanzar snack 'center'
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackHorizontalPosition('end')">
    Lanzar snack 'end'
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackHorizontalPosition('left')">
    Lanzar snack 'left'
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleSnackHorizontalPosition('right')">
    Lanzar snack 'right'
  </mv-button>
  `;

  codeHorizontalPositionExampleTS = `
  ...

  exampleSnackHorizontalPosition(horizontalPosition: string){
    let data: any = {
      text: 'Acción realizada',
      horizontalPosition: horizontalPosition
    }
    this._appService.showSnackBar(data);
  }

  ...
  `;
  readonly okAction = 'Acción realizada';
  constructor(
    private readonly _appService: AppService,
  ) { }

  ngOnInit() {
  }

  exampleSnackBar() {
    const data: any = {
      text: 'Desconexión realizada correctamente',
    };
    this._appService.showSnackBar(data);
  }

  exampleSnackType(type: string) {
    let data: any;
    switch (type) {
      case 'warning':
        data = {
          text: 'Acción tipo warn',
          type,
        };
        break;
      case 'info':
        data = {
          text: 'Acción tipo info',
          type,
        };
        break;
      case 'danger':
        data = {
          text: 'Acción tipo danger',
          type,
        };
        break;
      default:
        break;
    }
    this._appService.showSnackBar(data);
  }

  exampleSnackTextExample() {
    const data: any = {
      text: 'La acción ha resultado satisfactoria',
    };
    this._appService.showSnackBar(data);
  }

  exampleSnackActionTextExample() {
    const data: any = {
      text: 'Elementos borrados',
      actionText: 'Deshacer',
    };
    function successCallback(result: any) {
      alert(result);
    }
    data['successCallback'] = successCallback;
    this._appService.showSnackBar(data);
  }

  exampleSnackAfterDismissedExample() {
    const data: any = {
      text: this.okAction,
    };

    function afterDismissed() {
      alert('Acción afterDismissed');
    }

    data['afterDismissed'] = afterDismissed;

    this._appService.showSnackBar(data);
  }

  exampleSnackOnActionExample() {
    const data: any = {
      text: this.okAction,
      actionText: 'Aceptar',
    };

    function onAction() {
      alert('Acción onAction');
    }

    data['onAction'] = onAction;

    this._appService.showSnackBar(data);
  }

  exampleSnackVerticalPosition(verticalPosition: string) {
    const data: any = {
      text: this.okAction,
      verticalPosition,
    };
    this._appService.showSnackBar(data);
  }

  exampleSnackHorizontalPosition(horizontalPosition: string) {
    const data: any = {
      text: this.okAction,
      horizontalPosition,
    };
    this._appService.showSnackBar(data);
  }

  exampleSnackDurationExample(duration: number) {
    const data: any = {
      text: this.okAction,
      duration: 10000000,
    };
    this._appService.showSnackBar(data);
  }
}

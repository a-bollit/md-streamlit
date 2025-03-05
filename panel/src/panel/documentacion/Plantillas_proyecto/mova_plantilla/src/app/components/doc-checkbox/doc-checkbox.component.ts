import {Component, OnInit} from '@angular/core';
import {NgForm, FormBuilder} from '@angular/forms';
import {AppService} from '@mova/components/core';

@Component({
  selector: 'app-doc-checkbox',
  templateUrl: './doc-checkbox.html',
  styleUrls: ['./doc-checkbox.scss'],
})
export class DocCheckbox implements OnInit {
  // Ejemplo de uso
  codeUseExampleHTML = `
  <mv-checkbox-x
    [(ngModel)]="checkbox001Model">
  </mv-checkbox-x>
  `;

  codeUseExampleTS = `
  ...

  checkbox001Model = true;

  constructor(

  ) {}

  ...
  `;

  // color
  codeColorHTML = `
  <mv-checkbox-x
    color="primary">
  </mv-checkbox-x>

  <mv-checkbox-x
    color="accent">
  </mv-checkbox-x>

  <mv-checkbox-x
    color="warn">
  </mv-checkbox-x>

  <mv-checkbox-x
    color="corporative">
  </mv-checkbox-x>
  `;

  codeColorTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // customFalse
  codeCustomFalseHTML = `
  <mv-checkbox-x
    [(ngModel)]="checkbox002Model"
    customFalse="no">
  </mv-checkbox-x>

  <mv-checkbox-x
    [(ngModel)]="checkbox003Model"
    customFalse=-1>
  </mv-checkbox-x>
  `;

  codeCustomFalseTS = `
  ...

  checkbox002Model = 'no';
  checkbox003Model = -1;

  ...
  `;

  // customTrue
  codeCustomTrueHTML = `
  <mv-checkbox-x
    [(ngModel)]="checkbox004Model"
    customTrue="si">
  </mv-checkbox-x>

  <mv-checkbox-x
    [(ngModel)]="checkbox005Model"
    customTrue=1>
  </mv-checkbox-x>
  `;

  codeCustomTrueTS = `
  ...

  checkbox004Model = 'si';
  checkbox005Model = 1;

  ...
  `;

  // codeDelay
  codeDelayHTML = `
  <mv-checkbox-x
    delay="3000"
    (changeEvent)=changeFunctionDelay()>
  </mv-checkbox-x>
  `;

  codeDelayTS = `
  ...

  changeFunctionDelay(){
    alert('Evento después de 3000ms');
  }

  ...
  `;

  // codeDisabled
  codeDisabledHTML = `
  <mv-checkbox-x
    disabled=true>
  </mv-checkbox-x>

  <mv-checkbox-x
    disabled=false>
  </mv-checkbox-x>

  <mv-checkbox-x>
  </mv-checkbox-x>
  `;

  codeDisabledTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // formControlName
  codeFormControlNameHTML = `
  <form [formGroup]="formReactive" (ngSubmit)="onSubmitReactive(formReactive)">
    <mv-checkbox-x
      formControlName="myCheckboxName">
    </mv-checkbox-x>
    <div>
      <mv-button
        appearance="raised"
        type="submit"
        color="primary">
        Submit
      </mv-button>
    </div>
  </form>

  <p><strong>Valor recogido del form: {{formReactiveValue | json}}</strong></p>
  `;

  codeFormControlNameTS = `
  import { NgForm } from '@angular/forms';
  import { FormBuilder } from '@angular/forms';

  ...

  formReactiveValue:any = {};
  formReactive = this.fb.group({
    myCheckboxName: '',
  })

  constructor(
    private fb: FormBuilder
  ) { }

  onSubmitReactive(form) {
    this.formReactiveValue = form.value;
  }

  ...
  `;

  // codeHint
  codeHintHTML = `
  <mv-checkbox-x
    hint="Hint de prueba">
  </mv-checkbox-x>
  `;

  codeHintTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // codeHintAlign
  codeHintAlignHTML = `
  <mv-checkbox-x
    hint="Hint de prueba"
    hintAlign="start">
    Texto largo para comprobar dónde se coloca el hint
  </mv-checkbox-x>

  <mv-checkbox-x
  hint="Hint de prueba"
  hintAlign="end">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec libero 
    nisl. Ut aliquam fermentum magna, eget tempor diam sodales sed. Donec 
    fringilla est ut est interdum luctus. Praesent maximus risus id leo luctus
    fringilla. Ut quis elit vel leo auctor aliquet. Pellentesque at tellus non 
    felis gravida accumsan. Aenean maximus sed augue sit amet.
  </mv-checkbox-x>
  `;

  codeHintAlignTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // codeHintType
  codeHintTypeHTML = `
  <mv-checkbox-x
    hint="Hint de prueba"
    hintType="danger">
  </mv-checkbox-x>

  <mv-checkbox-x
    hint="Hint de prueba"
    hintType="success">
  </mv-checkbox-x>

  <mv-checkbox-x
    hint="Hint de prueba"
    hintType="warn">
  </mv-checkbox-x>

  <mv-checkbox-x
    hint="Hint de prueba"
    hintType="info">
  </mv-checkbox-x>
  `;

  codeHintTypeTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // indeterminate
  codeIndeterminateHTML = `
  <mv-checkbox-x
    [(ngModel)]="checkbox006Model"
    [(indeterminate)]=setIndeterminateModel>
  </mv-checkbox-x>

  <mv-button
    (clickEvent)="setIndeterminate()"
    color="primary">
    Poner indeterminate a true
  </mv-button>
  `;

  codeIndeterminateTS = `
  ...

  checkbox006Model:boolean;
  setIndeterminateModel:boolean = true;

  setIndeterminate(){
    this.setIndeterminateModel = true;
  }

  ...
  `;

  // labelPosition
  codeLabelPositionHTML = `
  <mv-checkbox-x
    labelPosition="after">
    labelPosition after
  </mv-checkbox-x>

  <mv-checkbox-x
    labelPosition="before">
    labelPosition before
  </mv-checkbox-x>
  `;

  codeLabelPositionTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // name
  codeNameHTML = `
  <form #formTemplate="ngForm" (ngSubmit)="onSubmitTemplate(formTemplate)">
    <mv-checkbox-x
      ngModel
      name="myCheckboxName">
    </mv-checkbox-x>
    <div>
      <mv-button
        appearance="raised"
        type="submit"
        color="primary">
        Submit
      </mv-button>
    </div>
  </form>

  <p><strong>Valor recogido del form: {{formTemplateValue | json}}</strong></p>
  `;

  codeNameTS = `
  ...

  formValue = {};

  ...

  onSubmitTemplate(form: NgForm) {
    this.formTemplateValue = form.value;
  }

  ...
  `;

  // required
  codeRequiredHTML = `
  <mv-checkbox-x
    [(ngModel)]="checkbox007Model"
    required=true>
  </mv-checkbox-x>

  <mv-checkbox-x
    [(ngModel)]="checkbox008Model"
    required=false>
  </mv-checkbox-x>

  <mv-checkbox-x
    [(ngModel)]="checkbox009Model">
  </mv-checkbox-x>
  `;

  codeRequiredTS = `
  ...

  checkbox007Model: boolean;
  checkbox008Model: boolean;
  checkbox009Model: boolean;

  ...
  `;

  // requiredHint
  codeRequiredHintHTML = `
  <mv-checkbox-x
    required=true
    [(ngModel)]="checkbox010Model"
    requiredHint="Debes rellenar este campo">
  </mv-checkbox-x>
  `;

  codeRequiredHintTS = `
  ...

  checkbox010Model: boolean;

  ...
  `;

  // size
  codeSizeHTML = `
  <mv-checkbox-x
    size="small">
  </mv-checkbox-x>

  <mv-checkbox-x>
  </mv-checkbox-x>

  <mv-checkbox-x
    size="medium">
  </mv-checkbox-x>

  <mv-checkbox-x
    size="big">
  </mv-checkbox-x>
  `;

  codeSizeTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateFirst
  codeValidateFirstHTML = `
  <mv-checkbox-x
    [(ngModel)]="checkbox011Model"
    validateFirst=true
    required=true>
  </mv-checkbox-x>

  <mv-checkbox-x
    [(ngModel)]="checkbox012Model"
    validateFirst=false
    required=true>
  </mv-checkbox-x>

  <mv-checkbox-x
    [(ngModel)]="checkbox013Model"
    required=true>
  </mv-checkbox-x>
  `;

  codeValidateFirstTS = `
  ...

  checkbox011Model: boolean;
  checkbox012Model: boolean;
  checkbox013Model: boolean;

  ...
  `;

  // validateFirst
  codeValidateOnTypeHTML = `
  <mv-checkbox-x
    [(ngModel)]="checkbox014Model"
    validateOnType=true
    required=true>
  </mv-checkbox-x>

  <mv-checkbox-x
    [(ngModel)]="checkbox015Model"
    validateOnType=false
    required=true>
  </mv-checkbox-x>

  <mv-checkbox-x
    [(ngModel)]="checkbox016Model"
    required=true>
  </mv-checkbox-x>
  `;

  codeValidateOnTypeTS = `
  ...

  checkbox014Model: boolean;
  checkbox015Model: boolean;
  checkbox016Model: boolean;

  ...
  `;

  // changeEvent
  codeChangeEventHTML = `
  <mv-checkbox-x
    (changeEvent)=changeFunction()>
  </mv-checkbox-x>
  `;

  codeChangeEventTS = `
  ...

  changeFunction(){
    alert('Evento changeEvent lanzado');
  }

  ...
  `;

  // indeterminateChangeEvent
  codeIndeterminateChangeEventHTML = `
  <mv-checkbox-x
    [(ngModel)]="checkbox017Model"
    [(indeterminate)]=setIndeterminateModel2
    (indeterminateChangeEvent)=indeterminateChangeFunction()>
  </mv-checkbox-x>

  <mv-button
    (clickEvent)="setIndeterminate2()"
    color="primary">
    Poner indeterminate a true
  </mv-button>
  `;

  codeIndeterminateChangeEventTS = `
  ...

  checkbox017Model:boolean;
  setIndeterminateModel2:boolean;

  indeterminateChangeFunction(){
    alert('Evento indeterminateChange lanzado');
  }

  setIndeterminate2(){
    this.setIndeterminateModel2 = true;
  }

  ...
  `;

  // doValidate
  codeDoValidateEventHTML = `
  <mv-checkbox-x
    #mvCheckboxValidateEx
    required=true
    validateOnType=false
    validateFirst=false>
  </mv-checkbox-x>

  <mv-button
    (clickEvent)="mvCheckboxValidateEx.doValidate()"
    color="primary">
    Validar
  </mv-button>
  `;

  codeDoValidateEventTS = `

  // Nada que añadir respecto al ejemplo principal

  `;



    //ariaLabel
  ariaLabelHtml = `
  <mv-checkbox-x
    arialLabel="Tu texto personalizado">
  </mv-checkbox-x>
  `;

  ariaLabelTS = `

  // Nada que añadir respecto al ejemplo principal

  `;



  checkbox001Model = true;
  checkbox002Model:any = 'no';
  checkbox003Model:any = -1;
  checkbox004Model:any = 'si';
  checkbox005Model:any = 1;
  checkbox006Model:boolean;
  checkbox007Model:boolean;
  checkbox008Model:boolean;
  checkbox009Model:boolean;
  checkbox010Model:boolean;
  checkbox011Model:boolean;
  checkbox012Model:boolean;
  checkbox013Model:boolean;
  checkbox014Model:boolean;
  checkbox015Model:boolean;
  checkbox016Model:boolean;
  checkbox017Model:boolean;
  setIndeterminateModel = true;
  setIndeterminateModel2:boolean;

  formReactiveValue:any = {};
  formTemplateValue:any = {};

  formReactive = this.fb.group({
    myCheckboxName: '',
  })

  constructor(
    private readonly fb: FormBuilder,
    private readonly _appService: AppService,
  ) { }

  ngOnInit() {
  }

  onSubmitReactive(form) {
    this.formReactiveValue = form.value;
  }

  onSubmitTemplate(form: NgForm) {
    this.formTemplateValue = form.value;
  }

  changeFunction() {
    this._appService.showSnackBar({
      text: 'Evento changeEvent lanzado',
      type: 'info',
    });
  }

  changeFunctionDelay() {
    this._appService.showSnackBar({
      text: 'Evento después de 3000ms',
      type: 'info',
    });
  }

  indeterminateChangeFunction() {
    this._appService.showSnackBar({
      text: 'Evento indeterminateChange lanzado',
      type: 'info',
    });
  }

  setIndeterminate() {
    this.setIndeterminateModel = true;
  }

  setIndeterminate2() {
    this.setIndeterminateModel2 = true;
  }
}

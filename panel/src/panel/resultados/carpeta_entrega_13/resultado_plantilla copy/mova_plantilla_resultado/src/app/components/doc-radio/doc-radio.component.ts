import {Component, OnInit} from '@angular/core';
import {NgForm, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-doc-radio',
  templateUrl: './doc-radio.html',
  styleUrls: ['./doc-radio.scss'],
})
export class DocRadio implements OnInit {
  // Ejemplo de uso
  codeUseExampleHTML = `
  <mv-radio
    [(ngModel)]="radio001Model"
    [options]=radioOptions>
  </mv-radio>
  `;

  codeUseExampleTS = `
  ...

  radio001Model:any;

  radioOptionsEstaciones: any[] = [
    {
      "id": "p",
      "text": "Primavera"
    },
    {
      "id": "v",
      "text": "Verano"
    },
    {
      "id": "o",
      "text": "Otoño"
    },
    {
      "id": "i",
      "text": "Invierno"
    }
  ];

  ...

  constructor(

  ) {}

  ...
  `;

  // alignHorizontal
  codeAlignHorizontalHTML = `
  <mv-radio
    [options]=radioOptions
    alignHorizontal=true>
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    alignHorizontal=false>
  </mv-radio>

  <mv-radio
    [options]=radioOptions>
  </mv-radio>
  `;

  codeAlignHorizontalTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // color
  codeColorHTML = `
  <mv-radio
    [options]=radioOptions
    color="primary">
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    color="accent">
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    color="warn">
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    color="corporative">
  </mv-radio>
  `;

  codeColorTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // delay
  codeDelayHTML = `
  <mv-radio
    [options]=radioOptions
    delay="3000"
    (changeEvent)=changeFunctionDelay()>
  </mv-radio>
  `;

  codeDelayTS = `
  ...

  changeFunctionDelay(){
    alert('Evento después de 3000ms');
  }

  ...
  `;

  // disabled
  codeDisabledHTML = `
  <mv-radio
    [options]=radioOptions
    disabled=true>
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    disabled=false>
  </mv-radio>

  <mv-radio
    [options]=radioOptions>
  </mv-radio>
  `;

  codeDisabledTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // hint
  codeHintHTML = `
  <mv-radio
    [options]=radioOptions
    hint="Hint de prueba">
  </mv-radio>
  `;

  codeHintTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // formControlName
  codeFormControlNameHTML = `
  <form [formGroup]="formReactive" (ngSubmit)="onSubmitReactive(formReactive)">
    <mv-radio
      formControlName="myRadioName"
      [options]=radioOptions>
    </mv-radio>
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
    myRadioName: '',
  })

  constructor(
    private fb: FormBuilder
  ) { }

  onSubmitReactive(form) {
    this.formReactiveValue = form.value;
  }

  ...
  `;

  // hintAlign
  codeHintAlignHTML = `
  <mv-radio
    [options]=radioOptions
    hint="Hint de prueba"
    hintAlign="start">
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    hint="Hint de prueba"
    hintAlign="end">
  </mv-radio>
  `;

  codeHintAlignTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // hintType
  codeHintTypeHTML = `
  <mv-radio
    [options]=radioOptions
    hint="Hint de prueba"
    hintType="danger">
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    hint="Hint de prueba"
    hintType="success">
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    hint="Hint de prueba"
    hintType="warn">
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    hint="Hint de prueba"
    hintType="info">
  </mv-radio>
  `;

  codeHintTypeTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // labelPosition
  codeLabelPositionHTML = `
  <mv-radio
    [options]=radioOptions
    labelPosition="after">
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    labelPosition="before">
  </mv-radio>
  `;

  codeLabelPositionTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // name
  codeNameHTML = `
  <form #formTemplate="ngForm" (ngSubmit)="onSubmitTemplate(formTemplate)">
    <mv-radio
      ngModel
      name="myRadioName"
      [options]=radioOptions>
    </mv-radio>
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
  import { NgForm } from '@angular/forms';

  ...

  formTemplateValue:any = {};

  onSubmitTemplate(form: NgForm) {
    this.formTemplateValue = form.value;
  }

  ...
  `;

  // options
  codeOptionsHTML = `
  <mv-radio
    [options]=radioOptions>
  </mv-radio>

  <mv-radio
    [options]=radioOptionsEstaciones>
  </mv-radio>
  `;

  codeOptionsTS = `
  ...

  radioOptionsEstaciones: any[] = [
    {
      "id": "p",
      "text": "Primavera"
    },
    {
      "id": "v",
      "text": "Verano"
    },
    {
      "id": "o",
      "text": "Otoño"
    },
    {
      "id": "i",
      "text": "Invierno"
    }
  ];

  radioOptions: any[] = [
    {
      "id": 1,
      "text": "Opción 1"
    },
    {
      "id": 2,
      "text": "Opción 2"
    }
  ]

  ...
  `;

  // required
  codeRequiredHTML = `
  <mv-radio
    [options]=radioOptions
    [(ngModel)]="radio002Model"
    required=true>
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    [(ngModel)]="radio003Model"
    required=false>
  </mv-radio>

  <mv-radio
    [(ngModel)]="radio004Model"
    [options]=radioOptions>
  </mv-radio>
  `;

  codeRequiredTS = `
  ...

  radio002Model: any;
  radio003Model: any;
  radio004Model: any;

  ...
  `;

  // requiredHint
  codeRequiredHintHTML = `
  <mv-radio
    [options]=radioOptions
    [(ngModel)]="radio005Model"
    required=true
    requiredHint="Debes rellenar este campo">
  </mv-radio>

  `;

  codeRequiredHintTS = `
  ...

  radio005Model: any;

  ...
  `;

  // size
  codeSizeHTML = `
  <mv-radio
    [options]=radioOptions
    size="small">
  </mv-radio>

  <mv-radio
    [options]=radioOptions>
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    size="medium">
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    size="big">
  </mv-radio>

  `;

  codeSizeTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateFirst
  codeValidateFirstHTML = `
  <mv-radio
    [options]=radioOptions
    [(ngModel)]="radio006Model"
    validateFirst=true
    required=true>
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    [(ngModel)]="radio007Model"
    validateFirst=false
    required=true>
  </mv-radio>

  <mv-radio
    [(ngModel)]="radio008Model"
    [options]=radioOptions
    required=true>
  </mv-radio>

  `;

  codeValidateFirstTS = `
  ...

  radio006Model: any;
  radio007Model: any;
  radio008Model: any;

  ...
  `;

  // validateOnType
  codeValidateOnTypeHTML = `
  <mv-radio
    [options]=radioOptions
    [(ngModel)]="radio009Model"
    validateOnType=true
    required=true>
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    [(ngModel)]="radio010Model"
    validateOnType=false
    required=true>
  </mv-radio>

  <mv-radio
    [options]=radioOptions
    [(ngModel)]="radio011Model"
    required=true>
  </mv-radio>

  `;

  codeValidateOnTypeTS = `
  ...

  radio009Model: any;
  radio010Model: any;
  radio011Model: any;

  ...
  `;

  // changeEvent
  codeChangeEventHTML = `
  <mv-radio
    [options]=radioOptions
    (changeEvent)=changeFunction()>
  </mv-radio>

  `;

  codeChangeEventTS = `
  ...

  changeFunction(){
    alert('Evento changeEvent lanzado');
  }

  ...
  `;

  // hintToggle
  codeHintToggleHTML = `
  <mv-radio
    #mvRadioHint
    hint="Hint de prueba"
    [options]=radioOptions>
  </mv-radio>

  <mv-button
    (clickEvent)="mvRadioHint.hintToggle()"
    color="primary">
    Mostrar/ocultar hint
  </mv-button>

  `;

  codeHintToggleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // doValidate
  codeDoValidateEventHTML = `
  <mv-radio
    #mvRadioValidateEx
    [options]=radioOptions
    required=true
    validateOnType=false
    validateFirst=false>
  </mv-radio>

  <mv-button
    (clickEvent)="mvRadioValidateEx.doValidate()"
    color="primary">
    Validar
  </mv-button>
  `;

  codeDoValidateEventTS = `

  // Nada que añadir respecto al ejemplo principal

  `;



  //ariaLabel
  ariaLabelHtml = `
  <mv-radio
    arialLabel="Tu texto personalizado">
  </mv-radio>
  `;

  ariaLabelTS = `

  // Nada que añadir respecto al ejemplo principal

  `;




  radio001Model:any;
  radio002Model:any;
  radio003Model:any;
  radio004Model:any;
  radio005Model:any;
  radio006Model:any;
  radio007Model:any;
  radio008Model:any;
  radio009Model:any;
  radio010Model:any;
  radio011Model:any;

  radioOptionsEstaciones: any[] = [
    {
      'id': 'p',
      'text': 'Primavera',
    },
    {
      'id': 'v',
      'text': 'Verano',
    },
    {
      'id': 'o',
      'text': 'Otoño',
    },
    {
      'id': 'i',
      'text': 'Invierno',
    },
  ];

  formReactiveValue:any = {};
  formTemplateValue:any = {};

  radioOptions: any[] = [
    {
      'id': 1,
      'text': 'Opción 1',
    },
    {
      'id': 2,
      'text': 'Opción 2',
    },
  ]

  formReactive = this.fb.group({
    myRadioName: '',
  })

  constructor(
    private readonly fb: FormBuilder,
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
    alert('Evento changeEvent lanzado');
  }

  changeFunctionDelay() {
    alert('Evento después de 3000ms');
  }
}

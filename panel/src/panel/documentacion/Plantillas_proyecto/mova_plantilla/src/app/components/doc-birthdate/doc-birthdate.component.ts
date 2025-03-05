import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-doc-birthdate',
  templateUrl: './doc-birthdate.html',
  styleUrls: ['./doc-birthdate.scss'],
})
export class DocBirthdate implements OnInit {
  // Ejemplo de uso
  codeUseExampleHTML = `
  <mv-birthdate
    [(ngModel)]="birthdate001Model">
  </mv-birthdate>
  `;

  codeUseExampleTS = `
  ...

  birthdate001Model:any;

  ...

  constructor(

  ) {}

  ...
  `;

  // adapt
  codeAdaptExampleHTML = `
  <mv-birthdate
    adapt=true>
  </mv-birthdate>

  <mv-birthdate
    adapt=false>
  </mv-birthdate>

  <mv-birthdate>
  </mv-birthdate>
  `;

  codeAdaptExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // appearance
  codeAppearanceExampleHTML = `
  <mv-birthdate
    appearance="legacy">
  </mv-birthdate>

  <mv-birthdate
    appearance="standard">
  </mv-birthdate>

  <mv-birthdate
    appearance="fill">
  </mv-birthdate>

  <mv-birthdate
    appearance="outline">
  </mv-birthdate>
  `;

  codeAppearanceExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // delay
  codeDelayExampleHTML = `
  <mv-birthdate
    delay="3000"
    (changeEvent)=changeFunctionDelay()>
  </mv-birthdate>
  `;

  codeDelayExampleTS = `
  ...

  changeFunctionDelay(){
    alert('Evento después de 3000ms');
  }

  ...
  `;

  // disabled
  codeDisabledExampleHTML = `
  <mv-birthdate
    disabled=true>
  </mv-birthdate>

  <mv-birthdate
    disabled=false>
  </mv-birthdate>

  <mv-birthdate>
  </mv-birthdate>
  `;

  codeDisabledExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // floatLabel
  codeFloatLabelExampleHTML = `
  <mv-birthdate
    label="Propiedad floatLabel"
    floatLabel="always">
  </mv-birthdate>

  <mv-birthdate
    label="Propiedad floatLabel"
    appearance="legacy"
    floatLabel="never">
  </mv-birthdate>

  <mv-birthdate
    label="Propiedad floatLabel"
    floatLabel="auto">
  </mv-birthdate>
  `;

  codeFloatLabelExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // hint
  codeHintExampleHTML = `
  <mv-birthdate
    hint="Propiedad hint">
  </mv-birthdate>
  `;

  codeHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // hintAlign
  codeHintAlignExampleHTML = `
  <mv-birthdate
    hintAlign="start"
    hint="Hint al principio">
  </mv-birthdate>

  <mv-birthdate
    hintAlign="end"
    hint="Hint al final">
  </mv-birthdate>
  `;

  codeHintAlignExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // hintType
  codeHintTypeExampleHTML = `
  <mv-birthdate
    hintType="info"
    hint="Hint info">
  </mv-birthdate>

  <mv-birthdate
    hintType="success"
    hint="Hint success">
  </mv-birthdate>

  <mv-birthdate
    hintType="warning"
    hint="Hint warning">
  </mv-birthdate>

  <mv-birthdate
    hintType="danger"
    hint="Hint danger">
  </mv-birthdate>
  `;

  codeHintTypeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // label
  codeLabelExampleHTML = `
  <mv-birthdate"
    label="Label del birthdate">
  </mv-birthdate>
  `;

  codeLabelExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // multiple
  codeMultipleExampleHTML = `
  <mv-birthdate
    [options]="birthdateOptionsEstaciones"
    multiple=true>
  </mv-birthdate>

  <mv-birthdate
    [options]="birthdateOptionsEstaciones"
    multiple=false>
  </mv-birthdate>

  <mv-birthdate
    [options]="birthdateOptionsEstaciones">
  </mv-birthdate>
  `;

  codeMultipleExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // name
  codeNameExampleHTML = `
  <form #f="ngForm" (ngSubmit)="onSubmit(f)">
    <mv-birthdate
      ngModel
      name="myBirthdateName"
      [options]="birthdateOptionsEstaciones">
    </mv-birthdate>
    <br>
    <mv-button
      color="primary">
      Submit
    </mv-button>
  </form>
  `;

  codeNameExampleTS = `
  ...

  formValue: any = {};

  ...

  onSubmit(f: NgForm) {
    this.formValue = f.value;
  }

  ...

  `;

  // optionLabel
  codeOptionLabelExampleHTML = `
  <mv-birthdate
    optionLabel="Estaciones">
  </mv-birthdate>
  `;

  codeOptionLabelExampleTS = `
  ...

  formValue: any = {};

  ...

  onSubmit(f: NgForm) {
    this.formValue = f.value;
  }

  ...

  `;

  // options
  codeOptionsExampleHTML = `
  <mv-birthdate
    [options]=birthdateOptions>
  </mv-birthdate>

  <mv-birthdate>
  </mv-birthdate>
  `;

  codeOptionsExampleTS = `
  ...

  formValue: any = {};

  ...

  onSubmit(f: NgForm) {
    this.formValue = f.value;
  }

  ...

  `;

  // panelClass
  codePanelClassExampleHTML = `
  <mv-birthdate
    panelClass="myPanelClass">
  </mv-birthdate>
  `;

  codePanelClassExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  codePanelClassExampleCSS = `
  ...

  // Importante usar ::ng-deep
  ::ng-deep.myPanelClass{
    background: #b8b8da;
  }

  ...
  `;

  // placeholder
  codePlaceholderExampleHTML = `
  <mv-birthdate
    placeholder="Escoge una opción">
  </mv-birthdate>
  `;

  codePlaceholderExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // required
  codeRequiredExampleHTML = `
  <mv-birthdate
    validateFirst=true
    required=true>
  </mv-birthdate>

  <mv-birthdate
    validateFirst=true
    required=false>
  </mv-birthdate>

  <mv-birthdate
    validateFirst=true>
  </mv-birthdate>
  `;

  codeRequiredExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // requiredHint
  codeRequiredHintExampleHTML = `
  <mv-birthdate
    validateFirst=true
    required=true
    requiredHint="Debes rellenar este campo">
  </mv-birthdate>
  `;

  codeRequiredHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateBannedDayArray
  codeValidateBannedDayArrayExampleHTML = `
  <mv-birthdate
    [validateBannedDayArray]=validateBannedDayArrayExample>
  </mv-birthdate>
  `;

  codeValidateBannedDayArrayExampleTS = `
  ...

  validateBannedDayArrayExample: any[] = [1, 31];

  ...
  `;

  // validateBannedMonthArray
  codeValidateBannedMonthArrayExampleHTML = `
  <mv-birthdate
    [validateBannedMonthArray]=validateBannedMonthArrayExample>
  </mv-birthdate>
  `;

  codeValidateBannedMonthArrayExampleTS = `
  ...

  validateBannedMonthArrayExample: any[] = [7, 8];

  ...
  `;

  // validateBannedYearArray
  codeValidateBannedYearArrayExampleHTML = `
  <mv-birthdate
    [validateBannedYearArray]=validateBannedYearArrayExample>
  </mv-birthdate>
  `;

  codeValidateBannedYearArrayExampleTS = `
  ...

  validateBannedDayArrayExample: any[] = [2000, 2020];

  ...
  `;

  // validateBannedDayHint
  codeValidateBannedDayHintExampleHTML = `
  <mv-birthdate
    [validateBannedDayArray]=validateBannedDayArrayExample
    validateBannedDayHint="Elige otro día">
  </mv-birthdate>
  `;

  codeValidateBannedDayHintExampleTS = `
  ...

  validateBannedDayArrayExample: any[] = [1, 31];

  ...
  `;

  // validateBannedMonthHint
  codeValidateBannedMonthHintExampleHTML = `
  <mv-birthdate
    [validateBannedMonthArray]=validateBannedMonthArrayExample
    validateBannedMonthHint="Elige otro mes">
  </mv-birthdate>
  `;

  codeValidateBannedMonthHintExampleTS = `
  ...

  validateBannedMonthArrayExample: any[] = [7, 8];

  ...
  `;

  // validateBannedYearHint
  codeValidateBannedYearHintExampleHTML = `
  <mv-birthdate
    [validateBannedYearHint]=validateBannedYearArrayExample
    validateBannedYearHint="Elige otro año">
  </mv-birthdate>
  `;

  codeValidateBannedYearHintExampleTS = `
  ...

  validateBannedYearArrayExample: any[] = [2000, 2020];

  ...
  `;

  // validateFirst
  codeValidateFirstExampleHTML = `
  <mv-birthdate
    validateFirst=true
    required=true>
  </mv-birthdate>

  <mv-birthdate
    validateFirst=false
    required=true>
  </mv-birthdate>

  <mv-birthdate
    required=true>
  </mv-birthdate>

  `;

  codeValidateFirstExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateOnType
  codeValidateOnTypeExampleHTML = `
  <mv-birthdate
    validateOnType=true
    required=true>
  </mv-birthdate>

  <mv-birthdate
    validateOnType=false
    required=true>
  </mv-birthdate>

  <mv-birthdate
    required=true>
  </mv-birthdate>

  `;

  codeValidateOnTypeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // changeEvent
  codeChangeEventExampleHTML = `
  <mv-birthdate
    [options]=BirthdateOptions
    (changeEvent)=changeFunction()>
  </mv-birthdate>

  `;

  codeChangeEventExampleTS = `
  ...

  changeFunction(){
    alert('Evento changeEvent lanzado');
  }

  ...
  `;

  // hintToggle
  codeHintToggleExampleHTML = `
  <mv-birthdate
    #mvBirthdateHint
    hint="Hint de prueba">
  </mv-birthdate>

  <mv-button
    (clickEvent)="mvBirthdateHint.hintToggle()"
    color="primary">
    Mostrar/ocultar hint
  </mv-button>

  `;

  codeHintToggleExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  formValue: any = {};
  birthdate001Model: Date;

  validateBannedDayArrayExample: any[] = [1, 31];
  validateBannedMonthArrayExample: any[] = [7, 8];
  validateBannedYearArrayExample: any[] = [2000, 2020];

  constructor() { }

  ngOnInit() {}

  onSubmit(f: NgForm) {
    this.formValue = f.value;
  }

  changeFunction() {
    alert('Evento changeEvent lanzado');
  }

  changeFunctionDelay() {
    alert('Evento después de 3000ms');
  }
}

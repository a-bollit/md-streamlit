import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl, AbstractControl} from '@angular/forms';
export interface Pais {
  name: string;
}

@Component({
  selector: 'app-doc-textarea',
  templateUrl: './doc-textarea.html',
  styleUrls: ['./doc-textarea.scss'],
})
export class DocTextarea implements OnInit {
  options: Pais[] = [
    {name: 'Alemania'},
    {name: 'España'},
    {name: 'Francia'},
    {name: 'Italia'},
    {name: 'Portugal'},
    {name: 'Suiza'},
  ];
  optionsCtrl = new FormControl();
  filteredOptions: Observable<Pais[]>;
  textArea001Model: string;

  // Ejemplo de uso
  codeUseExampleHTML = `
  <mv-textarea
    [(ngModel)]="textArea001Model">
  </mv-textarea>
  `;

  codeUseExampleTS = `

  textArea001Model: string;

  ...

  constructor(

  ) {}

  ...
  `;

  // adapt
  codeAdaptExampleHTML = `
  <mv-textarea
    adapt=true>
  </mv-textarea>

  <mv-textarea
    adapt=false>
  </mv-textarea>

  <mv-textarea>
  </mv-textarea>
  `;

  codeAdaptExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // appearance
  codeAppearanceExampleHTML = `
  <mv-textarea
    appearance="legacy">
  </mv-textarea>

  <mv-textarea
    appearance="standard">
  </mv-textarea>

  <mv-textarea
    appearance="fill">
  </mv-textarea>

  <mv-textarea
    appearance="outline">
  </mv-textarea>
  `;

  codeAppearanceExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // autosize
  codeAutosizeExampleHTML = `
  <mv-textarea
    autosize=true>
  </mv-textarea>

  <mv-textarea
    autosize=false>
  </mv-textarea>

  <mv-textarea>
  </mv-textarea>
  `;

  codeAutosizeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // delay
  codeDelayExampleHTML = `
  <mv-textarea
    (changeEvent)="changeEventFunctionMillis($event)"
    delay="3000">
  </mv-textarea>
  `;

  codeDelayExampleTS = `
  ....

  constructor() { }

  ....

  ngOnInit() {
  }

  changeEventFunctionMillis(event){
    alert('Evento con retardo de 3000 milisegundos');
  }
  `;

  // disabled
  codeDisabledExampleHTML = `
  <mv-textarea
    disabled=true>
  </mv-textarea>

  <mv-textarea
    disabled=false>
  </mv-textarea>

  <mv-textarea>
  </mv-textarea>
  `;

  codeDisabledExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // floatLabel
  codeFloatLabelExampleHTML = `
  <mv-textarea
    label="Propiedad floatLabel"
    floatLabel="always">
  </mv-textarea>

  <mv-textarea
    label="Propiedad floatLabel"
    floatLabel="never">
  </mv-textarea>

  <mv-textarea
    label="Propiedad floatLabel"
    floatLabel="auto">
  </mv-textarea>
  `;

  codeFloatLabelExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // hint
  codeHintExampleHTML = `
  <mv-textarea
    hint="Propiedad hint">
  </mv-textarea>
  `;

  codeHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // hintAlign
  codeHintAlignExampleHTML = `
  <mv-textarea
    hintAlign="start"
    hint="Hint al principio">
  </mv-textarea>

  <mv-textarea
    hintAlign="end"
    hint="Hint al final">
  </mv-textarea>
  `;

  codeHintAlignExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // hintType
  codeHintTypeExampleHTML = `
  <mv-textarea
    hintType="info"
    hint="Hint info">
  </mv-textarea>

  <mv-textarea
    hintType="success"
    hint="Hint success">
  </mv-textarea>

  <mv-textarea
    hintType="warning"
    hint="Hint warning">
  </mv-textarea>

  <mv-textarea
    hintType="danger"
    hint="Hint danger">
  </mv-textarea>
  `;

  codeHintTypeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // label
  codeLabelExampleHTML = `
  <mv-textarea
    label="Label del textarea"
    appearance="legacy">
  </mv-textarea>

  <mv-textarea
    label="Label del textarea"
    appearance="standard">
  </mv-textarea>

  <mv-textarea
    label="Label del textarea"
    appearance="fill">
  </mv-textarea>

  <mv-textarea
    label="Label del textarea"
    appearance="outline">
  </mv-textarea>
  `;

  codeLabelExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // minRows
  codeMinRowsExampleHTML = `
  <mv-textarea
    minRows="5"
    autosize=true>
  </mv-textarea>

  <mv-textarea
    autosize=true>
  </mv-textarea>
  `;

  codeMinRowsExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // maxlength
  codeMaxLengthExampleHTML = `
  <mv-textarea
    maxlength="8">
  </mv-textarea>

  <mv-textarea>
  </mv-textarea>
  `;

  codeMaxLengthExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // maxRows
  codeMaxRowsExampleHTML = `
  <mv-textarea
    maxRows="8"
    autosize=true>
  </mv-textarea>

  <mv-textarea
    autosize=true>
  </mv-textarea>
  `;

  codeMaxRowsExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // placeholder
  codePlaceholderExampleHTML = `
  <mv-textarea
    placeholder="Nombre">
  </mv-textarea>
  `;

  codePlaceholderExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // refAutocomplete
  codeRefAutocompleteExampleHTML = `
  <mv-textarea
    label="Label del textarea"
    appearance="legacy"
    matAutocomplete="auto">
  </mv-textarea>

  <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
    <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
      {{option.name}}
    </mat-option>
  </mat-autocomplete>
  `;

  codeRefAutocompleteExampleTS = `
  options: Pais[] = [
    {name: 'Alemania'},
    {name: 'España'},
    {name: 'Francia'},
    {name: 'Italia'},
    {name: 'Portugal'},
    {name: 'Suiza'}
  ];
  optionsCtrl = new FormControl();
  filteredOptions: Observable<Pais[]>;

  ....

  constructor() {
    this.filteredOptions = this.optionsCtrl.valueChanges.pipe(
      startWith(''),
      map(option => option ? this._filterStates(option) : this.options.slice())
    );
  }

  ....

  ngOnInit() {
  }

  ...

  private _filterStates(value: string): Pais[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(
      option => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }
  `;

  // refAutocompleteConnectedTo
  codeRefAutocompleteConnectedToExampleHTML = `
  <mv-textarea
    [refAutocomplete]="auto3"
    [refAutocompleteConnectedTo]="auto4">
  </mv-textarea>

  <mat-autocomplete #auto3="matAutocomplete">
    <mat-option *ngFor="let option of options" [value]="option.name">
      {{option.name}}
    </mat-option>
  </mat-autocomplete>

  <span
    id="matAutocompleteOrigin"
    matAutocompleteOrigin
    #auto4="matAutocompleteOrigin"
  >
    <p>refAutocompleteConnectedTo</p>
  </span>
  `;

  codeRefAutocompleteConnectedToExampleTS = `
  options: Pais[] = [
    {name: 'Alemania'},
    {name: 'España'},
    {name: 'Francia'},
    {name: 'Italia'},
    {name: 'Portugal'},
    {name: 'Suiza'}
  ];
  optionsCtrl = new FormControl();
  filteredOptions: Observable<Pais[]>;

  ....

  constructor() {
    this.filteredOptions = this.optionsCtrl.valueChanges.pipe(
      startWith(''),
      map(option => option ? this._filterStates(option) : this.options.slice())
    );
  }

  ....

  ngOnInit() {
  }

  ...

  private _filterStates(value: string): Pais[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(
      option => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }
  `;

  // required
  codeRequiredExampleHTML = `
  <mv-textarea
    required=true>
  </mv-textarea>

  <mv-textarea
    required=false>
  </mv-textarea>

  <mv-textarea>
  </mv-textarea>
  `;

  codeRequiredExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // requiredHint
  codeRequiredHintExampleHTML = `
  <mv-textarea
    requiredHint="Campo obligatorio"
    required=true>
  </mv-textarea>
  `;

  codeRequiredHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // showClear
  codeShowClearExampleHTML = `
  <mv-textarea
    showClear=true>
  </mv-textarea>

  <mv-textarea
    showClear=false>
  </mv-textarea>

  <mv-textarea>
  </mv-textarea>
  `;

  codeShowClearExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // showMaxlength
  codeShowMaxlengthExampleHTML = `
  <mv-textarea
    validateMaxlength=20
    showMaxlength=true>
  </mv-textarea>

  <mv-textarea
    validateMaxlength=20
    showMaxlength=false>
  </mv-textarea>

  <mv-textarea
    validateMaxlength=20>
  </mv-textarea>
  `;

  // validateMaxlength
  codeValidateMaxlengthExampleHTML = `
  <mv-textarea
    type="number"
    validateMaxlength="8">
  </mv-textarea>

  `;

  codeValidateMaxlengthExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateMaxlengthHint
  codeValidateMaxlengthHintExampleHTML = `
  <mv-textarea
    type="number"
    validateMaxHint="Introduce un número inferior"
    validateMax="30">
  </mv-textarea>

  `;

  codeValidateMaxlengthHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  codeShowMaxlengthExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // showUnlockPass
  codeShowUnlockPassExampleHTML = `
  <mv-textarea
    type="password"
    showUnlockPass=true>
  </mv-textarea>

  <mv-textarea
    type="password"
    showUnlockPass=false>
  </mv-textarea>

  <mv-textarea
    type="password">
  </mv-textarea>
  `;

  codeShowUnlockPassExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // type
  codeTypeExampleHTML = `
  <mv-textarea
    type="color">
  </mv-textarea>

  <mv-textarea
    type="date">
  </mv-textarea>

  <mv-textarea
    type="datetime-local">
  </mv-textarea>

  <mv-textarea
    type="email">
  </mv-textarea>

  <mv-textarea
    type="month">
  </mv-textarea>

  <mv-textarea
    type="number">
  </mv-textarea>

  <mv-textarea
    type="password">
  </mv-textarea>

  <mv-textarea
    type="search">
  </mv-textarea>

  <mv-textarea
    type="tel">
  </mv-textarea>

  <mv-textarea
    type="text">
  </mv-textarea>

  <mv-textarea
    type="time">
  </mv-textarea>

  <mv-textarea
    type="url">
  </mv-textarea>

  <mv-textarea
    type="week">
  </mv-textarea>
  `;

  codeTypeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateCustom
  codeCustomValidateExampleHTML = `
  <mv-input
    [validateCustom]="myCustomValidation()">
  </mv-input>
  `;

  codeCustomValidateExampleTS = `
  import { AbstractControl } from '@angular/forms';

  ...

  myCustomValidation = () => {
    return (_control: AbstractControl): { [key: string]: any } | null => {
      // si no todas las letras son mayusculas devolvemos error
      if(_control.value !== _control.value.toUpperCase()){
        return {'customError': {value: _control.value}};
      }else{
        return {};
      }
    };
  }

  ...
  `;

  // validateCustomHint
  codeValidateCustomHintExampleHTML = `
  <mv-input
    validateCustomHint="Todas las letras mayúsculas"
    [validateCustom]="myCustomValidation()">
  </mv-input>
  `;

  codeValidateCustomHintExampleTS = `
  import { AbstractControl } from '@angular/forms';

  ...

  myCustomValidation = () => {
    return (_control: AbstractControl): { [key: string]: any } | null => {
      // si no todas las letras son mayusculas devolvemos error
      if(_control.value !== _control.value.toUpperCase()){
        return {'customError': {value: _control.value}};
      }else{
        return {};
      }
    };
  }

  ...
  `;

  // validateEmail
  codeValidateEmailExampleHTML = `
  <mv-textarea
    type="email"
    validateEmail=true>
  </mv-textarea>

  <mv-textarea
    type="email"
    validateEmail=false>
  </mv-textarea>

  <mv-textarea
    type="email">
  </mv-textarea>
  `;

  codeValidateEmailExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateEmailHint
  codeValidateEmailHintExampleHTML = `
  <mv-textarea
    type="email"
    validateEmail=true
    validateEmailHint="Introduce un correo">
  </mv-textarea>
  `;

  codeValidateEmailHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateFirst
  codeValidateFirstExampleHTML = `
  <mv-textarea
    required=true
    validateFirst=true>
  </mv-textarea>

  <mv-textarea
    required=true
    validateFirst=false>
  </mv-textarea>

  <mv-textarea
    required=true>
  </mv-textarea>
  `;

  codeValidateFirstExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateMax
  codeValidateMaxExampleHTML = `
  <mv-textarea
    type="number"
    validateMax="65">
  </mv-textarea>
  `;

  codeValidateMaxExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateMaxHint
  codeValidateMaxHintExampleHTML = `
  <mv-textarea
    type="number"
    validateMaxHint="Introduce un número inferior"
    validateMax="30">
  </mv-textarea>
  `;

  codeValidateMaxHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateMin
  codeValidateMinExampleHTML = `
  <mv-textarea
    type="number"
    validateMin="18">
  </mv-textarea>
  `;

  codeValidateMinExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateMinHint
  codeValidateMinHintExampleHTML = `
  <mv-textarea
    type="number"
    validateMinHint="Introduce un número superior"
    validateMin="18">
  </mv-textarea>
  `;

  codeValidateMinHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateNIE
  codeValidateNIEExampleHTML = `
  <mv-textarea
    validateNIE=true>
  </mv-textarea>
  `;

  codeValidateNIEExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateNIEHint
  codeValidateNIEHintExampleHTML = `
  <mv-textarea
    validateNIE=true
    validateNIEHint="Introduce un NIE correcto">
  </mv-textarea>
  `;

  codeValidateNIEHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateNIF
  codeValidateNIFExampleHTML = `
  <mv-textarea
    validateNIF=true>
  </mv-textarea>
  `;

  codeValidateNIFExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateNIFHint
  codeValidateNIFHintExampleHTML = `
  <mv-textarea
    validateNIF=true
    validateNIFHint="Introduce un NIF correcto">
  </mv-textarea>
  `;

  codeValidateNIFHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateNIFNIEHint
  codeValidateNIFNIEHintExampleHTML = `
  <mv-textarea
    validateNIE=true
    validateNIF=true
    validateNIFNIEHint="Introduce un NIF/NIE correcto">
  </mv-textarea>
  `;

  codeValidateNIFNIEHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateNIFNIEHint
  codeValidateOnTypeExampleHTML = `
  <mv-textarea
    required=true
    validateOnType=true>
  </mv-textarea>

  <mv-textarea
    required=true
    validateOnType=false>
  </mv-textarea>

  <mv-textarea
    required=true>
  </mv-textarea>
  `;

  codeValidateOnTypeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateNotNumberHint
  codeValidateNotNumberHintExampleHTML = `
  <mv-textarea
    validateOnType=true
    validateNotNumberHint="No es un número">
  </mv-textarea>

  <mv-textarea
    validateOnType=true
    validateNotNumberHint=false>
  </mv-textarea>

  <mv-textarea
    validateOnType=true>
  </mv-textarea>
  `;

  codeValidateNotNumberHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateRegex
  codeValidateRegexExampleHTML = `
  <mv-textarea
    validateRegex="(\d{4})([A-z]{3})">
  </mv-textarea>
  `;

  codeValidateRegexExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateRegexHint
  codeValidateRegexHintExampleHTML = `
  <mv-textarea
    validateRegexHint="El correo debe ser gmail"
    validateRegex="([^@]+@gmail.com)">
  </mv-textarea>
  `;

  codeValidateRegexHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // changeEvent
  codeChangeEventExampleHTML = `
  <mv-textarea
    (changeEvent)="changeEventFunction($event)">
  </mv-textarea>
  `;

  codeChangeEventExampleTS = `
  ....

  constructor() { }

  ....

  ngOnInit() {
  }

  changeEventFunction(event){
    alert('El valor ha cambiado');
  }
  `;

  // keyupEvent
  codeKeyupEventExampleHTML = `
  <mv-textarea
    (keyupEvent)="keyupEventFunction($event)">
  </mv-textarea>
  `;

  codeKeyupEventExampleTS = `
  ....

  constructor() { }

  ....

  ngOnInit() {
  }

  keyupEventFunction(event){
    alert('Keyup disparado');
  }
  `;



    //ariaLabel
    ariaLabelHtml = `
    <mv-textarea
      arialLabel="Tu texto personalizado">
    </mv-textarea>
    `;
  
    ariaLabelTS = `
  
    // Nada que añadir respecto al ejemplo principal
  
    `;



    myCustomValidation = () => {
      return (_control: AbstractControl): { [key: string]: any } | null => {
        // si no todas las letras son mayusculas devolvemos error
        if (_control.value !== _control.value.toUpperCase()) {
          return {'customError': {value: _control.value}};
        } else {
          return {};
        }
      };
    }

    constructor() {
      this.filteredOptions = this.optionsCtrl.valueChanges.pipe(
          startWith(''),
          map(
              (option) =>
                option ? this._filterStates(option) : this.options.slice(),
          ),
      );
    }

    ngOnInit() {
    }

    changeEventFunctionMillis(event) {
      alert('Evento con retardo de 3000 milisegundos');
    }

    changeEventFunction(event) {
      alert('El valor ha cambiado');
    }

    keyupEventFunction(event) {
      alert('Keyup disparado');
    }

    private _filterStates(value: string): Pais[] {
      const filterValue = value.toLowerCase();
      return this.options.filter(
          (option) => option.name.toLowerCase().indexOf(filterValue) === 0,
      );
    }
}

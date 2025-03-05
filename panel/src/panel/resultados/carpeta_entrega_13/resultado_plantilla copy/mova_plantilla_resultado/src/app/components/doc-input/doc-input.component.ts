import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl, AbstractControl} from '@angular/forms';
import {AppService} from '@mova/components/core';
import { PaisGroup, PaisGroupsExample } from './doc-input.example';

export interface Pais {
  name: string;
}

@Component({
  selector: 'app-doc-input',
  templateUrl: './doc-input.html',
  styleUrls: ['./doc-input.scss'],
})
export class DocInput implements OnInit {
  // Ejemplo de uso
  codeUseExampleHTML = `
  <mv-input
    [(ngModel)]="input001Model">
  </mv-input>
  `;

  codeUseExampleTS = `

  input001Model: any;

  ...

  constructor() {}

  ...
  `;
  // maxLenght
 maxLenghtExampleHTML = `
 <p><strong>Input básico con maxLenght:</strong></p>
 <mv-input
   [maxlength]="maxLenght"
   [(ngModel)]="inputModelMax">
 </mv-input>
 <p><strong>Tamaño máximo del input:</strong></p>
 <mv-input
   [(ngModel)]="maxLenght">
 </mv-input>
  `;

 maxLenghtExampleTS = `

 maxLenght= 5;
 inputModelMax: any;
  `;
  // adapt
  codeAdaptExampleHTML = `
  <mv-input
    adapt=true>
  </mv-input>

  <mv-input
    adapt=false>
  </mv-input>

  <mv-input>
  </mv-input>
  `;

  codeAdaptExampleTS = `

  // Nada que añadir respecto al ejemplo principal
  `;

  // appearance
  codeAppearanceExampleHTML = `
  <mv-input
    appearance="legacy">
  </mv-input>

  <mv-input
    appearance="standard">
  </mv-input>

  <mv-input
    appearance="fill">
  </mv-input>

  <mv-input
    appearance="outline">
  </mv-input>
  `;

  codeAppearanceExampleTS = `
  // Nada que añadir respecto al ejemplo principal
  `;

  // autocomplete
  codeAutocompleteExampleHTML = `
  <p><strong>Ejemplo autocomplete con valor "email":</strong></p>
  <form #autocompleteForm="ngForm">
    <mv-input
      autocomplete="email">
    </mv-input>
  </form>

  <p><strong>Ejemplo autocomplete con valor "given-name":</strong></p>
  <form #autocompleteForm="ngForm">
    <mv-input
      autocomplete="given-name">
    </mv-input>
  </form>
  `;

  codeAutocompleteExampleTS = `
  // Nada que añadir respecto al ejemplo principal
  `;

  // delay
  codeDelayExampleHTML = `
  <mv-input
    (changeEvent)="changeEventFunctionMillis($event)"
    delay="3000">
  </mv-input>
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
  <mv-input
    disabled=true>
  </mv-input>

  <mv-input
    disabled=false>
  </mv-input>

  <mv-input>
  </mv-input>
  `;

  codeDisabledExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // floatLabel
  codeFloatLabelExampleHTML = `
  <mv-input
    label="Propiedad floatLabel"
    floatLabel="always">
  </mv-input>

  <mv-input
    label="Propiedad floatLabel"
    appearance="legacy"
    floatLabel="never">
  </mv-input>

  <mv-input
    label="Propiedad floatLabel"
    floatLabel="auto">
  </mv-input>
  `;

  codeFloatLabelExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // hint
  codeHintExampleHTML = `
  <mv-input
    hint="Propiedad hint">
  </mv-input>
  `;

  codeHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // hintAlign
  codeHintAlignExampleHTML = `
  <mv-input
    hintAlign="start"
    hint="Hint al principio">
  </mv-input>

  <mv-input
    hintAlign="end"
    hint="Hint al final">
  </mv-input>
  `;

  codeHintAlignExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // hintType
  codeHintTypeExampleHTML = `
  <mv-input
    hintType="info"
    hint="Hint info">
  </mv-input>

  <mv-input
    hintType="success"
    hint="Hint success">
  </mv-input>

  <mv-input
    hintType="warning"
    hint="Hint warning">
  </mv-input>

  <mv-input
    hintType="danger"
    hint="Hint danger">
  </mv-input>
  `;

  codeHintTypeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // inputmode
  codeInputModeExampleHTML = `
  <p><strong>Con inputmode 'decimal':</strong></p>
  <mv-input
    inputmode="decimal">
  </mv-input>

  <p><strong>Con inputmode 'email':</strong></p>
  <mv-input
    inputmode="email">
  </mv-input>

  <p><strong>Con inputmode 'none':</strong></p>
  <mv-input
    inputmode="none">
  </mv-input>

  <p><strong>Con inputmode 'numeric':</strong></p>
  <mv-input
    inputmode="numeric">
  </mv-input>

  <p><strong>Con inputmode 'search':</strong></p>
  <mv-input
    inputmode="search">
  </mv-input>

  <p><strong>Con inputmode 'tel':</strong></p>
  <mv-input
    inputmode="tel">
  </mv-input>

  <p><strong>Con inputmode 'text' (por defecto):</strong></p>
  <mv-input
    inputmode="text">
  </mv-input>

  <p><strong>Con inputmode 'url':</strong></p>
  <mv-input
    inputmode="url">
  </mv-input>
  `;

  codeInputModeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // label
  codeLabelExampleHTML = `
  <mv-input
    label="Label del input"
    appearance="legacy">
  </mv-input>

  <mv-input
    label="Label del input"
    appearance="standard">
  </mv-input>

  <mv-input
    label="Label del input"
    appearance="fill">
  </mv-input>

  <mv-input
    label="Label del input"
    appearance="outline">
  </mv-input>
  `;

  codeLabelExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // placeholder
  codePlaceholderExampleHTML = `
  <mv-input
    placeholder="Nombre">
  </mv-input>
  `;

  codePlaceholderExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // refAutocomplete
  codeRefAutocompleteExampleHTML = `
  <mv-input
    label="Label del input"
    appearance="legacy"
    matAutocomplete="auto">
  </mv-input>

  <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
    <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
      {{option.name}}
    </mat-option>
  </mat-autocomplete>

  <mv-input
    [refAutocomplete]="auto2"
    [formControl]="optionsCtrl">
  </mv-input>

  <mat-autocomplete #auto2="matAutocomplete">
    <mat-option
      *ngFor="let option of filteredOptions | async"
      [value]="option.name"
    >
      {{option.name}}
    </mat-option>
  </mat-autocomplete>

  <mv-input
    [refAutocomplete]="auto5"
    [formControl]="optionsGroupCtrl">
  </mv-input>

  <mat-autocomplete #auto5="matAutocomplete">
    <mat-optgroup
      *ngFor="let group of filteredGroupOptions | async"
      [label]="group.index"
    >
      <mat-option *ngFor="let name of group.names" [value]="name">
        {{name}}
      </mat-option>
    </mat-optgroup>
  </mat-autocomplete>
  `;

  codeRefAutocompleteExampleTS = `

  export interface Pais {
    name: string;
  }
  export interface PaisGroup {
    index: string;
    names: string[];
  }

  ...
  optionsGroupCtrl = new FormControl();
  filteredOptions: Observable<Pais[]>;
  filteredGroupOptions: Observable<PaisGroup[]>;
  PaisGroups: PaisGroup[] = [
    {
      index: 'A',
      names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
    },
    {
      index: 'C',
      names: ['California', 'Colorado', 'Connecticut']
    },
    {
      index: 'D',
      names: ['Delaware']
    },
    {
      index: 'F',
      names: ['Florida']
    },
    {
      index: 'G',
      names: ['Georgia']
    },
    {
      index: 'H',
      names: ['Hawaii']
    },
    {
      index: 'I',
      names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
    },
    {
      index: 'K',
      names: ['Kansas', 'Kentucky']
    },
    {
      index: 'L',
      names: ['Louisiana']
    },
    {
      index: 'M',
      names: [
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana'
      ]
    },
    {
      index: 'N',
      names: [
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota'
      ]
    },
    {
      index: 'O',
      names: ['Ohio', 'Oklahoma', 'Oregon']
    },
    {
      index: 'P',
      names: ['Pennsylvania']
    },
    {
      index: 'R',
      names: ['Rhode Island']
    },
    {
      index: 'S',
      names: ['South Carolina', 'South Dakota']
    },
    {
      index: 'T',
      names: ['Tennessee', 'Texas']
    },
    {
      index: 'U',
      names: ['Utah']
    },
    {
      index: 'V',
      names: ['Vermont', 'Virginia']
    },
    {
      index: 'W',
      names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    }
  ];

  constructor() {
  }

  ngOnInit() {
    // Elementos autocomplete
    this.filteredGroupOptions = this.optionsGroupCtrl.valueChanges.pipe(
      startWith(''),
      map(option => this._filterStatesGroup(option))
    );

    // Elementos autocomplete con grupos
    this.filteredOptions = this.optionsCtrl.valueChanges.pipe(
      startWith(''),
      map(option => option ? this._filterStates(option) : this.options.slice())
    );
  }

  ....

  ngOnInit() {
  }

  ...

  // Funcion para filtrar los paises del automcomplete
  private _filterStates(value: string): Pais[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(
      option => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  // Funcion para filtrar los paises del autocomplete con grupos
  private _filterStatesGroup(value: string): PaisGroup[] {
    if (value) {
      return this.PaisGroups
        .map(group => (
          {
            index: group.index,
            names: group.names.filter(
              item => item.toLowerCase().indexOf(value.toLowerCase()) === 0)}
            )
        )
        .filter(group => group.names.length > 0);
    }
    return this.PaisGroups;
  }
  `;

  // refAutocompleteConnectedTo
  codeRefAutocompleteConnectedToExampleHTML = `
  <mv-input
    [refAutocomplete]="auto3"
    [refAutocompleteConnectedTo]="auto4">
  </mv-input>

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
  <mv-input
    required=true>
  </mv-input>

  <mv-input
    required=false>
  </mv-input>

  <mv-input>
  </mv-input>
  `;

  codeRequiredExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // requiredHint
  codeRequiredHintExampleHTML = `
  <mv-input
    requiredHint="Campo obligatorio"
    required=true>
  </mv-input>
  `;

  codeRequiredHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // showClear
  codeShowClearExampleHTML = `
  <mv-input
    showClear=true>
  </mv-input>

  <mv-input
    showClear=false>
  </mv-input>

  <mv-input>
  </mv-input>
  `;

  codeShowClearExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // showMaxlength
  codeShowMaxlengthExampleHTML = `
  <mv-input
    validateMaxlength=20
    showMaxlength=true>
  </mv-input>

  <mv-input
    validateMaxlength=20
    showMaxlength=false>
  </mv-input>

  <mv-input
    validateMaxlength=20>
  </mv-input>
  `;

  codeShowMaxlengthExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // showMinlength
  codeShowMinlengthExampleHTML = `
  <mv-input
    validateMinlength=10
    showMinlength=true>
  </mv-input>

  <mv-input
    validateMinlength=10
    showMinlength=false>
  </mv-input>

  <mv-input
    validateMinlength=10>
  </mv-input>
  `;

  codeShowMinlengthExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // showUnlockPass
  codeShowUnlockPassExampleHTML = `
  <mv-input
    type="password"
    showUnlockPass=true>
  </mv-input>

  <mv-input
    type="password"
    showUnlockPass=false>
  </mv-input>

  <mv-input
    type="password">
  </mv-input>
  `;

  codeShowUnlockPassExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // type
  codeTypeExampleHTML = `
  <mv-input
    type="color">
  </mv-input>

  <mv-input
    type="date">
  </mv-input>

  <mv-input
    type="datetime-local">
  </mv-input>

  <mv-input
    type="email">
  </mv-input>

  <mv-input
    type="month">
  </mv-input>

  <mv-input
    type="number">
  </mv-input>

  <mv-input
    type="password">
  </mv-input>

  <mv-input
    type="search">
  </mv-input>

  <mv-input
    type="tel">
  </mv-input>

  <mv-input
    type="text">
  </mv-input>

  <mv-input
    type="time">
  </mv-input>

  <mv-input
    type="url">
  </mv-input>

  <mv-input
    type="week">
  </mv-input>
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
  <mv-input
    type="email"
    validateEmail=true>
  </mv-input>

  <mv-input
    type="email"
    validateEmail=false>
  </mv-input>

  <mv-input
    type="email">
  </mv-input>
  `;

  codeValidateEmailExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateEmailHint
  codeValidateEmailHintExampleHTML = `
  <mv-input
    type="email"
    validateEmail=true
    validateEmailHint="Introduce un correo">
  </mv-input>
  `;

  codeValidateEmailHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateFirst
  codeValidateFirstExampleHTML = `
  <mv-input
    required=true
    validateFirst=true>
  </mv-input>

  <mv-input
    required=true
    validateFirst=false>
  </mv-input>

  <mv-input
    required=true>
  </mv-input>
  `;

  codeValidateFirstExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateMax
  codeValidateMaxExampleHTML = `
  <mv-input
    type="number"
    validateMax="65">
  </mv-input>
  `;

  codeValidateMaxExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateMaxHint
  codeValidateMaxHintExampleHTML = `
  <mv-input
    type="number"
    validateMaxHint="Introduce un número inferior"
    validateMax="30">
  </mv-input>
  `;

  codeValidateMaxHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateMin
  codeValidateMinExampleHTML = `
  <mv-input
    type="number"
    validateMin="18">
  </mv-input>
  `;

  codeValidateMinExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateMinHint
  codeValidateMinHintExampleHTML = `
  <mv-input
    type="number"
    validateMinHint="Introduce un número superior"
    validateMin="18">
  </mv-input>
  `;

  codeValidateMinHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateMinlength
  codeValidateMinlengthExampleHTML = `
  <mv-input
    validateMinlength="8">
  </mv-input>

  `;

  codeValidateMinlengthExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateMinlengthHint
  codeValidateMinlengthHintExampleHTML = `
  <mv-input
    validateMinlengthHint="demasiado corto"
    validateMinlength="10">
  </mv-input>

  `;

  codeValidateMinlengthHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateMaxlength
  codeValidateMaxlengthExampleHTML = `
  <mv-input
    validateMaxlength="8">
  </mv-input>

  `;

  codeValidateMaxlengthExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateMaxlengthHint
  codeValidateMaxlengthHintExampleHTML = `
  <mv-input
    validateMaxlengthHint="demasiado largo"
    validateMaxlength="10">
  </mv-input>

  `;

  codeValidateMaxlengthHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateNIE
  codeValidateNIEExampleHTML = `
  <mv-input
    validateNIE=true>
  </mv-input>
  `;

  codeValidateNIEExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateNIEHint
  codeValidateNIEHintExampleHTML = `
  <mv-input
    validateNIE=true
    validateNIEHint="Introduce un NIE correcto">
  </mv-input>
  `;

  codeValidateNIEHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateNIF
  codeValidateNIFExampleHTML = `
  <mv-input
    validateNIF=true>
  </mv-input>
  `;

  codeValidateNIFExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateNIFHint
  codeValidateNIFHintExampleHTML = `
  <mv-input
    validateNIF=true
    validateNIFHint="Introduce un NIF correcto">
  </mv-input>
  `;

  codeValidateNIFHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateNIFNIEHint
  codeValidateNIFNIEHintExampleHTML = `
  <mv-input
    validateNIE=true
    validateNIF=true
    validateNIFNIEHint="Introduce un NIF/NIE correcto">
  </mv-input>
  `;

  codeValidateNIFNIEHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateOnType
  codeValidateOnTypeExampleHTML = `
  <mv-input
    required=true
    validateOnType=true>
  </mv-input>

  <mv-input
    required=true
    validateOnType=false>
  </mv-input>

  <mv-input
    required=true>
  </mv-input>
  `;

  codeValidateOnTypeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateNotNumberHint
  codeValidateNotNumberHintExampleHTML = `
  <mv-input
    validateOnType=true
    validateNotNumberHint="No es un número">
  </mv-input>

  <mv-input
    validateOnType=true
    validateNotNumberHint=false>
  </mv-input>

  <mv-input
    validateOnType=true>
  </mv-input>
  `;

  codeValidateNotNumberHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateRegex
  codeValidateRegexExampleHTML = `
  <mv-input
    validateRegex="(\d{4})([A-z]{3})">
  </mv-input>
  `;

  codeValidateRegexExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // validateRegexHint
  codeValidateRegexHintExampleHTML = `
  <mv-input
    validateRegexHint="El correo debe ser gmail"
    validateRegex="([^@]+@gmail.com)">
  </mv-input>
  `;

  codeValidateRegexHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // changeEvent
  codeChangeEventExampleHTML = `
  <mv-input
    (changeEvent)="changeEventFunction($event)">
  </mv-input>
  `;

  codeChangeEventExampleTS = `
  ....

  constructor() { }

  ....

  ngOnInit() {
  }

  changeEventFunction(){
    alert('El valor ha cambiado');
  }
  `;

  // keyupEvent
  codeKeyupEventExampleHTML = `
  <mv-input
    (keyupEvent)="keyupEventFunction($event)">
  </mv-input>
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

  // focusEvent
  codefocusEventExampleHTML = `
  <mv-input
  (focusEvent)="focusEventFunction($event)">
  </mv-input>
  `;

  codefocusEventExampleTS = `
  ....

  constructor() { }

  ....

  ngOnInit() {
  }

  focusEventFunction(event){
    alert('focusEvent disparado');
  }
  `;

  // blurEvent
  codeblurEventExampleHTML = `
  <mv-input
    (blurEvent)="blurEventFunction($event)">
  </mv-input>
  `;

  codeblurEventExampleTS = `
  ....

  constructor() { }

  ....

  ngOnInit() {
  }

  blurEventFunction(event){
    alert('blurEvent disparado');
  }
  `;



  //ariaLabel
  ariaLabelHtml = `
  <mv-input
    arialLabel="Tu texto personalizado">
  </mv-input>
  `;

  ariaLabelTS = `

  // Nada que añadir respecto al ejemplo principal

  `;




  input001Model: any;

  maxLenght= 5;
  inputModelMax: any;

  options: Pais[] = [
    {name: 'Alemania'},
    {name: 'España'},
    {name: 'Francia'},
    {name: 'Italia'},
    {name: 'Portugal'},
    {name: 'Suiza'},
  ];
  optionsCtrl = new FormControl();
  optionsGroupCtrl = new FormControl();
  filteredOptions: Observable<Pais[]>;
  filteredGroupOptions: Observable<PaisGroup[]>;
  PaisGroups;

  constructor(
    private readonly _appService: AppService,
  ) {
    this.PaisGroups = PaisGroupsExample;
  }

  ngOnInit() {
    this.filteredGroupOptions = this.optionsGroupCtrl.valueChanges.pipe(
        startWith(''),
        map((option) => this._filterStatesGroup(option)),
    );

    this.filteredOptions = this.optionsCtrl.valueChanges.pipe(
        startWith(''),
        map((option) =>
            option ? this._filterStates(option) : this.options.slice()),
    );
  }

  changeEventFunctionMillis(event) {
    this._appService.showSnackBar({
      text: 'Evento con retardo de 3000 milisegundos',
      type: 'info',
    });
  }

  changeEventFunction(event) {
    this._appService.showSnackBar({
      text: 'El valor ha cambiado',
      type: 'info',
    });
  }

  keyupEventFunction(event) {
    this._appService.showSnackBar({
      text: 'Keyup disparado',
      type: 'info',
    });
  }
  focusEventFunction(event) {
    this._appService.showSnackBar({
      text: 'focusEvent disparado',
      type: 'info',
    });
  }
  blurEventFunction(event) {
    alert('blurEvent disparado');
    this._appService.showSnackBar({
      text: 'blurEvent disparado',
      type: 'info',
    });
  }

  // función tipo flecha para poder acceder al scope con this
  myCustomValidation = () => {
    return (_control: AbstractControl): { [key: string]: any } | null => {
      // descomentar si ademas queremos que muestre error cuando no hay valor
      // if (!_control.value) return {'customError': {value: _control.value}};

      // si no todas las letras son mayúsculas devolvemos error
      if (_control.value !== _control.value.toUpperCase()) {
        return {'customError': {value: _control.value}};
      } else {
        return {};
      }
    };
  }

  // Funcion para filtrar los paises del automcomplete
  private _filterStates(value: string): Pais[] {
    const filterValue = value.toLowerCase();
    return this.options
        .filter((option) =>
          option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  // Funcion para filtrar los paises del autocomplete con grupos
  private _filterStatesGroup(value: string): PaisGroup[] {
    if (value) {
      return this.PaisGroups
          .map((group) =>
            ({index: group.index, names: group.names.filter((item) =>
              item.toLowerCase().indexOf(value.toLowerCase()) === 0)}))
          .filter((group) => group.names.length > 0);
    }
    return this.PaisGroups;
  }
}

import {Component, OnInit} from '@angular/core';
import {MatCalendarCellCssClasses} from '@angular/material/datepicker';
import { AppService } from '@mova/components/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-doc-datepicker',
  templateUrl: './doc-datepicker.html',
  styleUrls: ['./doc-datepicker.scss'],
})
export class DocDatepicker implements OnInit {
    // Ejemplo de uso
    codeUseExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      [(ngModel)]="datepicker001Model">
    </mv-input>
    `;

    codeUseExampleTS = `

    datepicker001Model:any;

    ...

    constructor(

    ) {}

    ...
    `;

    // adapt
    codeAdaptExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      adapt=true>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      adapt=false>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true>
    </mv-input>
    `;

    codeAdaptExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // appearance
    codeAppearanceExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      appearance="legacy">
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      appearance="standard">
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      appearance="fill">
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      appearance="outline">
    </mv-input>
    `;

    codeAppearanceExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // customIcon
    codeCustomIconExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      customIcon="favorite">
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      customIcon="flight_takeoff">
    </mv-input>
    `;

    codeCustomIconExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // dateClass
    codeDateClassExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      [dateClass]="customDateClass">
    </mv-input>
    `;

    codeDateClassExampleTS = `
    import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

    ...

    customDateClass = (d: Date): MatCalendarCellCssClasses => {
      const date = d.getDate();

      // Resaltamos el 1 y 20 de cada mes.
      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }

    ...

    `;

    codeDateClassExampleCSS = `
    ::ng-deep.example-custom-date-class {
      background: orange;
      border-radius: 100%;
    }

    `;

    // datepicker
    codeDatepickerExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true>
    </mv-input>
    `;

    codeDatepickerExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // datepickerFilter
    codeDatepickerFilterExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      [datepickerFilter]="myCustomFilter">
    </mv-input>
    `;

    codeDatepickerFilterExampleTS = `
    ...

    myCustomFilter = (d: Date | null): boolean => {
      const day = (d || new Date()).getDay();

      // Solamente permitir lunes, miercoles o viernes
      return day !== 0 && day !== 2 && day !== 4 && day !== 6;
    }

    ...
    `;

    // delay
    codeDelayExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
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
      label="Fecha"
      datepicker=true
      disabled=true>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      disabled=false>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true>
    </mv-input>
    `;

    codeDisabledExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // disabledDatepickerToggle
    codeDisabledDatepickerToggleExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      disabledDatepickerToggle=true>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      disabledDatepickerToggle=false>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true>
    </mv-input>
    `;

    codeDisabledDatepickerToggleExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // disabledDatepickerInput
    codeDisabledDatepickerInputExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      disabledDatepickerInput=true>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      disabledDatepickerInput=false>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true>
    </mv-input>
    `;

    codeDisabledDatepickerInputExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // floatLabel
    codeFloatLabelExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      label="Propiedad floatLabel"
      floatLabel="always">
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      label="Propiedad floatLabel"
      appearance="legacy"
      floatLabel="never">
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
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
      label="Fecha"
      datepicker=true
      hint="Propiedad hint">
    </mv-input>
    `;

    codeHintExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // hintAlign
    codeHintAlignExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      hintAlign="start"
      hint="Hint al principio">
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
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
      label="Fecha"
      datepicker=true
      hintType="info"
      hint="Hint info">
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      hintType="success"
      hint="Hint success">
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      hintType="warning"
      hint="Hint warning">
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      hintType="danger"
      hint="Hint danger">
    </mv-input>
    `;

    codeHintTypeExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // label
    codeLabelExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      label="Label del input"
      appearance="legacy">
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      label="Label del input"
      appearance="standard">
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      label="Label del input"
      appearance="fill">
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
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
      label="Fecha"
      datepicker=true
      placeholder="Fecha inicio">
    </mv-input>
    `;

    codePlaceholderExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // max
    codeMaxExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      [max]="maxDate">
    </mv-input>
    `;

    codeMaxExampleTS = `
    ...

    maxDate: Date;

    ...

    ngOnInit() {
      let currentYear = new Date().getFullYear();
      this.maxDate = new Date(currentYear, 7, 31);
      ...
    }

    ...

    `;

    // min
    codeMinExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      [min]="minDate">
    </mv-input>
    `;

    codeMinExampleTS = `
    ...

    minDate: Date;

    ...

    ngOnInit() {
      let currentYear = new Date().getFullYear();
      this.minDate = new Date(currentYear, 6, 15);
      ...
    }

    ...

    `;

    // required
    codeRequiredExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      required=true>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      required=false>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true>
    </mv-input>
    `;

    codeRequiredExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // requiredHint
    codeRequiredHintExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      requiredHint="Campo obligatorio"
      required=true>
    </mv-input>
    `;

    codeRequiredHintExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // startAt
    codeStartAtExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      [startAt]="startAtDate">
    </mv-input>
    `;

    codeStartAtExampleTS = `
    ...

    startAtDate: Date;

    ...

    ngOnInit() {
      let currentYear = new Date().getFullYear();
      this.startAtDate = new Date(currentYear, 8, 1);
      ...
    }

    ...


    `;

    // startView
    codeStartViewExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      startView="month">
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      startView="year">
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      startView="multi-year">
    </mv-input>
    `;

    codeStartViewExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // touchUi
    codeTouchUiExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      touchUi=true>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      touchUi=false>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true>
    </mv-input>
    `;

    codeTouchUiExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // validateFirst
    codeValidateFirstExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      required=true
      validateFirst=true>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      required=true
      validateFirst=false>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      required=true>
    </mv-input>
    `;

    codeValidateFirstExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // validateOnType
    codeValidateOnTypeExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      required=true
      validateOnType=true>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      required=true
      validateOnType=false>
    </mv-input>

    <mv-input
      label="Fecha"
      datepicker=true
      required=true>
    </mv-input>
    `;

    codeValidateOnTypeExampleTS = `

    // Nada que añadir respecto al ejemplo principal

    `;

    // changeEvent
    codeChangeEventExampleHTML = `
    <mv-input
      label="Fecha"
      datepicker=true
      (changeEvent)="changeEventFunction($event)">
    </mv-input>
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
    <mv-input
      label="Fecha"
      datepicker=true
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

    customDateClass = (d: Moment): MatCalendarCellCssClasses => {
      const date = d.toDate().getDate();

      // Resaltamos el 1 y 20 de cada mes.
      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }

    myCustomFilter = (d: Moment | null): boolean => {
      const day = (d.toDate() || new Date()).getDay();

      // Prevenir que se elijan lunes, miercoles o viernes
      return day !== 0 && day !== 2 && day !== 4 && day !== 6;
    }

    minDate: Date;
    maxDate: Date;
    startAtDate: Date;
    datepicker001Model: any;

    constructor(
      private readonly _appService: AppService,
    ) {}

    ngOnInit() {
      const currentYear = new Date().getFullYear();
      this.minDate = new Date(currentYear, 6, 15);
      this.maxDate = new Date(currentYear, 7, 31);
      this.startAtDate = new Date(currentYear, 8, 1);
    }

    changeEventFunctionMillis(event) {
      this._appService.showSnackBar( {
        text: 'Evento con retardo de 3000 milisegundos',
        type: 'info',
      });
    }

    changeEventFunction(event) {
      this._appService.showSnackBar( {
        text: 'El valor ha cambiado',
        type: 'info',
      });
    }

    keyupEventFunction(event) {
      this._appService.showSnackBar( {
        text: 'Keyup disparado',
        type: 'info',
      });
    }
}

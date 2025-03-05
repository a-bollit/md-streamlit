import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-doc-select',
  templateUrl: './doc-select.html',
  styleUrls: ['./doc-select.scss'],
})
export class DocSelect implements OnInit {
  // Ejemplo de uso
  codeUseExampleHTML = `
  <mv-select-x
    [(ngModel)]="select001Model"
    [options]="selectOptionsEstaciones">
  </mv-select-x>
  `;

  codeUseExampleTS = `
  ...

  select001Model:any;

  selectOptionsEstaciones: any[] = [
    {
      "id": 1,
      "text": "Primavera"
    },
    {
      "id": 2,
      "text": "Verano"
    },
    {
      "id": 3,
      "text": "Otoño"
    },
    {
      "id": 4,
      "text": "Invierno"
    }
  ]

  ...

  constructor(

  ) {}

  ...
  `;

  // adapt
  codeAdaptExampleHTML = `
  <mv-select-x
    [options]=selectOptionsEstaciones
    alignHorizontal=true>
  </mv-select-x>

  <mv-select-x
    [options]=selectOptionsEstaciones
    alignHorizontal=false>
  </mv-select-x>

  <mv-select-x
    [options]=selectOptionsEstaciones>
  </mv-select-x>
  `;

  codeAdaptExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;

  // appearance
  codeAppearanceExampleHTML = `
  <mv-select-x
    [options]="selectOptionsEstaciones"
    appearance="legacy">
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones"
    appearance="standard">
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones"
    appearance="fill">
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones"
    appearance="outline">
  </mv-select-x>
  `;

  codeAppearanceExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;

  // delay
  codeDelayExampleHTML = `
  <mv-select-x
    [options]=selectOptionsEstaciones
    delay="3000"
    (changeEvent)=changeFunctionDelay()>
  </mv-select-x>
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
  <mv-select-x
    [options]="selectOptionsEstaciones"
    disabled=true>
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones"
    disabled=false>
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones">
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstacionesDisabled">
  </mv-select-x>
  `;

  codeDisabledExampleTS = `
  ...

  selectOptionsEstacionesDisabled: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño",
      "disabled": true
    },
    {
      "id": "invierno",
      "text": "Invierno",
      "disabled": true
    }
  ];

  ...
  `;

  // floatLabel
  codeFloatLabelExampleHTML = `
  <mv-select-x
    [options]="selectOptionsEstaciones"
    label="Propiedad floatLabel"
    floatLabel="always">
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones"
    label="Propiedad floatLabel"
    appearance="legacy"
    floatLabel="never">
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones"
    label="Propiedad floatLabel"
    floatLabel="auto">
  </mv-select-x>
  `;

  codeFloatLabelExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;

  // hint
  codeHintExampleHTML = `
  <mv-select-x
    [options]="selectOptionsEstaciones"
    hint="Propiedad hint">
  </mv-select-x>
  `;

  codeHintExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;

  // hintAlign
  codeHintAlignExampleHTML = `
  <mv-select-x
    [options]="selectOptionsEstaciones"
    hintAlign="start"
    hint="Hint al principio">
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones"
    hintAlign="end"
    hint="Hint al final">
  </mv-select-x>
  `;

  codeHintAlignExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;

  // hintType
  codeHintTypeExampleHTML = `
  <mv-select-x
    [options]="selectOptionsEstaciones"
    hintType="info"
    hint="Hint info">
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones"
    hintType="success"
    hint="Hint success">
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones"
    hintType="warning"
    hint="Hint warning">
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones"
    hintType="danger"
    hint="Hint danger">
  </mv-select-x>
  `;

  codeHintTypeExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;

  // label
  codeLabelExampleHTML = `
  <mv-select-x
    [options]="selectOptionsEstaciones"
    label="Label del select"
    appearance="legacy">
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones"
    label="Label del select"
    appearance="standard">
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones"
    label="Label del select"
    appearance="fill">
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones"
    label="Label del select"
    appearance="outline">
  </mv-select-x>
  `;

  codeLabelExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;

  // multiple
  codeMultipleExampleHTML = `
  <mv-select-x
    [options]="selectOptionsEstaciones"
    multiple=true>
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones"
    multiple=false>
  </mv-select-x>

  <mv-select-x
    [options]="selectOptionsEstaciones">
  </mv-select-x>
  `;

  codeMultipleExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;

  // name
  codeNameExampleHTML = `
  <form #f="ngForm" (ngSubmit)="onSubmit(f)">
    <mv-select-x
      ngModel
      name="mySelectName"
      [options]="selectOptionsEstaciones">
    </mv-select-x>
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
  <mv-select-x
    optionLabel="Estaciones"
    [options]=selectOptionsEstaciones>
  </mv-select-x>
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
  <mv-select-x
    [options]=selectOptions>
  </mv-select-x>

  <mv-select-x
    [options]=selectOptionsEstaciones>
  </mv-select-x>
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
  <mv-select-x
    panelClass="myPanelClass"
    [options]=selectOptionsEstaciones>
  </mv-select-x>
  `;

  codePanelClassExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

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
  <mv-select-x
    placeholder="Escoge una opción"
    [options]=selectOptionsEstaciones>
  </mv-select-x>
  `;

  codePlaceholderExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;

  // required
  codeRequiredExampleHTML = `
  <mv-select-x
    validateFirst=true
    [options]=selectOptionsEstaciones
    required=true>
  </mv-select-x>

  <mv-select-x
    validateFirst=true
    [options]=selectOptionsEstaciones
    required=false>
  </mv-select-x>

  <mv-select-x
    validateFirst=true
    [options]=selectOptionsEstaciones>
  </mv-select-x>
  `;

  codeRequiredExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;

  // requiredHint
  codeRequiredHintExampleHTML = `
  <mv-select-x
    validateFirst=true
    [options]=selectOptionsEstaciones
    required=true
    requiredHint="Debes rellenar este campo">
  </mv-select-x>
  `;

  codeRequiredHintExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;

  // showCountSelected
  codeShowCountSelectedExampleHTML = `
  <mv-select-x
    [options]=selectOptionsEstaciones
    [multiple]=true
    [showCountSelected]=true>
  </mv-select-x>

  <mv-select-x
    [options]=selectOptionsEstaciones
    [multiple]=true
    [showCountSelected]=false>
  </mv-select-x>

  <mv-select-x
    [multiple]=true
    [options]=selectOptionsEstaciones>
  </mv-select-x>
  `;

  codeShowCountSelectedExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;

  // validateBannedArray
  codeValidateBannedArrayExampleHTML = `
  <mv-select-x
    [options]=selectOptionsEstaciones
    [validateBannedArray]=validateBannedArrayExample>
  </mv-select-x>
  `;

  codeValidateBannedArrayExampleTS = `
  ...

  validateBannedArrayExample: any[] = [
    'invierno', 'otoño'
  ]

  ...
  `;

  // validateBannedHint
  codeValidateBannedHintExampleHTML = `
  <mv-select-x
    [options]=selectOptionsEstaciones
    [validateBannedArray]=validateBannedArrayExample
    validateBannedHint="Elige otro elemento distinto">
  </mv-select-x>
  `;

  codeValidateBannedHintExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;

  // validateFirst
  codeValidateFirstExampleHTML = `
  <mv-select-x
    [options]=selectOptionsEstaciones
    validateFirst=true
    required=true>
  </mv-select-x>

  <mv-select-x
    [options]=selectOptionsEstaciones
    validateFirst=false
    required=true>
  </mv-select-x>

  <mv-select-x
    [options]=selectOptionsEstaciones
    required=true>
  </mv-select-x>

  `;

  codeValidateFirstExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;

  // validateOnType
  codeValidateOnTypeExampleHTML = `
  <mv-select-x
    [options]=selectOptionsEstaciones
    validateOnType=true
    required=true>
  </mv-select-x>

  <mv-select-x
    [options]=selectOptionsEstaciones
    validateOnType=false
    required=true>
  </mv-select-x>

  <mv-select-x
    [options]=selectOptionsEstaciones
    required=true>
  </mv-select-x>

  `;

  codeValidateOnTypeExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;

  // changeEvent
  codeChangeEventExampleHTML = `
  <mv-select-x
    [options]=SelectOptions
    (changeEvent)=changeFunction()>
  </mv-select-x>

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
  <mv-select-x
    #mvSelectHint
    hint="Hint de prueba"
    [options]=selectOptionsEstaciones>
  </mv-select-x>

  <mv-button
    (clickEvent)="mvSelectHint.hintToggle()"
    color="primary">
    Mostrar/ocultar hint
  </mv-button>

  `;

  codeHintToggleExampleTS = `

   selectOptionsEstaciones: any[] = [
    {
      "id": "primavera",
      "text": "Primavera"
    },
    {
      "id": "verano",
      "text": "Verano"
    },
    {
      "id": "otoño",
      "text": "Otoño"
    },
    {
      "id": "invierno",
      "text": "Invierno"
    }
  ];

  `;


    //ariaLabel
    ariaLabelHtml = `
    <mv-select-x
      arialLabel="Tu texto personalizado">
    </mv-select-x>
    `;
  
    ariaLabelTS = `
  
    // Nada que añadir respecto al ejemplo principal
  
    `;

  formValue: any = {};
  select001Model: any;
  selectOptionsEstaciones: any[] = [
    {
      'id': 'primavera',
      'text': 'Primavera',
    },
    {
      'id': 'verano',
      'text': 'Verano',
    },
    {
      'id': 'otoño',
      'text': 'Otoño',
    },
    {
      'id': 'invierno',
      'text': 'Invierno',
    },
  ];
  selectOptionsEstacionesDisabled: any[] = [
    {
      'id': 'primavera',
      'text': 'Primavera',
    },
    {
      'id': 'verano',
      'text': 'Verano',
    },
    {
      'id': 'otoño',
      'text': 'Otoño',
      'disabled': true,
    },
    {
      'id': 'invierno',
      'text': 'Invierno',
      'disabled': true,
    },
  ];
  selectOptions: any[] = [
    {
      'id': 1,
      'text': 'Opción 1',
    },
    {
      'id': 2,
      'text': 'Opción 2',
    },
  ];
  validateBannedArrayExample: any[] = [
    'invierno', 'otoño',
  ]

  constructor() { }

  ngOnInit() {
  }

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

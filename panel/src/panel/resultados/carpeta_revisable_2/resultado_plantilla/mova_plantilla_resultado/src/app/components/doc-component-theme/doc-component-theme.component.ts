import {Component, OnInit} from '@angular/core';
import {AppService} from '@mova/components/core';
import {
  Student,
} from '@app/services/students/student.interface';

@Component({
  selector: 'app-doc-component-theme',
  templateUrl: './doc-component-theme.html',
  styleUrls: ['./doc-component-theme.scss'],
})
export class DocComponentTheme implements OnInit {

  codeConfigJSON = `
  {
    "generalConfig": {
      ...
      "componentTheme": 0
    },
    ...
  }

  `;

  // Configuración de la App
  private _mainFrameConfig: any;

  // Model del checkbox
  checkModelExample: any;
  // Datos para el values list de ejemplo
  dataArray: Student[] = [{
    "id": 1,
    "nombre_alumno": "Fátima",
    "apellido_1": "Fernández",
    "apellido_2": "Ramos",
    "nif": "00000006Y",
    "fecha_nacimiento": "2006-06-26T00:00:00",
    "edad": 15,
    "numero_asignaturas_aprobadas": 0
  }, {
    "id": 2,
    "nombre_alumno": "Test",
    "apellido_1": "Test",
    "apellido_2": "Test",
    "nif": "83923202C",
    "fecha_nacimiento": "2001-01-21T00:00:00",
    "edad": 21,
    "numero_asignaturas_aprobadas": 0
  }, {
    "id": 3,
    "uuid": "70267c88-ee54-4793-953c-d4ceb065fef5",
    "nombre_alumno": "Test",
    "apellido_1": "Test",
    "apellido_2": "Test",
    "nif": "53687164N",
    "fecha_nacimiento": "2001-01-21T00:00:00",
    "edad": 21,
    "numero_asignaturas_aprobadas": 0
  }, {
    "id": 4,
    "uuid": "562b53e4-6c69-4dac-8a5d-519905cde8d3",
    "nombre_alumno": "Test",
    "apellido_1": "Test",
    "apellido_2": "Test",
    "nif": "41430329S",
    "fecha_nacimiento": "2001-01-21T00:00:00",
    "edad": 21,
    "numero_asignaturas_aprobadas": 0
  }];
  // Model del datepicker
  datepickerModelExample: string;
  // Model del input
  inputModelExample: string;
  // Model del radio
  radioModelExample: any;
  // Opciones para el radio de ejemplo
  radioOptions: any[] = [
    {
      "id": "e",
      "text": "Estudiante"
    },
    {
      "id": "p",
      "text": "Profesor/a"
    }
  ];
  // Model del checkbox de theme
  selectThemeModel: any;
  // Opciones para seleccionar tema
  selectOptionsThemes: any[] = [
    {
      "id": 0,
      "text": "Tema 0 - MOVA"
    },
    {
      "id": 1,
      "text": "Tema 1 - MOVA deshabilitados más visibles"
    },
    {
      "id": 2,
      "text": "Tema 2 - líneas de componentes en verde"
    },
    {
      "id": 3,
      "text": "Tema 3 - líneas de componentes en azul"
    }
  ]
  // Model del select de ejemplo
  selectModelExample: any;
  // Opciones para select de ejemplo
  selectOptionsExample: any[] = [
    {
      "id": 0,
      "text": "Primavera"
    },
    {
      "id": 1,
      "text": "Verano"
    },
    {
      "id": 2,
      "text": "Otoño"
    },
    {
      "id": 3,
      "text": "Invierno"
    }
  ]
  // Model del textarea
  textareaModelExample: any;
  // Model del values list
  valuesListModelExample: any;

  constructor(
    private readonly _appService: AppService,
  ) { }

  ngOnInit() {
    // Recuperar la configuración de la App
    this._mainFrameConfig = this._appService.getMainFrameConfig();
    this.selectThemeModel = this._mainFrameConfig.generalConfig.componentTheme;
  }

  changeFunction(){
    let selectedThemeModel = this.selectThemeModel;
    let mainFrameConfig: any = this._mainFrameConfig;
    mainFrameConfig.generalConfig.componentTheme = selectedThemeModel;
    this._appService.updateMainFrameConfig(mainFrameConfig);
  }

}

import {Component, OnInit} from '@angular/core';
import {MvTableResponsiveColumn} from '@mova/components/table-responsive';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-forms-reactive-validation-on-type',
  templateUrl: './forms-reactive-validation-on-type.html',
  styleUrls: ['./forms-reactive-validation-on-type.scss'],
})
export class FormsReactiveValidationOnType implements OnInit {
  centros: any[] = [
    {
      id: 1,
      nombre: 'Centro Deportivo Municipal Alberto García',
      direccion: 'CALLE REGUERA DE TOMATEROS, 39B , 28053 MADRID',
      adaptado: 'Sí',
    },
    {
      id: 2,
      nombre: 'Centro Deportivo Municipal Alfredo Goyeneche',
      direccion: 'CALLE ARROYO DE POZUELO 99, 28023',
      adaptado: 'Sí',
    },
    {
      id: 3,
      nombre: 'Centro Deportivo Municipal Aluche',
      direccion: 'AVENIDA DE LAS AGUILAS 14, 28044 MADRID',
      adaptado: 'Sí',
    },
    {
      id: 4,
      nombre: 'Centro Deportivo Municipal Antonio Díaz Miguel',
      direccion: 'CALLE JOAQUIN DICENTA 1, 28029 MADRID',
      adaptado: 'No',
    },
    {
      id: 5,
      nombre: 'Centro Deportivo Municipal Barajas',
      direccion: 'AVENIDA LOGROÑO 70, 28042 MADRID',
      adaptado: 'Sí',
    },
    {
      id: 6,
      nombre: 'Centro Deportivo Municipal Casa de Campo',
      direccion: 'PASEO PUERTA DEL ANGEL 7, 28011 MADRID',
      adaptado: 'No',
    },
    {
      id: 7,
      nombre: 'Centro Deportivo Municipal Centro Integrado Arganzuela',
      direccion: 'CALLE CANARIAS 17, 28045 MADRID',
      adaptado: 'No',
    },
    {
      id: 8,
      nombre: 'Centro Deportivo Municipal Cerro Almodóvar',
      direccion: 'CALLE CERRO DE ALMODOVAR 9, 28007 MADRID',
      adaptado: 'Sí',
    },
    {
      id: 9,
      nombre: 'Centro Deportivo Municipal Chamartín',
      direccion: 'AVENIDA PIO XII 2, 28016 MADRID',
      adaptado: 'No',
    },
    {
      id: 10,
      nombre: 'Centro Deportivo Municipal Circuito BMX',
      direccion: 'CALLE EMBAJADORES 316, 28045 MADRID',
      adaptado: 'Sí',
    },
    {
      id: 11,
      nombre: 'Centro Deportivo Municipal Ciudad de los Poetas',
      direccion: 'CALLE ANTONIO MACHADO 12, 28035 MADRID',
      adaptado: 'Sí',
    },
    {
      id: 12,
      nombre: 'Centro Deportivo Municipal Concepción',
      direccion: 'CALLE JOSE DEL HIERRO 5, 28027 MADRID',
      adaptado: 'No',
    },
  ];
  centrosTableColumns: MvTableResponsiveColumn[] = [
    {
      'title': 'nombre',
      'name': 'Nombre',
      'sortable': true,
    },
    {
      'title': 'direccion',
      'name': 'Dirección',
    },
    {
      'title': 'adaptado',
      'name': 'Adaptado',
    },
  ];
  selectOptionsEstadoCivil: any[] = [
    {id: 0, text: 'Soltero/a'},
    {id: 1, text: 'Comprometido/a'},
    {id: 2, text: 'Casado/a'},
    {id: 3, text: 'Unión libre o unión de hecho'},
    {id: 4, text: 'Separado/a'},
    {id: 5, text: 'Divorciado/a'},
    {id: 6, text: 'Viudo/a'},
  ];
  radioOptionsSexo: any[] = [
    {
      'id': 'h',
      'text': 'Hombre',
    },
    {
      'id': 'm',
      'text': 'Mujer',
    },
  ];

  // mv-checkbox indeterminate
  notifCheck = true;

  // Controles para mostrar los mensajes
  showMessageDanger = false;
  showMessageSuccess = false;
  message: string;

  // Formulario reactivo
  clientForm:any;

  constructor(
    private readonly fb: FormBuilder,
  ) {
    this.clientForm = this.fb.group({
      nombre: '',
      apellido1: '',
      apellido2: '',
      direccion: '',
      fcNacimiento: '',
      dni: '',
      correo: '',
      telefono: '',
      edad: '',
      edadTutor: '',
      checkCondiciones: '',
      checkNotificaciones: '',
      archivo: '',
      radioSexo: '',
      estadoCivil: '',
      centro: '',
      fcAlta: '',
      fcPrimerUso: '',
      observaciones: '',
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.message = '';

    // Vemos si el formulario es valido o no
    const formValid = this.clientForm.status === 'VALID' ? true : false;

    if (formValid === false) {
      this.setForm();
    } else {
      this.message = 'Datos correctos';
    }

    this.showMessageDanger = !formValid;
    this.showMessageSuccess = formValid;
  }

  setForm() {
    this.addMessage(
        'nombre',
        'El campo "Nombre" es obligatorio<br>',
    );
    this.addMessage(
        'apellido1',
        'El campo "Primer apellido" es obligatorio<br>',
    );
    this.addMessage(
        'apellido2',
        'El campo "Segundo apellido" tiene que tener'+
          ' como mínimo 7 caracteres<br>',
    );
    this.addMessage(
        'dni',
        'El campo "DNI" no tiene el formato correcto<br>',
    );
    this.addMessage(
        'correo',
        'El campo "Correo" no tiene el formato correcto<br>',
    );
    this.addMessage(
        'telefono',
        'El campo "Teléfono" debe tener al menos 9 dígitos<br>',
    );
    this.addMessage(
        'edad',
        'El campo "Edad" se sale del rango permitido<br>',
    );
    this.addMessage(
        'estadoCivil',
        'El campo "Estado civil" es obligatorio<br>',
    );
    this.addMessage(
        'fcNacimiento',
        'El campo "Fª nacimiento" es obligatorio<br>',
    );
    this.addMessage(
        'fcPrimerUso',
        'El campo "Fª primer uso" es obligatorio<br>',
    );
    this.addMessage(
        'fcAlta',
        'El campo "Fª alta" es obligatorio<br>',
    );
    this.addMessage(
        'centro',
        'El campo "Centro más cercano" es obligatorio<br>',
    );
    this.addMessage(
        'observaciones',
        'El campo "Observaciones" es obligatorio<br>',
    );
    this.addMessage(
        'archivo',
        'El campo "Archivo" es obligatorio<br>',
    );
    this.addMessage(
        'radioSexo',
        'El campo "Sexo" es obligatorio<br>',
    );
    this.addMessage(
        'checkCondiciones',
        'El campo "Condiciones legales" es obligatorio<br>',
    );
    this.addMessage(
        'checkNotificaciones',
        'El campo "Notificaciones" es obligatorio<br>',
    );
  }

  /**
   * Añade mensajes de error al componente no valido
   * @param name Nombre del componente del formulario
   * @param message Mensaje de error
   */
  addMessage(name: string, message: string) {
    if (this.clientForm.controls[name].status !== 'VALID' ) {
      this.message += message;
    }
  }
}

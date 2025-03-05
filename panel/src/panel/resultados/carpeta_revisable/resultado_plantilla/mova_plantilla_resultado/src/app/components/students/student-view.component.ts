import {Component, OnInit, ViewChild} from '@angular/core';
import {MatExpansionPanel} from '@angular/material/expansion';
import {Router} from '@angular/router';
import {Student} from '@app/services/students/student.interface';
import {StudentService} from '@app/services/students/student.service';
import {StudentFilter} from '@app/services/students/student_filter.interface';
import { AppService } from '@mova/components/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

/**
 * Interface del filtro de estudiantes
 */
export interface Filtro {
  uuid: string;
  nombre: string;
  nif: string;
  primerApellido: string;
  segundoApellido: string;
  edad: string;
  fechaNacimiento: string;
}
@Component({
  selector: 'app-student',
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        display: 'block',
      })),
      state('closed', style({
        opacity: 0,
        display: 'none',
      })),
      transition('open => closed', [
        animate('0.35s'),
      ]),
      transition('closed => open', [
        animate('0.35s'),
      ]),
    ]),
  ],
  templateUrl: './student-view.html',
  styleUrls: ['./student-view.scss'],
})
/**
 * Vista de estudiantes
 */
export class StudentView implements OnInit {
  // Referencia al filtro complejo
  @ViewChild('filtrosPanel', {static: false}) panel?: MatExpansionPanel;

  // Configuración guardada del environment
  _configEnvironment;
  // Filtro
  public filter: Filtro = {
    uuid: '',
    nombre: '',
    nif: '',
    primerApellido: '',
    segundoApellido: '',
    edad: '',
    fechaNacimiento: '',
  };
  private pagination = {
    init: 0,
    actual: 0,
    limit: 10,
  };
  // Timer para lanzar el filtro
  private filterTimer;
  // Resultado de la búsqueda
  students: Student[] = [];
  // Total de students para una consulta
  studentsTotal: number = 0;

  constructor(
      public _studentService: StudentService,
      public _router: Router,
      public _appService: AppService,
  ) {
 }

  /**
   * Cargando datos iniciales
   */
  ngOnInit() {
    this.getStudents({resetStudents: true});
  }

  /**
   * Recupera los students
   * @param config Objeto de configuración
   * @param config.resetStudents Indica si hay que borrar el listado anterior
   */
  getStudents(config: {resetStudents: boolean}) {
    this._studentService.getStudents$(this.pagination)
      .subscribe((response) => {
        if (response.result.status) {
          this.studentsTotal = response.metadata.paging.total;
          this.addStudents(
            response.data.alumno as Student[],
            config,
          );
        } else {
          this.showError('Hubo un error al recuperar los students');
        }
      }
    );
  }

  /**
   * Añade students al listado
   * @param students Array de students para añadir al listado
   * @param config
   * @param config.resetStudents Indica si hay que borrar el listado anterior
   */
  addStudents(students: Student[], config: {resetStudents: boolean}) {
    if (config.resetStudents) {
      this.pagination.actual = 0;
      this.students = students;
    } else {
      const temp =
          this.students.concat(students);
      this.students = temp;
    }
    for (const student in this.students) {
      if (Object.prototype.hasOwnProperty.call(this.students, student)) {
        this.students[student].image =
            this._studentService.getNextRndImg(this.students[student].id);
      }
    }
  }

  /**
   * Lanza el filtro si se ha dejado de escribir
   * @param event
   */
  filterChange(event: any) {
    if (!this.filterTimer) {
      this.filtrar();
    } else {
      clearTimeout(this.filterTimer);
      this.filtrar();
    }
  }

  /**
   * Selecciono el tipo de filtrado y espero a que se deje de escribir
   */
  filtrar() {
    if(!this.isFilterEmpty()){
      this.filterTimer = setTimeout(() => {
        this.filterTimer = undefined;
        this.pagination.actual = 0;
        this.getStudentsWithFilter({resetStudents: true});
      }, 1000);
    }else{
      this.getStudents({resetStudents: true});
    }
  }

  /**
   * Filtro por identificación del alumno
   */
  getStudentsByUUID() {
    this.filterTimer = setTimeout(() => {
      this.filterTimer = undefined;
      this._studentService.getStudentByUUID$(this.filter.uuid)
        .subscribe((response) => {
          if (response.result.status) {
            let student = response.data as Student;
            let students = [student];
            this.studentsTotal = 1;
            this.addStudents(
              students,
              {resetStudents: true},
            );
          } else {
            this.showError('Hubo un error al buscar el alumno');
          }
        },
        (error) => {
          // Si es error 404 simplemente ponemos students a vacio para que muestre el message "no se encontraron resultados"
          // Si el error es de otro tipo mostramos snackbar de error
          if(error.status == 404){
            this.students = [];
          }else{
            this.showError('Hubo un error al buscar el alumno');
          }
        }
      );
    }, 1000);
  }

  /**
   * Filtro complejo de alumno
   */
  getStudentsWithFilter(config: {resetStudents: boolean}) {
    const student: StudentFilter = {
      uuid: {
        value: '',
        type: 'string',
        operation: 'EQ',
      },
      id: {
        value: undefined,
        type: 'integer',
        operation: 'EQ',
      },
      nif: {
        value: this.filter.nif,
        type: 'string',
        operation: 'EQ',
      },
      nombre_alumno: {
        value: '%' + this.filter.nombre + '%',
        type: 'string',
        operation: 'LIKE',
      },
      apellido_1: {
        value: '%' + this.filter.primerApellido + '%',
        type: 'string',
        operation: 'LIKE',
      },
      apellido_2: {
        value: '%' + this.filter.segundoApellido + '%',
        type: 'string',
        operation: 'LIKE',
      },
      edad: {
        value: parseInt(this.filter.edad),
        type: 'integer',
        operation: 'EQ',
      },
      fecha_nacimiento: {
        value: this.filter.fechaNacimiento,
        type: 'string',
        operation: 'EQ',
      },
      numero_asignaturas_aprobadas: {
        value: undefined,
        type: 'string',
        operation: 'EQ',
      },
    };
    this._studentService.getStudentsWithFilter$(student, this.pagination)
      .subscribe((response: any) => {
        if (response.result.status) {
          this.studentsTotal = response.metadata.paging.total;
          this.addStudents(
            response.data.alumno as Student[],
            config,
          );
        } else {
          this.showError('Hubo un error con el filtro');
        }
      }
    );
  }

  /**
   * Ir al detalle del alumno
   * @param student Alumno
   * @param event
   */
  OnDetail(student: Student, event: PointerEvent) {
    event.preventDefault();
    event.stopPropagation();
    this._router.navigate(['/student-detail', student.uuid]);
  }

  /**
   * Ir al detalle del alumno
   * @param student Alumno
   * @param event
   */
  OnEdit(student: Student, event: PointerEvent) {
    this._router.navigate(['/student-edit', student.uuid]);
  }

  /**
   * Cargar más datos al listado
   */
  OnLoadMore() {
    if (this.pagination) {
      this.pagination.actual += 1;
      if(this.isFilterEmpty()){
        this.getStudents({resetStudents: false});
      }else{
        this.getStudentsWithFilter({resetStudents: false});
      }
    }
  }

  /**
   * Comprueba si el filtro de busqueda esta vacio
   */
  isFilterEmpty(){
    let isEmpty: boolean = true;
    if(
      this.filter.nombre != '' ||
      this.filter.nif != '' ||
      this.filter.primerApellido != '' ||
      this.filter.segundoApellido != '' ||
      this.filter.edad != '' ||
      this.filter.fechaNacimiento != ''
    ){
      isEmpty = false;
    }
    return isEmpty;
  }

  /**
   * Borrado del filtro
   */
  OnResetFilter() {
    this.filter = {
      uuid: '',
      nombre: '',
      nif: '',
      primerApellido: '',
      segundoApellido: '',
      edad: '',
      fechaNacimiento: '',
    };
    this.getStudents({resetStudents: true});
    this._appService.showSnackBar(
      {
        text: 'Filtro borrado',
        type: 'info',
      },
    );
  }

  showError(message: string) {
    this._appService.showSnackBar(
      {
        text: message ? message : 'Error desconocido',
        type: 'danger',
      },
    );
  }

  showKey(filterKey: string) {
    switch (filterKey) {
      case 'nombre':
        return 'Nombre';
        break;
      case 'nif':
        return 'NIF';
        break;
      case 'primerApellido':
        return 'Primer apellido';
        break;
      case 'segundoApellido':
        return 'Segundo apellido';
        break;
      case 'edad':
        return 'Edad';
        break;
      case 'fechaNacimiento':
        return 'F. Nacimiento';
        break;
      default:
        break;
    }
  }

  removeFilter(filter: any) {
    this.filter[filter.key] = '';
    this.getStudents({resetStudents: true});
  }

  collapseCard(student: any){
    student.collapse = !student.collapse;
  }

}

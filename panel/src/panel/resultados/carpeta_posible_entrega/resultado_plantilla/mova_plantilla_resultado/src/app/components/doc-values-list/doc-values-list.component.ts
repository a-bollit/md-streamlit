import {Component, OnInit, ViewChild} from '@angular/core';
import {
  StudentDocComponentsService,
} from '@app/services/students/doc-components/student.service'; // Servicio de students
// Interfaz de un elemento student
import {
  Student,
} from '@app/services/students/student.interface';

// Clase intermedia entre el servicio student y el componente
// mv-table-responsive
import {
  StudentLoadData,
} from '@app/services/students/doc-components/student-load-data';
// JSON de datos en student
import studentLocalDataExample
  from '@app/services/students/doc-components/student-local-data-example.json';
import {MvTableResponsiveColumn} from '@mova/components/table-responsive';
import {MvValuesList} from '@mova/components/values-list';
import {AppService} from '@mova/components/core';
import * as examples from './value-list.examples';
@Component({
  selector: 'app-doc-values-list',
  templateUrl: './doc-values-list.html',
  styleUrls: ['./doc-values-list.scss'],
})
export class DocValuesList {
  @ViewChild('mvValuesListGetSelectedExample', {static: false},
  ) mvValuesListGetSelectedExample: MvValuesList;
  @ViewChild('mvValuesListGetSelectedExample2', {static: false},
  ) mvValuesListGetSelectedExample2: MvValuesList;
  @ViewChild('mvValuesListEjemploUso', {static: false},
  ) mvValuesListEjemploUso: MvValuesList;
  @ViewChild('mvValuesListEjemploUso2', {static: false},
  ) mvValuesListEjemploUso2: MvValuesList;

  // Array de datos en student formado por objetos de tipo 'Student'
  dataArray: Student[] = studentLocalDataExample;

  dataArrayEjemploUso: Student[];
  /**
   * DataSource para trabajar con los datos del servidor La lista de valores
   * utiliza un componente 'mv-table-responsive' que necesita un objeto que
   * implemente la interfaz 'MvTableResponsiveLoadData', en este caso es
   * 'StudentLoadData', para trasladar los datos del servicio a
   * la tabla mediante los métodos definidos en la interfaz
   * 'MvTableResponsiveLoadData'
   */

  loadDataSource = new StudentLoadData(this._studentService);

  valuesList001Model: any;
  valuesList002Model: any;

  tableColumnsExample: MvTableResponsiveColumn[];
  tableColumnsEjemploUso: MvTableResponsiveColumn[]

  getSelectedObj1: any;
  getSelectedObj2: any;
  datosEjemploUso1: any;
  datosEjemploUso2: any;
  // * Variables de código *
  codeUseExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    #mvValuesListEjemploUso

    [(ngModel)]="valuesList001Model"
    [dataSourceLoader]="loadDataSource"
    [tableColumns]="tableColumnsEjemploUso"

    dialogTitle="Ejemplo de uso con dataSourceLoader"
    dialogSubtitle="Ejemplo con datos cargados"
    filterTitle="Filtro"
    filterPlaceholder="Buscar..."
    placeholderCode="Código"
    placeholderText="Descripción"
    hint="Seleccionado"
    labelCode="Identificador"
    labelText="Descripción"

    required="true"
    validateFirst="true"
    validateOnType="true"

    iconFontSet="fa"
    icon="fa-address-book"
    pageSize="8"
    adapt="true"
    filter="true"
    hideRowTitles="false"
    delay="1500"
    loadingDelay="3000"

    columnCode="uuid"
    columnText="nombre_alumno"

    defaultSortColumn="uuid"
    defaultSortDirection="asc"
  >
  </mv-values-list>
  <!-- Ejemplo con datos en local -->
  <mv-values-list
    #mvValuesListEjemploUso2

    [(ngModel)]="valuesList002Model"
    [data]="dataArray"
    [tableColumns]="tableColumnsEjemploUso"

    dialogTitle="Ejemplo de uso con array"
    dialogSubtitle="Ejemplo con datos cargados"
    filterTitle="Filtro"
    filterPlaceholder="Buscar..."
    placeholderCode="Código"
    placeholderText="Descripción"
    hint="Seleccionado"
    labelCode="Identificador"
    labelText="Descripción"

    required="false"
    validateFirst="true"
    validateOnType="true"

    icon="menu_open"
    pageSize="3"
    adapt="true"
    filter="true"
    hideRowTitles="false"
    delay="500"
    loadingDelay="1000"

    columnCode="uuid"
    columnText="nombre_alumno"

    defaultSortColumn="uuid"
    defaultSortDirection="desc"
  >
  </mv-values-list>
  `;
  codeUseExampleColumns = `

  tableColumnsEjemploUso: MvTableResponsiveColumn[] = [
    {
      'title': 'id',
      'name': 'Id',
      'sortable': true,
    },
    {
      'title': 'nombre_alumno',
      'name': 'Nombre',
      'sortable': true,
    },
    {
      'title': 'apellido_1',
      'name': 'Apellido 1',
      'sortable': true,
    },
    {
      'title': 'apellido_2',
      'name': 'Apellido 2',
      'sortable': true,
    },
  ];
  `;
  codeUseExampleData = `

  dataArrayEjemploUso: Student[] = [{
		"uuid": 6,
		"uuid": "f17d05a1-2f53-462d-a161-836f67b6acd1",
		"nombre_alumno": "Fátima",
		"apellido_1": "Fernández",
		"apellido_2": "Ramos",
		"nif": "00000006Y",
		"fecha_nacimiento": "2006-06-26T00:00:00",
		"edad": 15,
		"numero_asignaturas_aprobadas": 0
	}, {
		"uuid": 1000,
		"uuid": "ca63f20b-a148-43c2-bb60-91edf335c864",
		"nombre_alumno": "Test",
		"apellido_1": "Test",
		"apellido_2": "Test",
		"nif": "83923202C",
		"fecha_nacimiento": "2001-01-21T00:00:00",
		"edad": 21,
		"numero_asignaturas_aprobadas": 0
	}, {
		"uuid": 1008,
		"uuid": "70267c88-ee54-4793-953c-d4ceb065fef5",
		"nombre_alumno": "Test",
		"apellido_1": "Test",
		"apellido_2": "Test",
		"nif": "53687164N",
		"fecha_nacimiento": "2001-01-21T00:00:00",
		"edad": 21,
		"numero_asignaturas_aprobadas": 0
	}, {
		"uuid": 1009,
		"uuid": "562b53e4-6c69-4dac-8a5d-519905cde8d3",
		"nombre_alumno": "Test",
		"apellido_1": "Test",
		"apellido_2": "Test",
		"nif": "41430329S",
		"fecha_nacimiento": "2001-01-21T00:00:00",
		"edad": 21,
		"numero_asignaturas_aprobadas": 0
	}];
  `;

  codeUseExampleTS = `
  /*
  Importaciones necesarias de la fuente de los datos en servidor, en este caso el servicio de students
  */
  // Servicio de students
  import { StudentService } from '@app/services/student/student.service';
  // Interfaz de un elemento student
  import { Student } from '@app/services/student/student.interface';
  // Clase intermedia entre el servicio student y el componente mv-table-responsive
  import { StudentLoadData } from '@app/services/student/student-table-responsive-load-data';

  /*
  Importaciones necesarias de la fuente de datos en local, en este caso es un fichero externo pero puede
  usarse un array de JSON directamente
  */
  import studentLocalDataExample from '@app/services/student/student-local-data-example.json'; // JSON de datos en student

  ...

  data: Student[] = studentLocalDataExample; // Array de datos en student formado por objetos de tipo 'Student'
  /*
  DataSource para trabajar con los datos del servidor. La lista de valores utiliza un componente 'mv-table-responsive'
  que necesita un objeto de tipo 'StudentLoadData' para trasladar los datos del servicio a la tabla
  */
  loadDataSource = new StudentLoadData(this._studentService);
  valuesList001Model: any;
  valuesList002Model: any;

  ...
  constructor(
    private studentService: StudentService
  ) {}
  ...
  `;
  codeAdaptExampleHTML = `
  <mv-values-list
    [data]="dataArray"
    adapt="true">
  </mv-values-list>

  <mv-values-list
    [data]="dataArray"
    adapt="false"
  ></mv-values-list>

  <mv-values-list
    [data]="dataArray"
  ></mv-values-list>
  `;
  columnCodeExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    [dataSourceLoader]="loadDataSource"
    columnCode="nombre_alumno"
    columnText="apellido_1"
  ></mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    [data]="dataArray"
    columnCode="nombre_alumno"
    columnText="apellido_1"
  ></mv-values-list>
  `;
  columnTextExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    [dataSourceLoader]="loadDataSource"
    columnCode="nombre_alumno"
    columnText="apellido_1"
  ></mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    [data]="dataArray"
    columnCode="nombre_alumno"
    columnText="apellido_1"
  ></mv-values-list>
  `;
  codeDataExampleHTML = `
  <mv-values-list
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeDataExampleTS = `
  ...
  // Modificaciones añadidas al TS del ejemplo principal
  data: Student[] = studentLocalDataExample;

  ...
  `;
  codeDataSourceLoaderExampleHTML = `
  <mv-values-list
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeDataSourceLoaderExampleTS = `
  ...

  loadDataSource = new StudentLoadData(this._studentService);

  ...
  `;
  codeDataSourceLoaderExampleLoadData = `
  ...

  import {MvTableResponsiveLoadData} from '@mova/components/table-responsive';
  import {map} from 'rxjs/operators';
  import {Observable, BehaviorSubject} from 'rxjs';
  import {StudentDocComponentsService} from './student.service';
  import {Student} from '../student.interface';

  /**
   * Clase que se pasará al mv-table-responsive para la obtención de datos
   * en modo servidor. Así como obtener los items totales para el paginador.
   */
  export class StudentLoadData
  implements MvTableResponsiveLoadData<Student> {
    /** Primeros datos que se cargarán en la tabla, inicialmente vacío */
    initialData$ = new BehaviorSubject<Student[]>([]);

    /** Cantidad de items totales en el servidor que se podrán cargar */
    totalItems: number;

    constructor(
      private readonly _studentService: StudentDocComponentsService,
    ) {
      // Se obtienen los items totales una única vez al inicializar la clase
      this._studentService.getTotalStudents$().subscribe(
          (items) => {
            this.totalItems = items.metadata.paging.total;
          }
      );
    }

    /**
     * Obtiene los nuevos datos dependiendo de los parámetros para refrescar la
     * tabla
     *
     * @param filter string de búsqueda para filtrar
     * @param sortParam columna por la que ordenar
     * @param sortDirection dirección de la ordenación (asc o desc)
     * @param pageIndex número de la página a cargar
     * @param pageSize tamaño de la página (cantidad de items por cada una)
     * @returns
     */
    loadData$(filter?: string, sortParam?: string, sortDirection?: string,
        pageIndex?: number, pageSize?: number): Observable<any[]> {

      const _filter: any = {
        nombre_alumno: {
          value: '%' + filter + '%',
          type: 'string',
          operation: 'LIKE',
        },
      };
      let pagination = null;
      if(pageIndex != undefined && pageSize != undefined){
        pagination = {
          init: 0,
          actual: pageIndex,
          limit: pageSize,
        };
      }

      let orderBy: string = '';
      if(sortDirection == 'desc'){
        orderBy += '-';
      }else{
        orderBy += '+';
      }
      if(sortParam){
        orderBy += sortParam;
      }else{
        orderBy += 'id';
      }


      return this._studentService.getStudentsWithFilter$(_filter, pagination, orderBy).pipe(map(((students) => {
        // se da valor a los datos iniciales
        this.initialData$.next(students.data.alumno);
        // se devuelven los students para que el dataSource de MOVA los maneje e
        // inserte en la tabla
        return students.data.alumno;
      })));
    }

    /**
     * Obtiene un registro basado en una búsqueda filtrada
     * @param filter string de búsqueda para filtrar
     */
    loadRecord$(filter?: string): Observable<any> {
      return this._studentService.getStudentByUUID$(filter).pipe(map(
        ((student) => student.data ? student.data : undefined ))
      );
    }

  }
  ...
  `;
  codeDataSourceLoaderExampleService = `
  ...

  import {Injectable} from '@angular/core';
  import {HttpClient, HttpHeaders} from '@angular/common/http';
  import {EMPTY, Observable} from 'rxjs';
  import {Student} from '../student.interface';
  import {AppService} from '@mova/components/core';
  import {StudentFilter} from '../student_filter.interface';

  /**
   * Service que se encarga de obtener los datos relacionados con clientes del
   * servidor.
   */
  @Injectable({
    providedIn: 'root',
  })
  export class StudentDocComponentsService {
    // Configuración guardada del environment
    _configEnvironment;
    // Uri del servicio
    uri = '';

    constructor(
      private readonly _appService: AppService,
      private readonly http: HttpClient,
    ) {
      this._configEnvironment = this._appService.getConfigEnvironment();
      let uri = this._configEnvironment['app']['studentService']['urlWithoutAuth'];
      this.uri = uri;
    }

    /**
     * Recupera los datos del alumno
     * @param UUID Identificación del alumno
     * @returns
    */
    public getStudentByUUID$(UUID: string): Observable<any> {
      const requestUrl =
          this.uri + '/alumnos/' + UUID;

      const headers = this.setHeaders();
      return this.http.get<any[]>(requestUrl, {headers});
    }

    /**
     * Recupera el listado de alumnos filtrado con paginación
     * @param filtro Filtro de estudiantes
     * @param pagination Objeto de la paginación
     * @param pagination.init
     * @param pagination.actual Página actual
     * @param pagination.limit Limite de campos por página
     * @returns
     */
    getStudentsWithFilter$(
        filtro: StudentFilter,
        pagination: { init: number; actual: number; limit: number; },
        orderBy: string,
    ): Observable<any> {
      let requestUrl = this.uri + '/alumnos/get';

      // Paginación
      if (pagination) {
        requestUrl +=
          '?$init=' + pagination.actual * pagination.limit + '&$limit=' + pagination.limit;
      }

      // Orderby
      if(orderBy){
        if(!requestUrl.includes("?")){
          requestUrl += '?';
        }else{
          requestUrl += '&';
        }
        requestUrl += '$orderby=' + orderBy;
      }

      // Filtro padre, basado solo en AND
      const body = {
        '$filter': {
          'operation': 'AND',
          'values': [],
        },
      };
      // Añado filtros por cada propiedad
      for (const filterProperty in filtro) {
        if (
          filterProperty &&
          filtro[filterProperty].value !== '' &&
          filtro[filterProperty].value
        ) {
          body.$filter.values.push({
            '$filter': {
              'operation': filtro[filterProperty].operation,
              'values': [{
                'property': filterProperty,
                'prop_type': filtro[filterProperty].type,
                'prop_value': filtro[filterProperty].value,
              }],
            },
          });
        }
      }
      const headers = this.setHeaders();

      return this.http.post<any[]>(requestUrl, body, {headers});
    }

    /*
     * @returns
     */
    public getTotalStudents$(): Observable<any> {
      const requestUrl =
          this.uri + '/alumnos?$total=true';
      const headers = this.setHeaders();

      return this.http.get<any[]>(requestUrl, {headers});
    }

    /**
     * Prepara las cabeceras para la API de alumnos
     * @returns
     */
    setHeaders() {
      return new HttpHeaders();
    }

  }
  ...
  `;
  codeDefaultSortColumnExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    defaultSortColumn="apellido_1"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    defaultSortColumn="apellido_1"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeDefaultSortDirectionExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    defaultSortColumn="apellido_1"
    defaultSortDirection="desc"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    defaultSortColumn="apellido_1"
    defaultSortDirection="desc"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeDelayExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    delay="3000"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    delay="3000"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeDialogSubtitleExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    dialogSubtitle="Subtítulo de ejemplo"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    dialogSubtitle="Subtítulo de ejemplo"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeDialogTitleExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    dialogTitle="Titulo de ejemplo"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    dialogTitle="Titulo de ejemplo"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeFilterExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    filter="true"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    filter="true"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en servidor y ocultando el filtro -->
  <mv-values-list
    filter="false"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local y ocultando el filtro-->
  <mv-values-list
    filter="false"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeFilterTitleExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    filter="true"
    filterTitle="Título de ejemplo"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    filter="true"
    filterTitle="Título de ejemplo"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeFilterPlaceholderExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    filter="true"
    filterPlaceholder="Placeholder de ejemplo"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    filter="true"
    filterPlaceholder="Placeholder de ejemplo"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeHideRowTitlesExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    hideRowTitles="true"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    hideRowTitles="true"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeHintExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    hint="Hint de ejemplo"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    hint="Hint de ejemplo"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeLabelCodeExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    labelCode="Label ejemplo"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    labelCode="Label ejemplo"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeLabelTextExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    labelText="Label ejemplo"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    labelText="Label ejemplo"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeLoadingDelayExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    loadingDelay=3000
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    loadingDelay=3000
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeIconExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    icon="view_list"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    icon="view_list"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codePageSizeExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    pageSize=5
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    pageSize=5
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codePlaceholderCodeExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    placeholderCode="Ejemplo"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    placeholderCode="Ejemplo"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codePlaceholderTextExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    placeholderText="Ejemplo"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    placeholderText="Ejemplo"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeRequiredExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    required="true"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    required="true"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeTableColumnsExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    [tableColumns]=tableColumnsExample
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    [tableColumns]=tableColumnsExample
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeTableColumnsExampleTS = `
  ...
  // Modificaciones añadidas al TS del ejemplo principal
  tableColumnsExample: MvTableResponsiveColumn[] = [
    {
      'title': 'Id estudiante',
      'name': 'id',
      'sortable': true,
    },
    {
      'title': 'nombre_alumno',
      'name': 'Nombre',
      'sortable': true,
    },
  ];
  ...
  `;
  codeValidateFirstExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    required="true"
    validateFirst="true"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    required="true"
    validateFirst="true"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    required="true"
    validateFirst="false"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    required="true"
    validateFirst="false"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeValidateOnTypeExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    required="true"
    validateOnType="true"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  <!-- Ejemplo con datos en local -->
  <mv-values-list
    required="true"
    validateOnType="true"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    required="true"
    validateOnType="false"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  <!-- Ejemplo con datos en local -->
  <mv-values-list
    required="true"
    validateOnType="false"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeChangeEventExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    (changeEvent)="changeEventFunction($event)"
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    (changeEvent)="changeEventFunction($event)"
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeChangeEventExampleTS = `
  ...
  changeEventFunction(event){
    alert('El valor ha cambiado');
  }
  ...
  `;
  codeGetSelectedExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-values-list
    #mvValuesListGetSelectedExample
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  <mv-button
    (clickEvent)="getSelectedEvent()"
    color="primary">
    Llamar a getSelected()
  </mv-button>

  <!-- Ejemplo con datos en local -->
  <mv-values-list
    #mvValuesListGetSelectedExample2
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  <mv-button
    (clickEvent)="getSelectedEvent()"
    color="primary">
    Llamar a getSelected()
  </mv-button>
  `;
  codeGetSelectedExampleTS = `
  @ViewChild('mvValuesListGetSelectedExample', {static: false}) mvValuesListGetSelectedExample: MvValuesList;
  @ViewChild('mvValuesListGetSelectedExample2', {static: false}) mvValuesListGetSelectedExample2: MvValuesList;
  ...
  getSelectedObj1: any;
  getSelectedObj2: any;
  ...
  getSelectedEvent(){
    this.getSelectedObj1 = this.mvValuesListGetSelectedExample.getSelected();
    this.getSelectedObj2 = this.mvValuesListGetSelectedExample2.getSelected();
  }
  ...
  `;
  codeIconFontSetExampleHTML = `
  <mv-values-list
    [dataSourceLoader]="loadDataSource"
    iconFontSet="fa"
    icon="fa-address-book"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  <mv-values-list
    [data]="dataArray"
    icon="menu_open"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  codeHideExampleHTML = `
  <p>Ejemplo con datos obtenidos del servidor (<a (click)='dataSourceLoader.scrollIntoView({behavior: "smooth",block: "start"})'>dataSourceLoader</a>)
  y hideCode = true:</p>
  <mv-values-list
    required=true
    validateOnType=true
    hideCode=true
    [dataSourceLoader]="loadDataSource"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>

  <p>Ejemplo con datos obtenidos del student (<a (click)='data.scrollIntoView({behavior: "smooth",block: "start"})'>data</a>)
    y hideText = true:</p>
  <mv-values-list
    required=true
    hideText=true
    validateOnType=true
    [data]="dataArray"
    columnCode="uuid"
    columnText="nombre_alumno">
  </mv-values-list>
  `;
  constructor(
    private readonly _studentService: StudentDocComponentsService,
    private readonly _appService: AppService,
  ) {
    this.dataArrayEjemploUso = examples.dataArrayEjemploUso;
    this.tableColumnsExample = examples.tableColumnsExample;
    this.tableColumnsEjemploUso = examples.tableColumnsEjemploUso;
  }
  changeEventFunction(event) {
    this._appService.showSnackBar( {
      text: 'La acción ha resultado satisfactoria',
      type: 'info',
    });
  }
  getSelectedEvent() {
    this.getSelectedObj1 = this.mvValuesListGetSelectedExample.getSelected();
    this.getSelectedObj2 = this.mvValuesListGetSelectedExample2.getSelected();
  }
  getDatosEjemploUso1() {
    this.datosEjemploUso1 = this.mvValuesListEjemploUso.getSelected();
  }
  getDatosEjemploUso2() {
    this.datosEjemploUso2 = this.mvValuesListEjemploUso2.getSelected();
  }
  changeEjemploUso($event) {
    console.log('Valor de ejemplo de uso modificado');
    this._appService.showSnackBar( {
      text: 'Valor de ejemplo de uso modificado',
      type: 'info',
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {
  StudentDocComponentsService,
} from '@app/services/students/doc-components/student.service'; // Servicio de studentes
import {MvTableResponsiveColumn} from '@mova/components/table-responsive';
import {
  StudentLoadData,
} from '@app/services/students/doc-components/student-load-data';
// JSON de datos en studente
import studentLocalDataExample
  from '@app/services/students/doc-components/student-local-data-example.json';
// Interfaz de un elemento studente
import {
  Student,
} from '@app/services/students/student.interface';

@Component({
  selector: 'app-doc-table-responsive',
  templateUrl: './doc-table-responsive.html',
  styleUrls: ['./doc-table-responsive.scss'],
})
export class DocTableResponsive implements OnInit {
  // Array de datos en studente formado por objetos de tipo 'Student'
  dataStudent: Student[] = studentLocalDataExample;
  /**
   * DataSource para trabajar con los datos del servidor
   * La lista de valores utiliza un componente 'mv-table-responsive' que
   * necesita un objeto que implemente la interfaz 'MvTableResponsiveLoadData',
   * en este caso es 'StudentTableResponsiveLoadData', para trasladar los datos
   * del servicio a la tabla mediante los métodos definidos en la interfaz
   * 'MvTableResponsiveLoadData'
   */
  loadDataSource = new StudentLoadData(this._studentService);

  tableColumnsArray: MvTableResponsiveColumn[] = [
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
      'name': 'Primer apellido',
    },
    {
      'title': 'apellido_2',
      'name': 'Segundo apellido',
    },
    {
      'title': 'edad',
      'name': 'Edad',
    },
    {
      'title': 'fecha_nacimiento',
      'name': 'Fecha nacimiento',
    },
  ];

  elementsListExample: number[] = [10, 15, 25];

  excludeTableColumnsArray: string[] = ['id', 'apellido_1', 'apellido_2'];

  selectedItem: Student;

  // Ejemplo de uso
  codeUseExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-table-responsive
    *ngIf="loadDataSource"
    [dataSourceLoader]="loadDataSource"
    [pageSize]="6">
  </mv-table-responsive>

  <!-- Ejemplo con datos en local -->
  <mv-table-responsive
    *ngIf="dataStudent"
    [data]="dataStudent"
    [pageSize]="6">
  </mv-table-responsive>
  `;

  codeUseExampleTS = `
  /*
  Importaciones necesarias de la fuente de los datos en servidor, en este caso el servicio de estudiantes
  */
  // Servicio de studentes
  import { StudentService } from '@app/services/student/student.service';
  // Interfaz de un elemento studente
  import { Student } from '@app/services/student/student.interface';
  // Clase intermedia entre el servicio studente y el componente mv-table-responsive
  import { StudentTableResponsiveLoadData } from '@app/services/student/student-table-responsive-load-data';

  /*
  Importaciones necesarias de la fuente de datos en local, en este caso es un fichero externo pero puede
  usarse un array de JSON directamente
  */
  import studentLocalDataExample from '@app/services/student/student-local-data-example.json'; // JSON de datos en studente

  ...

  data: Student[] = studentLocalDataExample; // Array de datos en studente formado por objetos de tipo 'Student'
  /*
  DataSource para trabajar con los datos del servidor. La lista de valores utiliza un componente 'mv-table-responsive'
  que necesita un objeto de tipo 'StudentTableResponsiveLoadData' para trasladar los datos del servicio a la tabla
  */
  loadDataSource = new StudentTableResponsiveLoadData(this.studentService);

  ...

  constructor(
    private studentService: StudentService
  ) {}

  ...
  `;

  // data
  codeDataExampleHTML = `
  <!-- Ejemplo con datos en local -->
  <mv-table-responsive
    [data]="dataStudent"
    ...
  ></mv-table-responsive>
  `;

  codeDataExampleTS = `
  ...

  data: Student[] = studentLocalDataExample; // Array de datos en studente formado por objetos de tipo 'Student'

  ...
  `;

  // dataSourceLoader
  codeDataSourceLoaderExampleHTML = `
  <!-- Ejemplo con datos en servidor -->
  <mv-table-responsive
    [dataSourceLoader]="loadDataSource"
    ...
  ></mv-table-responsive>
  `;

  codeDataSourceLoaderExampleTS = `
  ...

  // Modificaciones añadidas al TS del ejemplo principal
  loadDataSource = new StudentTableResponsiveLoadData(this.studentService);

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
        // se devuelven los studentes para que el dataSource de MOVA los maneje e
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
          '$init=' + pagination.actual * pagination.limit + '&$limit=' + pagination.limit;
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

  // defaultSortColumn
  codeDefaultSortColumnExampleHTML = `
  <!-- Ejemplo con datos en local -->
  <mv-table-responsive
    defaultSortColumn="apellido_1"
    ...
  ></mv-table-responsive>

  <!-- Ejemplo con datos en servidor -->
  <mv-table-responsive
    defaultSortColumn="apellido_1"
    ...
  ></mv-table-responsive>
  `;

  codeDefaultSortColumnExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // defaultSortDirection
  codeDefaultSortDirectionExampleHTML = `
  <!-- Ejemplo con datos en local -->
  <mv-table-responsive
    defaultSortDirection="desc"
    ...
  ></mv-table-responsive>

  <!-- Ejemplo con datos en servidor -->
  <mv-table-responsive
    defaultSortDirection="desc"
    ...
  ></mv-table-responsive>
  `;

  codeDefaultSortDirectionExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;


  // excludeTableColumns
  codeElementsListExampleHTML = `
  <!-- Ejemplo con datos en local -->
  <mv-table-responsive
    [elementsList]="elementsListExample"
    ...
  ></mv-table-responsive>

  <!--  Ejemplo con datos en servidor -->
  <mv-table-responsive
    [elementsList]="elementsListExample"
    ...
  ></mv-table-responsive>
  `;

  codeElementsListExampleTS = `
  ...

  elementsListExample: number[] = [10, 15, 25];

  ...

  `;

  // excludeTableColumns
  codeExcludeTableColumnsExampleHTML = `
  <!-- Ejemplo con datos en local -->
  <mv-table-responsive
    [excludeTableColumns]="excludeTableColumnsArray"
    ...
  ></mv-table-responsive>

  <!--  Ejemplo con datos en servidor -->
  <mv-table-responsive
    [excludeTableColumns]="excludeTableColumnsArray"
    ...
  ></mv-table-responsive>
  `;

  codeExcludeTableColumnsExampleTS = `
  ...

  // Modificaciones añadidas al TS del ejemplo principal
  excludeTableColumnsArray: string[] = ['id', 'apellido_1', 'apellido_2'];

  ...

  `;

  // filter
  codeFilterExampleHTML = `
  <!-- Ejemplo con datos en local -->
  <mv-table-responsive
    filter=true
    ...
  ></mv-table-responsive>

  <!--  Ejemplo con datos en servidor -->
  <mv-table-responsive
    filter=true
    ...
  ></mv-table-responsive>
  `;

  codeFilterExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // filterTitle
  codeFilterTitleExampleHTML = `
  <!-- Ejemplo con datos en local -->
  <mv-table-responsive
    filterTitle='Título de ejemplo'
    ...
  ></mv-table-responsive>

  <!--  Ejemplo con datos en servidor -->
  <mv-table-responsive
    filterTitle='Título de ejemplo'
    ...
  ></mv-table-responsive>
  `;

  codeFilterTitleExampleTS = `
  // Nada que añadir respecto al ejemplo principal

  `;

  // formatType
  codeFormatTypeExampleHTML = `
  <p>Ejemplo con formatType = 'card':</p>

  <mv-table-responsive
    *ngIf="dataStudent"
    formatType="card"
    [data]="dataStudent"
    [pageSize]="6">
  </mv-table-responsive>

  <p>Ejemplo con formatType = 'card-responsive':</p>

  <mv-table-responsive
    *ngIf="dataStudent"
    formatType="card-responsive"
    [data]="dataStudent"
    [pageSize]="6">
  </mv-table-responsive>

  <p>Ejemplo con formatType = 'card-inline':</p>

  <mv-table-responsive
    *ngIf="dataStudent"
    formatType="card-inline"
    [data]="dataStudent"
    [pageSize]="6">
  </mv-table-responsive>

  <p>Ejemplo con formatType = 'card-inline-responsive':</p>

  <mv-table-responsive
    *ngIf="dataStudent"
    formatType="card-inline-responsive"
    [data]="dataStudent"
    [pageSize]="6">
  </mv-table-responsive>

  <p>Ejemplo con formatType = 'card-inline-truncate':</p>

  <mv-table-responsive
    *ngIf="dataStudent"
    formatType="card-inline-truncate"
    [data]="dataStudent"
    [pageSize]="6">
  </mv-table-responsive>

  <p>Ejemplo con formatType = 'card-inline-truncate-responsive':</p>

  <mv-table-responsive
    *ngIf="dataStudent"
    formatType="card-inline-truncate-responsive"
    [data]="dataStudent"
    [pageSize]="6">
  </mv-table-responsive>
  `;

  codeFormatTypeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // filterPlaceholder
  codeFilterPlaceholderExampleHTML = `
  <!-- Ejemplo con datos en local -->
  <mv-table-responsive
    filterPlaceholder='Placeholder de ejemplo'
    ...
  ></mv-table-responsive>

  <!--  Ejemplo con datos en servidor -->
  <mv-table-responsive
    filterPlaceholder='Placeholder de ejemplo'
    ...
  ></mv-table-responsive>
  `;

  codeFilterPlaceholderExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // loadingDelay
  codeLoadingDelayExampleHTML = `
  <!-- Ejemplo con datos en local -->
  <mv-table-responsive
    loadingDelay=10000
    ...
  ></mv-table-responsive>

  <!--  Ejemplo con datos en servidor -->
  <mv-table-responsive
    loadingDelay=10000
    ...
  ></mv-table-responsive>
  `;

  codeLoadingDelayExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // hideRowTitles
  codeHideRowTitlesExampleHTML = `
  <!-- Ejemplo con datos en local -->
  <mv-table-responsive
    hideRowTitles=true
    ...
  ></mv-table-responsive>

  <!--  Ejemplo con datos en servidor -->
  <mv-table-responsive
    hideRowTitles=true
    ...
  ></mv-table-responsive>
  `;

  codeHideRowTitlesExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // pageSize
  codePageSizeExampleHTML = `
  <!-- Ejemplo con datos en local -->
  <mv-table-responsive
    [pageSize]=9
    ...
  ></mv-table-responsive>

  <!--  Ejemplo con datos en servidor -->
  <mv-table-responsive
    [pageSize]=9
    ...
  ></mv-table-responsive>
  `;

  codePageSizeExampleTS = `

  //Nada que añadir respecto al ejemplo principal

  `;

  // tableColumns
  codeTableColumnsExampleHTML = `
  <!-- Ejemplo con datos en local -->
  <mv-table-responsive
    [tableColumns]="tableColumnsArray"
    ...
  ></mv-table-responsive>

  <!-- Ejemplo con datos en servidor -->
  <mv-table-responsive
    [tableColumns]="tableColumnsArray"
    ...
  ></mv-table-responsive>
  `;

  codeTableColumnsExampleTS = `
  ...

  // Modificaciones añadidas al TS del ejemplo principal
  tableColumnsArray: MvTableResponsiveColumn[] = [
    {
      'title': 'id',
      'name': 'Id',
      'sortable': true,
    },
    {
      'title': 'nombre',
      'name': 'Nombre',
      'sortable': true,
    },
    {
      'title': 'apellido_1',
      'name': 'Primer apellido',
    },
    {
      'title': 'apellido_2',
      'name': 'Segundo apellido',
    },
    {
      'title': 'edad',
      'name': 'Edad',
    },
    {
      'title': 'fecha_nacimiento',
      'name': 'Fecha nacimiento',
    },
  ];

  ...

  `;

  // selectItem
  codeSelectItemExampleHTML = `
  <!-- Ejemplo con datos en local -->
  <mv-table-responsive
    (selectItem)="selectItemFunction($event)"
    ...
  ></mv-table-responsive>

  <!-- Ejemplo con datos en servidor -->
  <mv-table-responsive
    (selectItem)="selectItemFunction($event)"
    ...
  ></mv-table-responsive>
  `;

  codeSelectItemExampleTS = `

  // Modificaciones añadidas al TS del ejemplo principal

  selectedItem: Student;

  ...

  selectItemFunction(item: Student) {
    this.selectedItem = item;
  }

  ...
  `;

  // shadow
  codeShadowExampleHTML = `
  <!-- Ejemplo con datos en local -->
  <mv-table-responsive
    shadow=true
    ...
  ></mv-table-responsive>

  <!-- Ejemplo con datos en servidor -->
  <mv-table-responsive
    shadow=true
    ...
  ></mv-table-responsive>
  `;

  codeShadowExampleTS = `

  //Nada que añadir respecto al ejemplo principal

  `;

  constructor(
    private readonly _studentService: StudentDocComponentsService,
  ) { }

  ngOnInit() {
  }

  selectItemFunction(item: Student) {
    this.selectedItem = item;
  }
}

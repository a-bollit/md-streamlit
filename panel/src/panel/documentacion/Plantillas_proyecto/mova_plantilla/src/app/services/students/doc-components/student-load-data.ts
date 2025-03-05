import {MvTableResponsiveLoadData} from '@mova/components/table-responsive';
import {map} from 'rxjs/operators';
import {Observable, BehaviorSubject, of} from 'rxjs';
import {StudentDocComponentsService} from './student.service';
import {Student} from '../student.interface';
import * as alumnos from './get-alumnos.json';
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

    /**
     * Load total items from local json
     */
    this.totalItems = alumnos.metadata.paging.limit

    // DISABLED FOR LOAD JSON LOCAL
    // Se obtienen los items totales una única vez al inicializar la clase
    /*
    this._studentService.getTotalStudents$().subscribe(
        (items) => {
          this.totalItems = items.metadata.paging.total;
        }
    );
    */


  }



  loadDataMock$(filter?: string, sortParam?: string, sortDirection?: string,
    pageIndex?: number, pageSize?: number): Observable<any[]> {
      /**
         * Load from local data json
         */
      this.initialData$.next(alumnos.data.alumnos);
      return of(alumnos.data.alumnos);
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

        //Disabled for load data from json local
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


  loadRecordMock$(filter?: string): Observable<any> {
    return of(alumnos.data);
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

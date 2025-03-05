import {MvTableResponsiveLoadData} from '@mova/components/table-responsive';
import {map} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';
import {StudentService} from './student.service';
import {Asignatura} from './asignatura.interface';

/**
 * Clase que se pasará al mv-table-responsive para la obtención de datos
 * en modo servidor. Así como obtener los items totales para el paginador.
 */
export class AsignaturasTableResponsiveLoadData implements MvTableResponsiveLoadData<Asignatura> {

  /** Primeros datos que se cargarán en la tabla, inicialmente vacío */
  initialData$ = new BehaviorSubject<Asignatura[]>([]);

  /** Cantidad de items totales en el servidor que se podrán cargar */
  totalItems: number;

  constructor(private readonly _studentService: StudentService) {
    // Se obtienen los items totales una única vez al inicializar la clase
    this._studentService.getAsignaturas$().subscribe(
      (response) => this.totalItems = response.data.length,
    );
  }

  
  loadDataMock$(filter?: string, sortParam?: string, sortAsignatura?: string,
    pageIndex?: number, pageSize?: number): Observable<Asignatura[]> {
    let init: number = 0;
    let limit: number = 25;
    let filterObj: any = {};
    if(filter){
      filterObj = {
        'operation': 'LIKE',
        'values': [
          {
            'property': 'nombre_asignatura',
            'prop_type': 'string',
            'prop_value': '%' + filter + '%',
          },
        ]
      }
    }

    return this._studentService.getAsignaturas$(filterObj, init, limit).pipe(map(((response) => {
      // se da valor a los datos iniciales
      this.initialData$.next(response.data.asignatura);
      // se devuelven los studentes para que el dataSource de MOVA los maneje e
      // inserte en la tabla
      return response.data.asignatura;
    })));
  }

  /**
   * Obtiene los nuevos datos dependiendo de los parámetros para refrescar la
   * tabla
   *
   * @param filter string de búsqueda para filtrar
   * @param sortParam columna por la que ordenar
   * @param sortAsignatura dirección de la ordenación (asc o desc)
   * @param pageIndex número de la página a cargar
   * @param pageSize tamaño de la página (cantidad de items por cada una)
   * @returns
   */
  loadData$(filter?: string, sortParam?: string, sortAsignatura?: string,
      pageIndex?: number, pageSize?: number): Observable<Asignatura[]> {

    let init: number = 0;
    let limit: number = 25;
    let filterObj: any = {};
    if(filter){
      filterObj = {
        'operation': 'LIKE',
        'values': [
          {
            'property': 'nombre_asignatura',
            'prop_type': 'string',
            'prop_value': '%' + filter + '%',
          },
        ]
      }
    }

    return this._studentService.getAsignaturas$(filterObj, init, limit).pipe(map(((response) => {
      // se da valor a los datos iniciales
      this.initialData$.next(response.data.asignatura);
      // se devuelven los studentes para que el dataSource de MOVA los maneje e
      // inserte en la tabla
      return response.data.asignatura;
    })));
  }

  /**
   * Obtiene un registro basado en una búsqueda filtrada
   * @param filter string de búsqueda para filtrar
   */
  loadRecord$(filter?: string|number): Observable<Asignatura> {

    const filterObj: any = {
      '$filter': {
        'operation': 'EQ',
        'values': [
          {
            'property': 'id_asignatura',
            'prop_type': 'integer',
            'prop_value': filter,
          },
        ],
      },
    };
    return this._studentService.getAsignaturas$(filterObj).pipe(map(((response) =>
        response.data.asignatura[0] ? response.data.asignatura[0] : undefined)));
  }
}

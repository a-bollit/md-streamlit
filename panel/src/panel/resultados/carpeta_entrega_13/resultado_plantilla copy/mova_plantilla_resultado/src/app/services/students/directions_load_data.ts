import {MvTableResponsiveLoadData} from '@mova/components/table-responsive';
import {map} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';
import {StudentService} from './student.service';
import {Direction} from './direction.interface';

/**
 * Clase que se pasará al mv-table-responsive para la obtención de datos
 * en modo servidor. Así como obtener los items totales para el paginador.
 */
export class DirectionTableResponsiveLoadData implements MvTableResponsiveLoadData<Direction> {

  /** Primeros datos que se cargarán en la tabla, inicialmente vacío */
  initialData$ = new BehaviorSubject<Direction[]>([]);

  /** Cantidad de items totales en el servidor que se podrán cargar */
  totalItems: number;

  constructor(private readonly _studentService: StudentService) {
    // Se obtienen los items totales una única vez al inicializar la clase
    this._studentService.getDirections$().subscribe(
      (response) => this.totalItems = response.data.direccion.length,
    );
  }

  loadDataMock$(filter?: string, sortParam?: string, sortDirection?: string,
    pageIndex?: number, pageSize?: number): Observable<Direction[]> {

  let init: number = 0;
  let limit: number = 25;
  let filterObj: any = {};
  if(filter){
    filterObj = {
      "operation": "OR",
      "values":
        [
          {
            '$filter': {
              'operation': 'LIKE',
              'values': [
                {
                  'property': 'calle',
                  'prop_type': 'string',
                  'prop_value': '%' + filter + '%',
                },
              ],
            }
          },
          /*{
            '$filter': {
              'operation': 'EQ',
              'values': [
                {
                  'property': 'numero',
                  'prop_type': 'integer',
                  'prop_value': filter,
                },
              ],
            }
          },*/
        ]
    }
  }

  return this._studentService.getDirections$(filterObj, init, limit).pipe(map(((response) => {
    // se da valor a los datos iniciales
    this.initialData$.next(response.data.direccion);
    // se devuelven los studentes para que el dataSource de MOVA los maneje e
    // inserte en la tabla
    return response.data.direccion;
  })));
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
      pageIndex?: number, pageSize?: number): Observable<Direction[]> {

    let init: number = 0;
    let limit: number = 25;
    let filterObj: any = {};
    if(filter){
      filterObj = {
        "operation": "OR",
        "values":
          [
            {
              '$filter': {
                'operation': 'LIKE',
                'values': [
                  {
                    'property': 'calle',
                    'prop_type': 'string',
                    'prop_value': '%' + filter + '%',
                  },
                ],
              }
            },
            /*{
              '$filter': {
                'operation': 'EQ',
                'values': [
                  {
                    'property': 'numero',
                    'prop_type': 'integer',
                    'prop_value': filter,
                  },
                ],
              }
            },*/
          ]
      }
    }

    return this._studentService.getDirections$(filterObj, init, limit).pipe(map(((response) => {
      // se da valor a los datos iniciales
      this.initialData$.next(response.data.direccion);
      // se devuelven los studentes para que el dataSource de MOVA los maneje e
      // inserte en la tabla
      return response.data.direccion;
    })));
  }

  /**
   * Obtiene un registro basado en una búsqueda filtrada
   * @param filter string de búsqueda para filtrar
   */
  loadRecord$(filter?: string|number): Observable<Direction> {

    const filterObj: any = {
      '$filter': {
        'operation': 'EQ',
        'values': [
          {
            'property': 'id_direccion',
            'prop_type': 'integer',
            'prop_value': filter,
          },
        ],
      },
    };
    return this._studentService.getDirections$(filterObj).pipe(map(((response) =>
        response.data.direccion[0] ? response.data.direccion[0] : undefined)));
  }
}

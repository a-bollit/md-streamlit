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
        `${this.uri }/alumnos/${UUID}`;

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
    let requestUrl = `${this.uri}/alumnos/get`;

    // Paginación
    if (pagination) {
      requestUrl +=
        `?$init=${pagination.actual * pagination.limit}&$limit=${pagination.limit}`;
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
        `${this.uri}/alumnos?$total=true`;
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

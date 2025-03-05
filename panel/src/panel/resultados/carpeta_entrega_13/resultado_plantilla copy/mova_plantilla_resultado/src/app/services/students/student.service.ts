import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {Student} from './student.interface';
import {AppService, AuthenticationService} from '@mova/components/core';
import {StudentFilter} from './student_filter.interface';

/**
 * Service que se encarga de obtener los datos relacionados con clientes del
 * servidor.
 */
@Injectable({
  providedIn: 'root',
})
export class StudentService {

  // Configuración guardada del environment
  _configEnvironment;

  // Uri del servicio
  uri = '';

  constructor(
    private readonly _appService: AppService,
    private readonly _authenticationService: AuthenticationService,
    private readonly http: HttpClient,
  ) {
    this._configEnvironment = this._appService.getConfigEnvironment();
    // Por defecto, la url de los servicios rest es la que no va por autologin - wso2 (tenant raiz)
    let uri = this._configEnvironment['app']['studentService']['url'];
    const authType = this._authenticationService.getCredentials().authenticationType;
    // Si se ha entrado por autologin-wso2 la url de los servicios rest es distinta porque está publicado en el tenant de ciudadanos
    if(authType == 'autologin-wso2'){
      uri = this._configEnvironment['app']['studentService']['urlAutologin'];
    }
    this.uri = uri;
  }

  /**
   * Recupera los datos del alumno
   * @param UUID Identificación del alumno
   * @returns
  */
  public getStudentByUUID$(UUID: string): Observable<any> {
    const requestUrl =
        `${this.uri }/alumnos/${UUID
        }?$expand=direccion_alumno&$expand=asignaturas`;

    let headers = this.setHeaders();
    headers = headers.set('mv-hide-error','true');
    return this.http.get<any[]>(requestUrl, {headers});
  }

  /**
   * @param pagination Objeto de la paginación
   * @param pagination.init
   * @param pagination.actual Página actual
   * @param pagination.limit Limite de campos por página
   * @returns
   */
  public getStudents$(pagination: {
    actual:number,
    init:number,
    limit:number,
  }): Observable<any> {
    pagination.actual = pagination.actual | 0;
    pagination.limit = pagination.limit | 10;
    const requestUrl =
        `${this.uri}/alumnos?$init=${
          pagination.actual * pagination.limit
        }&$limit=${pagination.limit}&$total=true&$orderby=id`;
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
  ): Observable<any> {
    let requestUrl = `${this.uri }/alumnos/get?$total=true&$orderby=id`;
    if (pagination) {
      // Prueba del paginado
      requestUrl =
        `${this.uri}/alumnos/get?$init=${
          pagination.actual * pagination.limit
        }&$limit=${pagination.limit}&$total=true&$orderby=id`;
    }
    const headers = this.setHeaders();
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
   * Edita los datos de un alumno
   * @param alumno Datos del alumno
   * @returns
   */
  public setStudent$(alumno: Student, uuid: string): Observable<any> {
    const requestUrl = `${this.uri}/alumnos/${uuid}`;
    const headers = this.setHeaders();
    return this.http.put<any>(requestUrl, alumno, {headers});
  }

  /**
   * Elimina los datos del alumno
   * @param UUID Identificación del alumno
   * @returns
  */
  public deleteStudentByUUID$(UUID: string): Observable<any> {
    const requestUrl =
        `${this.uri }/alumnos/${UUID}`;

    let headers = this.setHeaders();
    return this.http.delete<any[]>(requestUrl, {headers});
  }


  /**
   * Crea un alumno
   * @param alumno Datos del alumno
   * @returns
   */
  public newStudent$(alumno: Student): Observable<any> {
    const requestUrl = `${this.uri}/alumnos`;
    const headers = this.setHeaders();
    return this.http.post<any>(requestUrl, alumno, {headers});
  }

  /**
   * Recupera una lista de direcciones
   * @param filter objeto para filtrar la busqueda
   * @returns
   */
  public getDirections$(filter?: any, init?: number, limit?: number): Observable<any> {
    let requestUrl = `${this.uri}/direcciones/get`;

    if(init >= 0){
      requestUrl += '?$init=' + init;
    }
    if(limit >= 0){
      if(init){
        requestUrl += '?';
      }else{
        requestUrl += '&';
      }
      requestUrl += '$limit=' + limit;
    }

    const headers = this.setHeaders();

    return this.http.post<any[]>(requestUrl, filter, {headers});
  }

  /**
   * Recupera una lista de asignaturas
   * @param filter objeto para filtrar la busqueda
   * @returns
   */
  public getAsignaturas$(filter?: any, init?: number, limit?: number): Observable<any> {
    let requestUrl = `${this.uri}/asignaturas/get`;

    if(init >= 0){
      requestUrl += '?$init=' + init;
    }
    if(limit >= 0){
      if(init){
        requestUrl += '?';
      }else{
        requestUrl += '&';
      }
      requestUrl += '$limit=' + limit;
    }

    const headers = this.setHeaders();

    return this.http.post<any[]>(requestUrl, filter, {headers});
  }

  /**
   * Prepara las cabeceras para la API de alumnos
   * @returns
   */
  setHeaders() {
    return new HttpHeaders()
     .set('mv-wso2-token', 'true');
  }

  // FIXME: TEST
  getNextRndImg(id: number) {
    let image = 0;
    if (typeof id === 'number') {
      image = id%99;
    }
    return `https://randomuser.me/api/portraits/men/${image}.jpg`;
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppService} from '@mova/components/core';

/**
 * Service que se encarga de obtener provincias y municipios de España.
 */
@Injectable({
  providedIn: 'root',
})
export class DocFileUploaderService {
  private readonly _configEnvironment: any;

  constructor(
    private readonly _appService: AppService,
    private readonly _http: HttpClient,
  ) {
    this._configEnvironment = this._appService.getConfigEnvironment();
  }

  /*
  * Servicio para obtener un token de autorizacion
  */
  getToken$(): Observable<any[]> {
    const requestUrl = this._configEnvironment['mova']['fileUploaderComponent']['uriTokenBase'];

    let oRequest: any = new HttpParams();
    oRequest = oRequest.append('grant_type', 'client_credentials');

    const headers = new HttpHeaders()
      .set('Authorization', 'Basic ' + this._configEnvironment['mova']['fileUploaderComponent']['authorizationHeader'])
      .set('Content-Type', 'application/x-www-form-urlencoded')
    return this._http.post<any>(requestUrl, oRequest, {headers});
  }

  /**
   * Servicio para obtener un archivo del backend
   */
   downloadFile$(accessToken: string, fileUrl: string): Observable<any> {
     const headers = new HttpHeaders()
       .set('Authorization', 'Bearer ' + accessToken);
     return this._http.get<any>(fileUrl, {headers, responseType: 'blob' as 'json'});
   }
}

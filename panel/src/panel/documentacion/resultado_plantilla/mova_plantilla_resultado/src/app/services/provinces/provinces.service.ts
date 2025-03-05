import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppService} from '@mova/components/core';

/**
 * Service que se encarga de obtener provincias y municipios de España.
 */
@Injectable({
  providedIn: 'root',
})
export class ProvincesService {
  private _configEnvironment: any;
  baseUrl: string;

  constructor(
    private readonly _appService: AppService,
    private readonly http: HttpClient,
  ) {
    this._configEnvironment = this._appService.getConfigEnvironment();
    this.baseUrl = this._configEnvironment['app']['movaRestServices'];
  }

  /*
  * Servicio para obtener las provincias de España
  */
  getProvinces$(): Observable<any[]> {
    const requestUrl = `${this.baseUrl
    }?idApp=6&idConsulta=mova_provincias&first=0&limit=100`;
    return this.http.get<any[]>(requestUrl);
  }

  /**
   * Servicio para obtener los municipios segun provincia
   * @param filter filtro sobre la busqueda
   */
  getMunicipalities$(filter: string|number): Observable<any> {
    const requestUrl = `${this.baseUrl
    }?idApp=6&idConsulta=mova_municipios_prov&pq1=${ filter
    }&first=0&limit=300`;

    return this.http.get<any>(requestUrl);
  }
}

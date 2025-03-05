import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppService} from '@mova/components/core';

/**
 * Service que se encarga de mandar datos de formulario con captcha para
 * validarlo en el backend
 */
@Injectable({
  providedIn: 'root',
})
export class CaptchaService {
  private readonly _configEnvironment: any;

  constructor(
    private readonly _appService: AppService,
    private readonly http: HttpClient,
  ) {
    this._configEnvironment = this._appService.getConfigEnvironment();
  }

  /*
  Query para mandar captcha y validarlo
  */
  captchaValidationExamples$(captcha: string, text: string): Observable<any[]> {
    const requestUrl = this._configEnvironment['app']['captchaServiceExample'];

    const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('captcha-google', captcha);

    const data: any = {
      valorEntrada: text,
    };

    return this.http.post<any[]>(requestUrl, data, {headers});
  }
}

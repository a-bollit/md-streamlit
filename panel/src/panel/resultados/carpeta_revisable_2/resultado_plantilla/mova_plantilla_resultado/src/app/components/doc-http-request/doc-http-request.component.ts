import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {AppService} from '@mova/components/core';

@Component({
  selector: 'app-doc-http-request',
  templateUrl: './doc-http-request.html',
  styleUrls: ['./doc-http-request.scss'],
})
export class DocHttpRequest implements OnInit {
  // Uso del componente
  codeUseExampleHTML = `
  `;

  codeUseExampleTS = `
  import {Injectable} from '@angular/core';
  import {HttpClient} from '@angular/common/http';
  import {Observable} from 'rxjs';

  ...

  constructor(
    private http: HttpClient
  ) {}

  exampleGetHttp$(): Observable<any> {
    const requestUrl = '...';
    const params: any = {};

    return this.http.get<any[]>(requestUrl, { params });
  }

  examplePostHttp$(data: any): Observable<any> {
    const requestUrl = '...';
    const headers: any = {};

     return this.http.post<Client>(requestUrl, data, { headers });
   }

  `;

  // environment.ts
  codeEnvironmentTS = `
  export const environment = {
    mova: {
      environment: 'DES',
      ...
    },
    app: {
      // Situar aqui las urls propias de la app segun entornos
      ...
    },
  };
  `;

  // environment.val.ts
  codeEnvironmentValTS = `
  export const environment = {
    mova:
      environment: 'VAL',
      ...
    },
    app: {
      // Situar aqui las urls propias de la app segun entornos
      ...
    },
  };
  `;

  // environment.prod.ts
  codeEnvironmentProdTS = `
  export const environment = {
    mova: {
      environment: 'PRO',
      ...
    },
    app: {
      // Situar aqui las urls propias de la app segun entornos
      ...
    },
  };
  `;


  // Configuración de mova
  codeMovaConfigHTML = `
  `;

  codeMovaConfigTS = `
  import {Injectable} from '@angular/core';
  import {HttpClient} from '@angular/common/http';
  import {Observable} from 'rxjs';

  ...

  constructor(
    private http: HttpClient
  ) {}

  exampleGetHttp$(): Observable<any> {
    const requestUrl = '...';
    const headers = new HttpHeaders()
    .set('mv-api-key','pruebaKey')
    .set('mv-hide-error','true')
    .set('mv-request-token','pruebaToken')
    .set('mv-token-auth','false')
    .set('mv-showLoading', 'true')
    .set('mv-wso2-token','true');

    return this.http.get<any[]>(requestUrl, {'headers': headers});
  }

  `;
  showLoadingTS = `

  showLoading(showLoading: string) {
    const httpRest =
      \`\${this.baseUrl}/v1/clientes/?first=\${1}&limit=\${100000}\`;

    const headers = new HttpHeaders()
        .set('mv-showLoading', showLoading);
    this.http.get<any[]>(httpRest, {headers}).subscribe((response) => {
      console.log(\`Respuesta: \`, response);
    });
  }
  WithoutShowLoading() {
    const httpRest =
      \`\${this.baseUrl}/v1/clientes/?first=\${1}&limit=\${100000}\`;

    const headers = new HttpHeaders();
    this.http.get<any[]>(httpRest, {headers}).subscribe((response) => {
      console.log(\`Respuesta: \`, response);
    });
  }
  `;
  showLoadingConfigTS = `
  ...
  interceptorService: {
    httpHeaderTokenAuthAlways: true,
    apiKeys: [
      {
        'name': 'pruebaKey',
        'apiKey': '',
      },
    ],
    ShowLoadingDefault: true,
  },
  ...
  `;

  private readonly _configEnvironment: any;
  baseUrl: string;
  showLoadingConfig: boolean;
  constructor(
    private readonly _appService: AppService,
    private readonly http: HttpClient,
  ) {
    this._configEnvironment = this._appService.getConfigEnvironment();
    this.baseUrl = this._configEnvironment['app']['clientService'];
    this.showLoadingConfig = this.
        _configEnvironment['mova']['interceptorService']['ShowLoadingDefault'];
  }


  ngOnInit() {
  }

  showLoading(showLoading: string) {
    const httpRest =
      `${this.baseUrl}/v1/clientes/?first=${1}&limit=${100000}`;

    const headers = new HttpHeaders()
        .set('mv-showLoading', showLoading);
    this.http.get<any[]>(httpRest, {headers}).subscribe((response) => {
      console.log(`Respuesta: `, response);
    });
  }
  showLoadingWithText(showLoading: string, texto: string, time: string) {
    const httpRest =
      `${this.baseUrl}/v1/clientes/?first=${1}&limit=${100000}`;

    const headers = new HttpHeaders()
        .set('mv-showLoading', showLoading)
        .set('mv-showLoading-text', texto)
        .set('mv-showLoading-time', time);

    this.http.get<any[]>(httpRest, {headers}).subscribe((response) => {
      console.log(`Respuesta: `, response);
    });
  }
  WithoutShowLoading() {
    const httpRest =
      `${this.baseUrl}/v1/clientes/?first=${1}&limit=${100000}`;

    const headers = new HttpHeaders();
    this.http.get<any[]>(httpRest, {headers}).subscribe((response) => {
      console.log(`Respuesta: `, response);
    });
  }
}

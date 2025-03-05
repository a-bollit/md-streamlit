import {Component, OnInit, ViewChild} from '@angular/core';
import {MvRecaptcha} from '@mova/components/recaptcha';
import {CaptchaService} from '../../services/captcha/captcha.service';

@Component({
  selector: 'app-doc-recaptcha',
  templateUrl: './doc-recaptcha.html',
  styleUrls: ['./doc-recaptcha.scss'],
})
export class DocRecaptcha implements OnInit {
  @ViewChild('captchaExample', {static: false}) captchaExample: MvRecaptcha;
  @ViewChild('captchaGetSuccessExample', {static: false})
    captchaGetSuccessExample: MvRecaptcha;
  @ViewChild('captchaReset', {static: false}) captchaReset: MvRecaptcha;

  @ViewChild('captchaOnSuccessExample', {static: false})
    captchaOnSuccessExample: MvRecaptcha;
  @ViewChild('captchaOnErrorExample', {static: false})
    captchaOnErrorExample: MvRecaptcha;
  @ViewChild('captchaOnExpiredExample', {static: false})
    captchaOnExpiredExample: MvRecaptcha;
  // Ejemplo de uso
  codeUseExampleHTML = `
  <mv-input
    label="Valor pasado al servicio"
    [(ngModel)]="exampleValidate.state">
  </mv-input>

  <mv-recaptcha
    #captchaExample>
  </mv-recaptcha>

  <mv-button
    appearance="raised"
    color="primary"
    (clickEvent)="captchaValidationExample()">
    Validar captcha
  </mv-button>

  <p>Resultado: <strong>{{ exampleValidate.response }}</strong></p>
  <p>Resultado captcha: <strong>{{ exampleValidate.responseCaptcha }}</strong></p>
  <p>Valor de entrada: <strong>{{ exampleValidate.state }}</strong></p>
  <p>Respuesta backend: <strong>{{ exampleValidate.responseBackend | json}}</strong></p>
  `;

  codeUseExampleTS = `
  import { MvRecaptcha } from '@mova/components/recaptcha';
  import { CaptchaService } from '../../services/captcha/captcha.service';

  ...

  @ViewChild('captchaExample', {static: false}) captchaExample: MvRecaptcha;

  ...

  // valor del captcha
  exampleValidate.responseCaptcha: string;
  // captcha realizado/no realizado
  exampleValidate.response: string = this.MSG_NO_CAPTCHA;
  // valor de respuesta del backend
  exampleValidate.responseBackend: any;
  // valor del input
  exampleValidate.state: string = 'correcto';

  constructor(
    private _captchaService: CaptchaService
  ) { }

  ngOnInit() {
  }

  captchaValidationExample(){
    this.exampleValidate.responseCaptcha = this.captchaExample.getLastSuccessCaptcha();

    if(this.exampleValidate.responseCaptcha){
      this._captchaService.captchaValidationExamples$(this.exampleValidate.responseCaptcha, this.exampleValidate.state).subscribe(
        response => {
          this.exampleValidate.response = this.MSG_CAPTCHA_OK;
          this.exampleValidate.responseBackend = response;
        },
        error => {
          this.exampleValidate.response = this.MSG_CAPTCHA_KO;
          this.exampleValidate.responseBackend = error;
        }
      );
    }else{
      this.exampleValidate.response = this.MSG_NO_CAPTCHA;
    }

  }

  ...
  `;

  codeUseServiceExampleTS = `
  import {Injectable} from '@angular/core';
  import {HttpClient, HttpHeaders} from '@angular/common/http';
  import {Observable} from 'rxjs';
  import { AppService } from '@mova/components/core';

  @Injectable({
    providedIn: 'root'
  })
  export class CaptchaService {

    private _configEnvironment: any;

    constructor(
      private _appService: AppService,
      private http: HttpClient
    ) {
      this._configEnvironment = this._appService.getConfigEnvironment();
    }

    /*
    Query para mandar captcha y validarlo
    */
    captchaValidationExamples$ (captcha: string, text: string): Observable<any[]> {
      let requestUrl = this._configEnvironment['app']['captchaServiceExample'];

      const headers = new HttpHeaders()
      .set('Content-Type','application/json')
      .set('captcha-google', captcha);

      let data: any = {
        valorEntrada: text
      }

      return this.http.post<any[]>(requestUrl, data, {'headers': headers});
    };

  }

  ...
  `;


  // environment.ts
  codeEnvironmentTS = `
  export const environment = {
    environment: 'DES',
    mova: {
      ...
      recaptchaService: {
        uriUtilSite: 'https://gestiona3.madrid.org/portalapps/util/recaptcha/',
        siteKey: '6Lcw6XIUAAAAAPngwupCl2UMhBN2qlcnePJopOi9',
      },
      ...
    },
    app: {
      ...
    },
  };
  `;

  // environment.val.ts
  codeEnvironmentValTS = `
  export const environment = {
    environment: 'VAL',
    mova: {
      ...
      recaptchaService: {
        uriUtilSite: 'https://gestiona3.madrid.org/portalapps/util/recaptcha/',
        siteKey: '6Lcw6XIUAAAAAPngwupCl2UMhBN2qlcnePJopOi9',
      },
      ...
    },
    app: {
      ...
    },
  };
  `;

  // environment.prod.ts
  codeEnvironmentProdTS = `
  export const environment = {
    environment: 'PRO',
    mova: {
      ...
      recaptchaService: {
        uriUtilSite: 'https://gestiona3.madrid.org/portalapps/util/recaptcha/',
        siteKey: 'XXX',  // La definida en la ficha de solicitud de app
      },
      ...
    },
    app: {
      ...
    },
  };
  `;

  // codeBackendExampleJava
  codeBackendExampleJava = `
  package mova.mova_rest_servicios.resources.v1;

  import javax.ws.rs.Path;
  import javax.ws.rs.core.HttpHeaders;
  import javax.ws.rs.core.Response;

  import mova.mova_rest_servicios.resources.v1.dto.CaptchaDTO;

  import org.apache.http.HttpHost;
  import org.apache.http.client.HttpClient;
  import org.apache.http.impl.client.HttpClientBuilder;
  import org.apache.http.impl.client.ProxyAuthenticationStrategy;
  import org.slf4j.Logger;
  import org.slf4j.LoggerFactory;

  import atlas.core.util.AtlasCommonConfigurationUtils;
  import atlas.rest.exception.AtlasRestException;
  import atlas.rest.exception.AtlasRestInfoException;

  import com.mashape.unirest.http.HttpResponse;
  import com.mashape.unirest.http.JsonNode;
  import com.mashape.unirest.http.Unirest;
  import com.mashape.unirest.http.exceptions.UnirestException;
  import com.mashape.unirest.request.HttpRequest;

  /**
   * Método de ejemplo en el que un servicio REST comprueba un Captcha de google
   * El captcha llega en la cabecera http "captcha-google"
   *
   * El método dado que es un ejemplo lo unico que hacer es pasar a mayúsculas un
   * valor de entrada
   *
   */
  @Path("/v1/captcha")
  public class CaptchaResourceV1Impl implements CaptchaResourceV1 {

      /** Loger de la clase */
      private static final Logger LOG = LoggerFactory.getLogger(CaptchaResourceV1Impl.class);

      /** Servidor para el proxy - Se coge del common.properties de ATLAS **/
      private static final String HOST = AtlasCommonConfigurationUtils
              .getVariableConfiguracion("atlas.proxy.recaptcha.host");

      /** Puerto para el proxy - Se coge del common.properties de ATLAS **/
      private static final String PORT = AtlasCommonConfigurationUtils
              .getVariableConfiguracion("atlas.proxy.recaptcha.port");

      /**
       * Private Key del Captcha. Cada servicio tendrá que tener su private Key
       * única Esta es un ejemplo que se debe cambiar
       */
      private static final String PRIVATE_KEY = AtlasCommonConfigurationUtils
              .getVariableConfiguracion("google.captcha.clavePrivada");

      /**
       * Método de ejemplo que antes de hacer su trabajo valida el Captcha
       */
      @Override
      public Response pingCaptchaGoogle(HttpHeaders headers, CaptchaDTO dto) {

          // Valida el Capcha y si da error produce una AtlasRestException
          // con un código 403 forbiden
          validaCapchaGoogle(headers);

          try {
              dto.setValorEntrada(dto.getValorEntrada().toUpperCase());
              Response response = Response.ok().entity(dto).build();
              return response;
          } catch (Exception e) {
              // Error general del servicio REST
              String s = "Error en el Servicio Rest pingCaptchaGoogle " + e.getMessage();
              LOG.error(s, e);
              throw new AtlasRestException(e, s);
          }
      }

      /**
     * Método para validar el capcha de google El catpcha de google debe venir
     * en la cabcera "captcha-google"
     *
     * @param headers cabeceras htpp de la llamada al REST
     * @return si el captcha es válido o no
     */
     private void validaCapchaGoogle(HttpHeaders headers) {

        // El captcha viene en la cabecera HTTP en la variable captcha-google
        String captcha = headers.getHeaderString("captcha-google");

        /** Servidor para el proxy - Se coge del common.properties de ATLAS **/
        private String HOST = AtlasCommonConfigurationUtils
                .getVariableConfiguracion("atlas.proxy.recaptcha.host");

        /** Puerto para el proxy - Se coge del common.properties de ATLAS **/
        private String PORT = AtlasCommonConfigurationUtils
                .getVariableConfiguracion("atlas.proxy.recaptcha.port");

        /**
         * Private Key del Captcha. Cada servicio tendrá que tener su private Key
         * única Esta es un ejemplo que se debe cambiar
         */
        private static final String PRIVATE_KEY = AtlasCommonConfigurationUtils
                .getVariableConfiguracion("google.captcha.clavePrivada");

        int codigoRespuestaHTTP = ERROR_COD_RESP_HTTP;
        ClienteRestConfiguracionGlobal cg = new ClienteRestConfiguracionGlobal()
                .defaultHeader("accept", "application/json")
                .defaultProxy("proxyservicios3c.madrid.org", "80",null, null);
        try {
            ClienteRest cr = ClienteRestFactory.get("https://www.google.com/recaptcha/api/siteverify")
                    .queryString("secret", PRIVATE_KEY)
                    .queryString("response", captcha)
                    .config(cg).send();
            codigoRespuestaHTTP = cr.getHttpCode();
            String jsonString = cr.asString();
            assertEquals(200, codigoRespuestaHTTP);

            // Recoger la propiedad success de la respuesta de google
            JsonElement jsonElement = new JsonParser().parse(jsonString);
            boolean success = jsonElement.getAsJsonObject().get("success").getAsBoolean();

            if (!success) {
                LOG.info("Resultado del ReCapctha 'no-success': 'error-codes:' "
                        + jsonElement.getAsJsonObject().getAsJsonArray("error-codes"));
            }


        } catch (ClienteRestException e) {
            LOG.error("Error: " + e.getMessage());
            fail("Error al invocar al cliente REST: " + e.getMessage());
        }
      }

  }
  `;

  // getLastSuccessCaptcha
  codeGetLastSuccessCaptchaExampleHTML = `
  <mv-recaptcha
    #captchaGetSuccessExample>
  </mv-recaptcha>

  <mv-button
    appearance="raised"
    color="primary"
    (clickEvent)="getLastSuccessCaptchaExample()">
    getLastSuccessCaptcha
  </mv-button>

  <p>Resultado captcha: <strong>{{ captchaGetSuccessValue }}</strong></p>
  `;

  codeGetLastSuccessCaptchaExampleTS = `
  ...

  // valor del captcha getLastSuccessCaptcha
  captchaGetSuccessValue: string;

  @ViewChild('captchaGetSuccessExample', {static: false}) captchaGetSuccessExample: MvRecaptcha;

  ...

  getLastSuccessCaptchaExample(){
    this.captchaGetSuccessValue = this.captchaGetSuccessExample.getLastSuccessCaptcha();
  }

  ...
  `;

  successCallbackExampleHTML = `
  <mv-recaptcha (onSuccess)="successCaptcha($event)">

  `;
  successCallbackExampleTS = `

  successCaptcha() {
    alert("Success");
  }
  `;
  errorCallbackExampleHTML = `
  <mv-recaptcha (onError)="errorCaptcha($event)">

  `;
  errorCallbackExampleTS = `

  errorCaptcha() {
    alert("Error");
  }
  `;

  expiredCallbackExampleHTML = `

  `;
  expiredCallbackExampleTS = `

  `;

  // reset
  codeResetExampleHTML = `
  <mv-recaptcha
    #captchaReset>
  </mv-recaptcha>

  <mv-button
    appearance="raised"
    color="primary"
    (clickEvent)="resetExample()">
    reset
  </mv-button>
  `;

  codeResetExampleTS = `
  ..

  @ViewChild('captchaReset', {static: false}) captchaReset: MvRecaptcha;

  ...

  resetExample(){
    this.captchaReset.reset();
  }

  ...
  `;
  readonly MSG_NO_CAPTCHA = 'Captcha no realizado';
  readonly MSG_CAPTCHA_OK = 'Captcha validado correctamente';
  readonly MSG_CAPTCHA_KO = 'Error al validar el captcha en servidor. Duplicado, caducado o inexistente.';

  exampleValidate = {
    response: this.MSG_NO_CAPTCHA,
    responseCaptcha: '',
    responseBackend: null,
    state: '',
  };

  exampleOnSuccessValidate = {
    response: this.MSG_NO_CAPTCHA,
    responseCaptcha: '',
    responseBackend: null,
    state: '',
  };

  exampleOnErrorValidate = {
    response: this.MSG_NO_CAPTCHA,
    responseCaptcha: '',
    responseBackend: null,
    state: '',
  };

  exampleOnExpiredValidate = {
    response: this.MSG_NO_CAPTCHA,
    responseCaptcha: '',
    responseBackend: null,
    state: '',
  };

  exampleSuccessValueValidate = {
    response: this.MSG_NO_CAPTCHA,
    responseCaptcha: '',
    responseBackend: null,
    state: '',
  };


  constructor(
    private readonly _captchaService: CaptchaService,
  ) { }

  ngOnInit() {
  }

  captchaValidationExample() {
    this.exampleValidate.responseCaptcha = this.captchaExample.getLastSuccessCaptcha();

    if (this.exampleValidate.responseCaptcha) {
      this._captchaService.captchaValidationExamples$(this.exampleValidate.responseCaptcha, this.exampleValidate.state).subscribe(
          (response) => {
            this.exampleValidate.response = this.MSG_CAPTCHA_OK;
            this.exampleValidate.responseBackend = response;
          },
          (error) => {
            this.exampleValidate.response = this.MSG_CAPTCHA_KO;
            this.exampleValidate.responseBackend = error;
          },
      );
    } else {
      this.exampleValidate.response = this.MSG_NO_CAPTCHA;
    }
  }
  captchaSuccessValidationExample() {
    this.exampleOnSuccessValidate.responseCaptcha = this.captchaOnSuccessExample.getLastSuccessCaptcha();

    console.log('captchaOnSuccessExample', this.exampleOnSuccessValidate.responseCaptcha);
    if (this.exampleOnSuccessValidate.responseCaptcha) {
      this._captchaService.captchaValidationExamples$(this.exampleOnSuccessValidate.responseCaptcha, this.exampleOnSuccessValidate.state).subscribe(
          (response) => {
            this.exampleOnSuccessValidate.response = this.MSG_CAPTCHA_OK;
            this.exampleOnSuccessValidate.responseBackend = response;
          },
          (error) => {
            this.exampleOnSuccessValidate.response = this.MSG_CAPTCHA_KO;
            this.exampleOnSuccessValidate.responseBackend = error;
          },
      );
    } else {
      this.exampleOnSuccessValidate.response = this.MSG_NO_CAPTCHA;
    }
  }
  captchaErrorValidationExample() {
    this.exampleOnErrorValidate.responseCaptcha = this.captchaOnErrorExample.getLastSuccessCaptcha();

    if (this.exampleOnErrorValidate.responseCaptcha) {
      this._captchaService.captchaValidationExamples$(this.exampleOnErrorValidate.responseCaptcha, this.exampleOnErrorValidate.state).subscribe(
          (response) => {
            this.exampleOnErrorValidate.response = this.MSG_CAPTCHA_OK;
            this.exampleOnErrorValidate.responseBackend = response;
          },
          (error) => {
            this.exampleOnErrorValidate.response = this.MSG_CAPTCHA_KO;
            this.exampleOnErrorValidate.responseBackend = error;
          },
      );
    } else {
      this.exampleOnErrorValidate.response = this.MSG_NO_CAPTCHA;
    }
  }
  captchaExpiredValidationExample() {
    this.exampleOnExpiredValidate.responseCaptcha = this.captchaOnExpiredExample.getLastSuccessCaptcha();

    if (this.exampleOnExpiredValidate.responseCaptcha) {
      this._captchaService.captchaValidationExamples$(this.exampleOnExpiredValidate.responseCaptcha, this.exampleOnExpiredValidate.state).subscribe(
          (response) => {
            this.exampleOnExpiredValidate.response = this.MSG_CAPTCHA_OK;
            this.exampleOnExpiredValidate.responseBackend = response;
          },
          (error) => {
            this.exampleOnExpiredValidate.response = this.MSG_CAPTCHA_KO;
            this.exampleOnExpiredValidate.responseBackend = error;
          },
      );
    } else {
      this.exampleOnExpiredValidate.response = this.MSG_NO_CAPTCHA;
    }
  }
  getLastSuccessCaptchaExample() {
    // exampleSuccessValueValidate
    this.exampleSuccessValueValidate.responseCaptcha = this.captchaGetSuccessExample.getLastSuccessCaptcha();

    if (this.exampleSuccessValueValidate.responseCaptcha) {
      this._captchaService.captchaValidationExamples$(this.exampleSuccessValueValidate.responseCaptcha, this.exampleSuccessValueValidate.state).subscribe(
          (response) => {
            this.exampleSuccessValueValidate.response = this.MSG_CAPTCHA_OK;
            this.exampleSuccessValueValidate.responseBackend = response;
          },
          (error) => {
            this.exampleSuccessValueValidate.response = this.MSG_CAPTCHA_KO;
            this.exampleSuccessValueValidate.responseBackend = error;
          },
      );
    } else {
      this.exampleSuccessValueValidate.response = this.MSG_NO_CAPTCHA;
    }
  }

  successCaptcha(e: any) {
    alert('Success');
    console.log('event', e);
  }
  expiredCaptcha(e:any ) {
    alert('expired');
    console.log('event', e);
  }
  errorCaptcha(e: any) {
    alert('Error');
    console.log('event', e);
  }
  resetExample() {
    this.captchaReset.reset();
  }
}

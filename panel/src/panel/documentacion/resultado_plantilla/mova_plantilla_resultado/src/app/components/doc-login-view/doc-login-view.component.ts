import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '@mova/components/core';

@Component({
  selector: 'app-doc-login-view',
  templateUrl: './doc-login-view.html',
  styleUrls: ['./doc-login-view.scss'],
})
export class DocLoginView implements OnInit {
  // Pantalla login
  codeEnvironmentLoginViewTS= `
  {
    ...
    loginView: {
      dametokenSystemEnabled: true,
      dametokenButtonLabel: 'Usuario y contraseña (osb)',
      dametokenInfoLabel:
          'Introduzca su usuario y contraseña de Directorio Activo',
      fingerprintAuth: true,
      wso2SystemEnabled: true,
      wso2ButtonLabel: 'Usuario y contraseña (wso2)',
      wso2InfoLabel: 'Introduzca su usuario y contraseña de Directorio Activo',
      autologinSystemEnabled: true,
      autologinButtonLabel: 'Broker de identidades (osb)',
      autologinInfoLabel:
        'Acceda mediante el broker de identidades con'+
        ' Certificado Digital, Clave PIN o Clave Permanente',
      autologinWso2SystemEnabled: true,
      autologinWso2ButtonLabel: 'Broker de identidades (wso2)',
      autologinWso2InfoLabel:
        'Acceda mediante el broker de identidades con'+
        ' Certificado Digital, Clave PIN o Clave Permanente',
      urlPasswordReset: 'https://gestiona7.madrid.org/usug_micuenta',
      titleCheckConditions : 'Acepto las condiciones legales',
      urlBottomText: '¿Aún no te has dado de alta? Regístrate',
      urlBottomUrl: 'https://www.google.es',
      urlCornerIcon: 'info',
      urlCornerUrl: '/ayuda-login-view',
      placeholder: {
        user: 'Usuario',
        password: 'Contraseña',
      },
    },
    ...
  };
  `;

  // Pantalla login val
  codeEnvironmentLoginViewValTS= `
  {
    ...
    loginView: {
      dametokenSystemEnabled: true,
      dametokenButtonLabel: 'Usuario y contraseña (osb)',
      dametokenInfoLabel:
          'Introduzca su usuario y contraseña de Directorio Activo',
      fingerprintAuth: true,
      wso2SystemEnabled: true,
      wso2ButtonLabel: 'Usuario y contraseña (wso2)',
      wso2InfoLabel: 'Introduzca su usuario y contraseña de Directorio Activo',
      autologinSystemEnabled: true,
      autologinButtonLabel: 'Broker de identidades (osb)',
      autologinInfoLabel:
        'Acceda mediante el broker de identidades con'+
        ' Certificado Digital, Clave PIN o Clave Permanente',
      autologinWso2SystemEnabled: true,
      autologinWso2ButtonLabel: 'Broker de identidades (wso2)',
      autologinWso2InfoLabel:
        'Acceda mediante el broker de identidades con'+
        ' Certificado Digital, Clave PIN o Clave Permanente',
      urlPasswordReset: 'https://gestiona7.madrid.org/usug_micuenta',
      titleCheckConditions : 'Acepto las condiciones legales',
      urlBottomText: '¿Aún no te has dado de alta? Regístrate',
      urlBottomUrl: 'https://www.google.es',
      urlCornerIcon: 'info',
      urlCornerUrl: '/ayuda-login-view',
      placeholder: {
        user: 'Usuario',
        password: 'Contraseña',
      },
    },
    ...
  };
  `;

  // Pantalla login prod
  codeEnvironmentLoginViewProdTS= `
  {
    ...
    loginView: {
      dametokenSystemEnabled: true,
      dametokenButtonLabel: 'Usuario y contraseña (osb)',
      dametokenInfoLabel:
          'Introduzca su usuario y contraseña de Directorio Activo',
      fingerprintAuth: true,
      wso2SystemEnabled: true,
      wso2ButtonLabel: 'Usuario y contraseña (wso2)',
      wso2InfoLabel: 'Introduzca su usuario y contraseña de Directorio Activo',
      autologinSystemEnabled: true,
      autologinButtonLabel: 'Broker de identidades (osb)',
      autologinInfoLabel:
        'Acceda mediante el broker de identidades con'+
        ' Certificado Digital, Clave PIN o Clave Permanente',
      autologinWso2SystemEnabled: true,
      autologinWso2ButtonLabel: 'Broker de identidades (wso2)',
      autologinWso2InfoLabel:
        'Acceda mediante el broker de identidades con'+
        ' Certificado Digital, Clave PIN o Clave Permanente',
      urlPasswordReset: 'https://gestiona7.madrid.org/usug_micuenta',
      titleCheckConditions : 'Acepto las condiciones legales',
      urlBottomText: '¿Aún no te has dado de alta? Regístrate',
      urlBottomUrl: 'https://www.google.es',
      urlCornerIcon: 'info',
      urlCornerUrl: '/ayuda-login-view',
      placeholder: {
        user: 'Usuario',
        password: 'Contraseña',
      },
    },
    ...
  };
  `;

  // Archivo app module
  codeAppModuleTS = `
  const appRoutes: Routes = [
    ...
    { path: 'mi-componente-sin-login', component: MiComponenteSinLogin },
    { path: 'mi-componente-con-login', component: MiComponenteConLogin, canActivate: [AuthGuard] },
    ...
  ];
  `;

  // Archivo de entorno con dametoken
  codeEnvironmentOsbTS = `
  export const environment = {
    ...
    authenticationService: {
      authenticationDefaultSystem: 'dameToken',
      ...
      dameTokenConfig: {
        uriBase: 'https://desesb.madrid.org/fesb_rest_token/v1/token/getToken',
        uriEliminaToken: 'https://desesb.madrid.org/fesb_rest_token/v1/token/eliminaToken',
        authenticationSystem: 'IntranetDA',
        expirationTime: 604800000, // Una semana en milisegundos
        httpHeaderTokenAuthAlways: true,
        technicalModules: ['MOVA_MOV_PLANTILLA2'], // array de modulos tecnicos
        authenticationTechnicalModuleIndex: 0,
      },
      ...
    }
  }
  `;

  // Archivo de entorno val con dametoken
  codeEnvironmentOsbValTS = `
  export const environment = {
    ...
    authenticationService: {
      authenticationDefaultSystem: 'dameToken',
      ...
      dameTokenConfig: {
        uriBase: 'https://valesb.madrid.org/fesb_rest_token/v1/token/getToken',
        uriEliminaToken: 'https://valesb.madrid.org/fesb_rest_token/v1/token/eliminaToken',
        authenticationSystem: 'IntranetDA',
        expirationTime: 604800000, // Una semana en milisegundos
        httpHeaderTokenAuthAlways: true,
        technicalModules: ['MOVA_MOV_PLANTILLA2'], // array de modulos tecnicos
        authenticationTechnicalModuleIndex: 0,
      },
    }
  }
  `;

  // Archivo de entorno prod con dametoken
  codeEnvironmentOsbProdTS = `
  export const environment = {
    ...
    authenticationService: {
      authenticationDefaultSystem: 'dameToken',
      ...
      dameTokenConfig: {
        uriBase: 'https://esb.madrid.org/fesb_rest_token/v1/token/getToken',
        uriEliminaToken: 'https://esb.madrid.org/fesb_rest_token/v1/token/eliminaToken',
        authenticationSystem: 'IntranetDA',
        expirationTime: 604800000, // Una semana en milisegundos
        httpHeaderTokenAuthAlways: true,
        technicalModules: ['MOVA_MOV_PLANTILLA2'], // array de modulos tecnicos
        authenticationTechnicalModuleIndex: 0,
      },
    }
  }
  `;

  // Ejemplo de llamada http con dametoken
  httpDameTokenTS = `
  import {Injectable} from '@angular/core';
  import {HttpClient, HttpHeaders} from '@angular/common/http';
  import {Observable} from 'rxjs';

  ...

  constructor(
    private http: HttpClient
  ) { }

  ...

  dameTokenFunctionTechModuleExample (): Observable<any> {
    // Ejemplo de llamada http pasando el modulo técnico específico distinto del configurado para el login del cual queremos el Token-Auth
    const headers = new HttpHeaders()
    .set('mv-token-auth','MODULO_TECNICO_DISTINTO_DE_LOGIN');

    let requestUrl = '...';
    return this.http.get<any[]>(requestUrl, {'headers': headers});
  };

  ...

  dameTokenFunctionExample (): Observable<any> {
    // Ejemplo de llamada http pasando el modulo técnico de nuestra app (si estamos logados)
    // Tiene que estar la variable _httpHeaderTokenAuthAlways de environment a true

    let requestUrl = '...';
    return this.http.get<any[]>(requestUrl);
  };

  ...
  `;

  getCredentialsHTML = `
  <p>Objeto con las credenciales de memoria local:</p>
  <pre *ngIf="globalCredentials"> {{ globalCredentials | json }} </pre>
  <p *ngIf="!globalCredentials">Debes estar logado para ver el objeto con las credenciales</p>`;

  getCredentialsTS = `
  // Credenciales
  globalCredentials: any;
  ...
  // Indica si está logueado
  isLogged: any;
  // Tipo de logueo
  authType: string;
  // Suscripción al cambio de login
  subscriptionUpdateLoggedStatus: any;
  ...

  constructor(
    private _authenticationService: AuthenticationService,
  ) { }

  ...

  ngOnInit() {
    //Cargo los datos del login y hago un subscribe a los cambios
    this.subscriptionUpdateLoggedStatus = this._authenticationService.updateLoggedStatus$.subscribe(
      (data: any) => {
        this.updateLoggedData();
      }
    );
  }

  ...

  /**
   * Actualizo las variables del login
   */
  updateLoggedData() {
    console.log("Load logged status");
    this.isLogged = this._authenticationService.isLogged();
    this.globalCredentials = this._authenticationService.getCredentials();
    if(this.globalCredentials){
      this.authType = this.globalCredentials.authenticationType;
    }
  }

  ...
  `;
  // Archivo de entorno con wso2
  codeEnvironmentWso2TS = `
  export const environment = {
    ...
    authenticationService: {
      authenticationDefaultSystem: 'wso2',
      ...
      wso2Config: {
        uriBase: 'https://apis.val.comunidad.madrid/token',
        uriRevoke: 'https://apis.val.comunidad.madrid/revoke',
        consumerKey: '...',
        consumerSecret: '...',
        customDomain: '...',
        customTenant: '...',
        scopes: [
          {'scope': 'NXCA_sc_consulta', 'active': false},
          {'scope': 'NXCA_sc_escritura', 'active': false},
        ],
      }
      ...
    }
  }
  `;

  // Archivo de entorno val con wso2
  codeEnvironmentWso2ValTS = `
  export const environment = {
    ...
    authenticationService: {
      authenticationDefaultSystem: 'wso2',
      ...
      wso2Config: {
        uriBase: 'https://apis.val.comunidad.madrid/token',
        uriRevoke: 'https://apis.val.comunidad.madrid/revoke',
        consumerKey: '...',
        consumerSecret: '...',
        customDomain: '...',
        customTenant: '...',
        scopes: [
          {'scope': 'NXCA_sc_consulta', 'active': false},
          {'scope': 'NXCA_sc_escritura', 'active': false},
        ],
      }
      ...
    }
  }
  `;

  // Archivo de entorno prod con wso2
  codeEnvironmentWso2ProdTS = `
  export const environment = {
    ...
    authenticationService: {
      authenticationDefaultSystem: 'wso2',
      ...
      wso2Config: {
        uriBase: 'https://apis.comunidad.madrid/token',
        uriRevoke: 'https://apis.comunidad.madrid/revoke',
        consumerKey: '...',
        consumerSecret: '...',
        customDomain: '...',
        customTenant: '...',
        scopes: [
          {'scope': 'NXCA_sc_consulta', 'active': false},
          {'scope': 'NXCA_sc_escritura', 'active': false},
        ],
      }
      ...
    }
  }
  `;

  // Ejemplo de llamada http con wso2
  httpWso2TS = `
  import {Injectable} from '@angular/core';
  import {HttpClient, HttpHeaders} from '@angular/common/http';
  import {Observable} from 'rxjs';

  ...

  constructor(
    private http: HttpClient
  ) { }

  ...

  wso2FunctionExample (): Observable<any> {
    const headers = new HttpHeaders()
    .set('mv-wso2-token','true');

    let requestUrl = '...';
    return this.http.get<any[]>(requestUrl, {'headers': headers});
  };

  ...
  `;

  // Archivo de entorno con wso2
  codeEnvironmentApiKeysTS = `
  export const environment = {
    ...
    interceptorService: {
      ...
      apiKeys: [
        {
          "name": "pruebaKey",
          "apiKey": "Bearer 636fb144-1077-31a5-abba-7523b3bc1370"
        }
      ],
    },
  }
  `;

  // Archivo de entorno val con wso2
  codeEnvironmentApiKeysValTS = `
  export const environment = {
    ...
    interceptorService: {
      ...
      apiKeys: [
        {
          "name": "pruebaKey",
          "apiKey": "Bearer 636fb144-1077-31a5-abba-7523b3bc1370"
        }
      ],
    },
  }
  `;

  // Archivo de entorno prod con wso2
  codeEnvironmentApiKeysProdTS = `
  export const environment = {
    ...
    interceptorService: {
      ...
      apiKeys: [
        {
          "name": "pruebaKey",
          "apiKey": "Bearer 636fb144-1077-31a5-abba-7523b3bc1370"
        }
      ],
    },
  }
  `;

  // Uso de api keys en llamadas
  httpApiKeyTS = `
  import {Injectable} from '@angular/core';
  import {HttpClient, HttpHeaders} from '@angular/common/http';
  import {Observable} from 'rxjs';

  ...

  constructor(
    private http: HttpClient
  ) { }

  ...

  apiKeyFunctionExample (): Observable<any> {
    const headers = new HttpHeaders()
    .set('mv-api-key','pruebaKey');

    let requestUrl = '...';
    return this.http.get<any[]>(requestUrl, {'headers': headers});
  };

  ...
  `;

  // Pantalla login
  codeEnvironmentBiometricTS= `
  {
    ...
    loginView: {
      ...
      fingerprintAuth: true,
      ...
    },
    ...
  };
  `;

  // Pantalla login val
  codeEnvironmentBiometricValTS= `
  {
    ...
    loginView: {
      ...
      fingerprintAuth: true,
      ...
    },
    ...
  };
  `;

  // Pantalla login prod
  codeEnvironmentBiometricProTS= `
  {
    ...
    loginView: {
      ...
      fingerprintAuth: true,
      ...
    },
    ...
  };
  `;

  // Archivo de configuracion
  codeConfigJSON = `
  {
    "app": {
      ...
      "moduloTecnicoIos": "MOVA_IOS_PLANTILLA",
      "moduloTecnicoAndroid": "MOVA_ANDROID_PLANTILLA",
      "moduloTecnicoWebapp": "MOVA_WEBAPP_PLANTILLA",
      ...
      }
  }
  `;

  // Archivo de entorno
  codeEnvironmentTS = `
  export const environment = {
    ...
    brokerView: {
      autoRedirect: true
    },
    authenticationService: {
      ...
      authenticationSaveLastLoginSystem: true,
      authenticationSaveInSessionWeb: false,
      authenticationSaveInSessionMobile: false,
      ...
      autologinConfig: {
        appRedirect: 'org.madrid.MOVA.mova2App',
        uriBase:'https://desarrollo3.madrid.org/auto_login/acceso.jsf?',
        uriLogout:'https://desarrollo3.madrid.org/auto_login/logout.jsf?',
        paramIosSS:'',
        paramIosPass:'',
        paramAndroidSS:'',
        paramAndroidPass:'',
        paramWebappSS:'',
        paramWebappPass:'',
        paramWebappOkUrl:'',
        paramWebappOkUrlLogout:''
      },
  }
  `;

  codeEnvironmentValTS = `
  export const environment = {
    ...
    brokerView: {
      autoRedirect: true
    },
    authenticationService: {
      ...
      authenticationSaveLastLoginSystem: true,
      authenticationSaveInSessionWeb: false,
      authenticationSaveInSessionMobile: false,
      ...
      autologinConfig: {
        appRedirect: 'org.madrid.MOVA.mova2App',
        uriBase:'https://valintranet.madrid.org/auto_login/acceso.jsf?',
        uriLogout:'https://valintranet.madrid.org/auto_login/logout.jsf?',
        paramIosSS:'',
        paramIosPass:'',
        paramAndroidSS:'',
        paramAndroidPass:'',
        paramWebappSS:'',
        paramWebappPass:'',
        paramWebappOkUrl:'',
        paramWebappOkUrlLogout:''
      },
  }
  `;

  codeEnvironmentProdTS = `
  export const environment = {
    ...
    brokerView: {
      autoRedirect: true
    },
    authenticationService: {
      ...
      authenticationSaveLastLoginSystem: true,
      authenticationSaveInSessionWeb: false,
      authenticationSaveInSessionMobile: false,
      ...
      autologinConfig: {
        appRedirect: 'org.madrid.MOVA.mova2App',
        uriBase:'https://gestiona3.madrid.org/auto_login/acceso.jsf?',
        uriLogout:'https://gestiona3.madrid.org/auto_login/logout.jsf?',
        paramIosSS:'',
        paramIosPass:'',
        paramAndroidSS:'',
        paramAndroidPass:'',
        paramWebappSS:'',
        paramWebappPass:'',
        paramWebappOkUrl:'',
        paramWebappOkUrlLogout:''
      },
  }
  `;

  // Archivo de entorno
  codeEnvironmentLoginTS = `
  export const environment = {
    ...
    authenticationService: {
      ...
      authenticationSaveLastLoginSystem: true,
      authenticationSaveInSessionWeb: false,
      authenticationSaveInSessionMobile: false,
      ...
    }
  }
  `;

  codeEnvironmentLoginValTS = `
  export const environment = {
    ...
    authenticationService: {
      ...
      authenticationSaveLastLoginSystem: true,
      authenticationSaveInSessionWeb: false,
      authenticationSaveInSessionMobile: false,
      ...
    }
  }
  `;

  codeEnvironmentLoginProdTS = `
  export const environment = {
    ...
    authenticationService: {
      ...
      authenticationSaveLastLoginSystem: true,
      authenticationSaveInSessionWeb: false,
      authenticationSaveInSessionMobile: false,
      ...
    }
  }
  `;

  // Archivo de entorno
  codeEnvironmentAutologinOsbTS = `
  export const environment = {
    ...
    authenticationService: {
      authenticationDefaultSystem: 'autologin',
      ...
      dameTokenConfig: {
        uriBase: 'https://desesb.madrid.org/fesb_rest_token/v1/token/getToken',
        uriEliminaToken: 'https://desesb.madrid.org/fesb_rest_token/v1/token/eliminaToken',
        authenticationSystem: 'IntranetDA',
        expirationTime: 604800000, // Una semana en milisegundos
        httpHeaderTokenAuthAlways: true,
        technicalModules: ['MOVA_MOV_PLANTILLA2'], // ['MOVA_MOV_PLANTILLA2', 'MOVA_MOV_PLANTILLA2', 'MOVA_MOV_PLANTILLA2'],
        authenticationTechnicalModuleIndex: 0,
      },
      autologinConfig: {
        ...
        autologinOsb: {
          uriGetToken: 'https://desesb.madrid.org/fesb_rest_token/v1/token/getTokenAutologin',
          uriValidaTicket: 'https://desesb.madrid.org/fesb_rest_token/v1/ticket/valida/',
        },
      },
      ...
    }
  }
  `;

  codeEnvironmentAutologinOsbValTS = `
  export const environment = {
    ...
    authenticationService: {
      authenticationDefaultSystem: 'autologin',
      ...
      dameTokenConfig: {
        uriBase: 'https://desesb.madrid.org/fesb_rest_token/v1/token/getToken',
        uriEliminaToken: 'https://desesb.madrid.org/fesb_rest_token/v1/token/eliminaToken',
        authenticationSystem: 'IntranetDA',
        expirationTime: 604800000, // Una semana en milisegundos
        httpHeaderTokenAuthAlways: true,
        technicalModules: ['MOVA_MOV_PLANTILLA2'], // ['MOVA_MOV_PLANTILLA2', 'MOVA_MOV_PLANTILLA2', 'MOVA_MOV_PLANTILLA2'],
        authenticationTechnicalModuleIndex: 0,
      },
      autologinConfig: {
        ...
        autologinOsb: {
          uriGetToken: 'https://esb.madrid.org/fesb_rest_token/v1/token/getTokenAutologin',
          uriValidaTicket: 'https://gestiona7.madrid.org/auto_rest/v1/ticket/valida/',
        },
      },
      ...
    }
  }
  `;

  codeEnvironmentAutologinOsbProdTS = `
  export const environment = {
    ...
    authenticationService: {
      authenticationDefaultSystem: 'autologin',
      ...
      dameTokenConfig: {
        uriBase: 'https://desesb.madrid.org/fesb_rest_token/v1/token/getToken',
        uriEliminaToken: 'https://desesb.madrid.org/fesb_rest_token/v1/token/eliminaToken',
        authenticationSystem: 'IntranetDA',
        expirationTime: 604800000, // Una semana en milisegundos
        httpHeaderTokenAuthAlways: true,
        technicalModules: ['MOVA_MOV_PLANTILLA2'], // ['MOVA_MOV_PLANTILLA2', 'MOVA_MOV_PLANTILLA2', 'MOVA_MOV_PLANTILLA2'],
        authenticationTechnicalModuleIndex: 0,
      },
      autologinConfig: {
        ...
        autologinOsb: {
          uriGetToken: 'https://esb.madrid.org/fesb_rest_token/v1/token/getTokenAutologin',
          uriValidaTicket: 'https://gestiona7.madrid.org/auto_rest/v1/ticket/valida/',
        },
      },
      ...
    }
  }
  `;

  // Archivo de entorno
  codeEnvironmentAutologinWso2TS = `
  export const environment = {
    ...
    authenticationService: {
      authenticationDefaultSystem: 'autologin-wso2',
      ...
      wso2Config: {
        uriBase: 'https://apis.val.comunidad.madrid/token',
        uriRevoke: 'https://apis.val.comunidad.madrid/revoke',
        ...
        customDomain: '',
        customTenant: '',
        scopes: [
          ...
        ],
      },
      autologinConfig: {
        ...
        autologinWso2: {
          consumerKeyAutologin: '...',
          consumerSecretAutologin: '...',
          uriGetUserData: 'https://apis.val.comunidad.madrid/t/ciudadanos.comunidad.madrid/pdto/oauth2inter/oauth2/userinfo',
        },
      },
      ...
    }
  }
  `;

  codeEnvironmentAutologinWso2ValTS = `
  export const environment = {
    ...
    authenticationService: {
      authenticationDefaultSystem: 'autologin-wso2',
      ...
      wso2Config: {
        uriBase: 'https://apis.val.comunidad.madrid/token',
        uriRevoke: 'https://apis.val.comunidad.madrid/revoke',
        ...
        customDomain: '',
        customTenant: '',
        scopes: [
          ...
        ],
      },
      autologinConfig: {
        ...
        autologinWso2: {
          consumerKeyAutologin: '...',
          consumerSecretAutologin: '...',
          uriGetUserData: 'https://apis.val.comunidad.madrid/t/ciudadanos.comunidad.madrid/pdto/oauth2inter/oauth2/userinfo',
        },
      },
      ...
    }
  }
  `;

  codeEnvironmentAutologinWso2ProdTS = `
  export const environment = {
    ...
    authenticationService: {
      authenticationDefaultSystem: 'autologin-wso2',
      ...
      wso2Config: {
        uriBase: 'https://apis.comunidad.madrid/token',
        uriRevoke: 'https://apis.comunidad.madrid/revoke',
        ...
        customDomain: '',
        customTenant: '',
        scopes: [
          ...
        ],
      },
      autologinConfig: {
        ...
        autologinWso2: {
          consumerKeyAutologin: '...',
          consumerSecretAutologin: '...',
          uriGetUserData: 'https://apis.val.comunidad.madrid/t/ciudadanos.comunidad.madrid/pdto/oauth2inter/oauth2/userinfo',
        },
      },
      ...
    }
  }
  `;

  // globalCredentials autologin
  credentialsAutologinOsbJSON = `
  {
    authenticationType: "autologin",
    expiredDate: "2020-08-03T11:12:16.010Z",
    itemError: "N",
    oAutologin: {
      apellido1: "PEREZ",
      apellido2: "GONZALEZ",
      apellidos: "PEREZ GONZALEZ",
      cdSesion: "1fa1f6bf-a677-4a6b-a3e4-2ee902fa90ed",
      cdTipoUsuario: "N",
      cdUsuario: "00000001R",
      cif: "",
      clavePublica: "",
      datosPropios: "",
      dsTipoUsuario: "Número documento NIF/CIF",
      fcAlta: 1595848285000,
      fullName: "ALBERTO PEREZ GONZALEZ",
      idIdp: 6,
      idQaa: 2,
      itUsado: "",
      nif: "00000001R",
      nombre: "ALBERTO",
      razonSocial: "",
      registerType: 0,
      tipoCert: "PF",
    }
    requestDate: "2020-07-27T11:12:16.010Z",
    technicalModule: "MOVA_MOV_PLANTILLA2",
    token: "94206ef7-5367-494c-be44-e2642141939b",
    user: "ALBERTO",
    userName: "Alberto Perez Gonzalez",
  }
  `;

  // Pantalla login
  codeEnvironmentTokenAuthTS= `
  {
    ...
    authenticationService: {
      ...
      dameTokenConfig: {
        ...
        httpHeaderTokenAuthAlways: true,
      },
    ...
  };
  `;

  // Pantalla login val
  codeEnvironmentTokenAuthValTS= `
  {
    ...
    authenticationService: {
      ...
      dameTokenConfig: {
        ...
        httpHeaderTokenAuthAlways: true,
      },
    ...
  };
  `;

  // Pantalla login prod
  codeEnvironmentTokenAuthProdTS= `
  {
    ...
    authenticationService: {
      ...
      dameTokenConfig: {
        ...
        httpHeaderTokenAuthAlways: true,
      },
    ...
  };
  `;

  // Uso apis
  codeEnvironmentApiUseWso2TS = `
  export const environment = {
    mova: {
      ...
    },
    app: {
      ...
      studentService: {
        url: 'https://apis.val.comunidad.madrid/ciencia-tecnologia/japi-alumnos-test/v1',
        urlAutologin: 'https://apis.val.comunidad.madrid/t/ciudadanos.comunidad.madrid/ciencia-tecnologia/japi-alumnos-test/v1',
        ...
      },
    },
  };
  `;

  codeEnvironmentApiUseWso2ValTS = `
  export const environment = {
    mova: {
      ...
    },
    app: {
      ...
      studentService: {
        url: 'https://apis.val.comunidad.madrid/ciencia-tecnologia/japi-alumnos-test/v1',
        urlAutologin: 'https://apis.val.comunidad.madrid/t/ciudadanos.comunidad.madrid/ciencia-tecnologia/japi-alumnos-test/v1',
        ...
      },
    },
  };
  `;

  codeEnvironmentApiUseWso2ProdTS = `
  export const environment = {
    mova: {
      ...
    },
    app: {
      ...
      studentService: {
        url: 'https://apis.val.comunidad.madrid/ciencia-tecnologia/japi-alumnos-test/v1',
        urlAutologin: 'https://apis.val.comunidad.madrid/t/ciudadanos.comunidad.madrid/ciencia-tecnologia/japi-alumnos-test/v1',
        ...
      },
    },
  };
  `;

  codeServiceApiUseWso2ProdTS = `
  ...

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
  `;

  // globalCredentials autologin osb
  credentialsAutologinJSON = `
  {
    authenticationType: "autologin"
    expiredDate: Tue Oct 20 2020 14:46:12 GMT+0200 (hora de verano de Europa central) {}
    itemError: "N"
    oAutologin: {
      cdSesion: "2b9dba9b-48ae-4845-a8ca-16bede50996f",
      nombre: "ALBERTO",
      apellido1: "PEREZ",
      apellido2: "GONZALEZ",
      apellidos: "PEREZ GONZALEZ",
       …
     }
    requestDate: Tue Oct 13 2020 14:46:12 GMT+0200 (hora de verano de Europa central) {}
    technicalModule: "MOVA_MOV_PLANTILLA2"
    token: "09e5644d-d63b-419b-a38f-b7a141ec0778"
    user: "ALBERTO"
    userName: "Alberto Perez Gonzalez"
  }
  `;

  // globalCredentials autologin wso2
  credentialsAutologinWso2JSON = `
  {
    "oWso2": {
        "access_token": "eyJ4NXQiOiJOV0V3WVdObFlUUmhOamN4TmpJM05UZGhNRFkxT0RnNU1HSXlObVkzTW1ReU9HWm1abVF6WWciLCJraWQiOiJaREl4TmpsaU5qYzFNVGN4WmpJNFlqaG1NVEV4TkdVNU9HWTFOMlppTkRJME1ETXpNbVJqWmpoaFltUmlPVGhoWkRZellqWTBZak5oT1dFMU4yWTJPUV9SUzI1NiIsImFsZyI6IlJTMjU2In0.eyJpZHFhYSI6IjIiLCJzdWIiOiIwMDAwMDAwMVItUEYtNiIsImF1dCI6IkFQUExJQ0FUSU9OX1VTRVIiLCJjZHRpcG91c3VhcmlvIjoiTiIsImlzcyI6Imh0dHBzOlwvXC9pcy5kZXMuY29tdW5pZGFkLm1hZHJpZFwvb2F1dGgyXC90b2tlbiIsIm5pZiI6IjAwMDAwMDAxUiIsImlkaWRwIjoiNiIsImNkdXN1YXJpbyI6IjAwMDAwMDAxUiIsImdpdmVuX25hbWUiOiJBTEJFUlRPIiwiY2RzZXNpb24iOiIyMWQ4NjM2Zi0xYWFiLTRkODYtODAyYS0wNjkwYjcxNDQzMDYiLCJhdWQiOiJ0YWZ6X25va2pqXzJTNVpuRkIwQWxUX2x3cTBhIiwibmJmIjoxNjY0Nzg2MzEwLCJhenAiOiJ0YWZ6X25va2pqXzJTNVpuRkIwQWxUX2x3cTBhIiwic2NvcGUiOiJTQ19DSVVEQURBTk9TIG9wZW5pZCIsInRpcG9jZXJ0IjoiUEYiLCJuYW1lIjoiQUxCRVJUTyBQRVJFWiBHT05aQUxFWiIsImV4cCI6MTY2NDc4OTkxMCwiaWF0IjoxNjY0Nzg2MzEwLCJqdGkiOiI3MGNjZDcwNS0zMDgzLTQxNDEtYWI2ZC1mZGVkNjRmNjAyODIiLCJlbWFpbCI6ImFsYmVydG9AZ21haWwuY29tIn0.Zxa46NPgUqaRIKtGUUGhzwF42CfRczMi6OnR6rf2GJoHpsOpgidJBXYr6SnPJ82VRikmTtae4CRjGsrrMSfJRw7GIR2fWcKGSEjvhLCUklu38phkas9K1IjnqDo7vq3u4je7lMCDKn8o-Zcm9wFWiokvxuk0usuGBwInav71d71dBQMn0MHvCAMP9bS8bklGFHu0XY4roRV9JNXe7xKXLT6zp76af6Ufrwosm794aZZgigLCvdTY-ct-6ZcnPw9SnjgUnENe4Rvzb-14rsRyfC1LawZn-jkBz87_8Qgnqphn0Vi6Cs61jwM3IP-NJ90EuHBCtD_F3EOiu9PplxIiAg",
        "refresh_token": "36260304-b00d-3ba4-bec5-bf7b77cbf0de",
        "id_token": "eyJ4NXQiOiJOV0V3WVdObFlUUmhOamN4TmpJM05UZGhNRFkxT0RnNU1HSXlObVkzTW1ReU9HWm1abVF6WWciLCJraWQiOiJaREl4TmpsaU5qYzFNVGN4WmpJNFlqaG1NVEV4TkdVNU9HWTFOMlppTkRJME1ETXpNbVJqWmpoaFltUmlPVGhoWkRZellqWTBZak5oT1dFMU4yWTJPUV9SUzI1NiIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiTEhBczJSOVM2OTZKdGhXVjRVa2NJdyIsImlkcWFhIjoiMiIsInN1YiI6IjAwMDAwMDAxUi1QRi02IiwiY2R0aXBvdXN1YXJpbyI6Ik4iLCJhbXIiOlsiYXV0b2xvZ2luIl0sImlzcyI6Imh0dHBzOlwvXC9pcy5kZXMuY29tdW5pZGFkLm1hZHJpZFwvb2F1dGgyXC90b2tlbiIsIm5pZiI6IjAwMDAwMDAxUiIsImlkaWRwIjoiNiIsImNkdXN1YXJpbyI6IjAwMDAwMDAxUiIsImdpdmVuX25hbWUiOiJBTEJFUlRPIiwiY2RzZXNpb24iOiIyMWQ4NjM2Zi0xYWFiLTRkODYtODAyYS0wNjkwYjcxNDQzMDYiLCJhdWQiOiJ0YWZ6X25va2pqXzJTNVpuRkIwQWxUX2x3cTBhIiwibmJmIjoxNjY0Nzg2MzEwLCJhenAiOiJ0YWZ6X25va2pqXzJTNVpuRkIwQWxUX2x3cTBhIiwidGlwb2NlcnQiOiJQRiIsIm5hbWUiOiJBTEJFUlRPIFBFUkVaIEdPTlpBTEVaIiwiZXhwIjoxNjY0Nzg5OTEwLCJpYXQiOjE2NjQ3ODYzMTAsImVtYWlsIjoiYWxiZXJ0b0BnbWFpbC5jb20ifQ.OpvQZz7sJLnLDvldk2604kDYTUa5X_m5xfA6scM02Nw1inYpin6DjxiHo36VnQmFpyoHZa3ZkvzZHC9ugm_9UyN9zVBIQr5jgyaB5cSYlzRC_ykV_1D5nwz_oWBuR0N9izky9fMlvlS5ybLoMAc81xwuuVMrL0pJ-Bk8BqNLyDCFoJB0wvQEe50xaFpELPhGd9CtrQiA75oV29CWHZ60eqm5fXbT8VBbN0qlNLSn7rB2RB5pmu1lGowk-Znwme9Y_aCRt5I89w6RtNR_FZS-FWi-OFI_xAD9IS-3pCj7nKJgLkS5OMcEN4G_Qjna5xbNnT7aaAtfLw2e-9Q1PYMAmA",
        "token_type": "Bearer",
        "expires_in": 3600,
        "scopes": [
            {
                "scope": "sc_gestor",
                "active": false
            },
            {
                "scope": "sc_alumno",
                "active": false
            },
            {
                "scope": "sc_admin",
                "active": false
            },
            {
                "scope": "sc_consulta",
                "active": false
            }
        ]
    },
    "requestDate": "Mon Oct 03 2022 10:39:17 GMT+0200 (hora de verano de Europa central)",
    "expiredDate": "2022-10-03T09:39:17.912Z",
    "authenticationType": "autologin-wso2",
    "oAutologin": {
        "idqaa": "2",
        "cdtipousuario": "N",
        "sub": "00000001R-PF-6",
        "tipocert": "PF",
        "name": "ALBERTO PEREZ GONZALEZ",
        "nif": "00000001R",
        "ididp": "6",
        "cdusuario": "00000001R",
        "given_name": "ALBERTO",
        "cdsesion": "21d8636f-1aab-4d86-802a-0690b7144306",
        "email": "alberto@gmail.com"
    },
    "user": "ALBERTO",
    "userName": "Alberto Perez Gonzalez"
  }
  `;

  // globalCredentials dameToken
  credentialsDameTokenJSON = `
  {
    authenticationType: "dameToken"
    expiredDate: "2020-08-04T06:51:02.711Z"
    itemError: "N"
    requestDate: "2020-07-28T06:51:02.711Z"
    technicalModule: "MOVA_MOV_PLANTILLA2"
    token: "0456562f-431c-4e0d-a314-a2fe5c523a47"
    user: "USUGPRU2"
    userName: "USUGPRU2"
  }
  `;

  // globalCredentials WSO2
  credentialsWso2JSON = `
  {
    authenticationType: "wso2",
    expiredDate: "2020-07-28T08:03:59.231Z",
    oWso2: {
      access_token: "071e7fb8-d2eb-3159-9ea2-b9ad7680e39a",
      expires_in: 3457,
      refresh_token: "549e01be-29f9-3fdb-bede-43e1098deedc",
      scope: "NXCA_sc_consulta NXCA_sc_escritura",
      scopes: [{scope: NXCA_sc_consulta, active: true}, {scope: NXCA_sc_escritura, active: true}]
      token_type: "Bearer",
    }
  }
  `;

  // Variables de ejemplo para mostrar datos del logueo
  globalCredentials: any;
  // Indica si está logueado
  isLogged: any;
  // Tipo de logueo
  authType: string;
  // Suscripción al cambio de login
  subscriptionUpdateLoggedStatus: any;

  constructor(
    private readonly _authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    // Cargo los datos del login y hago un subscribe a los cambios
    this.subscriptionUpdateLoggedStatus = this
    ._authenticationService.updateLoggedStatus$.subscribe(
      (data: any) => {
        this.updateLoggedData();
      },
    );
    this.updateLoggedData();

  }

  /**
   * Actualizo las variables del login
   */
  updateLoggedData() {
    console.log('Load logged status');
    this.isLogged = this._authenticationService.isLogged();
    this.globalCredentials = this._authenticationService.getCredentials();
    if(this.globalCredentials){
      this.authType = this.globalCredentials.authenticationType;
    }
  }

}

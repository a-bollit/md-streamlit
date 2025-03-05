import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-environment',
  templateUrl: './doc-environment.html',
  styleUrls: ['./doc-environment.scss'],
})
export class DocEnvironment implements OnInit {
  // environment.ts
  codeEnvironmentTS = `
  export const environment = {
    mova: {
        environment: 'DES',
        brokerView: {
            autoRedirect: true
        },
        initView: {
            autoRedirect: true,
            skipVersionRequirementsCheck: false,
            showVersionNewsWeb: true,
            showVersionNewsMobile: true
        },
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
          urlBottomText: '¿Aún no te has dado de alta? Regístrate',
          urlBottomUrl: 'https://www.google.es',
          urlCornerIcon: 'info',
          urlCornerUrl: '/ayuda-login-view',
          placeholder: {
            user: 'Usuario',
            password: 'Contraseña',
          },
        },
        authenticationService: {
            authenticationDefaultSystem: 'autologin', // dameToken | wso2 | autologin | autologin - wso2
            authenticationSaveLastLoginSystem: true,
            authenticationSaveInSessionWeb: false,
            authenticationSaveInSessionMobile: false,
            dameTokenConfig: {
                uriBase: 'https://desesb.madrid.org/fesb_rest_token/v1/token/getToken',
                uriEliminaToken: 'https://desesb.madrid.org/fesb_rest_token/v1/token/eliminaToken',
                authenticationSystem: 'IntranetDA',
                expirationTime: 604800000, // Una semana en milisegundos
                httpHeaderTokenAuthAlways: true,
                technicalModules: ['MOVA_MOV_PLANTILLA2'], //['MOVA_MOV_PLANTILLA2', 'REVEL_APP', 'MOVA_MOV_PLANTILLA2'],
                authenticationTechnicalModuleIndex: 0,
            },
            wso2Config: {
                uriBase: 'https://apis.val.comunidad.madrid/token',
                uriRevoke: 'https://apis.val.comunidad.madrid/revoke',
                consumerKey: '...',
                consumerSecret: '...',
                customDomain: '',
                customTenant: '',
                scopes: [
                    {'scope': 'NXCA_sc_consulta', 'active': false},
                    {'scope': 'NXCA_sc_escritura', 'active': false},
                ],
            }
            autologinConfig: {
                appRedirect: 'org.madrid.MOVA.mova2App',
                uriBase: 'https://desarrollo3.madrid.org/auto_login/acceso.jsf?',
                uriLogout:'https://desarrollo3.madrid.org/auto_login/logout.jsf?',
                paramIosSS: 'PRIVADO',
                paramIosPass:'CD18C1962681670A',
                paramAndroidSS: 'PRIVADO',
                paramAndroidPass: 'CD18C1962681670A',
                paramWebappSS: 'PRIVADO',
                paramWebappPass: 'CD18C1962681670A',
                paramWebappOkUrl: '',
                paramWebappOkUrlLogout: '',
                autologinOsb: {
                  uriGetToken: 'https://desesb.madrid.org/fesb_rest_token/v1/token/getTokenAutologin',
                  uriValidaTicket: 'https://desesb.madrid.org/fesb_rest_token/v1/ticket/valida/',
                },
                autologinWso2: {
                  consumerKeyAutologin: '...',
                  consumerSecretAutologin: '...',
                  uriGetUserData: 'https://apis.val.comunidad.madrid/t/ciudadanos.comunidad.madrid/pdto/oauth2inter/oauth2/userinfo',
                },
            },
        },
        backendService: {
            uriCheckVersion: 'https://esb.madrid.org/mova_rest_checkNewVersion/v1',
        uriVersionNews: 'https://gestiona3.madrid.org/mova_rest_servicios/v1/consultas/do',
            uriScores: 'https://desarrollo3.madrid.org/mova_rest_servicios/v1/consultas/actualizar',
        },
        fileUploaderComponent: {
          authorizationHeader: 'M0c1TXBJWmJlbjVCQlZpT3RWT2x6am00YVRzYTpWYkpEdklmZjNQUzdaWkhUQTBsVVlaZERUeGth',
          uriUpload: 'https://apis.val.comunidad.madrid/ciencia-tecnologia/japi-alumnos-test/v1/files',
          uriTokenBase: 'https://apis.val.comunidad.madrid/token',
        },
        interceptorService: {
            apiKeys: [
                {
                    "name":"pruebaKey",
                    "apiKey": "Bearer 636fb144-1077-31a5-abba-7523b3bc1370"
                }
            ],
            ShowLoadingDefault: true,
        },
        notificationService: {
            uriBase: 'mova_rest_notificaciones/v4/',
            alwaysShowIosTemplate: true,
            appKey: '63D4C088809BED822C45124586507E4F',
            browserServiceUri: 'http://push.api.phonegap.com/v1/push',
            environment: 'PRO',
            receivedLimit: 20,
        },
      recaptchaService: {
        uriUtilSite: 'https://gestiona3.madrid.org/portalapps/util/recaptcha/',
            siteKey: '6Lcw6XIUAAAAAPngwupCl2UMhBN2qlcnePJopOi9',
        },
        localStorageService: {
            CryptP: 'YZERXMNd9e2e',
            mainNodeSuffix: '',
        },
        sessionStorageService: {
            CryptP: 'YZERXMNd9e2e',
            mainNodeSuffix: '',
        },
    },
    app: {        // Situar aqui las variables propias de la app segun entornos
      ...
    },
  };
  `;

  // environment.val.ts
  codeEnvironmentValTS = `
  export const environment = {
    mova: {
        environment: 'VAL',
        brokerView: {
            autoRedirect: true
        },
        initView: {
            autoRedirect: true,
            skipVersionRequirementsCheck: false,
        showVersionNewsWeb: true,
        showVersionNewsMobile: true
        },
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
          urlBottomText: '¿Aún no te has dado de alta? Regístrate',
          urlBottomUrl: 'https://www.google.es',
          urlCornerIcon: 'info',
          urlCornerUrl: '/ayuda-login-view',
          placeholder: {
            user: 'Usuario',
            password: 'Contraseña',
          },
        },
        authenticationService: {
            authenticationDefaultSystem: 'autologin', // dameToken | wso2 | autologin | autologin - wso2
            authenticationSaveLastLoginSystem: true,
            authenticationSaveInSessionWeb: false,
            authenticationSaveInSessionMobile: false,
            dameTokenConfig: {
                uriBase: 'https://valesb.madrid.org/fesb_rest_token/v1/token/getToken',
                uriEliminaToken: 'https://valesb.madrid.org/fesb_rest_token/v1/token/eliminaToken',
                authenticationSystem: 'IntranetDA',
                expirationTime: 604800000, // Una semana en milisegundos
                httpHeaderTokenAuthAlways: true,
                technicalModules: ['MOVA_MOV_PLANTILLA2'], //['MOVA_MOV_PLANTILLA2', 'REVEL_APP', 'MOVA_MOV_PLANTILLA2'],
                authenticationTechnicalModuleIndex: 0,
            },
            wso2Config: {
                uriBase: 'https://apis.val.comunidad.madrid/token',
                uriRevoke: 'https://apis.val.comunidad.madrid/revoke',
                consumerKey: '...',
                consumerSecret: '...',
                customDomain: '',
                customTenant: '',
                scopes: [
                    {'scope': 'NXCA_sc_consulta', 'active': false},
                    {'scope': 'NXCA_sc_escritura', 'active': false},
                ],
            },
            autologinConfig: {
                appRedirect: 'org.madrid.MOVA.mova2App',
                uriBase: 'https://valintranet.madrid.org/auto_login/acceso.jsf?',
                uriLogout: 'https://valintranet.madrid.org/auto_login/logout.jsf?',
          uriRedirectSite: 'https:gestiona3.madrid.org/portalapps/util/autologin-redirect/',
                paramIosSS: 'PRIVADO',
                paramIosPass: '75D9C94D34E517BE7C434FC195D45D84',
                paramAndroidSS: 'PRIVADO',
                paramAndroidPass:'75D9C94D34E517BE7C434FC195D45D84',
                paramWebappSS: 'PRIVADO',
                paramWebappPass: '75D9C94D34E517BE7C434FC195D45D84',
                paramWebappOkUrl: '',
                paramWebappOkUrlLogout: '',
                autologinOsb: {
                  uriGetToken: 'https://valesb.madrid.org/fesb_rest_token/v1/token/getTokenAutologin',
                  uriValidaTicket: 'https://valintranet7.madrid.org/auto_rest/v1/ticket/valida/',
                },
                autologinWso2: {
                  consumerKeyAutologin: '...',
                  consumerSecretAutologin: '...',
                  uriGetUserData: 'https://apis.val.comunidad.madrid/t/ciudadanos.comunidad.madrid/pdto/oauth2inter/oauth2/userinfo',
                },
            },
        },
        backendService: {
            uriCheckVersion: 'https://valesb.madrid.org/mova_rest_checkNewVersion/v1',
        uriVersionNews: 'https://valintranet.madrid.org/mova_rest_servicios/v1/consultas/do',
            uriScores: 'https://valintranet.madrid.org/mova_rest_servicios/v1/consultas/actualizar',
        },
        fileUploaderComponent: {
          authorizationHeader: 'M0c1TXBJWmJlbjVCQlZpT3RWT2x6am00YVRzYTpWYkpEdklmZjNQUzdaWkhUQTBsVVlaZERUeGth',
          uriUpload: 'https://apis.val.comunidad.madrid/ciencia-tecnologia/japi-alumnos-test/v1/files',
          uriTokenBase: 'https://apis.val.comunidad.madrid/token',
        },
        interceptorService: {
            apiKeys: [
                {
                    "name":"pruebaKey",
                    "apiKey": "Bearer 636fb144-1077-31a5-abba-7523b3bc1370"
                }
            ],
            ShowLoadingDefault: true,
        },
        notificationService: {
            uriBase: 'mova_rest_notificaciones/v4/',
            alwaysShowIosTemplate: false,
            appKey: '63D4C088809BED822C45124586507E4F',
            browserServiceUri: 'http://push.api.phonegap.com/v1/push',
            environment: 'VAL',
            receivedLimit: 20,
        },
      recaptchaService: {
        uriUtilSite: 'https://gestiona3.madrid.org/portalapps/util/recaptcha/',
            siteKey: '6Lcw6XIUAAAAAPngwupCl2UMhBN2qlcnePJopOi9',
        },
        localStorageService: {
            CryptP: 'YZERXMNd9e2e',
            mainNodeSuffix: '',
        },
        sessionStorageService: {
            CryptP: 'YZERXMNd9e2e',
            mainNodeSuffix: '',
        },
    },
    app: {        // Situar aqui las variables propias de la app segun entornos
       ...
    },
  };
  `;

  // environment.prod.ts
  codeEnvironmentProdTS = `
  export const environment = {
    mova: {
        environment: 'PRO',
        brokerView: {
            autoRedirect: true
        },
        initView: {
            autoRedirect: true,
            skipVersionRequirementsCheck: false,
        showVersionNewsWeb: true,
        showVersionNewsMobile: true
        },
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
          urlBottomText: '¿Aún no te has dado de alta? Regístrate',
          urlBottomUrl: 'https://www.google.es',
          urlCornerIcon: 'info',
          urlCornerUrl: '/ayuda-login-view',
          placeholder: {
            user: 'Usuario',
            password: 'Contraseña',
          },
        },
        authenticationService: {
            authenticationDefaultSystem: 'autologin', // dameToken | wso2 | autologin | autologin - wso2
            authenticationSaveLastLoginSystem: true,
            authenticationSaveInSessionWeb: false,
            authenticationSaveInSessionMobile: false,
            dameTokenConfig: {
                uriBase: 'https://esb.madrid.org/fesb_rest_token/v1/token/getToken',
                uriEliminaToken: 'https://esb.madrid.org/fesb_rest_token/v1/token/eliminaToken',
                authenticationSystem: 'IntranetDA',
                expirationTime: 604800000, // Una semana en milisegundos
                httpHeaderTokenAuthAlways: true,
                technicalModules: ['MOVA_MOV_PLANTILLA2'], //['MOVA_MOV_PLANTILLA2', 'REVEL_APP', 'MOVA_MOV_PLANTILLA2'],
                authenticationTechnicalModuleIndex: 0,
            },
            wso2Config: {
                uriBase: 'https://apis.comunidad.madrid/token',
                uriRevoke: 'https://apis.comunidad.madrid/revoke',
                consumerKey: '...',
                consumerSecret: '...',
                customDomain: '',
                customTenant: '',
                scopes: [
                    {'scope': 'NXCA_sc_consulta', 'active': false},
                    {'scope': 'NXCA_sc_escritura', 'active': false},
                ],
            },
            autologinConfig: {
                appRedirect: 'org.madrid.MOVA.mova2App',
                uriBase: 'https://gestiona3.madrid.org/auto_login/acceso.jsf?',
                uriLogout: 'https://gestiona3.madrid.org/auto_login/logout.jsf?',
          uriRedirectSite: 'https:gestiona3.madrid.org/portalapps/util/autologin-redirect/',
                paramIosSS: 'PRIVADO',
                paramIosPass: '3FED86CB00062E087C434FC195D45D84',
                paramAndroidSS: 'PRIVADO',
                paramAndroidPass:'3FED86CB00062E087C434FC195D45D84',
                paramWebappSS: 'PRIVADO',
                paramWebappPass: '3FED86CB00062E087C434FC195D45D84',
                paramWebappOkUrl: '',
                paramWebappOkUrlLogout: '',
                autologinOsb: {
                  uriGetToken: 'https://esb.madrid.org/fesb_rest_token/v1/token/getTokenAutologin',
                  uriValidaTicket: 'https://gestiona7.madrid.org/auto_rest/v1/ticket/valida/',
                },
                autologinWso2: {
                  consumerKeyAutologin: '...',
                  consumerSecretAutologin: '...',
                  uriGetUserData: 'https://apis.val.comunidad.madrid/t/ciudadanos.comunidad.madrid/pdto/oauth2inter/oauth2/userinfo',
                },
            },
        },
        backendService: {
            uriCheckVersion: 'https://esb.madrid.org/mova_rest_checkNewVersion/v1',
        uriVersionNews: 'https://gestiona3.madrid.org/mova_rest_servicios/v1/consultas/do',
            uriScores: 'https://gestiona3.madrid.org/mova_rest_servicios/v1/consultas/actualizar',
        },
        fileUploaderComponent: {
          authorizationHeader: 'M0c1TXBJWmJlbjVCQlZpT3RWT2x6am00YVRzYTpWYkpEdklmZjNQUzdaWkhUQTBsVVlaZERUeGth',
          uriUpload: 'https://apis.val.comunidad.madrid/ciencia-tecnologia/japi-alumnos-test/v1/files',
          uriTokenBase: 'https://apis.val.comunidad.madrid/token',
        },
        interceptorService: {
            apiKeys: [
                {
                    "name":"pruebaKey",
                    "apiKey": "Bearer 636fb144-1077-31a5-abba-7523b3bc1370"
                }
            ],
            ShowLoadingDefault: true,
        },
        notificationService: {
            uriBase: 'mova_rest_notificaciones/v4/',
            alwaysShowIosTemplate: false,
            appKey: '63D4C088809BED822C45124586507E4F',
            browserServiceUri: 'http://push.api.phonegap.com/v1/push',
            environment: 'PRO',
            receivedLimit: 20,
        },
      recaptchaService: {
        uriUtilSite: 'https://gestiona3.madrid.org/portalapps/util/recaptcha/',
            siteKey: '6Lcw6XIUAAAAAPngwupCl2UMhBN2qlcnePJopOi9',
        },
        localStorageService: {
            CryptP: 'T3QSyLiFh2Ek',
            mainNodeSuffix: '',
        },
        sessionStorageService: {
            CryptP: 'T3QSyLiFh2Ek',
            mainNodeSuffix: '',
        },
    },
    app: {        // Situar aqui las variables propias de la app segun entornos
      ...
    },
  };
  `;

  constructor() { }

  ngOnInit() {
  }
}

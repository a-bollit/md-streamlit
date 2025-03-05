// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  mova: {
    environment: 'PRO',
    brokerView: {
      autoRedirect: true,
    },
    initView: {
      autoRedirect: true,
      skipVersionRequirementsCheck: false,
      showVersionNewsWeb: true,
      showVersionNewsMobile: true,
    },
    // Configuración de la pantalla de login
    loginView: {
      // Se utiliza para mostrar o ocultar los botones de inicio de sesión de autenticationSystem
      hideButtonsAutenticationSystem: false,
      acceptTos: true,
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
    // Configuración de los servicios de autenticación
    authenticationService: {
      authenticationDefaultSystem: 'dameToken', // dameToken | wso2 | autologin | autologin - wso2
      authenticationSaveLastLoginSystem: true,
      authenticationSaveInSessionWeb: false,
      authenticationSaveInSessionMobile: true,
      // Configuración para pedir tokens OSB entrando por usuario y contraseña o Autologin
      dameTokenConfig: {
        uriBase: 'https://esb.madrid.org/fesb_rest_token/v1/token/getToken',
        uriEliminaToken: 'https://esb.madrid.org/fesb_rest_token/v1/token/eliminaToken',
        authenticationSystem: 'IntranetDA',
        expirationTime: 604800000, // Una semana en milisegundos
        httpHeaderTokenAuthAlways: true,
        technicalModules: ['MOVA_MOV_PLANTILLA2'], // ['MOVA_MOV_PLANTILLA2', 'MOVA_MOV_PLANTILLA2', 'MOVA_MOV_PLANTILLA2'],
        authenticationTechnicalModuleIndex: 0,
      },
      // Configuración para pedir tokens de WSO2 entrando por usuario y contraseña.
      // El consumerkey y consumerSecret son para pedir tokens de WSO2 por usuario y contraseña. El resto si son para Login y Autologin.
      wso2Config: {
        uriBase: 'https://apis.comunidad.madrid/token',
        uriRevoke: 'https://apis.comunidad.madrid/revoke',
        consumerKey: 'o5w5QUZ4JYfDISN18rweM0yYrTYa',
        consumerSecret: 'xIfdIEjsEyfgYqRfP22GJBJ02Hwa',
        customDomain: '',
        customTenant: '',
        scopes: [
          {'scope': 'sc_gestor', 'active': false},
          {'scope': 'sc_alumno', 'active': false},
          {'scope': 'sc_admin', 'active': false},
          {'scope': 'sc_consulta', 'active': false},
        ],
      },
      // Configuración básica para Autologin
      autologinConfig: {
        appRedirect: 'org.madrid.mova.mova2app',
        uriBase: 'https://gestiona3.madrid.org/auto_login/acceso.jsf?',
        uriLogout: 'https://gestiona3.madrid.org/auto_login/logout.jsf?',
        uriRedirectSite:
            'https://gestiona3.madrid.org/portalapps/util/autologin-redirect/',
        paramIosSS: 'PRIVADO',
        paramIosPass: '3FED86CB00062E087C434FC195D45D84',
        paramAndroidSS: 'PRIVADO',
        paramAndroidPass: '3FED86CB00062E087C434FC195D45D84',
        paramWebappSS: 'PRIVADO',
        paramWebappPass: '3FED86CB00062E087C434FC195D45D84',
        paramWebappOkUrl: '',
        paramWebappOkUrlLogout: '',
        // Urls para pedir tokens de OSB entrando por Autologin
        autologinOsb: {
          uriGetToken: 'https://esb.madrid.org/fesb_rest_token/v1/token/getTokenAutologin',
          uriValidaTicket: 'https://gestiona7.madrid.org/auto_rest/v1/ticket/valida/',
        },
        // API keys propias para pedir tokens de WSO2 entrando por Autologin
        autologinWso2: {
          consumerKeyAutologin: 'o5w5QUZ4JYfDISN18rweM0yYrTYa',
          consumerSecretAutologin: 'xIfdIEjsEyfgYqRfP22GJBJ02Hwa',
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
      uriTokenBase: 'https://accedeintra.comunidad.madrid/oauth2/token',
      authorizationHeader: 'ZElzd0ZSZkNMbXVaOW9ZeEREX3ExcHdyUWE0YTpzY2FQNFBQdkJZaHlRalBDX09WX0dBZGhwTm9h', // clave propro v4
      scope: 'JAPI_SC_APLICACION openid',
      uriUpload: 'https://apiscmintra.comunidad.madrid/t/dacm.comunidad.madrid/ejemploalumnosjapi/v1/files'   
    },
    interceptorService: {
      apiKeys: [
        {
          'name': 'pruebaKey',
          'apiKey': 'Bearer 636fb144-1077-31a5-abba-7523b3bc1370',
        },
      ],
      ShowLoadingDefault: true,
    },
    notificationService: {
      uriBase: 'https://gestiona3.madrid.org/mova_rest_notificaciones/v4/',
      alwaysShowIosTemplate: true,
      appKey: '63D4C088809BED822C45124586507E4F',
      browserServiceUri: 'http://push.api.phonegap.com/v1/push',
      environment: 'PRO',
      receivedLimit: 20,
    },
    notificationWebPushService: {
      appKey: 'BAp17PBIx1E77jP_sLPZyqlL2vkmaDPNeEKPRno971L9cJKTN8T4J7HryrJ5rJXOqqyjfPqUD9uCmZATFhOWCaU',
    },
    recaptchaService: {
      uriUtilSite: 'https://gestiona3.madrid.org/portalapps/util/recaptcha/',
      siteKey: '6Lcw6XIUAAAAAPngwupCl2UMhBN2qlcnePJopOi9',
    },
    pdfViewerComponent: {
      uriViewer: 'https://gestiona3.madrid.org/portalapps/util/pdf-viewer_1.3',
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
  app: {// Situar aqui las variables propias de la app segun entornos
    movaRestServices: 'https://gestiona3.madrid.org/mova_rest_servicios/v1/consultas/do',
    captchaServiceExample: 'https://gestiona3.madrid.org/mova_rest_servicios/v1/captcha/pingCaptchaGoogle',
    studentService: {
      url: 'https://apis.val.comunidad.madrid/ciencia-tecnologia/japi-alumnos-test/v1',
      urlAutologin: 'https://apis.val.comunidad.madrid/t/ciudadanos.comunidad.madrid/ciencia-tecnologia/japi-alumnos-test/v1',
      urlWithoutAuth: 'https://wsintra.des.comunidad.madrid/japi_rest_ejemplo_alumnos/v1',
    },
  },
};

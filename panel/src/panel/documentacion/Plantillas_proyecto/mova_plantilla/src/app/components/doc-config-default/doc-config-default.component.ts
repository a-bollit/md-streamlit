import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-config-default',
  templateUrl: './doc-config-default.html',
  styleUrls: ['./doc-config-default.scss'],
})
export class DocConfigDefault implements OnInit {
  // Archivo de configuracion
  codeConfigDefaultJSON = `
  {
    "mova": {
      "appName": "MOVA2 Framework",
      "appDescription": "Framework para el desarrollo de Apps móviles de la Comunidad de Madrid",
      "appId": 7,
      "appVersion": "1.0.0",
      "appVersionFramework": "1.1.4",
      "appVersionCordovaPluginLib": "1.0.2",
      "dialogErrorHttp": {
        "showDetail": false,
        "loginButton": false
      },
      "isDebug": true,
      "landingViewRoute": "/landing-view",
      "loginViewRoute": "/login-view",
      "mainViewRoute": "/main-menu",
      "moduloFuncional": "MOVA_MOV_PLANTILLA2",
      "moduloTecnicoIos": "MOVA_IOS_PLANTILLA2",
      "moduloTecnicoAndroid": "MOVA_ANDROID_PLANTILLA2",
      "moduloTecnicoWebapp": "MOVA_WEBAPP_PLANTILLA2",
      "piwikId": 187,
      "piwikUri": "https://estadisticas.comunidad.madrid/",
      "textAccessConditions": [
        "Este es un sistema de información de la Comunidad de Madrid y su ",
        "uso está restringido a personas autorizadas, en adelante",
        " 'usuarios'. En consecuencia, no está permitido suprimir, eludir o",
        " manipular los dispositivos técnicos de protección, las huellas",
        " digitales o cualesquiera mecanismos de información y/o ",
        "identificación y acceso al sistema.\n\nEl usuario se obliga",
        " a utilizar este sistema de información de forma diligente, ",
        "correcta, lícita y de conformidad a la Ley y al presente aviso.",
        " En particular, se compromete a no utilizar los contenidos con una",
        " finalidad contraria a la Ley, moral u orden público; a no ",
        "reproducir o copiar, no distribuir y no permitir el acceso ",
        "público, a excepción de que cuente con autorización expresa, ",
        "y en cualquier tipo de soporte, ya sea físico o lógico.\n\nEl ",
        "usuario se compromete a hacer un uso diligente y a mantener en ",
        "secreto la contraseña o los mecanismos de autenticación ",
        "proporcionados para acceder a este sistema. En consecuencia, ",
        "los usuarios son responsables de la adecuada custodia y ",
        "confidencialidad de cualesquiera identificadores y/o contraseñas ",
        "que le sean suministradas, y se comprometen a no ceder su uso a ",
        "terceros, ya sea temporal o permanente, ni a permitir su acceso a",
        " personas ajenas. Será responsabilidad del usuario la utilización",
        " ilícita de los servicios por cualquier tercero ilegítimo que ",
        "emplee a tal efecto una contraseña a causa de una utilización no",
        " diligente o de la pérdida de la misma por el usuario. En virtud",
        " de lo anterior, es obligación del usuario notificar de forma ",
        "inmediata a los gestores del sistema acerca de cualquier hecho ",
        "que permita el uso indebido de los identificadores y/o ",
        "contraseñas, tales como el robo, extravío, o el acceso no",
        " autorizado a los mismos, con el fin de proceder a su inmediata",
        " cancelación."
      ],
      "titleAccessConditions": "Condiciones de acceso",
      "maxWidthAccessConditions": "550px",
      "urlPortals": "https://www.comunidad.madrid/servicios/informacion-atencion-ciudadano/portales-comunidad-madrid-temas",
      "urlVisorVgcm": "https://idem.madrid.org/visor/?v=defaultMOVA",
      "urlContact": "http://www.comunidad.madrid/solicitud-informacion",
      "urlLegal": "http://comunidad.madrid/servicios/informacion-atencion-ciudadano/aviso-legal-privacidad"
    },
    "app": {
      "ejplVariableApp": "Esto es un ejemplo de variable de aplicación"
    }
  }
  
  `;

  constructor() { }

  ngOnInit() {
  }
}

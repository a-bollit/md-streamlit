import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MvTreeFilterExpandItem} from '@mova/components/tree-filter';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.html',
  styleUrls: ['./documentation.scss'],
})
export class Documentation implements OnInit {
  // Array con la información del mv-tree-filter
  documentationItems: Array <MvTreeFilterExpandItem> = [
    {
      'title': 'Guía de estilos',
      'children': [
        {
          'title': 'Consideraciones generales',
          'subtitle': 'Clases CSS disponibles, contenedores, diseño...',
          'link': {
            'type': 'state',
            'uri': 'doc-styles-guide-considerations',
          },
        },
        {
          'title': 'Textos, colores y tipografía',
          'subtitle': 'Tipografía a usar en la aplicación',
          'link': {
            'type': 'state',
            'uri': 'doc-styles-guide-typography',
          },
        },
        {
          'title': 'Configuración de temas visuales',
          'subtitle': 'Themes',
          'link': {
            'type': 'state',
            'uri': 'doc-component-theme',
          },
        },
        {
          'title': 'Grid 12',
          'subtitle': 'Grid 12 de bootstrap',
          'link': {
            'type': 'state',
            'uri': 'doc-styles-guide-grid12',
          },
        },
        {
          'title': 'Imágenes',
          'subtitle': 'Imágenes que se pueden usar en la aplicación',
          'link': {
            'type': 'state',
            'uri': 'doc-styles-guide-images',
          },
        },
        {
          'title': 'Iconos',
          'subtitle': 'Iconos que se pueden usar en la aplicación',
          'link': {
            'type': 'state',
            'uri': 'doc-styles-guide-icons',
          },
        },
        {
          'title': 'Tema socio sanitario',
          'subtitle': 'Tema visual azul socio sanitario',
          'link': {
            'type': 'state',
            'uri': 'doc-styles-guide-theme',
          },
        },

      ],
    },
    {
      'title': 'Componentes de formulario',
      'subtitle': 'Componentes que se suelen usar en formularios o visualización de datos',
      'children': [
        {
          'title': 'mv-birthdate',
          'subtitle': 'Componente para fechas',
          'link': {
            'type': 'state',
            'uri': 'doc-birthdate',
          },
        },
        {
          'title': 'mv-button',
          'subtitle': 'Botón con funcionalidad y personalización propia',
          'link': {
            'type': 'state',
            'uri': 'doc-button',
          },
        },
        {
          'title': 'mv-checkbox',
          'subtitle': 'Checkbox con funcionalidad y personalización propia',
          'link': {
            'type': 'state',
            'uri': 'doc-checkbox',
          },
        },
        {
          'title': 'mv-datepicker',
          'subtitle': 'Calendario con funcionalidad y personalización propia',
          'link': {
            'type': 'state',
            'uri': 'doc-datepicker',
          },
        },
        {
          'title': 'mv-file-uploader',
          'subtitle': 'Componente para subida de archivos',
          'link': {
            'type': 'state',
            'uri': 'doc-file-uploader',
          },
        },
        {
          'title': 'mv-input',
          'subtitle': 'Input con funcionalidad y personalización propia',
          'link': {
            'type': 'state',
            'uri': 'doc-input',
          },
        },
        {
          'title': 'mv-last-notifications',
          'subtitle': 'Listado de notificaciones con personalización propia',
          'link': {
            'type': 'state',
            'uri': 'doc-last-notifications',
          },
        },
        {
          'title': 'mv-radio',
          'subtitle': 'Radiobutton con funcionalidad y personalización propia',
          'link': {
            'type': 'state',
            'uri': 'doc-radio',
          },
        },
        {
          'title': 'mv-select',
          'subtitle': 'Combo con funcionalidad y personalización propia',
          'link': {
            'type': 'state',
            'uri': 'doc-select',
          },
        },
        {
          'title': 'mv-table-responsive',
          'subtitle': 'Tabla responsive',
          'link': {
            'type': 'state',
            'uri': 'doc-table-responsive',
          },
        },
        {
          'title': 'mv-textarea',
          'subtitle': 'Textarea con funcionalidad y personalización propia',
          'link': {
            'type': 'state',
            'uri': 'doc-textarea',
          },
        },
        {
          'title': 'mv-tree-filter',
          'subtitle': 'Árbol con buscador y distintos niveles',
          'link': {
            'type': 'state',
            'uri': 'doc-tree-filter',
          },
        },
        {
          'title': 'mv-values-list',
          'subtitle': 'Selección de un elemento a partir de una lista de valores',
          'link': {
            'type': 'state',
            'uri': 'doc-values-list',
          },
        },
      ],
    },
    {
      'title': 'Otros componentes visuales',
      'subtitle': 'Otros componentes visuales a usar en aplicaciones MOVA',
      'children': [
        {
          'title': 'mv-button-scroll-to-top',
          'subtitle': 'Botón para hacer scroll al inicio',
          'link': {
            'type': 'state',
            'uri': 'doc-button-scroll-to-top',
          },
        },
        {
          'title': 'mv-dialog',
          'subtitle': 'Diálogo con funcionalidad y personalización propia',
          'link': {
            'type': 'state',
            'uri': 'doc-dialog',
          },
        },
        {
          'title': 'mv-dialog-error',
          'subtitle': 'Diálogo de error con funcionalidad y personalización propia',
          'link': {
            'type': 'state',
            'uri': 'doc-dialog-error',
          },
        },
        {
          'title': 'mv-dropdown-menu',
          'subtitle': 'Menú flotante',
          'link': {
            'type': 'state',
            'uri': 'doc-dropdown-menu',
          },
        },
        {
          'title': 'mv-pdf-viewer',
          'subtitle': 'Visor de pdf',
          'link': {
            'type': 'state',
            'uri': 'doc-pdf',
          },
        },
        {
          'title': 'mv-footer-tab',
          'subtitle': 'Solapas en el pie o internas, sin navegación',
          'link': {
            'type': 'state',
            'uri': 'doc-footer-tab',
          },
        },
        {
          'title': 'mv-footer-nav-tab',
          'subtitle': 'Solapas en el pie con navegación',
          'link': {
            'type': 'state',
            'uri': 'doc-footer-nav-tab',
          },
        },
        {
          'title': 'mv-notification-config',
          'subtitle': 'Componente de configuración de las notificaciones push',
          'link': {
            'type': 'state',
            'uri': 'doc-notifications-config',
          },
        },
        {
          'title': 'mv-pocket-card',
          'subtitle': 'Componente "Tarjetero Digital" para mostrar Tarjetas Virtuales y PKpass',
          'link': {
            'type': 'state',
            'uri': 'doc-pocket-card',
          }
        },
        {
          'title': 'Swipe',
          'subtitle': 'Control de gestos swipe con Hammer.js',
          'link': {
            'type': 'state',
            'uri': 'doc-swipe',
          },
        },
        {
          'title': 'mv-recaptcha',
          'subtitle': 'Servicio de recaptcha de Google',
          'link': {
            'type': 'state',
            'uri': 'doc-recaptcha',
          },
        },
        {
          'title': 'mv-show-when',
          'subtitle': 'Directiva para mostrar/ocultar elementos según roles',
          'link': {
            'type': 'state',
            'uri': 'doc-show-when',
          },
        },
        {
          'title': 'mv-snack-bar',
          'subtitle': 'Texto animado para informar al usuario',
          'link': {
            'type': 'state',
            'uri': 'doc-snack-bar',
          },
        },
        {
          'title': 'mv-viewport-info',
          'subtitle': 'Componente visual con información del viewport',
          'link': {
            'type': 'state',
            'uri': 'doc-viewport-info',
          },
        },
      ],
    },
    {
      'title': 'Componentes internos MOVA',
      'subtitle': 'Componentes relacionados con aspectos internos',
      'children': [
        {
          'title': 'mv-check-version',
          'subtitle': 'Comprobación de nueva versión disponible',
          'link': {
            'type': 'state',
            'uri': 'doc-check-version',
          },
        },
        {
          'title': 'mv-data-protection-view',
          'subtitle': 'Vista de protección de datos',
          'link': {
            'type': 'state',
            'uri': 'doc-protection-view',
          },
        },
        {
          'title': 'mv-device-view',
          'subtitle': 'Vista de información de la app',
          'link': {
            'type': 'state',
            'uri': 'doc-device-view',
          },
        },
        {
          'title': 'mv-header',
          'subtitle': 'Header con funcionalidad y personalización propia',
          'link': {
            'type': 'state',
            'uri': 'doc-header',
          },
        },
        {
          'title': 'mv-init-view',
          'subtitle': 'Vista de inicio de la app con funcionalidad propia',
          'link': {
            'type': 'state',
            'uri': 'doc-init-view',
          },
        },
        {
          'title': 'mv-landing-view',
          'subtitle': 'Vista personalizable de entrada a la app',
          'link': {
            'type': 'state',
            'uri': 'doc-landing-view',
          },
        },
        {
          'title': 'funcionalidad de login y broker',
          'subtitle': 'Servicio de autenticación mediante OSB (dametoken), WSO2, Autologin...',
          'link': {
            'type': 'state',
            'uri': 'doc-login-view',
          },
        },
        {
          'title': 'mv-version-news',
          'subtitle': 'Novedades de la versión',
          'link': {
            'type': 'state',
            'uri': 'doc-version-news',
          },
        },
        {
          'title': 'mv-rate-view',
          'subtitle': 'Vista de valoración de la app',
          'link': {
            'type': 'state',
            'uri': 'doc-rate-view',
          },
        },
        {
          'title': 'mv-menu',
          'subtitle': 'Menú lateral con funcionalidad y personalización propia',
          'link': {
            'type': 'state',
            'uri': 'doc-menu',
          },
        },
        {
          'title': 'mv-button-login',
          'subtitle': 'Botón con funcionalidad de login y logout',
          'link': {
            'type': 'state',
            'uri': 'doc-button-login',
          },
        },
      ],
    },
    {
      'title': 'Servicios comunes y librerías externas',
      'subtitle': 'Componentes que ofrecen servicios',
      'children': [
        {
          'title': 'app-service',
          'subtitle':
            'Servicio de librería de funcionalidades comunes: b64toBlob, ' +
            'getFormattedDate, getTechnicalModule, getRandomString, ' +
            'indexOfWithAttr, showLoading, titleCase, windowOpen...)',
          'link': {
            'type': 'state',
            'uri': 'doc-app-service',
          },
        },
        {
          'title': 'Descarga y apertura de archivos',
          'subtitle': 'Uso de HttpRequest, XHR, visor PDF y plugin file-opener2',
          'link': {
            'type': 'state',
            'uri': 'doc-xhr-download',
          },
        },
        {
          'title': 'local-storage-service',
          'subtitle': 'Servicio de localStorage con funcionalidad propia',
          'link': {
            'type': 'state',
            'uri': 'doc-local-storage-service',
          },
        },
        {
          'title': 'notification-service',
          'subtitle': 'Servicio de notificaciones push',
          'link': {
            'type': 'state',
            'uri': 'doc-notifications',
          },
        },
        {
          'title': 'notification-web-push-service',
          'subtitle': 'Servicio de notificaciones push para navegador',
          'link': {
            'type': 'state',
            'uri': 'doc-notification-web-push',
          },
        },
        {
          'title': 'session-storage-service',
          'subtitle': 'Servicio de sessionStorage con funcionalidad propia',
          'link': {
            'type': 'state',
            'uri': 'doc-session-storage-service',
          },
        },
        {
          'title': 'device-service',
          'subtitle': 'Servicio que devuelve la información del dispositivo',
          'link': {
            'type': 'state',
            'uri': 'doc-device-service',
          },
        },
        {
          'title': 'qr-service',
          'subtitle': 'Lector de códigos QR',
          'link': {
            'type': 'state',
            'uri': 'doc-qr-service',
          },
        },
        {
          'title': 'Librerías externas',
          'subtitle': 'Librerías externas autorizadas por mova. Cualquier otra librería externa a MOVA deberá ser previamente autorizada por Arquitectura',
          'link': {
            'type': 'state',
            'uri': 'doc-external-libraries',
          },
        },
      ],
    },
    {
      'title': 'Componentes de Administración Electrónica',
      'subtitle': '',
      'children': [
      ],
    },
    {
      'title': 'Componentes de autorización',
      'subtitle': 'Componentes que necesitan ser autorizados por Arquitectura',
      'children': [
        {
          'title': 'sqlite-service',
          'subtitle': 'Servicio que gestiona bases de datos de manera local ',
          'link': {
            'type': 'state',
            'uri': 'doc-sqlite-service',
          },
        },
        {
          'title': 'crypto-service',
          'subtitle': 'Servicio de encriptación de datos',
          'link': {
            'type': 'state',
            'uri': 'doc-crypto-service',
          },
        },
      ],
    },
    {
      'title': 'Configuración y optimización de la aplicación',
      'subtitle': 'Configuración por entorno, seguridad, piwik, plugins...',
      'children': [
        {
          'title': 'Archivo config-default-main-frame.json',
          'subtitle': 'Archivo de configuración visual de la app',
          'link': {
            'type': 'state',
            'uri': 'doc-config-default-main-frame',
          },
        },
        {
          'title': 'Archivo config-default.json',
          'subtitle': 'Archivo de configuración general de la app',
          'link': {
            'type': 'state',
            'uri': 'doc-config-default',
          },
        },
        {
          'title': 'Archivos environment.ts, environment.val.ts y environment.prod.ts',
          'subtitle': 'Archivos de configuración por entorno',
          'link': {
            'type': 'state',
            'uri': 'doc-environment',
          },
        },
        {
          'title': 'Accesibilidad',
          'subtitle': 'Documentación y configuración sobre accesibilidad',
          'link': {
            'type': 'state',
            'uri': 'doc-accessibility',
          },
        },
        {
          'title': 'Compilación y debug de la app',
          'subtitle': '',
          'link': {
            'type': 'state',
            'uri': 'doc-compilation',
          },
        },
        {
          'title': 'Permisos de aplicación',
          'subtitle':
            'Permisos nativos de aplicación para Android e ios (GPS, Cámara, ...)',
          'link': {
            'type': 'state',
            'uri': 'doc-app-permissions',
          },
        },
        {
          'title': 'Peticiones http',
          'subtitle': 'Configuración de peticiones http',
          'link': {
            'type': 'state',
            'uri': 'doc-http-request',
          },
        },
        {
          'title': 'Navegador InAppBrowser',
          'subtitle': 'Abrir web embebida en la app (inAppBrowser)',
          'link': {
            'type': 'state',
            'uri': 'doc-inappbrowser',
          },
        },
        {
          'title': 'Icons y splashScreen',
          'subtitle':
            'Generación de iconos y splashscreen para aplicaciones móviles',
          'link': {
            'type': 'state',
            'uri': 'doc-icons-splashscreen',
          },
        },
        {
          'title': 'Configurar esquema (scheme) de la app',
          'subtitle': '',
          'link': {
            'type': 'state',
            'uri': 'doc-scheme',
          },
        },
        {
          'title': 'Estadísticas - Matomo (piwik)',
          'subtitle': '',
          'link': {
            'type': 'state',
            'uri': 'doc-piwik',
          },
        },
        {
          'title': 'Política y seguridad de contenido',
          'subtitle': '',
          'link': {
            'type': 'state',
            'uri': 'doc-content-policy',
          },
        },
        {
          'title': 'Plugins y permisos',
          'subtitle': '',
          'link': {
            'type': 'state',
            'uri': 'doc-plugins',
          },
        },
        {
          'title': 'Plugin x-social-sharing y navigator.share',
          'subtitle':
            'Para compartir información a distintos canales:'+
            ' correo, Twitter, Facebook...',
          'link': {
            'type': 'state',
            'uri': 'doc-plugin-socialsharing',
          },
        },
        {
          'title': 'Plugin safari-view-controller',
          'subtitle': 'Para abrir una web en webview del dispositivo',
          'link': {
            'type': 'state',
            'uri': 'doc-plugin-safari-view-controller',
          },
        },
        {
          'title': 'Añadir webapp como icono en el móvil',
          'subtitle': '',
          'link': {
            'type': 'state',
            'uri': 'doc-webapp-icon',
          },
        },
        {
          'title': 'Consideraciones por plataforma',
          'subtitle': '',
          'link': {
            'type': 'state',
            'uri': 'doc-platform-considerations',
          },
        },
        {
          'title': 'Revisión de puesta en producción',
          'subtitle': '',
          'link': {
            'type': 'state',
            'uri': 'doc-production-deploy',
          },
        },
        {
          'title': 'DeepLinks registro y llamada',
          'subtitle':
            'Permite a las aplicación recibir DeepLinks y gestionar la vista'+
            ' destino y sus parámetros',
          'link': {
            'type': 'state',
            'uri': 'doc-deeplinks',
          },
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit() {

  }
}

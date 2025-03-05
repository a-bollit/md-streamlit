import {Component, OnInit} from '@angular/core';

interface example {
  id: string;
  titulo: string;
  subtitulo: string;
  nombre: string;
  descripcion: string;
  tabTitle: string;
  package: string;
  config: string;
  iOs: string;
  Android: string;
}
@Component({
  selector: 'app-doc-app-permissions',
  templateUrl: './doc-app-permissions.html',
  styleUrls: ['./doc-app-permissions.scss'],
})
export class DocAppPermissions implements OnInit {
  examples:example[] = [
    {
      id: 'cam',
      titulo: 'Cámara',
      subtitulo: 'cordova-plugin-camera',
      nombre: 'Configuración de permisos',
      descripcion: `
      <p>
        Plugin que se encarga del uso nativo de la cámara.
        Estara configurado en el package.json y en el config.xml
      </p>
      <p><a href="https://github.com/apache/cordova-plugin-camera">Documentación</a></p>
      <p>Para iOs hay que añadir unos permisos especiales:</p>
      <ul>
        <li><strong>NSCameraUsageDescription</strong>: Permiso de uso de la cámara</li>
        <li><strong>NSPhotoLibraryUsageDescription</strong>: Permiso de uso de la librería del teléfono</li>
        <li><strong>NSLocationWhenInUseUsageDescription</strong>: Permiso de localización en uso de la app</li>
        <li><strong>NSPhotoLibraryAddUsageDescription</strong>: Permiso para guardar fotos en la librería</li>
      </ul>
      `,
      tabTitle: 'Configuraciones:',
      package: `
      ...
      "dependencies": {
        ...
        "cordova-plugin-camera": "^4.1.0",
        ...
      }
      `,
      config: `
      <plugin name="cordova-plugin-camera" spec="^4.1.0">
          <variable name="ANDROID_SUPPORT_V4_VERSION" value="27.+" />
      </plugin>
      `,
      iOs: `
      ...
      <!--Añadir los estos permisos en config.xml-->
      <platform name="ios">
        ...
        <edit-config target="NSCameraUsageDescription" file="*-Info.plist" mode="merge">
            <string>Se necesita acceso  para poder capturar fotografiás</string>
        </edit-config>

        <edit-config target="NSPhotoLibraryUsageDescription" file="*-Info.plist" mode="merge">
            <string>Se necesita acceso a la librería de imágenes</string>
        </edit-config>

        <edit-config target="NSLocationWhenInUseUsageDescription" file="*-Info.plist" mode="merge">
            <string>Se necesita acceso a la localización</string>
        </edit-config>

        <edit-config target="NSPhotoLibraryAddUsageDescription" file="*-Info.plist" mode="merge">
            <string>Se necesita permiso para poder guardar imágenes</string>
        </edit-config>
        ...
      </platform>
      ...
      `,
      Android: `
        <!--En AndroidManifest debería existir ya el permiso-->
        <uses-permission android:name="android.permission.CAMERA" />
      `,
    },
    {
      id: 'scanner',
      titulo: 'Barcode Scanner',
      subtitulo: 'phonegap-plugin-barcodescanner',
      nombre: 'Configuración de permisos',
      descripcion: `
      <p>
        Plugin para escanear códigos de barra y QR
      </p>
      <p><a href="https://github.com/phonegap/phonegap-plugin-barcodescanner">Documentación</a></p>
      <p>Para iOs hay que añadir un permisos:</p>
      <ul>
        <li><strong>NSCameraUsageDescription</strong>: Permiso de uso de la cámara</li>
      </ul>`,
      tabTitle: 'Configuraciones:',
      package: `
      ...
      "dependencies": {
        ...
        "phonegap-plugin-barcodescanner": "8.1.0",
        ...
      }
      ...
      "cordova": {
        "plugins": {
          ...
          "phonegap-plugin-barcodescanner": {
            "ANDROID_SUPPORT_V4_VERSION": "27.+"
          },
          ...
        }
      }
      `,
      config: `
      <plugin name="phonegap-plugin-barcodescanner" />
      `,
      iOs: `
      ...
      <!--Añadir los estos permisos en config.xml-->
      <platform name="ios">
        ...
        <edit-config target="NSCameraUsageDescription" file="*-Info.plist" mode="merge">
            <string>Para el escaneo de códigos de barra</string>
        </edit-config>
        ...
      </platform>
      ...
      `,
      Android: ``,
    },
    {
      id: 'socialsharing',
      titulo: 'socialsharing',
      subtitulo: 'cordova-plugin-x-socialsharing',
      nombre: 'Configuración de permisos',
      descripcion: `
      <p>
        Plugin para compartir por correo o redes sociales
      </p>
      <p><a href="https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin">Documentación</a></p>
      `,
      tabTitle: 'Configuraciones:',
      package: `
      ...
      "dependencies": {
        ...
        "cordova-plugin-x-socialsharing": "^6.0.2",
        ...
      }
      ...
      "cordova": {
        "plugins": {
          ...
          "cordova-plugin-x-socialsharing": {},
          ...
        }
      }
      `,
      config: `
        <plugin name="cordova-plugin-x-socialsharing" spec="^6.0.2" />
      `,
      iOs: ``,
      Android: ``,
    },
    {
      id: 'file',
      titulo: 'file',
      subtitulo: 'cordova-plugin-file',
      nombre: 'Configuración de permisos',
      descripcion: `
      <p>
        Plugin para Leer y escribir ficheros en el dispositivo, pide automáticamente los permisos que necesita
      </p>
      <p><a href="https://github.com/apache/cordova-plugin-file#sample">Documentación</a></p>
      `,
      tabTitle: 'Configuraciones:',
      package: `
      ...
      "dependencies": {
        ...
        "cordova-plugin-file": "^6.0.2",
        ...
      }
      ...
      "cordova": {
        "plugins": {
          ...
          "cordova-plugin-file": {},
          ...
        }
      }`,
      config: `
      <plugin name="cordova-plugin-file" spec="^6.0.2" />`,
      iOs: ``,
      Android: ``,
    },
    {
      id: 'network',
      titulo: 'network-information',
      subtitulo: 'cordova-plugin-network-information',
      nombre: 'Configuración de permisos',
      descripcion: `
      <p>
        Plugin que devuelve la información del estado de la red del dispositivo
      </p>
      <p><a href="https://github.com/apache/cordova-plugin-network-information">Documentación</a></p>
      `,
      tabTitle: 'Configuraciones:',
      package: `
      ...
      "dependencies": {
        ...
        "cordova-plugin-network-information": "^2.0.2",
        ...
      }
      ...
      "cordova": {
        "plugins": {
          ...
          "cordova-plugin-network-information": {},
          ...
        }
      }`,
      config: `
      <plugin name="cordova-plugin-file" spec="^6.0.2" />`,
      iOs: ``,
      Android: ``,
    },
    {
      id: 'passbook',
      titulo: 'passbook',
      subtitulo: 'cordova-plugin-passbook-new',
      nombre: 'Configuración de permisos',
      descripcion: `
      <p>
        Plugin para descarga de pkpass y permite añadirlo al tarjetero nativo
      </p>
      <p><a href="https://github.com/thatisuday/cordova-plugin-passbook-new">Documentación</a></p>
      <p><a href="https://github.com/passslot/cordova-plugin-passbook">Documentación del plugin base</a></p>
      `,
      tabTitle: 'Configuraciones:',
      package: `
      ...
      "dependencies": {
        ...
        "cordova-plugin-passbook-new": "^1.0.2",
        ...
      }
      ...
      "cordova": {
        "plugins": {
          ...
          "cordova-plugin-passbook-new": {},
          ...
        }
      }`,
      config: `
      <plugin name="cordova-plugin-passbook-new" spec="^1.0.2" />
      `,
      iOs: ``,
      Android: ``,
    },
    {
      id: 'statusbar',
      titulo: 'statusbar',
      subtitulo: 'cordova-plugin-statusbar',
      nombre: 'Configuración de permisos',
      descripcion: `
      <p>
        Plugin para modificar el statusbar del sistema operativo cuando la app está abierta.
      </p>
      <p><a href="https://github.com/apache/cordova-plugin-statusbar">Documentación</a></p>
      `,
      tabTitle: 'Configuraciones:',
      package: `
      ...
      "dependencies": {
        ...
        "cordova-plugin-statusbar": "^2.4.3",
        ...
      }
      ...
      "cordova": {
        "plugins": {
          ...
          "cordova-plugin-statusbar": {},
          ...
        }
      }`,
      config: `
      <plugin name="cordova-plugin-statusbar" spec="^2.4.3" />
      `,
      iOs: ``,
      Android: ``,
    },
    {
      id: 'diagnostic',
      titulo: 'diagnostic',
      subtitulo: 'cordova.plugins.diagnostic',
      nombre: 'Configuración de permisos',
      descripcion: `
      <p>
        Plugin para controlar la configuración del dispositivo, como licalización, Bluetooth, y wifi.
      </p>
      <p><a href="https://github.com/dpa99c/cordova-diagnostic-plugin#overview">Documentación</a></p>
      `,
      tabTitle: 'Configuraciones:',
      package: `
      ...
      "dependencies": {
        ...
        "cordova.plugins.diagnostic": "^6.0.2",
        ...
      }
      ...
      "cordova": {
        "plugins": {
          ...
          "cordova.plugins.diagnostic": {
            "ANDROIDX_VERSION": "1.+",
            "ANDROIDX_APPCOMPAT_VERSION": "1.3.1"
          }
          ...
        }
      }`,
      config: `
      <platform name="ios">
        <config-file platform="ios" target="*-Info.plist" parent="NSLocationAlwaysUsageDescription">
            <string>Acceso a la localización.</string>
        </config-file>
        <config-file platform="ios" target="*-Info.plist" parent="NSLocationWhenInUseUsageDescription">
            <string>Acceso a la localización cuando se usa la app.</string>
        </config-file>
    </platform>
    `,
      iOs: ``,
      Android: ``,
    },

  ];
  constructor() { }

  ngOnInit() {
  }
  scrollTo(id: string) {
    document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-production-deploy',
  templateUrl: './doc-production-deploy.html',
  styleUrls: ['./doc-production-deploy.scss'],
})
export class DocProductionDeploy implements OnInit {
  // Uso del componente
  codeConfigXml = `
  <widget id="org.madrid.MOVA.mova2App" ...>
      <name>MOVA2</name>
      <description>
        Framework MOVA para el desarrollo de aplicaciones móviles.
      </description>
      ...
      <plugin name="cordova-plugin-customurlscheme" spec="5.0.2">
          <variable name="URL_SCHEME" value="org.madrid.mova.mova2app" />
          ....
      </plugin>
  </widget>
  `;

  codeConfigDefaultJson = `
  {
    "mova": {
      ...
      "appId": 7,
      "appVersion": "1.0.0",
      ...
      "moduloFuncional": "MOVA_MOV_PLANTILLA",
      "moduloTecnicoIos": "MOVA_IOS_PLANTILLA",
      "moduloTecnicoAndroid": "MOVA_ANDROID_PLANTILLA",
      "moduloTecnicoWebapp": "MOVA_WEBAPP_PLANTILLA",
      "piwikId": 187,
      ...
    },
    "app": {
      ...
    }
  }
  `;

  constructor(
  ) { }

  ngOnInit() {

  }
}

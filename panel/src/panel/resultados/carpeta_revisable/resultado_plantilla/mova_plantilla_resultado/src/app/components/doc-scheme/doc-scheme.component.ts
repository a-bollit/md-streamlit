import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-scheme',
  templateUrl: './doc-scheme.html',
  styleUrls: ['./doc-scheme.scss'],
})
export class DocScheme implements OnInit {
  // Configuración de mova
  codeMovaConfigHTML = `
  `;

  codeMovaConfigXml = `
  <?xml version='1.0' encoding='utf-8'?>
  <widget id="..." xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    ...
    <plugin name="cordova-plugin-customurlscheme" spec="5.0.2">
        <variable name="URL_SCHEME" value="org.madrid.mova.mova2app" />
        <variable name="ANDROID_SCHEME" value=" " />
        <variable name="ANDROID_HOST" value=" " />
        <variable name="ANDROID_PATHPREFIX" value="/" />
    </plugin>
    ...
  </widget>
  `;

  constructor(
  ) { }

  ngOnInit() {

  }
}

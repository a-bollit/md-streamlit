import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-webapp-icon',
  templateUrl: './doc-webapp-icon.html',
  styleUrls: ['./doc-webapp-icon.scss'],
})
export class DocWebappIcon implements OnInit {
  // manifest.json
  codeManifestJSON = `
  {
    "name": "Plantilla MOVA2",
    "short_name": "MOVA2",
    "theme_color": "#212121",
    "background_color": "#212121",
    "display": "standalone",
    "scope": "./",
    "start_url": "./",
    "icons": [
      {
        "src": "./favicon.ico",
        "sizes": "64x64 32x32 24x24 16x16",
        "type": "image/x-icon"
      },
      {
        "src": "./assets/logo-agencia-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "./assets/logo-agencia-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  }
  `;

  codeIndexHTML = `
  <!doctype html>
  <html lang="es">
  <head>
    ...
    <!-- añadir las dos siguientes líneas -->
    <link rel="manifest" href="manifest.webmanifest"/>
    <meta name="mobile-web-app-capable" content="yes">
    ...
  </html>
  `;

  codeAppModuleTS = `
  ...

  imports: [
    ...
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
  ],
  
  ...
  `;

  constructor(
  ) { }

  ngOnInit() {

  }
}

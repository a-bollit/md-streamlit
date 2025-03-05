import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-accessibility',
  templateUrl: './doc-accessibility.html',
  styleUrls: ['./doc-accessibility.scss'],
})
export class DocAccessibility implements OnInit {

  // prop title
  codeTitleExampleHTML = `
  <!doctype html>
  <html lang="es">
  <head>
    ...
    <title>MOVA 2 - Plantilla</title>
    ...
  </head>
  ...
  `;

  // prop title 2
  codeTitleExample2JSON = `
  {
    "mova": {
      ...
      "appTitle": "MOVA2",
      ...
    }
    ...
  }
  `;

  // prop headings
  codeHeadingExampleHTML = `
  <h1 class="mv-h1">Título principal con estilo mv-h1</h1>
  <h1>Título principal estándar</h1>
  <h1>Título secundario</h1>
  <h1>Título terciario</h1>
  `;

  // focus
  codeFocusExampleHTML = `
  <mv-button>
    Botón básico
  </mv-button>

  <mv-button
    appearance="raised"
    color="primary">
    Acción
  </mv-button>
  `;

  constructor(
  ) { }

  ngOnInit() {
  }

}

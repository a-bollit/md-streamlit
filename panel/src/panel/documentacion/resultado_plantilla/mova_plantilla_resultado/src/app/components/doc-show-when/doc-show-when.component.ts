import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-show-when',
  templateUrl: './doc-show-when.html',
  styleUrls: ['./doc-show-when.scss'],
})
export class DocShowWhen implements OnInit {
  // Ejemplo de uso
  codeUseExampleHTML = `
  <mv-button
    mvShowWhen="login"
    color="primary">
    Acceso premium
  </mv-button>

  <mv-button
    mvShowWhen="logout"
    color="secondary">
    Acceso básico
  </mv-button>
  `;

  codeUseExampleTS = `

  ...

  constructor(

  ) {}

  ...
  `;

  // mvShowWhen
  codeMvShowWhenExampleHTML = `
  <mv-button
    mvShowWhen="login"
    color="primary">
    Acceso premium
  </mv-button>

  <mv-button
    mvShowWhen="logout"
    color="secondary">
    Acceso básico
  </mv-button>
  `;

  codeMvShowWhenExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  constructor() { }

  ngOnInit() {
  }
}

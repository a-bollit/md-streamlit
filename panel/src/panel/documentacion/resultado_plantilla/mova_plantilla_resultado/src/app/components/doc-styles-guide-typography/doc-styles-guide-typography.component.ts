import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-styles-guide-typography',
  templateUrl: './doc-styles-guide-typography.html',
  styleUrls: ['./doc-styles-guide-typography.scss'],
})
export class DocStylesGuideTypography implements OnInit {
  // Ejemplo de uso fontawesome
  codeCSSExampleHTML = `
  @import '~@mova/components/_variables.scss';

  // Ya se puede usar cualquier clase, mixin o variable MOVA
  `;

  constructor() { }

  ngOnInit() {
  }

  // Textos y tipografia general
  codeUseTypoExampleHTML = `
  <h1>Ejemplo de título principal</h1>
  <h2>Ejemplo de título secundario</h2>
  <h3>Ejemplo de título terciario</h3>
  <p>Ejemplo de párrafo: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.</p>
  <p>Texto con énfasis: <em>texto a destacar</em></p>
  <p>Texto en negrita: <strong>texto a destacar</strong></p>
  `;

  // Textos y tipografia mova
  codeUseTypoMovaExampleHTML = `
  <h1 class="mv-h1 h1-primary">Ejemplo de título principal con estilo mv-h1 y color primary</h1>
  <h1 class="mv-h1 h1-accent">Ejemplo de título principal con estilo mv-h1 y color accent</h1>
  <h1 class="mv-h1 h1-warn">Ejemplo de título principal con estilo mv-h1 y color warn</h1>
  <h1 class="mv-h1 h1-corporative">Ejemplo de título principal con estilo mv-h1 y color corporative</h1>
  `;

  // Textos y tipografia mova
  codeUseTypoMovaExampleCSS = `
  @import '~@mova/components/_variables.scss';

  ...

  .h1-primary{
    color: $primary;
  }
  .h1-accent{
    color: $accent;
  }
  .h1-warn{
    color: $warn;
  }
  .h1-corporative{
    color: $corporative-comunidad-madrid;
  }

  ...
  `;
}

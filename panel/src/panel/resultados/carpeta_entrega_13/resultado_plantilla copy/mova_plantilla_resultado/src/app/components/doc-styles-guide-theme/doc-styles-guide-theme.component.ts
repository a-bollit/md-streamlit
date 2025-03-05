import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-styles-guide-theme',
  templateUrl: './doc-styles-guide-theme.html',
  styleUrls: ['./doc-styles-guide-theme.scss'],
})
export class DocStylesGuideTheme implements OnInit {
  // Elegir un tema u otro en MOVA
  codeThemeExampleJSON = `
  {
    "generalConfig": {
      "style": 2
    }
    ...
  }
  `;

  // Elegir un tema u otro en styles
  codeThemeExampleCSS = `
  // Color corporativo de la Comunidad de Madrid
  //$corporative: $corporative-comunidad-madrid;
  // Color corporativo de Salud Madrid
  $corporative: $corporative-salud-madrid;

  // Color accent de la Comunidad de Madrid
  //$accent: $accent-comunidad-madrid;
  // Color accent de Salud Madrid
  $accent: $accent-salud-madrid;
  `;

  constructor() { }

  ngOnInit() {
  }
}

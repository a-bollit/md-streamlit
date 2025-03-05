import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-styles-guide-considerations',
  templateUrl: './doc-styles-guide-considerations.html',
  styleUrls: ['./doc-styles-guide-considerations.scss'],
})
export class DocStylesGuideConsiderations implements OnInit {
  // Ejemplo de uso mv-card
  codeMvCardExampleHTML = `
  <mv-card class="card-code">
    <mv-card-header>
      <div mv-card-avatar><mv-icon>code</mv-icon></div>
      <mv-card-title><strong>Consejos de diseño</strong></mv-card-title>
    </mv-card-header>

    <mv-card-content>

    ...

    </mv-card-content>
  </mv-card>
  `;

  // Ejemplo de uso fontawesome
  codeMvCardExampleCSS = `
  @import '~@mova/components/_variables.scss';

  .card-code{
    margin-right: auto;
    margin-left: auto;
    max-width: $container-max-width-medium;
  }
  `;

  // Ejemplo de uso cards info, warn, success y danger
  codeMvCardColorExampleHTML = `
  <mv-card
    class="warning-card">
    <mv-card-header>
      <mv-card-title>
        <strong>Aviso</strong>
      </mv-card-title>
    </mv-card-header>

    <mv-card-content>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </mv-card-content>
  </mv-card>

  <mv-card
    class="danger-card">
    <mv-card-header>
      <mv-card-title>
        <strong>Peligro</strong>
      </mv-card-title>
    </mv-card-header>

    <mv-card-content>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </mv-card-content>
  </mv-card>

  <mv-card
    class="success-card">
    <mv-card-header>
      <mv-card-title>
        <strong>Correcto</strong>
      </mv-card-title>
    </mv-card-header>

    <mv-card-content>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </mv-card-content>
  </mv-card>

  <mv-card
    class="info-card">
    <mv-card-header>
      <mv-card-title>
        <strong>Información</strong>
      </mv-card-title>
    </mv-card-header>

    <mv-card-content>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </mv-card-content>
  </mv-card>
  `;

  // Ejemplo de uso fontawesome
  codeCSSExampleHTML = `
  @import '~@mova/components/_variables.scss';

  // Ya se puede usar cualquier clase, mixin o variable MOVA
  `;

  // Ejemplo de uso mixin
  codeCSSMixinExampleHTML = `
  @import '~@mova/components/_variables.scss';

  // Ya se puede usar cualquier clase, mixin o variable MOVA
  .examples_includes{
    // Theme
    @include icon-size(75px);

    // mv-button
    @include button-color($primary, $accent);

    // mv-button-login
    @include icon-color($primary);

    // mv-button-scroll-to-top
    @include icon-color($primary);

    // mv-checkbox-x
    @include checkbox-color($primary, $accent);

    // mv-footer-tab
    @include border-color($primary);

    // mv-input
    @include input-color($primary)
    
    // mv-radio
    @include radio-color($primary)
    
    // mv-table-responsive
    @include card-format()
    @include card-inline-format()
    @include card-inline-truncate-format()
    
    // mv-tree-filter-item
    @include icon-color($primary)
  }
  `;

  constructor() { }

  ngOnInit() {
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-protection-view',
  templateUrl: './doc-protection-view.html',
  styleUrls: ['./doc-protection-view.scss'],
})
export class DocProtectionView implements OnInit {
  // Uso del componente
  codeUseExampleHTML = `
  <!-- Protección de datos resumen -->
  <mv-card class="card-code"  *ngIf="showResume">
    <mv-card-header>
      <mv-card-title>
        <strong>
          Condiciones de uso y política de privacidad - resumen
        </strong>
      </mv-card-title>
    </mv-card-header>

    <mv-card-content>
      ...
      // seccion resumida
      ...

      <mv-button
        color="primary"
        adapt=true
        appearance="raised"
        (clickEvent)="goTo('complete')">
        Más información sobre protección de datos
      </mv-button>

      <mv-button
        id="backButton"
        color="primary"
        adapt=true
        appearance="raised"
        (clickEvent)="goTo('back')">
        Volver
      </mv-button>

    </mv-card-content>
  </mv-card>

  <!-- Protección de datos completo -->
  <mv-card class="card-code" *ngIf="showComplete">
    <mv-card-header>
      <mv-card-title>
        <strong>
          Condiciones de uso y política de privacidad - completo
        </strong>
      </mv-card-title>
    </mv-card-header>

    <mv-card-content>
      ...
      // seccion completa
      ...

      <mv-button
        id="backButton"
        color="primary"
        adapt=true
        appearance="raised"
        (clickEvent)="goTo('resume')">
        Volver
      </mv-button>

    </mv-card-content>
  </mv-card>
  `;

  constructor(
  ) { }

  ngOnInit() {

  }
}

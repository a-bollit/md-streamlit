import {Component, OnInit} from '@angular/core';
import {MatomoTracker} from 'ngx-matomo';

@Component({
  selector: 'app-doc-piwik',
  templateUrl: './doc-piwik.html',
  styleUrls: ['./doc-piwik.scss'],
})
export class DocPiwik implements OnInit {
  // Uso del componente
  codeUseExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="exampleMatomoExample()">
    Registrar pulsación
  </mv-button>
  `;

  codeUseExampleTS = `
  import { MatomoTracker } from 'ngx-matomo';

  ...

  constructor(
    private _matomoTracker: MatomoTracker
  ) { }

  ngOnInit() {
  }

  exampleMatomoExample(){
    this._matomoTracker.trackEvent(
        'Documentación de estadísticas',
        'Pulsación',
        'Pulsación en el botón',
    );
  }

  ...
  `;

  codeConfigDefaultExampleHTML = `
  {
    "mova": {
      ...
      "piwikId": NuestroIdPiwik,
      ...
    }
  }
  `;

  constructor(
    private readonly _matomoTracker: MatomoTracker,
  ) { }

  ngOnInit() {

  }

  exampleMatomoExample() {
    this._matomoTracker.trackEvent(
        'Documentación de estadísticas',
        'Pulsación',
        'Pulsación en el botón',
    );
  }
}

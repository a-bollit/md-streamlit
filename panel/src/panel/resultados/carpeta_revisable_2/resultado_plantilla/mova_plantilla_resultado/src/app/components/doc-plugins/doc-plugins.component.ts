import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-plugins',
  templateUrl: './doc-plugins.html',
  styleUrls: ['./doc-plugins.scss'],
})
export class DocPlugins implements OnInit {
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
        'Pulsación en el botón'
    );
  }

  ...
  `;


  constructor(
  ) { }

  ngOnInit() {

  }
}

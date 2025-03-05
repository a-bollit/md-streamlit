import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-external-libraries',
  templateUrl: './doc-external-libraries.html',
  styleUrls: ['./doc-external-libraries.scss'],
})
export class DocExternalLibraries implements OnInit {

  // useExample Rxjs
  codeUseExampleRxjsTS = `
  import {Observable, Subscription, Subject, ...} from 'rxjs';

  ...
  `;

  // useExample highlight
  codeUseExampleHighlightTS = `
  import xml from 'highlight.js/lib/languages/xml';
  import scss from 'highlight.js/lib/languages/scss';

  ...
  `;

  // useExample matomo
  codeUseExampleMatomoTS = `
  import {MatomoTracker} from 'ngx-matomo';

  ...
  `;

  // useExample hammer
  codeUseExampleHammerTS = `
  import * as Hammer from 'hammerjs';

  ...
  `;

  // useExample moment
  codeUseExampleMomentTS = `
  import { Moment } from 'moment';

  ...
  `;

  constructor(
  ) { }

  ngOnInit() {

  }

}

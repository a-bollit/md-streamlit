import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-landing-view',
  templateUrl: './doc-landing-view.html',
  styleUrls: ['./doc-landing-view.scss'],
})
export class DocLandingView implements OnInit {
  // Pantalla landing
  codeConfigJSON= `
  {
  	"mova": {
  		...
  		"landingViewRoute": "/landing-view",
  		...
  		"mainViewRoute": "/main-menu",
      ...
    },
    ...
  }
  `;

  constructor() { }

  ngOnInit() {
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-init-view',
  templateUrl: './doc-init-view.html',
  styleUrls: ['./doc-init-view.scss'],
})
export class DocInitView implements OnInit {
  // Pantalla init
  codeEnvironmentInitViewTS= `
  {
    ...
    initView: {
      autoRedirect: true,
      skipVersionRequirementsCheck: false,
    },
    ...
  };
  `;

  // Pantalla init prod
  codeEnvironmentInitViewProdTS= `
  {
    ...
    initView: {
      autoRedirect: true,
      skipVersionRequirementsCheck: false,
    },
    ...
  };
  `;

  // Config
  codeConfigDefaultJSON= `
  {
    "app": {
      ...
      "landingViewRoute": "/landing-view",
      ...
      }
  }
  `;

  constructor() { }

  ngOnInit() {
  }
}

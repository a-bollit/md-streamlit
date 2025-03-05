import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-check-version',
  templateUrl: './doc-check-version.html',
  styleUrls: ['./doc-check-version.scss'],
})
export class DocCheckVersion implements OnInit {
  // environment.ts
  codeEnvironmentTS = `
  export const environment = {
    mova: {
          environment: 'DES',
      ...
          initView: {
              ...
              skipVersionRequirementsCheck: false,
          },
          ...
      },
      ...
  };
  `;

  // environment.val.ts
  codeEnvironmentValTS = `
  export const environment = {
      mova: {
          environment: 'VAL',
      ...
          initView: {
              ...
              skipVersionRequirementsCheck: false,
          },
          ...
      },
      ...
  };
  `;

  // environment.prod.ts
  codeEnvironmentProdTS = `
  export const environment = {
      mova: {
          environment: 'PRO',
      ...
          initView: {
              ...
              skipVersionRequirementsCheck: false,
          },
          ...
      },
      ...
  };
  `;

  constructor(
  ) { }

  ngOnInit() {
  }
}

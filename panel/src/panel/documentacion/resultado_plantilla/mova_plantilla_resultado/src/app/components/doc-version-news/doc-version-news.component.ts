import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-version-news',
  templateUrl: './doc-version-news.html',
  styleUrls: ['./doc-version-news.scss'],
})
export class DocVersionNews implements OnInit {
  // environment.ts
  codeEnvironmentTS = `
  export const environment = {
    mova: {
      environment: 'DES',
      ...
      initView: {
        ...
        showVersionNewsWeb: true,
        showVersionNewsMobile: true
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
        showVersionNewsWeb: true,
        showVersionNewsMobile: true
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
        showVersionNewsWeb: true,
        showVersionNewsMobile: true
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

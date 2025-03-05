import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-viewport-info',
  templateUrl: './doc-viewport-info.html',
  styleUrls: ['./doc-viewport-info.scss'],
})
export class DocViewportInfo implements OnInit {
  // Uso del componente
  codeUseExampleHTML = `
  <mv-viewport-info
    *ngIf="showViewport1">
  </mv-viewport-info>
  `;

  // Uso del componente
  columnCodePositionXHTML = `
  <mv-viewport-info
    positionX="left"
    *ngIf="showViewport2">
  </mv-viewport-info>

  <mv-viewport-info
    positionX="center"
    *ngIf="showViewport3">
  </mv-viewport-info>

  <mv-viewport-info
    positionX="right"
    *ngIf="showViewport4">
  </mv-viewport-info>
  `;

  columnCodePositionYHTML = `
  <mv-viewport-info
    positionY="top"
    *ngIf="showViewport5">
  </mv-viewport-info>

  <mv-viewport-info
    positionY="center"
    *ngIf="showViewport6">
  </mv-viewport-info>

  <mv-viewport-info
    positionY="bottom"
    *ngIf="showViewport7">
  </mv-viewport-info>
  `;

  showViewport1 = true;
  showViewport2 = false;
  showViewport3 = false;
  showViewport4 = false;
  showViewport5 = false;
  showViewport6 = false;
  showViewport7 = false;

  constructor(
  ) { }

  ngOnInit() {

  }

  showComponent(component: number) {
    this.showViewport1 = false;
    this.showViewport2 = false;
    this.showViewport3 = false;
    this.showViewport4 = false;
    this.showViewport5 = false;
    this.showViewport6 = false;
    this.showViewport7 = false;

    this[`showViewport${component}`] = true;
  }
}

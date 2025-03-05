import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-styles-guide-icons',
  templateUrl: './doc-styles-guide-icons.html',
  styleUrls: ['./doc-styles-guide-icons.scss'],
})
export class DocStylesGuideIcons implements OnInit {
  // Ejemplo de uso material
  codeUseMaterialExampleHTML = `
  <div class="list">
    <div class="list-elem">
      <mv-icon>warning</mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon>assignment</mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon>book</mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon>bookmark</mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon>build</mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon>done</mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon>backup</mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon>explore</mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon>fingerprint</mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon>info</mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon>label</mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon>lock_open</mv-icon>
    </div>
  </div>
  `;

  // Ejemplo de uso fontawesome
  codeUseFontawesomeExampleHTML = `
  <div class="list">
    <div class="list-elem">
      <mv-icon fontSet="fa" fontIcon="fa-home"></mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon fontSet="fa" fontIcon="fa-adjust"></mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon fontSet="fa" fontIcon="fa-address-book"></mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon fontSet="fa" fontIcon="fa-angry"></mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon fontSet="fa" fontIcon="fa-book"></mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon fontSet="fa" fontIcon="fa-angle-left"></mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon fontSet="fa" fontIcon="fa-backspace"></mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon fontSet="fa" fontIcon="fa-basketball-ball"></mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon fontSet="fa" fontIcon="fa-bell"></mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon fontSet="fa" fontIcon="fa-check"></mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon fontSet="fa" fontIcon="fa-chart-bar"></mv-icon>
    </div>
    <div class="list-elem">
      <mv-icon fontSet="fa" fontIcon="fa-calendar"></mv-icon>
    </div>
  </div>
  `;

  constructor() { }

  ngOnInit() {
  }
}

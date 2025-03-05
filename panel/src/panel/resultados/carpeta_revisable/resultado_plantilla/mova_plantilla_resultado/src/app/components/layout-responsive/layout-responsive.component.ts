import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout-responsive',
  templateUrl: './layout-responsive.html',
  styleUrls: ['./layout-responsive.scss'],
})
export class LayoutResponsive implements OnInit {
  // Ejemplo de uso
  codeGridExampleCSS = `
  @import '~@src/styles.css';

  // xs
  @media only screen and (max-width: $media-col-xs-max) {
    ...
  }

  // sm
  @media only screen and (min-width : $media-col-sm-min) and (max-width : $media-col-sm-max) {
    ...
  }

  // md
  @media only screen and (min-width : $media-col-md-min) and (max-width : $media-col-md-max) {
    ...
  }

  // lg
  @media only screen and (min-width : $media-col-lg-min) {
    ...
  }
  `;

  constructor() { }

  ngOnInit() {
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-button-scroll-to-top',
  templateUrl: './doc-button-scroll-to-top.html',
  styleUrls: ['./doc-button-scroll-to-top.scss'],
})
export class DocButtonScrollToTop implements OnInit {
  // Ejemplo de uso
  codeUseExampleHTML = `
  <mv-button-scroll-to-top>
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    color="primary">
  </mv-button-scroll-to-top>
  `;

  codeUseExampleTS = `

  ...

  constructor(

  ) {}

  ...
  `;

  // animate
  codeAnimateExampleHTML = `
  <mv-button-scroll-to-top
    animate=true>
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    animate=false>
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top>
  </mv-button-scroll-to-top>
  `;

  codeAnimateExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // appearance
  codeAppearanceExampleHTML = `
  <mv-button-scroll-to-top
    color="primary"
    appearance="icon">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    color="primary"
    appearance="raised">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    color="primary"
    appearance="fab">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    color="primary"
    appearance="miniFab">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    color="primary"
    appearance="stroked">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    color="primary"
    appearance="flat">
  </mv-button-scroll-to-top>
  `;

  codeAppearanceExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // blockEnd
  codeBlockEndExampleHTML = `
  <mv-button-scroll-to-top
    blockEnd=true>
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    blockEnd=false>
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top>
  </mv-button-scroll-to-top>
  `;

  codeBlockEndExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // color
  codeColorExampleHTML = `
  <mv-button-scroll-to-top
    color="primary">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    color="accent">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    color="warn">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    color="corporative">
  </mv-button-scroll-to-top>
  `;

  codeColorExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // disabled
  codeDisabledExampleHTML = `
  <mv-button-scroll-to-top
    disabled=true>
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    disabled=false>
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top>
  </mv-button-scroll-to-top>
  `;

  codeDisabledExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // fontSet
  codefontSetExampleHTML = `
  <mv-button-scroll-to-top
    fontSet="far"
    icon="fa-address-book">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    fontSet="fas"
    icon="fa-address-book">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    icon="build">
  </mv-button-scroll-to-top>
  `;

  codefontSetExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // icon
  codeIconExampleHTML = `
  <mv-button-scroll-to-top
    fontSet="fas"
    icon="fa-car">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    fontSet="fas"
    icon="fa-chart-pie">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    icon="done">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    icon="fingerprint">
  </mv-button-scroll-to-top>
  `;

  codeIconExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // imgSrc
  codeImgSrcExampleHTML = `
  <mv-button-scroll-to-top
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>
  `;

  codeImgSrcExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // imgSize
  codeImgSizeExampleHTML = `
  <mv-button-scroll-to-top
    imgSize="auto"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgSize="cover"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgSize="contain"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgSize="initial"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgSize="inherit"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgSize="50%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgSize="10% 20%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgSize="50px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgSize="10px 20px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>
  `;

  codeImgSizeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // imgPosition
  codeImgPositionExampleHTML = `
  <mv-button-scroll-to-top
    imgPosition="top"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgPosition="right"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgPosition="bottom"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgPosition="left"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgPosition="10% 75%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgPosition="10px 25px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgPosition="inital"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgPosition="inherit"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>
  `;

  codeImgPositionExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // imgRepeat
  codeImgRepeatExampleHTML = `
  <mv-button-scroll-to-top
    imgSize="20px 20px"
    imgRepeat="repeat"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgSize="20px 20px"
    imgRepeat="repeat-x"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgSize="20px 20px"
    imgRepeat="repeat-y"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgSize="20px 20px"
    imgRepeat="no-repeat"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgSize="20px 20px"
    imgRepeat="space"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgSize="20px 20px"
    imgRepeat="round"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgSize="20px 20px"
    imgRepeat="initial"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    imgSize="20px 20px"
    imgRepeat="inherit"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-scroll-to-top>
  `;

  codeImgRepeatExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // scrollBottom
  codeScrollBottomExampleHTML = `
  <mv-button-scroll-to-top
    scrollBottom=true>
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    scrollBottom=false>
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top>
  </mv-button-scroll-to-top>
  `;

  codeScrollBottomExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // size
  codeSizeExampleHTML = `
  <mv-button-scroll-to-top
    size="small">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    size="medium">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top
    size="big">
  </mv-button-scroll-to-top>

  <mv-button-scroll-to-top>
  </mv-button-scroll-to-top>
  `;

  codeSizeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  activateExample1 = true;
  activateExample2 = false;
  activateExample3 = false;
  activateExample4 = false;
  activateExample5 = false;
  activateExample6 = false;
  activateExample7 = false;
  activateExample8 = false;
  activateExample9 = false;
  activateExample10 = false;
  activateExample11 = false;
  activateExample12 = false;
  activateExample13 = false;
  activateExample14 = false;
  activateExample15 = false;
  activateExample16 = false;
  activateExample17 = false;
  activateExample18 = false;
  activateExample19 = false;
  activateExample20 = false;
  activateExample21 = false;
  activateExample22 = false;
  activateExample23 = false;
  activateExample24 = false;
  activateExample25 = false;
  activateExample26 = false;
  activateExample27 = false;
  activateExample28 = false;
  activateExample29 = false;
  activateExample30 = false;
  activateExample31 = false;
  activateExample32 = false;
  activateExample33 = false;
  activateExample34 = false;
  activateExample35 = false;
  activateExample36 = false;
  activateExample37 = false;
  activateExample38 = false;
  activateExample39 = false;
  activateExample40 = false;
  activateExample41 = false;
  activateExample42 = false;
  activateExample43 = false;
  activateExample44 = false;
  activateExample45 = false;
  activateExample46 = false;
  activateExample47 = false;
  activateExample48 = false;
  activateExample49 = false;
  activateExample50 = false;
  activateExample51 = false;
  activateExample52 = false;
  activateExample53 = false;
  activateExample54 = false;
  activateExample55 = false;
  activateExample56 = false;
  activateExample57 = false;
  activateExample58 = false;
  activateExample59 = false;
  activateExample60 = false;
  activateExample61 = false;

  constructor() { }

  ngOnInit() {
  }

  /*
  Poner a true la variable que venga en elem y ocultar las demás
  */
  activate(elem: number) {
    let index = 1;
    const _var = 'activateExample';
    while (this[(_var + index)] !== undefined) {
      if (index === elem) {
        this[(_var + index)] = true;
      } else {
        this[(_var + index)] = false;
      }
      index++;
    }
  }
}

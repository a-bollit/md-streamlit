import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-button',
  templateUrl: './doc-button.html',
  styleUrls: ['./doc-button.scss'],
})
export class DocButton implements OnInit {
  // Ejemplo de uso
  codeUseExampleHTML = `
  <mv-button>
    Botón básico
  </mv-button>

  <mv-button
    appearance="raised"
    color="primary">
    Acción
  </mv-button>

  <mv-button
    size="small"
    appearance="fab">
    Fab
  </mv-button>
  `;

  codeUseExampleTS = `

  ...

  constructor(

  ) {}

  ...
  `;

  // adapt
  codeAdaptExampleHTML = `
  <mv-button
    appearance="raised"
    adapt=true>
    Con adapt
  </mv-button>

  <mv-button
    appearance="raised"
    adapt=false>
    Sin adapt
  </mv-button>

  <mv-button
    appearance="raised">
    Sin adapt
  </mv-button>
  `;

  codeAdaptExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // appearance
  codeAppearanceExampleHTML = `
  <mv-button
    color="primary"
    appearance="icon">
    icon
  </mv-button>

  <mv-button
    color="primary"
    appearance="raised">
    raised
  </mv-button>

  <mv-button
    color="primary"
    appearance="fab">
    fab
  </mv-button>

  <mv-button
    color="primary"
    appearance="miniFab">
    miniFab
  </mv-button>

  <mv-button
    color="primary"
    appearance="stroked">
    stroked
  </mv-button>

  <mv-button
    color="primary"
    appearance="flat">
    flat
  </mv-button>
  `;

  codeAppearanceExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // color
  codeColorExampleHTML = `
  <mv-button
    color="primary">
    primary
  </mv-button>

  <mv-button
    color="accent">
    accent
  </mv-button>

  <mv-button
    color="warn">
    warn
  </mv-button>

  <mv-button
    color="corporative">
    corporative
  </mv-button>

  <mv-button
    color="secondary-001">
    secondary-001
  </mv-button>
  `;

  codeColorExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // disabled
  codeDisabledExampleHTML = `
  <mv-button
    appearance="raised"
    disabled=true>
    Con disabled
  </mv-button>

  <mv-button
    appearance="raised"
    disabled=false>
    Sin disabled
  </mv-button>

  <mv-button
    appearance="raised">
    Sin disabled
  </mv-button>
  `;

  codeDisabledExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // link
  codeLinkExampleHTML = `
  <mv-button
    appearance="raised"
    link="/maquetacion">
    Link
  </mv-button>
  `;

  codeLinkExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // imgSrc
  codeImgSrcExampleHTML = `
  <mv-button
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    Mis vacaciones
  </mv-button>

  <mv-button
    appearance="fab"
    imgSrc="/assets/examples/portal-001.png">
  </mv-button>
  `;

  codeImgSrcExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // imgSize
  codeImgSizeExampleHTML = `
  <mv-button
    imgSize="auto"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    auto
  </mv-button>

  <mv-button
    imgSize="cover"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    cover
  </mv-button>

  <mv-button
    imgSize="contain"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    contain
  </mv-button>

  <mv-button
    imgSize="initial"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    initial
  </mv-button>

  <mv-button
    imgSize="inherit"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    inherit
  </mv-button>

  <mv-button
    imgSize="20%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    20%
  </mv-button>

  <mv-button
    imgSize="50%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    50%
  </mv-button>

  <mv-button
    imgSize="90%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    90%
  </mv-button>

  <mv-button
    imgSize="20% 10%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    20% 10%
  </mv-button>

  <mv-button
    imgSize="70% 10%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    70% 10%
  </mv-button>

  <mv-button
    imgSize="10% 20%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    10% 20%
  </mv-button>

  <mv-button
    imgSize="10% 70%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    10% 70%
  </mv-button>

  <mv-button
    imgSize="20px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    20px
  </mv-button>

  <mv-button
    imgSize="50px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    50px
  </mv-button>

  <mv-button
    imgSize="90px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    90px
  </mv-button>

  <mv-button
    imgSize="20px 10px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    20px 10px
  </mv-button>

  <mv-button
    imgSize="70px 10px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    70px 10px
  </mv-button>

  <mv-button
    imgSize="10px 20px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    10px 20px
  </mv-button>

  <mv-button
    imgSize="10px 70px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    10px 70px
  </mv-button>
  `;

  codeImgSizeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // imgPosition
  codeImgPositionExampleHTML = `
  <mv-button
    imgPosition="left top"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    left top
  </mv-button>

  <mv-button
    imgPosition="left center"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    left center
  </mv-button>

  <mv-button
    imgPosition="left bottom"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    left bottom
  </mv-button>

  <mv-button
    imgPosition="right top"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    right top
  </mv-button>

  <mv-button
    imgPosition="right center"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    right center
  </mv-button>

  <mv-button
    imgPosition="right bottom"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    right bottom
  </mv-button>

  <mv-button
    imgPosition="left top"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    left top
  </mv-button>

  <mv-button
    imgPosition="left center"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    left center
  </mv-button>

  <mv-button
    imgPosition="left bottom"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    left bottom
  </mv-button>
  `;

  codeImgPositionExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // imgRepeat
  codeImgRepeatExampleHTML = `
  <mv-button
    imgSize="20px 20px"
    imgRepeat="repeat"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    repeat
  </mv-button>

  <mv-button
    imgSize="20px 20px"
    imgRepeat="repeat-x"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    repeat-x
  </mv-button>

  <mv-button
    imgSize="20px 20px"
    imgRepeat="repeat-y"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    repeat-y
  </mv-button>

  <mv-button
    imgSize="20px 20px"
    imgRepeat="no-repeat"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    no repeat
  </mv-button>

  <mv-button
    imgSize="20px 20px"
    imgRepeat="space"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    space
  </mv-button>

  <mv-button
    imgSize="20px 20px"
    imgRepeat="round"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    round
  </mv-button>

  <mv-button
    imgSize="20px 20px"
    imgRepeat="initial"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    initial
  </mv-button>

  <mv-button
    imgSize="20px 20px"
    imgRepeat="inherit"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
    inherit
  </mv-button>
  `;

  codeImgRepeatExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // size
  codeSizeExampleHTML = `
  <mv-button
    color="primary">
    Por defecto
  </mv-button>

  <mv-button
    color="primary"
    size="small">
    Small
  </mv-button>

  <mv-button
    color="primary"
    size="medium">
    Medium
  </mv-button>

  <mv-button
    color="primary"
    size="big">
    Big
  </mv-button>
  `;

  codeSizeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // appearance
  codeappearanceExampleHTML = `
  <mv-button
    appearance="icon">
    appearance icon
  </mv-button>

  <mv-button
    appearance="raised">
    appearance raised
  </mv-button>

  <mv-button
    appearance="fab">
    appearance fab
  </mv-button>

  <mv-button
    appearance="miniFab">
    appearance miniFab
  </mv-button>

  <mv-button
    appearance="stroked">
    appearance stroked
  </mv-button>

  <mv-button
    appearance="flat">
    appearance flat
  </mv-button>
  `;

  codeappearanceExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // click
  codeClickHTML = `
  <mv-button
    appearance="raised"
    color="primary"
    (clickEvent)="clickFunction()">
    Función click
  </mv-button>
  `;

  codeClickTS = `
  ...

  clickFunction(){
    alert('Evento click lanzado');
  }

  ...
  `;



  //ariaLabel
  ariaLabelHtml = `
  <mv-button
    arialLabel="Tu texto personalizado">
  </mv-button>
  `;

  ariaLabelTS = `

  // Nada que añadir respecto al ejemplo principal

  `;


  constructor() { }

  ngOnInit() {
  }

  clickFunction() {
    alert('Evento click lanzado');
  }
}

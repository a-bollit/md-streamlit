import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-button-login',
  templateUrl: './doc-button-login.html',
  styleUrls: ['./doc-button-login.scss'],
})
export class DocButtonLogin implements OnInit {
  // Ejemplo de uso
  codeUseExampleHTML = `
  <mv-button-login>
  </mv-button-login>

  <mv-button-login
    color="primary"
    appearance="fab">
  </mv-button-login>
  `;

  codeUseExampleTS = `

  ...

  constructor(

  ) {}

  ...
  `;

  // adapt
  codeAdaptExampleHTML = `
  <mv-button-login
    color="primary"
    appearance="raised"
    adapt=true>
  </mv-button-login>

  <mv-button-login
    color="primary"
    appearance="raised"
    adapt=false>
  </mv-button-login>

  <mv-button-login
    appearance="raised"
    color="primary">
  </mv-button-login>
  `;

  codeAdaptExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // appearance
  codeAppearanceExampleHTML = `
  <mv-button-login
    color="primary"
    appearance="icon">
  </mv-button-login>

  <mv-button-login
    color="primary"
    appearance="raised">
  </mv-button-login>

  <mv-button-login
    color="primary"
    appearance="fab">
  </mv-button-login>

  <mv-button-login
    color="primary"
    appearance="miniFab">
  </mv-button-login>

  <mv-button-login
    color="primary"
    appearance="stroked">
  </mv-button-login>

  <mv-button-login
    color="primary"
    appearance="flat">
  </mv-button-login>
  `;

  codeAppearanceExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // color
  codeColorExampleHTML = `
  <mv-button-login
    color="primary">
  </mv-button-login>

  <mv-button-login
    color="accent">
  </mv-button-login>

  <mv-button-login
    color="warn">
  </mv-button-login>

  <mv-button-login
    color="corporative">
  </mv-button-login>
  `;

  codeColorExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // colorLogout
  codeColorLogoutExampleHTML = `
  <mv-button-login
    colorLogout="primary">
  </mv-button-login>

  <mv-button-login
    colorLogout="accent">
  </mv-button-login>

  <mv-button-login
    colorLogout="warn">
  </mv-button-login>

  <mv-button-login
    colorLogout="corporative">
  </mv-button-login>
  `;

  codeColorLogoutExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // disabled
  codeDisabledExampleHTML = `
  <mv-button-login
    color="primary"
    disabled=true>
  </mv-button-login>

  <mv-button-login
    color="primary"
    disabled=false>
  </mv-button-login>

  <mv-button-login
    color="primary">
  </mv-button-login>
  `;

  codeDisabledExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // imgSrc
  codeImgSrcExampleHTML = `
  <mv-button-login
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    appearance="fab"
    imgSrc="/assets/examples/portal-001.png">
  </mv-button-login>
  `;

  codeImgSrcExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // imgSize
  codeImgSizeExampleHTML = `
  <mv-button-login
    imgSize="auto"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="cover"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="contain"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="initial"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="inherit"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="20%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="50%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="90%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="20% 10%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="70% 10%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="10% 20%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="10% 70%"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="20px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="50px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="90px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="20px 10px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="70px 10px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="10px 20px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="10px 70px"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>
  `;

  codeImgSizeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // imgPosition
  codeImgPositionExampleHTML = `
  <mv-button-login
    imgPosition="left top"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgPosition="left center"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgPosition="left bottom"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgPosition="right top"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgPosition="right center"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgPosition="right bottom"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgPosition="left top"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgPosition="left center"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgPosition="left bottom"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>
  `;

  codeImgPositionExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // imgRepeat
  codeImgRepeatExampleHTML = `
  <mv-button-login
    imgSize="20px 20px"
    imgRepeat="repeat"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="20px 20px"
    imgRepeat="repeat-x"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="20px 20px"
    imgRepeat="repeat-y"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="20px 20px"
    imgRepeat="no-repeat"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="20px 20px"
    imgRepeat="space"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="20px 20px"
    imgRepeat="round"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="20px 20px"
    imgRepeat="initial"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>

  <mv-button-login
    imgSize="20px 20px"
    imgRepeat="inherit"
    imgSrc="/assets/examples/ejemplo_imagen2.jpg">
  </mv-button-login>
  `;

  codeImgRepeatExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // link
  codeLinkExampleHTML = `
  <mv-button-login
    appearance="raised"
    link="/maquetacion">
  </mv-button-login>
  `;

  codeLinkExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // loginText
  codeLoginTextExampleHTML = `
  <mv-button-login
    class="buttonMargin"
    loginText="Login">
  </mv-button-login>

  <mv-button-login
    class="buttonMargin"
    loginText="Inicie sesión">
  </mv-button-login>
  `;

  codeLoginTextExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // logoutText
  codeLogoutTextExampleHTML = `
  <mv-button-login
    class="buttonMargin"
    logoutText="Logout">
  </mv-button-login>

  <mv-button-login
    class="buttonMargin"
    logoutText="Salir">
  </mv-button-login>
  `;

  codeLogoutTextExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // loginFontSet
  codeLoginFontSetExampleHTML = `
  <mv-button-login
    loginFontSet="far"
    loginIcon="fa-address-book"
    showIcon=true>
  </mv-button-login>

  <mv-button-login
    loginFontSet="fas"
    loginIcon="fa-address-book"
    showIcon=true>
  </mv-button-login>

  <mv-button-login
    loginIcon="build"
    showIcon=true>
  </mv-button-login>
  `;

  codeLoginFontSetExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // loginIcon
  codeLoginIconExampleHTML = `
  <mv-button-login
    loginFontSet="fas"
    loginIcon="fa-car"
    showIcon=true>
  </mv-button-login>

  <mv-button-login
    loginFontSet="fas"
    loginIcon="fa-chart-pie"
    showIcon=true>
  </mv-button-login>

  <mv-button-login
    loginIcon="done"
    showIcon=true>
  </mv-button-login>

  <mv-button-login
    loginIcon="fingerprint"
    showIcon=true>
  </mv-button-login>
  `;

  codeLoginIconExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // logoutFontSet
  codeLogoutFontSetExampleHTML = `
  <mv-button-login
    logoutFontSet="far"
    logoutIcon="fa-address-book"
    showIcon=true>
  </mv-button-login>

  <mv-button-login
    logoutFontSet="fas"
    logoutIcon="fa-address-book"
    showIcon=true>
  </mv-button-login>

  <mv-button-login
    logoutIcon="build"
    showIcon=true>
  </mv-button-login>
  `;

  codeLogoutFontSetExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // logoutIcon
  codeLogoutIconExampleHTML = `
  <mv-button-login
    logoutFontSet="fas"
    logoutIcon="fa-car"
    showIcon=true>
  </mv-button-login>

  <mv-button-login
    logoutFontSet="fas"
    logoutIcon="fa-chart-pie"
    showIcon=true>
  </mv-button-login>

  <mv-button-login
    logoutIcon="done"
    showIcon=true>
  </mv-button-login>

  <mv-button-login
    logoutIcon="fingerprint"
    showIcon=true>
  </mv-button-login>
  `;

  codeLogoutIconExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // showIcon
  codeShowIconExampleHTML = `
  <mv-button-login
    color="primary"
    appearance="raised"
    showIcon=true>
  </mv-button-login>

  <mv-button-login
    color="primary"
    loginIcon="fingerprint"
    appearance="raised"
    showIcon=true>
  </mv-button-login>

  <mv-button-login
    color="primary"
    appearance="raised"
    showIcon=false>
  </mv-button-login>

  <mv-button-login
    color="primary"
    appearance="raised">
  </mv-button-login>
  `;

  codeShowIconExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // size
  codeSizeExampleHTML = `
  <mv-button-login
    color="primary">
  </mv-button-login>

  <mv-button-login
    color="primary"
    size="small">
  </mv-button-login>

  <mv-button-login
    color="primary"
    size="medium">
  </mv-button-login>

  <mv-button-login
    color="primary"
    size="big">
  </mv-button-login>
  `;

  codeSizeExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  constructor() { }

  ngOnInit() {
  }
}

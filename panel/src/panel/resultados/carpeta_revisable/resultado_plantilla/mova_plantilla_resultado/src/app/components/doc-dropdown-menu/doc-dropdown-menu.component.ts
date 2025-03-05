import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-doc-dropdown-menu',
  templateUrl: './doc-dropdown-menu.html',
  styleUrls: ['./doc-dropdown-menu.scss'],
})
export class DocDropdownMenu implements OnInit {
  @ViewChild('menuTriggerOpen', {static: false})
    public menuTriggerOpen: MatMenuTrigger;
  @ViewChild('menuTriggerClose', {static: false})
    public menuTriggerClose: MatMenuTrigger;

  // useExample
  codeUseExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    [matMenuTriggerFor]="menu">
    Lanzar menú
  </mv-button>

  <mv-menu #menu="mvMenu">
    <button mv-menu-item>Item 1</button>
    <button mv-menu-item>Item 2</button>
  </mv-menu>
  `;

  codeUseExampleTS = `

  // Nada que añadir

  `;

  // completeExample
  codeCompleteExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    [mvMenuTriggerFor]="menuComplex">
    Lanzar menú
  </mv-button>

  <mv-menu #menuComplex="mvMenu">
    <button mv-menu-item [mvMenuTriggerFor]="vertebrados">
      <mv-icon>pets</mv-icon>
      <span>Vertebrados</span>
    </button>
    <button mv-menu-item [mvMenuTriggerFor]="invertebrados">
      <mv-icon>bug_reports</mv-icon>
      <span>Invertebrados</span>
    </button>
  </mv-menu>

  <mv-menu #vertebrados="mvMenu">
    <button mv-menu-item [mvMenuTriggerFor]="peces">Peces</button>
    <button mv-menu-item>Anfibios</button>
    <button mv-menu-item>Reptiles</button>
    <button mv-menu-item>Pájaros</button>
    <button mv-menu-item>Mamíferos</button>
  </mv-menu>

  <mv-menu #peces="mvMenu">
    <button mv-menu-item>Salmón</button>
    <button mv-menu-item>Trucha</button>
    <button mv-menu-item>Sardina</button>
    <button mv-menu-item>Bacalao</button>
  </mv-menu>

  <mv-menu #invertebrados="mvMenu">
    <button mv-menu-item>Insectos</button>
    <button mv-menu-item>Moluscos</button>
    <button mv-menu-item>Crustáceos</button>
    <button mv-menu-item>Corales</button>
    <button mv-menu-item>Arácnidos</button>
  </mv-menu>
  `;

  codeCompleteExampleTS = `

  // Nada que añadir

  `;

  // xPosition
  codeXPositionExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    [mvMenuTriggerFor]="beforeMenu">
    Lanzar menú (before)
  </mv-button>
  <mv-menu #beforeMenu="mvMenu" xPosition="before">
    <button mv-menu-item>Item 1</button>
    <button mv-menu-item>Item 2</button>
  </mv-menu>

  <mv-button
    color="primary"
    appearance="raised"
    [mvMenuTriggerFor]="beforeMenu">
    Lanzar menú (after)
  </mv-button>
  <mv-menu #afterMenu="mvMenu" xPosition="after">
    <button mv-menu-item>Item 1</button>
    <button mv-menu-item>Item 2</button>
  </mv-menu>
  `;

  codeXPositionExampleTS = `

  // Nada que añadir

  `;

  // yPosition
  codeYPositionExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    [mvMenuTriggerFor]="beforeMenu">
    Lanzar menú (above)
  </mv-button>
  <mv-menu #beforeMenu="mvMenu" yPosition="above">
    <button mv-menu-item>Item 1</button>
    <button mv-menu-item>Item 2</button>
  </mv-menu>

  <mv-button
    color="primary"
    appearance="raised"
    [mvMenuTriggerFor]="beforeMenu">
    Lanzar menú (below)
  </mv-button>
  <mv-menu #afterMenu="mvMenu" yPosition="below">
    <button mv-menu-item>Item 1</button>
    <button mv-menu-item>Item 2</button>
  </mv-menu>
  `;

  codeYPositionExampleTS = `

  // Nada que añadir

  `;

  // openMenu
  codeOpenMenuExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="openMenuFunctionExample()">
    Abrir menú
  </mv-button>

  <div 
    #menuTriggerOpen="mvMenuTrigger"
    [mvMenuTriggerFor]="openMenuExample">
  </div>
  <mv-menu #openMenuExample="mvMenu">
    <button mv-menu-item>Item 1</button>
    <button mv-menu-item>Item 2</button>
  </mv-menu>
  `;

  codeOpenMenuExampleTS = `
  import { MatMenuTrigger } from '@angular/material/menu';

  ...

  @ViewChild('menuTriggerOpen', {static:false})
  public menuTriggerOpen: MatMenuTrigger;

  ...

  openMenuFunctionExample(){
    this.menuTriggerOpen.openMenu();
  }

  ...
  `;

  // closeMenu
  codeCloseMenuExampleHTML = `
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="closeMenuFunctionExample()">
    Abrir menú
  </mv-button>

  <div
    #menuTriggerClose="mvMenuTrigger"
    [mvMenuTriggerFor]="closeMenuExample">
  </div>
  <mv-menu #closeMenuExample="mvMenu">
    <button mv-menu-item>Item 1</button>
    <button mv-menu-item>Item 2</button>
  </mv-menu>
  `;

  codeCloseMenuExampleTS = `
  import { MatMenuTrigger } from '@angular/material/menu';

  ...

  @ViewChild('menuTriggerClose', {static:false})
  public menuTriggerClose: MatMenuTrigger;

  ...

  closeMenuFunctionExample(){
    this.menuTriggerClose.closeMenu();
  }

  ...
  `;

  constructor() { }

  ngOnInit() {

  }

  openMenuFunctionExample() {
    this.menuTriggerOpen.openMenu();
  }

  closeMenuFunctionExampleOpen() {
    this.menuTriggerClose.openMenu();
  }

  closeMenuFunctionExample() {
    this.menuTriggerClose.closeMenu();
  }
}

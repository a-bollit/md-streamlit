import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-footer-tab',
  templateUrl: './doc-footer-tab.html',
  styleUrls: ['./doc-footer-tab.scss'],
})
export class DocFooterTab implements OnInit {
  arrayTabItems: any[] = [
    {
      'icon': 'people',
      'title': 'Contactos',
    },
    {
      'icon': 'person_add',
      'title': 'Añadir',
    },
    {
      'icon': 'share',
      'title': 'Compartir',
    },
  ];

  arrayTabItems2: any[] = [
    {
      'icon': 'list',
      'title': 'Listado',
    },
    {
      'icon': 'perm_identity',
      'title': 'Detalle',
    },
    {
      'icon': 'edit',
      'title': 'Modificar',
    },
    {
      'icon': 'info',
      'title': 'Contacto',
    },
  ];

  arrayTabItems3: any[] = [
    {
      'icon': 'local_pizza',
      'title': 'Restaurantes',
    },
    {
      'icon': 'local_airport',
      'title': 'Aeropuerto',
    },
    {
      'icon': 'account_balance',
      'title': 'Museos',
    },
  ];

  arrayTabItems4: any[] = [
    {
      'icon': 'thumb_up',
      'title': 'Me gusta',
    },
    {
      'icon': 'accessibility',
      'title': 'Accesibilidad',
    },
    {
      'icon': 'dns',
      'title': 'Datos',
    },
    {
      'icon': 'fa-euro-sign',
      'fontSet': 'fas',
      'title': 'Finanzas',
    },
    {
      'icon': 'fa-info',
      'fontSet': 'fas',
      'title': 'Ayuda',
    },
  ];

  // useExample
  codeUseExampleHTML = `
  <mv-footer-tab
    [tabItems]="arrayTabItems">

    <div content1>
      Contenido1
    </div>
    <div content2>
      Contenido2
    </div>
    <div content3>
      Contenido3
    </div>
  </mv-footer-tab>
  `;

  codeUseExampleTS = `
  ...

  arrayTabItems: any[] = [
    {
      "icon": "people",
      "title": "Contactos",
    },
    {
      "icon": "person_add",
      "title": "Añadir",
    },
    {
      "icon": "share",
      "title": "Compartir",
    }
  ];

  arrayTabItems2: any[] = [
    {
      "icon": "list",
      "title": "Listado",
    },
    {
      "icon": "perm_identity",
      "title": "Detalle",
    },
    {
      "icon": "edit",
      "title": "Modificar",
    },
    {
      "icon": "contact_support",
      "title": "Contacto",
    }
  ];

  arrayTabItems3: any[] = [
    {
      "icon": "thumb_up",
      "title": "Básico",
    },
    {
      "icon": "thumb_up",
      "title": "Intermedio",
    },
    {
      "icon": "thumb_up",
      "title": "Avanzado",
    }
  ];

  arrayTabItems4: any[] = [
    {
      "icon": "thumb_up",
      "title": "Me gusta",
    },
    {
      "icon": "accessibility",
      "title": "Accesibilidad",
    },
    {
      "icon": "dns",
      "title": "Datos",
    },
    {
      "icon": "fa-euro-sign",
      "fontSet": "fas",
      "title": "Finanzas",
    },
    {
      "icon": "fa-info",
      "fontSet": "fas",
      "title": "Ayuda",
    }
  ];

  constructor(
  ) {}

  ngOnInit(): void {
  }

  ...

  `;

  // barColor
  codeBarColorExampleHTML = `
  <mv-footer-tab
    barColor="corporative"
    [tabItems]="arrayTabItems2">

    <div content1>
      Contenido1
    </div>
    <div content2>
      Contenido2
    </div>
    <div content3>
      Contenido3
    </div>
  </mv-footer-tab>

  <mv-footer-tab
    barColor="accent"
    [tabItems]="arrayTabItems2">

    <div content1>
      Contenido1
    </div>
    <div content2>
      Contenido2
    </div>
    <div content3>
      Contenido3
    </div>
  </mv-footer-tab>

  <mv-footer-tab
    barColor="secondary-white"
    [tabItems]="arrayTabItems2">

    <div content1>
      Contenido1
    </div>
    <div content2>
      Contenido2
    </div>
    <div content3>
      Contenido3
    </div>
  </mv-footer-tab>
  `;

  codeBarColorExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // color
  codeColorExampleHTML = `
  <mv-footer-tab
    color="corporative"
    [tabItems]="arrayTabItems2">

    <div content1>
      Contenido1
    </div>
    <div content2>
      Contenido2
    </div>
    <div content3>
      Contenido3
    </div>
  </mv-footer-tab>

  <mv-footer-tab
    color="accent"
    [tabItems]="arrayTabItems2">

    <div content1>
      Contenido1
    </div>
    <div content2>
      Contenido2
    </div>
    <div content3>
      Contenido3
    </div>
  </mv-footer-tab>

  <mv-footer-tab
    color="secondary-white"
    [tabItems]="arrayTabItems2">

    <div content1>
      Contenido1
    </div>
    <div content2>
      Contenido2
    </div>
    <div content3>
      Contenido3
    </div>
  </mv-footer-tab>
  `;

  codeColorExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // fixed
  codeFixedExampleHTML = `
  <mv-footer-tab
    color="primary"
    fixed="true"
    [tabItems]="arrayTabItems">

    <div content1>
      Contenido1
    </div>
    <div content2>
      Contenido2
    </div>
    <div content3>
      Contenido3
    </div>
  </mv-footer-tab>

  <mv-footer-tab
    color="primary"
    fixed="false"
    [tabItems]="arrayTabItems">

    <div content1>
      Contenido1
    </div>
    <div content2>
      Contenido2
    </div>
    <div content3>
      Contenido3
    </div>
  </mv-footer-tab>
  `;

  codeFixedExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // showMenu
  codeShowMenuExampleHTML = `
  <mv-footer-tab
    color="corporative"
    [tabItems]="arrayTabItems"
    showMenu="true">

    <div content1>
      Contenido1
    </div>
    <div content2>
      Contenido2
    </div>
    <div content3>
      Contenido3
    </div>
    <div menu>
      <button mat-menu-item>Opción 1</button>
      <button mat-menu-item>Opción 2</button>
      <button mat-menu-item>Opción 3</button>
    </div>
  </mv-footer-tab>
  `;

  codeShowMenuExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // tabItems
  codeTabsItemExampleHTML = `
  <mv-footer-tab
    color="corporative"
    [tabItems]="arrayTabItems2">

    <div content1>
      Contenido1
    </div>
    <div content2>
      Contenido2
    </div>
    <div content3>
      Contenido3
    </div>
    <div content4>
      Contenido3
    </div>
    <div content5>
      Contenido3
    </div>
  </mv-footer-tab>
  `;

  codeTabsItemExampleTS = `
  ...

  arrayTabItems2: any[] = [
    {
      "icon": "thumb_up",
      "title": "Me gusta",
    },
    {
      "icon": "accessibility",
      "title": "Accesibilidad",
    },
    {
      "icon": "dns",
      "title": "Datos",
    },
    {
      "icon": "euro-sign",
      "fontSet": "fa",
      "title": "Finanzas",
    },
    {
      "icon": "info",
      "fontSet": "fa",
      "title": "Ayuda",
    }
  ];

  ...
  `;

  codeSelectedItemExampleHTML = `
  <p><strong>Con selectedItem seleccionado inicialmente a 2:</strong></p>

  <mv-footer-tab
    color="primary"
    [(selectedItem)]="selectedItemExample"
    [tabItems]="arrayTabItems3">

    <div content1>
      Contenido1
    </div>
    <div content2>
      Contenido2
    </div>
    <div content3>
      Contenido3
    </div>
  </mv-footer-tab>

  <div class="buttons">
    <mv-button
      (clickEvent)="selectItem(0)"
      appearance="raised"
      color="primary">
      Seleccionar vista 0
    </mv-button>

    <mv-button
      (clickEvent)="selectItem(1)"
      appearance="raised"
      color="primary">
      Seleccionar vista 1
    </mv-button>

    <mv-button
      (clickEvent)="selectItem(2)"
      appearance="raised"
      color="primary">
      Seleccionar vista 2
    </mv-button>
  </div>

  <div>
    <strong>Valor de la variable selectedItem: {{ selectedItemExample }}</strong>
  </div>
  `;

  codeSelectedItemExampleTS = `
  ...

  selectedItemExample: number = 2;

  ...
  
  selectItem(item: number){
    this.selectedItemExample = item;
  }

  ...
  `;

  selectedItemExample: number = 2;
  showFixed = false;

  constructor(
  ) { }

  ngOnInit() {
  }

  selectItem(item: number){
    this.selectedItemExample = item;
  }
}

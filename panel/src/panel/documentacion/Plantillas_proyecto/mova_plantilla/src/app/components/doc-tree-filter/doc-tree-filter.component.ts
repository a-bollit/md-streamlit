import {Component, OnInit, ViewChild} from '@angular/core';
import {
  MvTreeFilter,
  MvTreeFilterExpandItem,
} from '@mova/components/tree-filter';
import docTreeFilterExample from './doc-tree-filter-example.json';
import {JsonExampleService} from './json-example.service';

@Component({
  selector: 'app-doc-tree-filter',
  templateUrl: './doc-tree-filter.html',
  styleUrls: ['./doc-tree-filter.scss'],
})
export class DocTreeFilter implements OnInit {
  @ViewChild('mvTreeFilterHideItems', {static: false})
    mvTreeFilterHideItems: MvTreeFilter;
  @ViewChild('mvTreeFilterShowItems', {static: false})
    mvTreeFilterShowItems: MvTreeFilter;
  @ViewChild('mvTreeFilterCssItems', {static: false})
    mvTreeFilterCssItems: MvTreeFilter;
  @ViewChild('mvTreeFilterRefresh', {static: false})
    mvTreeFilterRefresh: MvTreeFilter;

  private readonly exampleUri = 'https://es.wikipedia.org/wiki/Espa%C3%B1a';

  // Array con la información del mv-tree-filter
  exampleCountries: Array <MvTreeFilterExpandItem> = [
    {
      'title': 'Estados Unidos',
      'subtitle': '325 mill. habitantes',
      'css': '',
      'children': [
        {
          'title': 'California',
          'subtitle': '39,54 mill. habitantes',
          'css': '',
          'link': {
            'type': 'url',
            'uri': 'https://es.wikipedia.org/wiki/Estados_Unidos',
          },
        },
        {
          'title': 'Florida',
          'subtitle': '20,98 mill. habitantes',
          'link': {
            'type': 'url',
            'uri': 'https://es.wikipedia.org/wiki/Estados_Unidos',
          },
        },
        {
          'title': 'Colorado',
          'subtitle': 'Ejemplo de enlace a un estado de la app',
          'link': {
            'type': 'state',
            'uri': 'maquetacion-grid',
          },
        },
        {
          'title': 'Texas',
          'subtitle':
            'Ejemplo de enlace a un estado de la app pasando parámetros',
          'link': {
            'type': 'state',
            'uri': 'maquetacion-grid',
          },
        },
      ],
    },
    {
      'title': 'París',
      'subtitle': '12,2 mill. habitantes',
      'link': {
        'type': 'url',
        'uri': 'https://es.wikipedia.org/wiki/Par%C3%ADs',
      },
    },
    {
      'title': 'España',
      'subtitle': '46,5 mill. habitantes',
      'children': [
        {
          'title': 'Andalucía',
          'subtitle': '8,4 mill. habitantes',
          'children': [
            {
              'title': 'Málaga',
              'subtitle': '1,63 mill. habitantes',
              'children': [
                {
                  'title': 'Marbella',
                  'subtitle': '140.700 habitantes',
                  'link': {
                    'type': 'url',
                    'uri': this.exampleUri,
                  },
                },
              ],
            },
          ],
        },
        {
          'title': 'Galicia',
          'subtitle': '2,72 mill. habitantes',
          'children': [
            {
              'title': 'Pontevedra',
              'subtitle': '1,63 mill. habitantes',
              'children': [
                {
                  'title': 'Vigo',
                  'subtitle': '82.500 habitantes',
                  'link': {
                    'type': 'url',
                    'uri': this.exampleUri,
                  },
                },
                {
                  'title': 'Mondariz',
                  'subtitle': '5000 habitantes',
                  'link': {
                    'type': 'url',
                    'uri': this.exampleUri,
                  },
                },
              ],
            },
            {
              'title': 'Lugo',
              'subtitle': '336.500 habitantes',
              'children': [
                {
                  'title': 'Ribadeo',
                  'subtitle': '10.000 habitantes',
                  'link': {
                    'type': 'url',
                    'uri': this.exampleUri,
                  },
                },
                {
                  'title': 'Villalba',
                  'subtitle': '14.800 habitantes',
                  'link': {
                    'type': 'url',
                    'uri': this.exampleUri,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  exampleJsonLocal: Array <MvTreeFilterExpandItem> = docTreeFilterExample;

  exampleJsonExterno: Array <MvTreeFilterExpandItem> = [];

  // Ejemplo de uso
  codeUseExampleHTML = `
  <mv-tree-filter
    [treeFilterItems]='exampleCountries'>
  </mv-tree-filter>
  `;

  codeUseExampleTS = `
  ...

  exampleCountries: Array <MvTreeFilterExpandItem> = [
    {
      "title": "Estados Unidos",
      "subtitle": "325 mill. habitantes",
      "children": [
        {
          "title": "California",
          "subtitle": "39,54 mill. habitantes",
          "link": {
            "type": "url",
            "uri": "https://es.wikipedia.org/wiki/Estados_Unidos"
          }
        },
        {
          "title": "Florida",
          "subtitle": "20,98 mill. habitantes",
          "link": {
            "type": "url",
            "uri": "https://es.wikipedia.org/wiki/Estados_Unidos"
          }
        },
        {
          "title": "Colorado",
          "subtitle": "Ejemplo de enlace a un estado de la app",
          "link": {
            "type": "state",
            "uri": "maquetacion-grid"
          }
        },
        {
          "title": "Texas",
          "subtitle":
            "Ejemplo de enlace a un estado de la app pasando parámetros",
          "link": {
            "type": "state",
            "uri": "maquetacion-grid"
          }
        }
       ]
     },
    {
      "title": "París",
      "subtitle": "12,2 mill. habitantes",
      "link": {
        "type": "url",
        "uri": "https://es.wikipedia.org/wiki/Par%C3%ADs"
      }
    },
    {
      "title": "España",
      "subtitle": "46,5 mill. habitantes",
      "children": [
        {
          "title": "Andalucía",
          "subtitle": "8,4 mill. habitantes",
          "children": [
            {
              "title": "Málaga",
              "subtitle": "1,63 mill. habitantes",
              "children": [
                {
                  "title": "Marbella",
                  "subtitle": "140.700 habitantes",
                  "link": {
                    "type": "url",
                    "uri": "https://es.wikipedia.org/wiki/Espa%C3%B1a"
                  }
                }
              ]
            }
          ]
        },
        {
          "title": "Galicia",
          "subtitle": "2,72 mill. habitantes",
          "children": [
            {
              "title": "Pontevedra",
              "subtitle": "1,63 mill. habitantes",
              "children": [
                {
                  "title": "Vigo",
                  "subtitle": "82.500 habitantes",
                  "link": {
                    "type": "url",
                    "uri": "https://es.wikipedia.org/wiki/Espa%C3%B1a"
                  }
                },
                {
                  "title": "Mondariz",
                  "subtitle": "5000 habitantes",
                  "link": {
                    "type": "url",
                    "uri": "https://es.wikipedia.org/wiki/Espa%C3%B1a"
                  }
                }
              ]
            },
            {
              "title": "Lugo",
              "subtitle": "336.500 habitantes",
              "children": [
                {
                  "title": "Ribadeo",
                  "subtitle": "10.000 habitantes",
                  "link": {
                    "type": "url",
                    "uri": "https://es.wikipedia.org/wiki/Espa%C3%B1a"
                  }
                },
                {
                  "title": "Villalba",
                  "subtitle": "14.800 habitantes",
                  "link": {
                    "type": "url",
                    "uri": "https://es.wikipedia.org/wiki/Espa%C3%B1a"
                  }
                }
             ]
            }
          ]
        }
      ]
    }
  ];

  ...

  constructor(
  ) {}

  ...
  `;

  // filterAppearance
  codeFilterAppearanceExampleHTML = `
  <mv-tree-filter
    filterAppearance="legacy"
    [treeFilterItems]='exampleCountries'>
  </mv-tree-filter>

  <mv-tree-filter
    filterAppearance="standard"
    [treeFilterItems]='exampleCountries'>
  </mv-tree-filter>

  <mv-tree-filter
    filterAppearance="fill"
    [treeFilterItems]='exampleCountries'>
  </mv-tree-filter>

  <mv-tree-filter
    filterAppearance="outline"
    [treeFilterItems]='exampleCountries'>
  </mv-tree-filter>
  `;

  codeFilterAppearanceExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // filterFloatLabel
  codeFilterFloatLabelExampleHTML = `
  <mv-tree-filter
    label="Propiedad floatLabel"
    filterFloatLabel="always"
    [treeFilterItems]='exampleCountries'>
  </mv-tree-filter>

  <mv-tree-filter
    label="Propiedad floatLabel"
    filterAppearance="legacy"
    filterFloatLabel="never"
    [treeFilterItems]='exampleCountries'>
  </mv-tree-filter>

  <mv-tree-filter
    label="Propiedad floatLabel"
    filterFloatLabel="auto"
    [treeFilterItems]='exampleCountries'>
  </mv-tree-filter>
  `;

  codeFilterFloatLabelExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // filterHint
  codeFilterHintExampleHTML = `
  <mv-tree-filter
    [treeFilterItems]='exampleCountries'
    filterTitle='Buscador médico'
    filterHint="Hint personalizado">
  </mv-tree-filter>
  `;

  codeFilterHintExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // filterTitle
  codeFilterTitleExampleHTML = `
  <mv-tree-filter
    [treeFilterItems]='exampleCountries'
    filterTitle='Buscador médico'>
  </mv-tree-filter>
  `;

  codeFilterTitleExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // filterPlaceholder
  codeFilterPlaceholderExampleHTML = `
  <mv-tree-filter
    [treeFilterItems]='exampleCountries'
    filterPlaceholder='Filtra la búsqueda'>
  </mv-tree-filter>
  `;

  codeFilterPlaceholderExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // multiOpen
  codeMultiOpenExampleHTML = `
  <!-- ejemplo mostrando el botón -->
  <mv-tree-filter
    [treeFilterItems]='exampleCountries'
    multiOpen=true>
  </mv-tree-filter>

  <!-- ejemplo ocultando el botón -->
  <mv-tree-filter
    [treeFilterItems]='exampleCountries'
    multiOpen=false>
  </mv-tree-filter>
  `;

  codeMultiOpenExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // showFilter
  codeShowFilterExampleHTML = `
  <mv-tree-filter
    showFilter=true
    [treeFilterItems]='exampleCountries'>
  </mv-tree-filter>

  <mv-tree-filter
    showFilter=false
    [treeFilterItems]='exampleCountries'>
  </mv-tree-filter>

  <mv-tree-filter
    [treeFilterItems]='exampleCountries'>
  </mv-tree-filter>
  `;

  codeShowFilterExampleTS = `

  // Nada que añadir respecto al ejemplo principal

  `;

  // treeFilterItems
  codeTreeFilterItemsExampleHTML = `
  <!-- Ejemplo con JSON definido en el código -->
  <mv-tree-filter
    [treeFilterItems]='exampleCountries'>
  </mv-tree-filter>
  `;

  codeTreeFilterItemsExampleTS = `
  addColorExample() {
    console.log("Color example");
    this.exampleCountries[0].css = this.getColorRandom();
    this.exampleCountries[0].children[0].css = this.getColorRandom();
    this.exampleCountries[0].children[1].css = this.getColorRandom();
    this.exampleCountries[0].children[2].css = this.getColorRandom();
    this.mvTreeFilterCssItems.refresh();
  }
  resetColorExample() {
    console.log("reset color example");
    this.exampleCountries[0].css = '';
    this.exampleCountries[0].children[0].css = '';
    this.exampleCountries[0].children[1].css = '';
    this.exampleCountries[0].children[2].css = '';
    this.mvTreeFilterCssItems.refresh();
  }
  getColorRandom() {
    let colors = [
      "testClass1", "testClass2", "testClass3", "testClass4"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  `;

  // treeFilterItemsJsonLocal
  codeTreeFilterItemsJsonLocalExampleHTML = `
  <!-- Ejemplo con archivo JSON local -->
  <mv-tree-filter
    [treeFilterItems]='exampleJsonLocal'>
  </mv-tree-filter>
  `;

  codeTreeFilterItemsJsonLocalExampleTS = `

  // Modificaciones añadidas al ejemplo principal

  ...

  import docTreeFilterExample from './doc-tree-filter-example.json';

  ...

  exampleJsonLocal: Array <MvTreeFilterExpandItem> = docTreeFilterExample;

  ...
  `;

  codeTreeFilterItemsExampleJSON = `
  [{
      "title": "Pediatría",
      "subtitle": "",
      "children": [{
          "title": "ORL",
          "subtitle": "",
          "children": [{
              "title": "Abceso periamigdalino retrofaríngeo o parafaríngeo",
              "subtitle": "Streptococcus pyogenes <br>Anaerobios (Bacteroides, Fusobacterium, Peptostreptococcus, Prevotella) <br>Staphylococcus aureus",
              "children": [{
                  "title": "Tratamiento 1ª elección",
                  "subtitle": "Derivación hospitalaria para ingreso y tratamiento intravenoso. <br>Drenaje quirúrgico. <br>Amoxicilina-clavulánico IV: 100 mg/kg/día en 3-4 dosis."
                },
                {
                  "title": "Tratamiento alternativo",
                  "subtitle": "Clindamicina IV: 20-40 mg/kg/día, en 4 dosis + cefotaxima 150 mg/kg/día cada 8 horas. <br>En alérgicos a penicilina tipos I y II: clindamicina IV."
                },
                {
                  "title": "Observaciones",
                  "subtitle": "Tratamiento parenteral hasta mejoría clínica y afebril...."
                }
              ]
            },
            {
              "title": "Adenitis cervical aguda unilateral",
              "subtitle": "Unilateral: <br>Estreptococo grupo ...",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            },
            {
              "title": "Adenitis cervical aguda bilateral",
              "subtitle": "Bilateral: <br>rinovirus, adenovirus, VEB, <br>CMV, coxackie, parainfluenza, <br>Mycoplasma pneumoniae.",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            }
          ]
        },
        {
          "title": "Tracto respiratorio",
          "subtitle": "",
          "children": [{
              "title": "Bronquitis",
              "subtitle": "Virus respiratorios, virus del sarampión, m. pneumoniae, c. pneumoniae, b. pertussis, m. tuberculosis",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            },
            {
              "title": "Bronquiolitis",
              "subtitle": "VRS, rinovirus, adenovirus, virus parainfluenza, bocavirus, metapneumovirus,influenza.",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            },
            {
              "title": "Epiglotitis",
              "subtitle": "H. influenzae (generalmente tipo b, aunque puede ser polimicrobiana).",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            }
          ]
        },
        {
          "title": "Oftalmológicas",
          "subtitle": "",
          "children": [{
              "title": "Conjuntivitis",
              "subtitle": "Edad < 4 semanas: N. gonorrhoeae, chlamydiaspp, herpes virus",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            },
            {
              "title": "Conjuntivitis",
              "subtitle": "Edad > 4 semanas....",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            },
            {
              "title": "Orzuelo externo con drenaje purulento",
              "subtitle": "Tratamiento empírico",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            }
          ]
        }
      ]
    },
    {
      "title": "Adulto",
      "subtitle": "",
      "children": [{
          "title": "ORL",
          "subtitle": "",
          "children": [{
              "title": "Faringoamigdalitis aguda",
              "subtitle": "Virus (80%) Bacteriana: S. pyogenes 5-15% (SBHGA), M.pneumoniae, C.pneumoniae",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            },
            {
              "title": "Otitis externa circunscrita",
              "subtitle": "S. aureus",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            },
            {
              "title": "Otitis externa aguda difusa",
              "subtitle": "P. aeruginosa, s. aureus",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            }
          ]
        },
        {
          "title": "Tracto respiratorio inferior",
          "subtitle": "",
          "children": [{
              "title": "Bronquitis aguda",
              "subtitle": "Virus (95%): Rhinovirus, Enterovirus,...",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            },
            {
              "title": "Reagudización infecciosa de la EPOC",
              "subtitle": "Causa no infecciosa (25%) Causa infecciosa (25-75%): a) ...",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            },
            {
              "title": "Neumonía adquirida en la comunidad: Adulto sano, < 65 años, sin riesgo aumentado de infección por H. influenzae",
              "subtitle": "Más frecuentes: S. pneumoniae, M. pneumoniae,...",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            }
          ]
        },
        {
          "title": "Tracto urinario",
          "subtitle": "",
          "children": [{
              "title": "Bacteriuria asintomática",
              "subtitle": "1,63 mill. habitantes",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            },
            {
              "title": "Cistitis aguda no complicada en mujer",
              "subtitle": "Escherichia coli (75%-95% de los casos) Otros ...",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            },
            {
              "title": "ITU inferior complicada (1)",
              "subtitle": "E. coli. K.pneumoniae Enterococcus sp P.mirabilis S agalactiae Asociados a litiasis: Proteus, Corynebacterium urealyticum, Providencia stuartii",
              "link": {
                "type": "url",
                "uri": "https://www.google.es"
              }
            }
          ]
        }
      ]
    }

  ]
  `;

  // treeFilterItemsJsonExterno
  codeTreeFilterItemsJsonExternoExampleHTML = `
  <!-- Ejemplo con archivo JSON externo -->
  <mv-tree-filter
    [treeFilterItems]='exampleJsonExterno'>
  </mv-tree-filter>
  `;

  codeTreeFilterItemsJsonExternoExampleTS = `

  // Modificaciones añadidas al ejemplo principal

  ...

  exampleJsonExterno: Array <MvTreeFilterExpandItem>;

  ...

  constructor(
    private jsonExampleService: JsonExampleService
  ) { }

  ngOnInit() {
    this.getJsonExterno();
  }

  getJsonExterno(){
    this.jsonExampleService.getJsonService().subscribe(
      response => {
        this.exampleJsonExterno = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  ...
  `

  // hideItems
  codeHideItemsExampleHTML = `
  <mv-tree-filter
    #mvTreeFilteHideItems
    [treeFilterItems]='exampleCountries'>
  </mv-tree-filter>

  <mv-button
    appearance="raised"
    color="primary"
    (click)="hideItemsExample()">
    hideItems
  </mv-button>
  `;

  codeHideItemsExampleTS = `

  // Modificaciones añadidas al ejemplo principal

  ...

  constructor(
  ) { }

  ngOnInit() {
  }

  hideItemsExample(){
    let hideElements: any = [
      'París',
      'Málaga'
    ];
    this.mvTreeFilterHideItems.hideItems(hideElements);
    this.mvTreeFilterShowItems.hideItems(hideElements);
  }

  ...
  `

  // showItems
  codeShowItemsExampleHTML = `
  <mv-tree-filter
    #mvTreeFilterShowItems
    [treeFilterItems]='exampleCountries'>
  </mv-tree-filter>

  <mv-button
    appearance="raised"
    color="primary"
    (click)="showItemsExample()">
    showItems
  </mv-button>
  `;

  codeShowItemsExampleTS = `

  // Modificaciones añadidas al ejemplo principal

  ...

  constructor(
  ) { }

  ngOnInit() {
  }

  showItemsExample(){
    let showElements: any = [
      'París',
      'Málaga'
    ];
    this.mvTreeFilterHideItems.showItems(showElements);
    this.mvTreeFilterShowItems.showItems(showElements);
  }

  ...
  `
  codeRefreshExampleHTML = `
  <mv-tree-filter
  #mvTreeFilterHideItems
    [treeFilterItems]='exampleCountries'>
  </mv-tree-filter>

  <mv-button
    appearance="raised"
    color="primary"
    (click)="addColorExample()">
    Añadir css y refrescar
  </mv-button>
  <mv-button
    appearance="raised"
    color="primary"
    (click)="resetColorExample()">
    Quitar css y refrescar
  </mv-button>
  `;
  codeRefreshExampleTS = `
  refreshExample() {

    this.exampleCountries[0].title = "Titulo";
    this.exampleCountries[0].css = this.getColorRandom();
    this.mvTreeFilterRefresh.refresh();
  }
  refreshResetExample() {

    this.exampleCountries[0].title = "Estados Unidos";
    this.exampleCountries[0].css = '';
    this.mvTreeFilterRefresh.refresh();
  }
  getColorRandom() {
    let colors = [
      "testClass1", "testClass2", "testClass3", "testClass4"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  `;
  constructor(
    private readonly jsonExampleService: JsonExampleService
  ) { }

  ngOnInit() {
    this.getJsonExterno();
  }

  getJsonExterno() {
    this.jsonExampleService.getJsonService().subscribe(
        (response) => {
          this.exampleJsonExterno = response;
        },
        (error) => {
          console.log(error);
        },
    );
  }

  hideItemsExample() {
    const hideElements: any = [
      'París',
      'Málaga',
    ];
    this.mvTreeFilterHideItems.hideItems(hideElements);
    this.mvTreeFilterShowItems.hideItems(hideElements);
  }

  showItemsExample() {
    const showElements: any = [
      'París',
      'Málaga',
    ];
    this.mvTreeFilterHideItems.showItems(showElements);
    this.mvTreeFilterShowItems.showItems(showElements);
  }

  addColorExample() {
    console.log('Color example');
    this.exampleCountries[0].css = this.getColorRandom();
    this.exampleCountries[0].children[0].css = this.getColorRandom();
    this.exampleCountries[0].children[1].css = this.getColorRandom();
    this.exampleCountries[0].children[2].css = this.getColorRandom();
    this.mvTreeFilterCssItems.refresh();
  }
  resetColorExample() {
    console.log('reset color example');
    this.exampleCountries[0].css = '';
    this.exampleCountries[0].children[0].css = '';
    this.exampleCountries[0].children[1].css = '';
    this.exampleCountries[0].children[2].css = '';

    this.mvTreeFilterCssItems.refresh();
  }

  refreshExample() {
    this.exampleCountries[0].title = 'Titulo';
    this.exampleCountries[0].css = this.getColorRandom();
    this.mvTreeFilterRefresh.refresh();
  }
  refreshResetExample() {
    this.exampleCountries[0].title = 'Estados Unidos';
    this.exampleCountries[0].css = '';
    this.mvTreeFilterRefresh.refresh();
  }
  getColorRandom() {
    const colors = [
      'testClass1', 'testClass2', 'testClass3', 'testClass4',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

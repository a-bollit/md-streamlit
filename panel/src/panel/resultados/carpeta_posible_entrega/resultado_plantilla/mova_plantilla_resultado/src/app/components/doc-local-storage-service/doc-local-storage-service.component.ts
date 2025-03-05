import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '@mova/components/core';

@Component({
  selector: 'app-doc-local-storage-service',
  templateUrl: './doc-local-storage-service.html',
  styleUrls: ['./doc-local-storage-service.scss'],
})
export class DocLocalStorageService implements OnInit {
  movaLocalStorageNode: any;
  movaLocalStorageNodeKey: any;

  // init
  codeInitExampleHTML = `
  <p>
    <strong>
      Resetear el nodo principal de mova mediante el evento init:
    </strong>
  </p>
  <mv-button
    color="primary"
    (clickEvent)="initEventExample()">
    init(true)
  </mv-button>

  <p><strong>Recuperar el nodo de MOVA en localStorage:</strong></p>
  <mv-button
    color="primary"
    (clickEvent)="getItemsExample()">
    getItems()
  </mv-button>

  <p><strong>Nodo principal de MOVA en localStorage:</strong></p>
  <p>{{movaLocalStorageNode | json}}</p>
  `;

  codeInitExampleTS = `
  import { LocalStorageService } from '@mova/components/core';

  ...

  movaLocalStorageNode: any;

  ...

  constructor(
    localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.getItemsExample();
  }

  /*
  Resetear localStorage
  */
  initEventExample(){
    this.localStorageService.init(true);
  }

  ...
  `;

  // setItem
  codeSetItemExampleHTML = `
  <p><strong>Resetear el nodo principal de mova mediante el evento init:</strong></p>
  <mv-button
    color="primary"
    (clickEvent)="initEventExample()">
    init(true)
  </mv-button>

  <p><strong>Recuperar el nodo de MOVA en localStorage:</strong></p>
  <mv-button
    color="primary"
    (clickEvent)="getItemsExample()">
    getItems()
  </mv-button>

  <p><strong>Nodo principal de MOVA en localStorage:</strong></p>
  <p>{{movaLocalStorageNode | json}}</p>
  `;

  codeSetItemExampleTS = `
  ...

  /*
  Almacenar datos en localStorage
  */
  setItemExample(key, crypt: boolean){
    let info = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    this.localStorageService.setItem(key, info, crypt);
  }

  ...
  `;

  // getItem
  codeGetItemExampleHTML = `
  <p><strong>Almacenamos con clave 'DocLocalStorageServiceExample' en el nodo de MOVA en localStorage:</strong></p>
  <mv-button
    color="primary"
    (clickEvent)="setItemExample('DocLocalStorageServiceExample', false)">
    setItem('DocLocalStorageServiceExample', 'lorem ipsum...', false)
  </mv-button>

  <p><strong>Recuperar el objeto de clave 'DocLocalStorageServiceExample' del nodo de MOVA en localStorage:</strong></p>
  <mv-button
    color="primary"
    (clickEvent)="getItem('DocLocalStorageServiceExample')">
    getItem('DocLocalStorageServiceExample')
  </mv-button>

  <p><strong>Objeto de clave 'DocLocalStorageServiceExample' del nodo principal de MOVA en localStorage:</strong></p>
  <p>{{movaLocalStorageNodeKey | json}}</p>
  `;

  codeGetItemExampleTS = `
  ...

  /*
  Almacenar datos en localStorage
  */
  getItem(key){
    this.movaLocalStorageNodeKey = this.localStorageService.getItem(key);
  }

  ...
  `;

  // clearItem
  codeClearItemExampleHTML = `
  <mv-button
    color="primary"
    (clickEvent)="setItemExample('DocLocalStorageServiceExample', false)">
    setItem('DocLocalStorageServiceExample', 'lorem ipsum...', false)
  </mv-button>

  <mv-button
    color="primary"
    (clickEvent)="clearItem('DocLocalStorageServiceExample')">
    clearItem('DocLocalStorageServiceExample')
  </mv-button>

  <mv-button
    color="primary"
    (clickEvent)="getItemsExample()">
    getItems()
  </mv-button>

  <p><strong>Nodo principal de MOVA en localStorage:</strong></p>
  <p>{{movaLocalStorageNode | json}}</p>
  `;

  codeClearItemExampleTS = `
  ...

  /*
  Eliminar datos de localStorage
  */
  clearItem(key){
    this.localStorageService.clearItem(key);
  }

  ...
  `;

  // encryptMainNode
  codeEncryptMainNodeExampleHTML = `
  <p><strong>Encriptar el nodo de MOVA en localStorage:</strong></p>
  <mv-button
    color="primary"
    (clickEvent)="encryptMainNode()">
    encryptMainNode()
  </mv-button>
  `;

  codeEncryptMainNodeExampleTS = `
  ...

  /*
  Encriptar nodo principal
  */
  encryptMainNode(){
    this.localStorageService.encryptMainNode();
  }

  ...
  `;

  // decryptMainNode
  codeDecryptMainNodeExampleHTML = `
  <p><strong>Desencriptar el nodo de MOVA en localStorage:</strong></p>
  <mv-button
    color="primary"
    (clickEvent)="decryptMainNode()">
    decryptMainNode()
  </mv-button>
  `;

  codeDecryptMainNodeExampleTS = `

  ...

  /*
  Desencriptar nodo principal
  */
  decryptMainNode(){
    this.localStorageService.decryptMainNode();
  }

  ...

  `;

  constructor(
    private readonly localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
  }

  /*
  Resetear localStorage
  */
  initEventExample() {
    this.localStorageService.init(true);
  }

  /*
  Recuperar datos de localStorage
  */
  getItemsExample() {
    this.movaLocalStorageNode = this.localStorageService.getItems();
  }

  /*
  Almacenar datos en localStorage
  */
  getItemExample(key) {
    this.movaLocalStorageNodeKey = this.localStorageService.getItem(key);
  }

  /*
  Almacenar datos en localStorage
  */
  setItemExample(key, crypt) {
    const info = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    this.localStorageService.setItem(key, info, crypt);
  }

  /*
  Eliminar datos de localStorage
  */
  clearItemExample(key) {
    this.localStorageService.clearItem(key);
  }

  /*
  Encriptar nodo principal
  */
  encryptMainNodeExample() {
    this.localStorageService.encryptMainNode();
  }

  /*
  Desencriptar nodo principal
  */
  decryptMainNodeExample() {
    this.localStorageService.decryptMainNode();
  }
}

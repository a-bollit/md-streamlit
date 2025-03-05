import {Component, OnInit} from '@angular/core';
import {SessionStorageService} from '@mova/components/core';

@Component({
  selector: 'app-doc-session-storage-service',
  templateUrl: './doc-session-storage-service.html',
  styleUrls: ['./doc-session-storage-service.scss'],
})
export class DocSessionStorageService implements OnInit {
  movaSessionStorageNode: any;
  movaSessionStorageNodeKey: any;

  // init
  codeInitExampleHTML = `
  <p>
    <strong>
      Resetear el nodo principal de mova mediante el evento init:
    </strong>
  </p>
  <mv-button
    color="primary"
    (clickEvent)="initEvent()">
    init(true)
  </mv-button>

  <p><strong>Recuperar el nodo de MOVA en sessionStorage:</strong></p>
  <mv-button
    color="primary"
    (clickEvent)="getItemsExample()">
    getItems()
  </mv-button>

  <p><strong>Nodo principal de MOVA en sessionStorage:</strong></p>
  <p>{{movaSessionStorageNode | json}}</p>
  `;

  codeInitExampleTS = `
  import { SessionStorageService } from '@mova/components/core';

  ...

  movaSessionStorageNode: any;

  ...

  constructor(
    sessionStorageService: SessionStorageService
  ) { }

  ngOnInit() {
    this.initEventExample();
    this.getItemsExample();
  }

  /*
  Resetear sessionStorage
  */
  initEvent(){
    this.sessionStorageService.init(true);
  }

  ...
  `;

  // setItem
  codeSetItemExampleHTML = `
  <p>
    <strong>Resetear el nodo principal de mova mediante el evento init:</strong>
  </p>
  <mv-button
    color="primary"
    (clickEvent)="initEvent()">
    init(true)
  </mv-button>

  <p><strong>Recuperar el nodo de MOVA en sessionStorage:</strong></p>
  <mv-button
    color="primary"
    (clickEvent)="getItemsExample()">
    getItems()
  </mv-button>

  <p><strong>Nodo principal de MOVA en sessionStorage:</strong></p>
  <p>{{movaSessionStorageNode | json}}</p>
  `;

  codeSetItemExampleTS = `
  ...

  /*
  Almacenar datos en sessionStorage
  */
  setItemExample(key, crypt: boolean){
    let info = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    this.sessionStorageService.setItem(key, info, crypt);
  }

  ...
  `;

  // getItem
  codeGetItemExampleHTML = `
  <p><strong>Almacenamos con clave 'DocSessionStorageServiceExample' en el nodo de MOVA en sessionStorage:</strong></p>
  <mv-button
    color="primary"
    (clickEvent)="setItemExample('DocSessionStorageServiceExample', false)">
    setItem('DocSessionStorageServiceExample', 'lorem ipsum...', false)
  </mv-button>

  <p><strong>Recuperar el objeto de clave 'DocSessionStorageServiceExample' del nodo de MOVA en sessionStorage:</strong></p>
  <mv-button
    color="primary"
    (clickEvent)="getItemExample('DocSessionStorageServiceExample')">
    getItem('DocSessionStorageServiceExample')
  </mv-button>

  <p><strong>Objeto de clave 'DocSessionStorageServiceExample' del nodo principal de MOVA en sessionStorage:</strong></p>
  <p>{{movaSessionStorageNodeKey | json}}</p>
  `;

  codeGetItemExampleTS = `
  ...

  /*
  Almacenar datos en sessionStorage
  */
  getItemExample(key){
    this.movaSessionStorageNodeKey = this.sessionStorageService.getItem(key);
  }

  ...
  `;

  // clearItem
  codeClearItemExampleHTML = `
  <mv-button
    color="primary"
    (clickEvent)="setItemExample('DocSessionStorageServiceExample', false)">
    setItem('DocSessionStorageServiceExample', 'lorem ipsum...', false)
  </mv-button>

  <mv-button
    color="primary"
    (clickEvent)="clearItemExample('DocSessionStorageServiceExample')">
    clearItem('DocSessionStorageServiceExample')
  </mv-button>

  <mv-button
    color="primary"
    (clickEvent)="getItemsExample()">
    getItems()
  </mv-button>

  <p><strong>Nodo principal de MOVA en sessionStorage:</strong></p>
  <p>{{movaSessionStorageNode | json}}</p>
  `;

  codeClearItemExampleTS = `
  ...

  /*
  Eliminar datos de sessionStorage
  */
  clearItemExample(key){
    this.sessionStorageService.clearItem(key);
  }

  ...
  `;

  // encryptMainNode
  codeEncryptMainNodeExampleHTML = `
  <p><strong>Encriptar el nodo de MOVA en sessionStorage:</strong></p>
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
    this.sessionStorageService.encryptMainNode();
  }

  ...
  `;

  // decryptMainNode
  codeDecryptMainNodeExampleHTML = `
  <p><strong>Desencriptar el nodo de MOVA en sessionStorage:</strong></p>
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
    this.sessionStorageService.decryptMainNode();
  }

  ...

  `;

  constructor(
    private readonly sessionStorageService: SessionStorageService,
  ) { }

  ngOnInit() {
    this.initEventExample();
    this.getItemsExample();
  }

  /*
  Resetear sessionStorage
  */
  initEventExample() {
    this.sessionStorageService.init(true);
  }

  /*
  Recuperar datos de sessionStorage
  */
  getItemsExample() {
    this.movaSessionStorageNode = this.sessionStorageService.getItems();
  }

  /*
  Almacenar datos en sessionStorage
  */
  getItemExample(key) {
    this.movaSessionStorageNodeKey = this.sessionStorageService.getItem(key);
  }

  /*
  Almacenar datos en sessionStorage
  */
  setItemExample(key, crypt: boolean) {
    const info = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    this.sessionStorageService.setItem(key, info, crypt);
  }

  /*
  Eliminar datos de sessionStorage
  */
  clearItemExample(key) {
    this.sessionStorageService.clearItem(key);
  }

  /*
  Encriptar nodo principal
  */
  encryptMainNode() {
    this.sessionStorageService.encryptMainNode();
  }

  /*
  Desencriptar nodo principal
  */
  decryptMainNode() {
    this.sessionStorageService.decryptMainNode();
  }
}

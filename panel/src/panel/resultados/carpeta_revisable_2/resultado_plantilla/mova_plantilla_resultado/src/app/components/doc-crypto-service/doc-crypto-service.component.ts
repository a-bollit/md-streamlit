import {Component, OnInit} from '@angular/core';
import {CryptoService} from '@mova/components/core';

@Component({
  selector: 'app-doc-crypto-service',
  templateUrl: './doc-crypto-service.html',
  styleUrls: ['./doc-crypto-service.scss'],
})
export class DocCryptoService implements OnInit {
  encryptString: any = 'Cadena de ejemplo a encriptar'
  encryptObject: any = {
    'id': 1,
    'string': 'Cadena de ejemplo dentro de un objeto',
    'obj': {
      'string': 'Otra cadena de ejemplo dentro de un objeto',
    },
  }

  // encrypt
  codeEncryptExampleHTML = `
  <mv-button
    color="primary"
    (clickEvent)="encryptExample('string', 'MiSemilla')">
    encrypt()
  </mv-button>

  <p><strong>Cadena:</strong></p>
  <p>{{encryptString}}</p>

  <mv-button
    color="primary"
    (clickEvent)="encryptExample('obj', 'MiSemilla')">
    encrypt()
  </mv-button>

  <p><strong>Objeto:</strong></p>
  <p>{{encryptObject | json}}</p>
  `;

  codeEncryptExampleTS = `
  import { CryptoService } from '@mova/components/core';

  ...

  encryptString: string = 'Cadena de ejemplo a encriptar'
  encryptObject: any = {
    'id': 1,
    'string': 'Cadena de ejemplo dentro de un objeto',
    'obj': {
      'string': 'Otra cadena de ejemplo dentro de un objeto',
    }
  }

  ...

  constructor(
    private cryptoService: CryptoService
  ) { }

  ngOnInit() {}

  /*
  Encriptar datos
  */
  encryptExample(exampleType: string, semilla: string){
    if(exampleType === 'string'){
      this.encryptString = this.cryptoService.encrypt(this.encryptString, semilla);
    }else{
      this.encryptObject = this.cryptoService.encrypt(this.encryptObject, semilla);
    }
  }

  ...
  `;

  // decrypt
  codeDecryptExampleHTML = `
  <mv-button
    color="primary"
    (clickEvent)="decryptExample('string', 'MiSemilla')">
    decrypt()
  </mv-button>

  <p><strong>Cadena:</strong></p>
  <p>{{encryptString}}</p>

  <mv-button
    color="primary"
    (clickEvent)="decryptExample('obj', 'MiSemilla')">
    decrypt()
  </mv-button>

  <p><strong>Objeto:</strong></p>
  <p>{{encryptObject | json}}</p>
  `;

  codeDecryptExampleTS = `
  import { CryptoService } from '@mova/components/core';

  ...

  encryptString: string = 'Cadena de ejemplo a encriptar'
  encryptObject: any = {
    'id': 1,
    'string': 'Cadena de ejemplo dentro de un objeto',
    'obj': {
      'string': 'Otra cadena de ejemplo dentro de un objeto',
    }
  }

  ...

  constructor(
    private cryptoService: CryptoService
  ) { }

  ngOnInit() {}

  /*
  Desencriptar datos
  */
  decryptExample(exampleType: string, semilla: string){
    if(exampleType === 'string'){
      this.encryptString = this.cryptoService.decrypt(this.encryptString, semilla);
    }else{
      this.encryptObject = this.cryptoService.decrypt(this.encryptObject, semilla);
    }
  }

  ...
  `;

  constructor(
    private readonly cryptoService: CryptoService,
  ) { }

  ngOnInit() {
  }

  /*
  Encriptar datos
  */
  encryptExample(exampleType: string, semilla: string) {
    if (exampleType === 'string') {
      this.encryptString =
        this.cryptoService.encrypt(this.encryptString, semilla);
    } else {
      this.encryptObject =
        this.cryptoService.encrypt(this.encryptObject, semilla);
    }
  }
  /*
  Desencriptar datos
  */
  decryptExample(exampleType: string, semilla: string) {
    if (exampleType === 'string') {
      this.encryptString =
        this.cryptoService.decrypt(this.encryptString, semilla);
    } else {
      this.encryptObject =
        this.cryptoService.decrypt(this.encryptObject, semilla);
    }
  }
}

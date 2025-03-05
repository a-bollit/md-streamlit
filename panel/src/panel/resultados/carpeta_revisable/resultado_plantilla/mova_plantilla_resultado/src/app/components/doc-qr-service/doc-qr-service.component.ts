import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {QrService} from '@mova/components/core';

@Component({
  selector: 'app-doc-qr-service',
  templateUrl: './doc-qr-service.html',
  styleUrls: ['./doc-qr-service.scss'],
})
export class DocQrService implements OnInit {
  // initScan
  codeInitScanExampleHTML = `
  <mv-button
    appearance="raised"
    color="primary"
    (clickEvent)="initScanExample()">
    initScan
  </mv-button>
  `;

  codeInitScanExampleTS = `
  import { QrService } from '@mova/components/core';

  ...

  // resultado del escaneo
  scanResult: any;

  ...

  constructor(
    private _qrService: QrService
  ) { }

  ngOnInit() {
  }

  ...

  initScanExample() {
    let self = this;
    function successCallback(data: any){
      self.scanResult = data;
    }
    function errorCallback(error: any){
      self.scanResult = error;
    }

    let oConfig: any = {};
    oConfig.preferFrontCamera = false;
    oConfig.showFlipCameraButton = true;
    oConfig.showTorchButton = true;

    this._qrService.initScan(successCallback, errorCallback, oConfig);
  }

  `;

  // resultado del escaneo
  scanResult: any;

  constructor(
    private readonly _qrService: QrService,
    private readonly _cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }
  /*
  Encriptar datos
  */
  initScanExample() {
    const successCallback = (data: any) => {
      this.scanResult = data;
      this._cd.detectChanges();
    };
    const errorCallback = (error: any) => {
      this.scanResult = error;
      this._cd.detectChanges();
    };

    const oConfig: any = {};
    oConfig.preferFrontCamera = false;
    oConfig.showFlipCameraButton = true;
    oConfig.showTorchButton = true;

    this._qrService.initScan(successCallback, errorCallback, oConfig);
  }
}

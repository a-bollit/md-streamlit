import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-platform-considerations',
  templateUrl: './doc-platform-considerations.html',
  styleUrls: ['./doc-platform-considerations.scss'],
})
export class DocPlatformConsiderations implements OnInit {
  codeOpenPdfExampleTS = `
  this._exampleService.getPdf$().subscribe(
    response => {
      ...
      window.open(pdfUrl);
    },
    error => {

    }
  );
  `;

  codeOpenPdfExample2TS = `
  if(isSafari){
    windowReference = window.open();
  }

  this._exampleService.getPdf$().subscribe(
    response => {
      ...
      if(isSafari){
        windowReference.location = url;
      }else if(isIE){
        window.navigator.msSaveOrOpenBlob(DataBlob);
      }else{
        window.open(url);
      }
    },
    error => {

    }
  );
  `;

  constructor(
  ) { }

  ngOnInit() {

  }
}

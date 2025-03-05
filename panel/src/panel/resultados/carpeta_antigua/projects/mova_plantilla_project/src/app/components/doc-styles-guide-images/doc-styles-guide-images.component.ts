import {Component, OnInit} from '@angular/core';
import {AppService} from '@mova/components/core';

@Component({
  selector: 'app-doc-styles-guide-images',
  templateUrl: './doc-styles-guide-images.html',
  styleUrls: ['./doc-styles-guide-images.scss'],
})
export class DocStylesGuideImages implements OnInit {
  constructor(
    private readonly _appService: AppService,
  ) { }

  ngOnInit() {
  }

  /*
  Ir a la web de pixabay
  */
  linkImage(option: number) {
    if (option === 1) {
      this._appService.windowOpen('https://pixabay.com/es/prado-campo-hierba-verde-3375052', '_system');
    } else {
      this._appService.windowOpen('https://pixabay.com/es/puesta-del-sol-amanecer-sun-3331503', '_system');
    }
  }
}

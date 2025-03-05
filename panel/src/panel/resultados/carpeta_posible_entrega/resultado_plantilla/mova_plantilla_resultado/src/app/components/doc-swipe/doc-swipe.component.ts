import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-swipe',
  templateUrl: './doc-swipe.html',
  styleUrls: ['./doc-swipe.scss'],
})
export class DocSwipe implements OnInit {
  // manifest.json
  swipeAction='';
  codeManifestJSON = `
  `;

  codeIndexHTML = `
  `;

  hammerConfigFile = `
  import {HammerGestureConfig} from '@angular/platform-browser';
  import * as Hammer from 'hammerjs';


  export class HammerConfig extends HammerGestureConfig {
    overrides = {
      swipe: {
        direction: Hammer.DIRECTION_ALL,
      },
    } as any;
  }
  `;

  appModuleProviders = `
  providers: [
    MOVA_PROVIDERS,
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
    },
    {
      provide: MAT_DATE_FORMATS, // Formatos para datepicker
      useValue: MOMENT_FORMATS,
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'es-ES',
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig,
    },
    ApplicationRef,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue:
      {
        displayDefaultIndicatorType: false,
        showError: true,
      },
    },
  ],
  `;

  swipeDirections = `
  onSwipeUp(evento) {
    console.log(evento.deltaY);
    this.marcarCorrecto(evento.target);
  }
  onSwipeDown(evento) {
    console.log(evento.deltaY);
    this.marcarCorrecto(evento.target);
  }
  onSwipeLeft(evento) {
    console.log(evento.deltaY);
    this.marcarCorrecto(evento.target);
  }
  onSwipeRight(evento) {
    console.log(evento.deltaY);
    this.marcarCorrecto(evento.target);
  }
  marcarCorrecto(target) {
    target.classList.add('correct');

    setTimeout(() => {
      target.classList.remove('correct');
    }, 1000);
  }`;
  swipeDirectionsHTML = `
  <div class="ejemplosSwipe">
    <div
      class="ejemploSwipe"
      (swipeup)="onSwipeUp($event)"
    >
      <div class="swipeTexto">Swipe Up</div>
    </div>
    <div
      class="ejemploSwipe"
      (swipedown)="onSwipeDown($event)"
    >
      <div class="swipeTexto">Swipe Down</div>
    </div>
    <div
      class="ejemploSwipe"
      (swiperight)="onSwipeRight($event)"
    >
      <div class="swipeTexto">Swipe Right</div>
    </div>
    <div
      class="ejemploSwipe"
      (swipeleft)="onSwipeLeft($event)"
    >
      <div class="swipeTexto">Swipe Left</div>
    </div>
  </div>`;

  swipe = `
  onSwipe(evento) {
    console.log('Evento swipe', evento);
    if (!this.swiping) {
      this.swiping = true;
      switch (evento.direction) {
        case Hammer.DIRECTION_LEFT:
          this.swipeAction = 'Swipe left';
          break;
        case Hammer.DIRECTION_RIGHT:
          this.swipeAction = 'Swipe right';
          break;
        case Hammer.DIRECTION_UP:
          this.swipeAction = 'Swipe up';
          break;
        case Hammer.DIRECTION_DOWN:
          this.swipeAction = 'Swipe down';
          break;
      }
      this.marcarCorrecto(evento.target);
      setTimeout(() => {
        this.swipeAction = '';
        this.swiping = false;
      }, 1500);
    }
  }`;
  swipeHTML = `
  <div class="ejemplosSwipe">
    <div
      class="ejemploSwipe"
      (swipe)="onSwipe($event)"
    >
      <div class="swipeTexto">{{swipeAction}}</div>
    </div>
  </div>`;
  swiping = false;
  constructor(
  ) { }

  ngOnInit() {

  }
  onSwipe(evento) {
    console.log('Evento swipe', evento);
    if (!this.swiping) {
      this.swiping = true;
      switch (evento.direction) {
        case Hammer.DIRECTION_LEFT:
          this.swipeAction = 'Swipe left';
          break;
        case Hammer.DIRECTION_RIGHT:
          this.swipeAction = 'Swipe right';
          break;
        case Hammer.DIRECTION_UP:
          this.swipeAction = 'Swipe up';
          break;
        case Hammer.DIRECTION_DOWN:
          this.swipeAction = 'Swipe down';
          break;
      }
      this.marcarCorrecto(evento.target);
      setTimeout(() => {
        this.swipeAction = '';
        this.swiping = false;
      }, 1500);
    }
  }

  onSwipeUp(evento) {
    console.log('Evento onSwipeUp', evento);
    this.marcarCorrecto(evento.target);
  }
  onSwipeDown(evento) {
    console.log('Evento onSwipeDown', evento);
    this.marcarCorrecto(evento.target);
  }
  onSwipeLeft(evento) {
    console.log('Evento onSwipeLeft', evento);
    this.marcarCorrecto(evento.target);
  }
  onSwipeRight(evento) {
    console.log('Evento onSwipeRight', evento);
    this.marcarCorrecto(evento.target);
  }
  marcarCorrecto(target) {
    target.classList.add('correct');
    setTimeout(() => {
      target.classList.remove('correct');
    }, 1000);
  }
}

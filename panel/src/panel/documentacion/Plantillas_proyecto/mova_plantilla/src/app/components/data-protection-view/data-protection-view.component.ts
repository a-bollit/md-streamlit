import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '@mova/components/core';

@Component({
  selector: 'app-data-protection-view',
  templateUrl: './data-protection-view.html',
  styleUrls: ['./data-protection-view.scss'],
})
export class DataProtectionView implements OnInit {
  // Evento principal de MOVA para configurar el tree-filter del menú lateral
  @Output() movaSetMainFrameConfig: EventEmitter<any> = new EventEmitter();

  // variables para mostrar la protección de datos resumen o completa
  showResume = true;
  showComplete = false;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _appService: AppService,
  ) { }

  ngOnInit() {
    // configuración header
    const headerConfig = {
      'showBackButton': false,
      'showHeader': true,
      'showHeaderButtonLogin': false,
      'showLateralMenu': false,
      'showMenuButton': false,
    };
    const headerAndlateralMenuConfigs = {
      headerConfig,
    };
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
    this._route.paramMap.subscribe(
        (params) => {
          const type = params.get('type');
          if (type === 'resume' || type === 'complete') {
            this.showView(type);
          }
        },
    );
  }

  goTo(option: string) {
    if (option === 'complete' || option === 'resume') {
      this.showView(option);
    } else {
      this._appService.navigateBack(true);
    }
  }

  showView(view: string) {
    if (view === 'resume') {
      this.showComplete = false;
      this.showResume = true;
    } else if (view === 'complete') {
      this.showComplete = true;
      this.showResume = false;
    }
  }
}

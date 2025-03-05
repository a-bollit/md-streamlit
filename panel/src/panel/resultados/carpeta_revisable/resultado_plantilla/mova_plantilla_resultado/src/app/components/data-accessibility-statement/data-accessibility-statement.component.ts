import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AppService} from '@mova/components/core';

@Component({
  selector: 'app-data-accessibility-statement',
  templateUrl: './data-accessibility-statement.html',
  styleUrls: ['./data-accessibility-statement.scss'],
})
export class DataAccessibilityStatement implements OnInit {
  // Evento principal de MOVA para configurar el tree-filter del menú lateral
  @Output() movaSetMainFrameConfig: EventEmitter<any> = new EventEmitter();

  // variables para mostrar la proteccion de datos resumen o completa
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

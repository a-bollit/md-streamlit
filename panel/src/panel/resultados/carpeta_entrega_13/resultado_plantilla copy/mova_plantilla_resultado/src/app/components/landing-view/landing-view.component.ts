import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '@mova/components/core';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.html',
  styleUrls: ['./landing-view.scss'],
})
export class LandingView implements OnInit {
  // Evento principal de MOVA para configurar el tree-filter del menú lateral
  @Output() movaSetMainFrameConfig: EventEmitter<any> = new EventEmitter();

  // Version de la app
  appVersion: string;
  // Mostrar el fondo
  showBackground: boolean;
  // Titulo de las condiciones de acceso del login
  titleAccessConditions = '';
  // Texto de las condiciones de acceso del login
  textAccessConditions = '';
  // Ancho de las condiciones de acceso del login
  widthAccessConditions = '';
  private _config: any;
  private _configEnvironment: any;

  constructor(
    private readonly _appService: AppService,
    private readonly _router: Router,
  ) { }

  ngOnInit() {
    // Recuperar la configuración de la App
    this._config = this._appService.getConfig();
    // Recuperar la configuración de entorno
    this._configEnvironment = this._appService.getConfigEnvironment();

    this.appVersion = this._config['mova']['appVersion'];
    this.titleAccessConditions = this._config['mova']['titleAccessConditions'];
    this.textAccessConditions = this._config['mova']['textAccessConditions'];
    this.widthAccessConditions = this._config['mova']['widthAccessConditions'];

    const headerConfig = {
      'showHeader': false,
      'showLateralMenu': false,
    };
    const navBarConfig = {
      'showNavBar': false,
    };
    const headerAndlateralMenuConfigs = {
      headerConfig,
      navBarConfig,
    };
    this.movaSetMainFrameConfig.emit(headerAndlateralMenuConfigs);
  }

  ngAfterViewInit(): void {
    this.showBackground = true;
  }

  openUrlOnExternalbrowserClick(url) {
    switch (url) {
      case 'urlContacta':
        this._appService
            .windowOpen(this._config['mova']['urlContact'], '_blank');
        break;
      case 'urlAvisoLegal':
        this._appService
            .windowOpen(this._config['mova']['urlLegal'], '_blank');
        break;
      case 'urlPortales':
        this._appService
            .windowOpen(this._config['mova']['urlPortals'], '_blank');
        break;

      default:
        break;
    }
  }

  goToHome() {
    this._router.navigate(['main-menu']);
  }

  doOnClickConditions() {
    const data: any = {
      title: this.titleAccessConditions,
      text: this.textAccessConditions,
      acceptText: 'Aceptar',
      cancelText: 'Cancelar',
      maxWidth: this.widthAccessConditions,
      acceptColor: 'primary',
      cancelColor: 'warn',
    };

    this._appService.openDialog(data);
  }
}

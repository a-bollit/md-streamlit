import {Component, OnInit} from '@angular/core';
import {AppService} from '@mova/components/core';

@Component({
  selector: 'app-layout-footer-mv-menu',
  templateUrl: './layout-footer-mv-menu.html',
  styleUrls: ['./layout-footer-mv-menu.scss'],
})
export class LayoutFooterMvMenu implements OnInit {
  arrayTabItems: any[] = [
    {
      'icon': 'home',
      'title': 'Inicio',
    },
    {
      'icon': 'list',
      'title': 'Listado',
    },
    {
      'icon': 'search',
      'title': 'Buscar',
    },
    {
      'icon': 'feedback',
      'title': 'Avisos',
    },
    {
      'icon': 'settings',
      'title': 'Configurar',
    },
  ];

  constructor(
    private readonly _appService: AppService,
  ) { }

  ngOnInit() {}

  actionClick() {
    const data = {
      text: 'Acción realizada correctamente',
    };

    this._appService.showSnackBar(data);
  }
}

import {Component, OnInit} from '@angular/core';
import {AppService} from '@mova/components/core';

@Component({
  selector: 'app-doc-deeplinks',
  templateUrl: './doc-deeplinks.html',
  styleUrls: ['./doc-deeplinks.scss'],
})
export class DocDeeplinks implements OnInit {
    // Configuración de la App
    private _config: any;
    ExampleHTML = `
    <!-- org.madrid.MOVA://profile?user=1 -->

    <a href="org.madrid.MOVA.mova2App://paginaInicio?ticket=1">Entrar en la app</a>
    Ó
    <a href="org.madrid.MOVA.mova2App://paginaInicio">Entrar en la app</a>
    `;
    ExampleWidget = `
    <widget 
        id="org.madrid.MOVA.mova2App" 
        xmlns="http://www.w3.org/ns/widgets" 
        xmlns:cdv="http://cordova.apache.org/ns/1.0">
        ….
    </widget>
    `;
    ExampleTS = `
    // Funcion handleOpenURL de Cordova que hay que sobrescribir para que al
    // volver a la app desde autologin vaya a la vista de broker
    let self = this;
    document.addEventListener("deviceready", function() {
      window.handleOpenURL = function handleOpenURL(url) {
        setTimeout(function() {
          // Tenemos un ticket del broker
          let ticketParamName = '//ticket=';
          let ticketPosition = url.indexOf(ticketParamName);
          if (ticketPosition >= 0) {
            let ticket = url.substr(ticketPosition + ticketParamName.length);
            self._router.navigate(
                ['/broker-view'],
                { queryParams: { ticket: ticket }},
            );
          }
        }, 0);
      }
    });
    `;
    constructor(
        private readonly _appService: AppService,
    ) { }

    ngOnInit() {
      // Recuperar la configuración de la App
      this._config = this._appService.getConfig();
    }
}

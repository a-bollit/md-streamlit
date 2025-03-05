import { Component } from '@angular/core';

@Component({
  selector: 'app-pestanas',
  templateUrl: './pestanas.component.html',
  styleUrls: ['./pestanas.component.scss']
})
export class PestanasComponent {
  tabs = [
    { title: 'GEA_ACURE', icon: 'email', content: 'Contenido de GEA_ACURE' },
    { title: 'NOTIFICACION_TELEMATICA', icon: 'notifications', content: 'Contenido de NOTIFICACION_TELEMATICA' }
  ];

  selectedTab = this.tabs[0];

  selectTab(tab) {
    this.selectedTab = tab;
  }
}
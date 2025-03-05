import { Component, Input } from '@angular/core';
import { TabService } from './tab.service';  // Asegúrate de que el servicio TabService esté correctamente implementado

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() notificaciones: any[] = [];
  
  constructor(private tabService: TabService) {}

  get_correo_notifications(): any[] {
    return this.notificaciones.filter(notificacion => notificacion.tipo === 'PG_CORR');
  }

  get_telematica_notifications(): any[] {
    return this.notificaciones.filter(notificacion => notificacion.tipo === 'PG_NOTE');
  }

  changeTab(tabName: string): void {
    this.tabService.changeTab(tabName);
  }
}
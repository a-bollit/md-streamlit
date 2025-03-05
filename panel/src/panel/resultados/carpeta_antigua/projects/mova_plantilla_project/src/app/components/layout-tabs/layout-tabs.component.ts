import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout-tabs',
  templateUrl: './layout-tabs.html',
  styleUrls: ['./layout-tabs.scss'],
})
export class LayoutTabs implements OnInit {
  // Ejemplo de uso
  codeUseExampleHTML = `
  <mv-tab-group>

  <mv-tab>
    <ng-template mat-tab-label>
      <mv-icon>info</mv-icon> Info
    </ng-template>
    <div class="tab-body">
      <pre><code [highlight]="codeUseExampleHTML"></code></pre>
    </div>
  </mv-tab>

  <mv-tab>
    <ng-template mat-tab-label>
      <mv-icon>phone</mv-icon> Llamadas
    </ng-template>
    <div class="tab-body">
        ...
    </div>
  </mv-tab>

  <mv-tab>
    <ng-template mat-tab-label>
      <mv-icon>email</mv-icon> Mensajes
    </ng-template>
    <div class="tab-body">
      ...
    </div>
  </mv-tab>

  </mv-tab-group>
  `;

  constructor() { }

  ngOnInit() {
  }
}

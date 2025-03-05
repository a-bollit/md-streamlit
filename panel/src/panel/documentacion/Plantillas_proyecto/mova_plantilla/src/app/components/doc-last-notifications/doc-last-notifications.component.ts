import {Component, OnInit} from '@angular/core';
import {CryptoService} from '@mova/components/core';

@Component({
  selector: 'app-doc-last-notifications',
  templateUrl: './doc-last-notifications.html',
  styleUrls: ['./doc-last-notifications.scss'],
})
export class DocLastNotifications implements OnInit {
  // encrypt
  EjemploUsoExampleHTML = `
  <!-- Componente del listado de notificaciones -->
  <mv-last-notifications
    #notificationComponent
    [configuration]="configuration"
    [template]="templateNotification"
    >
  </mv-last-notifications>
  `;
  EjemploUsoExampleTemplate = `

  <!-- Template para cada notificación -->
  <ng-template #templateNotification let-data="data" let-date="date">
    <mv-card class="card-code" >

      <div class="contentDate ">
      Fecha: {{date  | date:'dd/MM/yyyy hh:mm:ss'}}
      </div>

      <mv-card-header >
        <mv-card-title
          class="contentTitle"
        >
          <strong>{{data.titulo}}</strong>
        </mv-card-title>
        <mv-card-subtitle></mv-card-subtitle>
      </mv-card-header>

      <div class="row">

        <div class="contentInfo  ">

          <mv-card-content>
            <ul>
              <li>{{data.mensaje}}</li>
            </ul>
          </mv-card-content>
        </div>

        <div class="contentActions ">

          <mv-button
            appearance="raised"
            color="warn"
            (click)="deleteNotification($event, data)">
            <mat-icon>delete</mat-icon>
          </mv-button>
          
          <mv-button
            appearance="raised"
            color="primary"
            (click)="openNotification(data)">
            <mat-icon>library_books</mat-icon>
          </mv-button>

        </div>
          
      </div>
    </mv-card>
  </ng-template>

  `;

  EjemploUsoExampleTS = `

  import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
  import { DeviceService } from '@mova/components/core';
  import { MvLastNotifications } from '@mova/components/last-notifications';
  
  @Component({
    selector: 'app-last-notifications-view',
    templateUrl: './last-notifications-view.html',
    styleUrls: ['./last-notifications-view.scss']
  })
  export class LastNotificationView implements OnInit {
  
    // Template para la notificación
    @ViewChild('templateNotification', {static: false})
      templateNotification:TemplateRef<any>;
  
    // Componente de notificaciones
    @ViewChild('notificationComponent', {static: false})
      notificationComponent: MvLastNotifications;
    
    // Configuración del componente de notificaciones
    configuration: any;
    
    // Controla si estamos en una App móvil
    isMobileApp: boolean;
  
    constructor(
      private _deviceService: DeviceService
    ) { }
  
    ngOnInit() {
      // Definir la configuración para el plugin
      this.isMobileApp = this._deviceService.isMobileApp();
      this.configuration = {
        limit: 4
      };
    }
  
  
    openNotification(notification: any) {
      console.log(notification);
    }
    update() {
      
      this.notificationComponent.updateNotifications(new Date());
    }
    deleteAll() {
      
      this.notificationComponent.deleteAllNotifications();
    }
    deleteNotification(event, notification: any) {
      console.log(notification);
      this.notificationComponent.deleteNotification(notification);
    }
    
  }
  
  ...
  `;


  TemplateExampleHTML = `
  
  <!-- Template para cada notificación -->
  <ng-template #templateNotification let-data="data" let-date="date">
    <mv-card class="card-code" >

      <div class="contentDate ">
      Fecha: {{date  | date:'dd/MM/yyyy hh:mm:ss'}}
      </div>

      <mv-card-header >
        <mv-card-title
          class="contentTitle"
        >
          <strong>{{data.titulo}}</strong>
        </mv-card-title>
        <mv-card-subtitle></mv-card-subtitle>
      </mv-card-header>

      <div class="row">

        <div class="contentInfo  ">

          <mv-card-content>
            <ul>
              <li>{{data.mensaje}}</li>
            </ul>
          </mv-card-content>
        </div>

        <div class="contentActions ">

          <mv-button
            appearance="raised"
            color="warn"
            (click)="deleteNotification($event, data)">
            <mat-icon>delete</mat-icon>
          </mv-button>
          
          <mv-button
            appearance="raised"
            color="primary"
            (click)="openNotification(data)">
            <mat-icon>library_books</mat-icon>
          </mv-button>

        </div>
          
      </div>
    </mv-card>
  </ng-template>

  `;

  TemplateExampleTS = `

  `;

  UpdateExampleHTML = `
  
  <mv-button
    *ngIf="!isMobileApp"
    appearance="raised"
    color="warn"
    (click)="update()">
    <mat-icon>update</mat-icon> Actualizar
  </mv-button>

  `;
  UpdateExampleTS = `
  // Componente de notificaciones
  @ViewChild('notificationComponent', {static: false})
    notificationComponent: MvLastNotifications;
  
  ´´´
  
  update() {
    this.notificationComponent.updateNotifications(new Date());
  }
  `;

  DeleteExampleHTML = `
  <mv-button
    appearance="raised"
    color="warn"
    (click)="deleteNotification($event, data)">
    <mat-icon>delete</mat-icon>
  </mv-button>

  `;
  DeleteExampleTS = `
  // Componente de notificaciones
  @ViewChild('notificationComponent', {static: false})
    notificationComponent: MvLastNotifications;
  
  ´´´
  
  deleteNotification(event, notification: any) {
    console.log(notification);
    this.notificationComponent.deleteNotification(notification);
  }
  `;

  DeleteAllExampleHTML = `
  <mv-button
    appearance="raised"
    color="warn"
    (click)="deleteAll()">
    <mat-icon>delete</mat-icon> Borrar todas
  </mv-button>

  `;
  DeleteAllExampleTS = `
  // Componente de notificaciones
  @ViewChild('notificationComponent', {static: false})
    notificationComponent: MvLastNotifications;
  
  ´´´
  

  deleteAll() {
    
    this.notificationComponent.deleteAllNotifications();
  }
  `;

  ConfigurationExampleHTML = `
  <!-- Componente del listado de notificaciones -->
  <mv-last-notifications
    #notificationComponent
    [configuration]="configuration"
    [template]="templateNotification"
    >
  </mv-last-notifications>

  `;
  ConfigurationExampleTS = `
  this.configuration = {
    limit: 4
  };
  `;

  TemplatePropertyExampleHTML = `
  <!-- Componente del listado de notificaciones -->
  <mv-last-notifications
    #notificationComponent
    [configuration]="configuration"
    [template]="templateNotification"
    >
  </mv-last-notifications>


  
  <!-- Template para cada notificación -->
  <ng-template #templateNotification let-data="data" let-date="date">
    <mv-card class="card-code" >

      <div class="contentDate ">
      Fecha: {{date  | date:'dd/MM/yyyy hh:mm:ss'}}
      </div>

      <mv-card-header >
        <mv-card-title
          class="contentTitle"
        >
          <strong>{{data.titulo}}</strong>
        </mv-card-title>
        <mv-card-subtitle></mv-card-subtitle>
      </mv-card-header>

      <div class="row">

        <div class="contentInfo  ">

          <mv-card-content>
            <ul>
              <li>{{data.mensaje}}</li>
            </ul>
          </mv-card-content>
        </div>

        <div class="contentActions ">

          <mv-button
            appearance="raised"
            color="warn"
            (click)="deleteNotification($event, data)">
            <mat-icon>delete</mat-icon>
          </mv-button>
          
          <mv-button
            appearance="raised"
            color="primary"
            (click)="openNotification(data)">
            <mat-icon>library_books</mat-icon>
          </mv-button>

        </div>
          
      </div>
    </mv-card>
  </ng-template>

  `;
  TemplatePropertyExampleTS = `

  `;


  constructor(
    private readonly cryptoService: CryptoService,
  ) { }

  ngOnInit() {
  }
}

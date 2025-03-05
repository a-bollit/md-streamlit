import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NotificationCorreosComponent } from './notification-correos/notification-correos.component';
import { NotificationTelematicaComponent } from './notification-telematica/notification-telematica.component';

@Component({
  selector: 'app-notification-tabs',
  templateUrl: './notification-tabs.component.html',
  styleUrls: ['./notification-tabs.component.scss']
})
export class NotificationTabsComponent implements OnChanges {
  @Input() selectedTab: string;
  @Output() tabChanged = new EventEmitter<string>();

  tabs = [
    { label: 'PG_CORR', component: NotificationCorreosComponent },
    { label: 'PG_NOTE', component: NotificationTelematicaComponent }
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedTab && changes.selectedTab.currentValue) {
      this.onTabChange(changes.selectedTab.currentValue);
    }
  }

  onTabChange(tab: string): void {
    this.selectedTab = tab;
    this.tabChanged.emit(tab);
  }
}
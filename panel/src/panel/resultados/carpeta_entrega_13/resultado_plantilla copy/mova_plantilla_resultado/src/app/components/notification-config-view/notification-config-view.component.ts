import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-notification-config-view',
  templateUrl: './notification-config-view.html',
  styleUrls: ['./notification-config-view.scss'],
})
export class NotificationConfigView implements OnInit {
  // topics a pasar al componente de configuración
  topics: any[] = [
    {
      'name': 'Topic - 1',
      'topic': 'topic_1',
    },
    {
      'name': 'Topic - 2',
      'topic': 'topic_2',
    },
  ]

  constructor(
  ) { }

  ngOnInit() {
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-notifications-config',
  templateUrl: './doc-notifications-config.html',
  styleUrls: ['./doc-notifications-config.scss'],
})
export class DocNotificationsConfig implements OnInit {
  // sound
  codeNotificationConfigSoundExampleHTML = `
  ...

  <mv-notification-config
    config="sound">
  </mv-notification-config>

  ...
  `;

  codeNotificationConfigSoundExampleTS = `

  // Nada que añadir

  `;

  // topics
  codeNotificationTopicExampleHTML = `
  ...

  <mv-notification-config
    [topics]="topics">
  </mv-notification-config>

  ...
  `;

  codeNotificationTopicExampleTS = `

  topics: any[] = [
    {
      "name": "Topic - 1",
      "topic": "topic_1"
    },
    {
      "name": "Topic - 2",
      "topic": "topic_2"
    }
  ]

  `;

  constructor() { }

  ngOnInit() {
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-content-policy',
  templateUrl: './doc-content-policy.html',
  styleUrls: ['./doc-content-policy.scss'],
})
export class DocContentPolicy implements OnInit {
  // Uso del componente
  codeUseExampleHTML = `
  <meta http-equiv="Content-Security-Policy" content="default-src 'self' gap://ready;
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.madrid.org https://*.comunidad.madrid https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;
      style-src 'self' 'unsafe-inline';
      img-src 'self' https://*.madrid.org https://*.comunidad.madrid blob: data:;
      font-src 'self';
      connect-src https://*.madrid.org https://*.comunidad.madrid http://localhost:* ws://localhost:* http://*.madrid.org;
      child-src gap://ready https://*.madrid.org https://*.comunidad.madrid https://www.google.com/;
      worker-src https://*.madrid.org https://*.comunidad.madrid http://localhost:* ws://localhost:*;">
       
  `;

  displayedColumns: string[] = [
    'Chrome',
    'Firefox',
    'Safari',
    'Edge',
    'Internet Explorer',
  ];

  dataSource: any[] = [
    {
      'Chrome':
        'Content-Security-Policy CSP Level 3 - Chrome 59+ Partial Support',
      'Firefox':
        'Content-Security-Policy CSP Level 3 - Firefox 58+ Partial Support',
      'Safari': '-',
      'Edge': 'Content-Security-Policy CSP Level 3 - Edge 79+ Partial Support',
      'Internet Explorer': '-',
    },
    {
      'Chrome': 'Content-Security-Policy CSP Level 2 - Chrome 40+ Full Support Since January 2015',
      'Firefox': 'Content-Security-Policy CSP Level 2 - FireFox 31+ Partial Support since July 2014',
      'Safari': 'Content-Security-Policy CSP Level 2 - Safari 10+',
      'Edge': 'Content-Security-Policy CSP Level 2 - Edge 15+ Partial,76+ Full',
      'Internet Explorer': '-',
    },
    {
      'Chrome': 'Content-Security-Policy CSP 1.0 - Chrome 25+',
      'Firefox': 'Content-Security-Policy CSP 1.0 - FireFox 23+ Full Support',
      'Safari': 'Content-Security-Policy CSP 1.0 - Safari 7+',
      'Edge': 'Content-Security-Policy CSP 1.0 - Edge 12+',
      'Internet Explorer': '-',
    },
    {
      'Chrome': 'X-Webkit-CSP Deprecated - Chrome 14-24',
      'Firefox': 'X-Content-Security-Policy Deprecated - FireFox 4-22',
      'Safari': 'X-Webkit-CSP Deprecated - Safari 6',
      'Edge': '',
      'Internet Explorer': '-',
    },
  ];

  constructor(
  ) { }

  ngOnInit() {

  }
}

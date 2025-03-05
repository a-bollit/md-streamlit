import { Component, Input } from '@angular/core';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-espera-info',
  templateUrl: './espera-info.component.html',
  styleUrls: ['./espera-info.component.scss']
})
export class EsperaInfoComponent {
  @Input() mensaje: string;

  constructor(public infoService: InfoService) {}
}
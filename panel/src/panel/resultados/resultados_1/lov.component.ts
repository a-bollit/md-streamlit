import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NotificacionTelematicaService } from '../services/notificacion-telematica.service';

@Component({
  selector: 'app-lov',
  templateUrl: './lov.component.html',
  styleUrls: ['./lov.component.scss']
})
export class LovComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() lovData: Array<any>;
  @Output() selectValue = new EventEmitter<any>();

  filteredData: Array<any>;
  searchText: string = '';

  constructor(private notificacionTelematicaService: NotificacionTelematicaService) {}

  ngOnInit(): void {
    this.filteredData = this.lovData;
  }

  onSearchChange(searchValue: string): void {
    this.filteredData = this.lovData.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  onSelectItem(item: any): void {
    this.selectValue.emit(item);
  }
}
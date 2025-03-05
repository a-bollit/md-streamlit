import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentService } from './document.service';

@Component({
  selector: 'app-notificaciones-corr',
  templateUrl: './notificaciones-corr.component.html',
  styleUrls: ['./notificaciones-corr.component.scss']
})
export class NotificacionesCorrComponent {
  @Input() documentos: any[] = [];
  @Output() documentosSeleccionados = new EventEmitter<any[]>();
  selectedDocs: any[] = [];
  allSelected: boolean = false;

  constructor(private documentService: DocumentService) {}

  toggleSelectAll() {
    this.allSelected = !this.allSelected;
    if (this.allSelected) {
      this.selectedDocs = [...this.documentos];
    } else {
      this.selectedDocs = [];
    }
    this.documentosSeleccionados.emit(this.selectedDocs);
  }

  toggleSelectDoc(doc: any) {
    const index = this.selectedDocs.indexOf(doc);
    if (index > -1) {
      this.selectedDocs.splice(index, 1);
    } else {
      this.selectedDocs.push(doc);
    }
    this.documentosSeleccionados.emit(this.selectedDocs);
  }

  registerDocuments() {
    // Here you can add the logic to handle the registration of documents
  }
}
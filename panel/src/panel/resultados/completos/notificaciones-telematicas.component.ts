import { Component, OnInit } from '@angular/core';
import { NotificacionTelematicaService } from '../services/notificacion-telematica.service';

@Component({
  selector: 'app-notificaciones-telematicas',
  templateUrl: './notificaciones-telematicas.component.html',
  styleUrls: ['./notificaciones-telematicas.component.scss']
})
export class NotificacionesTelematicasComponent implements OnInit {
  documentos: any[] = [];
  selectedDocuments: any[] = [];

  constructor(private notificacionService: NotificacionTelematicaService) { }

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    // Assume there's a service method to get pending documents
    this.notificacionService.getNotificaciones().subscribe((response: any) => {
      this.documentos = response;
    }, error => {
      console.error('Error fetching documents:', error);
    });
  }

  toggleSelection(document: any): void {
    const index = this.selectedDocuments.indexOf(document);
    if (index >= 0) {
      this.selectedDocuments.splice(index, 1);
    } else {
      this.selectedDocuments.push(document);
    }
  }

  selectAll(): void {
    this.selectedDocuments = [...this.documentos];
  }

  deselectAll(): void {
    this.selectedDocuments = [];
  }

  sendNotification(): void {
    // Assume there's a service method to send notification
    this.notificacionService.sendNotification(this.selectedDocuments).subscribe(response => {
      console.log('Notification sent successfully:', response);
      this.loadDocuments();
    }, error => {
      console.error('Error sending notification:', error);
    });
  }
}
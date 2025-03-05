import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MvDialogErrorComponent } from '@mova/components';

@Component({
  selector: 'app-situacion-error',
  templateUrl: './situacion-error.component.html',
  styleUrls: ['./situacion-error.component.scss']
})
export class SituacionErrorComponent {

  @Input() errorDetails: any;

  constructor(private dialog: MatDialog) {}

  openErrorDialog(): void {
    const dialogRef = this.dialog.open(MvDialogErrorComponent, {
      data: {
        title: 'Error en la situación del documento',
        errorText: this.errorDetails?.message || 'Detalles no disponibles',
        showDetail: true,
        acceptText: 'Aceptar',
        acceptColor: 'warn',
        disableClose: true,
        successCallback: (result) => {
          if (result.accept) {
            console.log('Error acknowledged');
          }
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo de error se cerró');
    });
  }

}
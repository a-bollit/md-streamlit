import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {
  Component,
  OnInit,
  Inject,
  ViewChild,
} from '@angular/core';
import {MvTableResponsiveColumn} from '@mova/components/table-responsive';
import {AppService} from '@mova/components/core';
import {MvValuesList} from '@mova/components/values-list';
import {StudentService} from '@app/services/students/student.service';
import {AsignaturasTableResponsiveLoadData} from '@app/services/students/asignaturas_load_data';

@Component({
  selector: 'student-edit-dialog',
  templateUrl: 'student-edit-dialog.html',
  styleUrls: ['./student-edit-dialog.scss'],
})
export class StudentEditDialog {

  @ViewChild('mvValuesList', {static: false}) mvValuesList: MvValuesList;

  // Constantes
  readonly TEXT_ACCEPT = 'Aceptar';
  readonly TEXT_CANCEL = 'Cancelar';
  readonly TEXT_TITLE = 'Confirmación';
  readonly TEXT_BODY_DELETE = 'Se eliminarán los datos de la asignatura' +
      ' ¿Está seguro?';
  readonly TEXT_BODY_EDIT = 'Se modificarán los datos de la asignatura ' +
      'del alumno ¿Está seguro?';
  readonly TEXT_BODY_CREATE = 'Se va a crear la nueva asignatura ' +
      'del alumno ¿Está seguro?';
  // Table columns para values list de asignaturas
  asignaturasTableColumns: MvTableResponsiveColumn[] = [
    {
      'title': 'id_asignatura',
      'name': 'Id',
      'sortable': false
    },
    {
      'title': 'nombre_asignatura',
      'name': 'Asignatura',
      'sortable': false
    },
    {
      'title': 'curso',
      'name': 'Curso',
      'sortable': false
    },
    {
      'title': 'id_profesor',
      'name': 'Id profesor',
      'sortable': false
    },
  ];
  // Load data source para values list de asignaturas
  loadAsignaturasSource = new AsignaturasTableResponsiveLoadData(this._studentService);
  // Objeto asignatura
  public newAsignatura: any = {
    id_asignatura: '',
    nombre_asignatura: '',
    curso: '',
    id_profesor: '',
    observaciones_asignatura: ''
  };
  public editMode: boolean = false;

  constructor(
    private _dialogRef: MatDialogRef<StudentEditDialog>,
    private readonly _appService: AppService,
    private _studentService: StudentService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  /**
   * Modifica el elemento del DOM con clase cdk-overlay-pane para que el
   * estilo CSS solo afecta al uso de este dialogo de student
   *
   * @param enable
   */
  private _manipulateCdkOverlayPane(enable?: boolean) {
    const cdkOverlayPaneElements2: HTMLElement | null =
        document.getElementById(this._dialogRef.id);

    if (cdkOverlayPaneElements2 && cdkOverlayPaneElements2.parentElement) {
      const cdkOverlayPaneElements = cdkOverlayPaneElements2.parentElement;
      if (cdkOverlayPaneElements) {
        if (enable) {
          cdkOverlayPaneElements.classList.add('cdk-overlay-pane-student-edit');
        } else {
          cdkOverlayPaneElements.classList
              .remove('cdk-overlay-pane-student-edit');
        }
      }
    }
  }

  ngOnInit(): void {
    this._manipulateCdkOverlayPane(true);
    const isData = Object.keys(this.data).length > 0;
    if(isData){
      this.newAsignatura.id_asignatura = this.data.id_asignatura;
      this.newAsignatura.nombre_asignatura = this.data.nombre_asignatura;
      this.newAsignatura.observaciones_asignatura = this.data.observaciones_asignatura;
      this.editMode = true;
    }
  }

  /*
  * Boton de cancelar
  */
  onCancel(): void {
    this._dialogRef.close({
      'cancel': true
    });
  }

  /*
  * Boton de guardar cambios de la asignatura
  */
  onSave(): void {
    let asignatura = this.mvValuesList.getSelected();
    this.newAsignatura.curso_asignatura = asignatura.curso_asignatura;
    this.newAsignatura.id_profesor = asignatura.id_profesor;
    this.newAsignatura.nombre_asignatura = asignatura.nombre_asignatura;

    // Modo crear
    let data = {
      title: this.TEXT_TITLE,
      text: this.TEXT_BODY_CREATE,
      acceptText: this.TEXT_ACCEPT,
      cancelText: this.TEXT_CANCEL,
      titleAccent: true,
      acceptColor: 'accent',
      cancelColor: 'primary',
      successCallback: (result: any) => {
        if (result.accept) {
          this._dialogRef.close({
            'create': true,
            'asignatura': this.newAsignatura
          });
        }
      },
    };

    // Modo edicion
    if(this.editMode){
      data = {
        title: this.TEXT_TITLE,
        text: this.TEXT_BODY_EDIT,
        acceptText: this.TEXT_ACCEPT,
        cancelText: this.TEXT_CANCEL,
        titleAccent: true,
        acceptColor: 'accent',
        cancelColor: 'primary',
        successCallback: (result: any) => {
          if (result.accept) {
            this._dialogRef.close({
              'edit': true,
              'asignatura': this.newAsignatura,
              'oldAsignatura': this.data,
            });
          }
        },
      };
    }

    // Mostramos dialogo
    this._appService.openDialog(data);
  }

  /*
  * Boton de eliminar asignatura
  */
  onDelete(): void {
    const data = {
      title: this.TEXT_TITLE,
      text: this.TEXT_BODY_DELETE,
      acceptText: this.TEXT_ACCEPT,
      cancelText: this.TEXT_CANCEL,
      titleAccent: true,
      acceptColor: 'accent',
      cancelColor: 'primary',
      successCallback: (result: any) => {
        if (result.accept) {
          this._dialogRef.close({
            'delete': true,
            'asignatura': this.newAsignatura
          });
        }
      },
    };
    this._appService.openDialog(data);
  }


  /*
  * Logica de deshabilitar boton de guardar
  */
  disableSaveButton(): boolean {
    let disableButton = false;
    // Si estamos editando y no hemos cambiado nada deshabilitamos el boton de guardar
    if(this.editMode){
      if(this.newAsignatura.id_asignatura == this.data.id_asignatura
        && this.newAsignatura.observaciones_asignatura == this.data.observaciones_asignatura){
        disableButton = true;
      }
    // Si estamos creando y no hemos introducido datos deshabilitamos el boton de guardar
    }else{
      if(this.newAsignatura.id_asignatura == ''){
        disableButton = true;
      }
    }
    return disableButton;
  }

  ngOnDestroy() {
    this._manipulateCdkOverlayPane(false);
  }

}

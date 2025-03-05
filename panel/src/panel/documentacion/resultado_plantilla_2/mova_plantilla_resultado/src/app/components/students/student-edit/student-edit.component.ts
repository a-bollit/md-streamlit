import {
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '@app/services/students/student.interface';
import {MvFileUploader} from '@mova/components/file-uploader';
import {StudentEditDialog} from './student-edit-dialog.component';
import {StudentService} from '@app/services/students/student.service';
import {ProvincesService} from '@app/services/provinces/provinces.service';
import {DirectionTableResponsiveLoadData} from '@app/services/students/directions_load_data';
import {AppService, AuthenticationService} from '@mova/components/core';
import {MvTableResponsiveColumn} from '@mova/components/table-responsive';
import {FormBuilder} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.html',
  styleUrls: ['./student-edit.scss'],
})
export class StudentEdit implements OnInit {

  @ViewChild('mvFileUploader', {static: false}) mvFileUploader: MvFileUploader;

  // Constantes
  readonly TEXT_ACCEPT = 'Aceptar';
  readonly TEXT_CANCEL = 'Cancelar';
  readonly TEXT_SAVE_TITLE = 'Confirmación';
  readonly TEXT_SAVE_BODY = 'Se guardaran los datos ' +
      'del alumno ¿Continuar?';
  readonly TEXT_DELETE_TITLE = 'Confirmación';
  readonly TEXT_DELETE_BODY = 'Se va a eliminar el alumno definitivamente ¿Estás seguro?';
  readonly TEXT_DELETE_TITLE_ALT = 'Operación no permitida';
  readonly TEXT_DELETE_BODY_ALT = 'Los alumnos con ID menor que 1000 no se pueden eliminar';

  // Configuración de entorno
  _configEnvironment: any;

  // UUID del student
  uuid: string;
  // Datos guardados del student: inicializamos la imagen para evitar errores al renderizar
  student: Student;
  // Imagen del student
  studentImage: string;
  // Modo edición
  editMode = false;
  // Formulario
  studentForm: any = this.fb.group({
    uuid: '',
    id: '',
    nif: '',
    nombre_alumno: '',
    apellido_1: '',
    apellido_2: '',
    fecha_nacimiento: '',
    numero_asignaturas_aprobadas: null,
    direccion_alumno: this.fb.group({
      id_direccion: '',
      calle: '',
      cd_municipio: '',
      numero: '',
      provincia: '',
    }),
    direccion_profesor: this.fb.group({
      id_direccion: '',
      calle: '',
      cd_municipio: '',
      numero: '',
      provincia: '',
    }),
    sexo: '',
    beca: '',
    province: '',
    municipality: '',
  });
  // Asignaturas del alumno
  asignaturas: any[] = [];
  // Table columns para values list de direcciones
  directionsTableColumns: MvTableResponsiveColumn[] = [
   {
     'title': 'calle',
     'name': 'Calle',
     'sortable': false
   },
   {
     'title': 'numero',
     'name': 'Número',
     'sortable': false
   },
   {
     'title': 'municipio',
     'name': 'Municipio',
     'sortable': false
   },
   {
     'title': 'provincia',
     'name': 'Provincia',
     'sortable': false
   }
  ];
  // Mensaje de error
  errorMessage: string;
  // Nota media
  globalNota: number = 0;
  // Load data source para values list de direcciones
  loadDirectionsSource = new DirectionTableResponsiveLoadData(this._studentService);
  // Fecha maxima seleccionable por el datepicker
  maxDate: Date;
  // Fecha minima seleccionable por el datepicker
  minDate: Date;
  // Radio sexo
  radioOptions: any[] = [
    {
      "id": "h",
      "text": "Hombre"
    },
    {
      "id": "m",
      "text": "Mujer"
    }
  ];
  // Provincias y municipios
  selectOptionsProvinces: any[];
  selectOptionsMunicipalities: any[];
  // Mostrar el botón de visualizar pdf
  showPdfViewerButton: boolean = true;
  // Tamaño maximo uploader file
  uploaderMaxSize: number = 30 * 1024 * 1024;
  // Extensiones permitidas uploader file
  uploaderAllowedExtensions: string[] = ['.pdf'];
  // Respuesta del uploader
  uploaderGetLastResponse: any;
  // Url del pdf
  viewerPdfUrl: string;
  // Mostrar o no el visor
  viewerPdfShow: boolean = false;

  constructor(
    private readonly _provincesService: ProvincesService,
    private _authenticationService: AuthenticationService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private _studentService: StudentService,
    private readonly _appService:AppService,
    private readonly fb: FormBuilder,
    private _dialog: MatDialog,
  ) {
    this._configEnvironment = this._appService.getConfigEnvironment();
    this.studentImage = './assets/examples/icon_user.png';
  }

  ngOnInit() {
    // Recuperamos el uuid
    this._route.paramMap.subscribe(
      (params) => {
        this.uuid = params.get('id');
        if(this.uuid){
          this.editMode = true;
          this.getStudentInfo();
        }
      },
    );

    // Establecemos las fechas minimas y maximas del datepicker, para que este en el rango de edad 12 - 99
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();
    this.maxDate = new Date(currentYear - 12, currentMonth, currentDay);
    this.minDate = new Date(currentYear - 99, currentMonth, currentDay);

    this.getProv();
    this.getMun('S:02');
  }

  /**
   * Guardar los nuevos datos con confirmación
   */
  onSave() {
    let data = {
      title: this.TEXT_SAVE_TITLE,
      text: this.TEXT_SAVE_BODY,
      acceptText: this.TEXT_ACCEPT,
      cancelText: this.TEXT_CANCEL,
      acceptColor: 'accent',
      cancelColor: 'primary',
      titleAccent: true,
    };

    let self = this;
    function successCallback(result: any){
      if(result.accept){
        let oStudent: any = {
          nombre_alumno: self.studentForm.controls['nombre_alumno'].value,
          apellido_1: self.studentForm.controls['apellido_1'].value,
          apellido_2: self.studentForm.controls['apellido_2'].value
        }

        // Si la fecha la hemos escogido con el datepicker cogemos el date, lo pasamos a ISO y quitamos los milisegundos
        let fecha_nacimiento = self.studentForm.controls['fecha_nacimiento'].value;
        if(fecha_nacimiento._isAMomentObject){
          fecha_nacimiento = fecha_nacimiento._d.toISOString().slice(0, -5);
        }
        oStudent.fecha_nacimiento = fecha_nacimiento;

        // Si estamos editando mandamos campos distintos que si estamos creando
        if(self.editMode){
          let uuid = self.studentForm.controls['uuid'].value;
          oStudent.id_direccion = self.studentForm.controls['direccion_alumno'].value.id_direccion;
          self._studentService.setStudent$(oStudent, uuid)
            .subscribe((response) => {
              let data: any = {
                text: 'Alumno modificado correctamente',
                type: 'info'
              }
              self._appService.showSnackBar(data);
              self._router.navigate(['/student-edit', response.data.uuid]);
            }
          );
        }else{
          oStudent.nif = self.studentForm.controls['nif'].value;
          oStudent.id_direccion_alumno = self.studentForm.controls['direccion_alumno'].value.id_direccion;
          oStudent.id_direccion_tutor = self.studentForm.controls['direccion_profesor'].value.id_direccion;
          self._studentService.newStudent$(oStudent)
            .subscribe((response) => {
              let data: any = {
                text: 'Alumno creado correctamente',
                type: 'info'
              }
              self._appService.showSnackBar(data);
              self._router.navigate(['/student-edit', response.data.uuid]);
            }
          );
        }
      }
    }
    data['successCallback'] = successCallback;

    this._appService.openDialog(data);
  }

  /*
  * Hace el submit del formulario marcando en rojo los errores
  */
  onSubmit() {
    this.errorMessage = '';

    // Vemos si el formulario es valido o no
    const formValid = this.studentForm.status === 'VALID' ? true : false;
    if (formValid === false) {
      this.setForm();
    } else {
      this.onSave();
    }
  }

  /*
  * Muestra los errores de los controles del formulario
  */
  setForm() {
    this.errorMessage = '';
    for (const field in this.studentForm.controls) {
      let control = this.studentForm.get(field);
      let childControl;
      const status = control.status;
      if(status !== 'VALID'){
        if(!control.errors){
          childControl = control.controls['id_direccion']
        }
        if(this.errorMessage == ''){
          this.errorMessage = 'Por favor, corrige los siguientes errores:<br>';
          this.errorMessage += '<ul>';
        }
        switch (field) {
          case 'nombre_alumno':
            this.addMessage('Nombre', control);
            break;
          case 'apellido_1':
            this.addMessage('Primer apellido', control);
            break;
          case 'apellido_2':
            this.addMessage('Segundo apellido', control);
            break;
          case 'nif':
            this.addMessage('NIF', control);
            break;
          case 'fecha_nacimiento':
            this.addMessage('Fecha de nacimiento', control);
            break;
          case 'direccion_alumno':
            this.addMessage('Dirección del alumno', childControl);
            break;
          case 'direccion_profesor':
            this.addMessage('Dirección del profesor', childControl);
            break;
          case 'sexo':
            this.addMessage('Sexo', control);
            break;
          case 'beca':
            this.addMessage('Beca MEC', control);
            break;
          case 'municipality':
            this.addMessage('Municipio', control);
            break;
          case 'province':
            this.addMessage('Provincia', control);
            break;
          case 'numero_asignaturas_aprobadas':
            this.addMessage('Número de asignaturas aprobadas', control);
            break;
          default:
            break;
        }
      }
    }
    if(this.errorMessage != ''){
      this.errorMessage += '</ul>';
    }
  }

  /**
   * Añade mensajes de error al componente no valido
   * @param name Nombre del componente del formulario
   * @param control Objeto FormControl del componente del formulario
   */
  addMessage(name: string, control: any){
    let message = '';
    if(control.errors.valid == false && !control.errors.required){
      message += '<li>El campo "' + name + '" no tiene el formato correcto</li>';
    }
    if(control.errors.required == true){
      message += '<li>El campo "' + name + '" es obligatorio</li>';
    }
    this.errorMessage += message;
  }

  /**
   * Recupera la información del student
   */
  getStudentInfo() {
    this._studentService.getStudentByUUID$(this.uuid)
      .subscribe((response) => {
        if (response.result.status) {
          this.student = response.data as Student;
          this.studentForm.patchValue({
            uuid: this.student.uuid,
            id: this.student.id,
            nif: this.student.nif,
            nombre_alumno: this.student.nombre_alumno,
            apellido_1: this.student.apellido_1,
            apellido_2: this.student.apellido_2,
            fecha_nacimiento: this.student.fecha_nacimiento,
            numero_asignaturas_aprobadas: this.student.numero_asignaturas_aprobadas
          });
          if(this.student.direccion_alumno){
            this.studentForm.patchValue({
              direccion_alumno: {
                id_direccion: this.student.direccion_alumno.id_direccion,
                calle: this.student.direccion_alumno.calle,
                cd_municipio: this.student.direccion_alumno.cd_municipio,
                numero: this.student.direccion_alumno.numero,
                provincia: this.student.direccion_alumno.provincia
              }
            });
          }
          if(this.student.direccion_profesor){
            this.studentForm.patchValue({
              direccion_profesor: {
                id_direccion: this.student.direccion_profesor.id_direccion,
                calle: this.student.direccion_profesor.calle,
                cd_municipio: this.student.direccion_profesor.cd_municipio,
                numero: this.student.direccion_profesor.numero,
                provincia: this.student.direccion_profesor.provincia
              }
            });
          }
          if(this.student.asignaturas){
            this.asignaturas = this.student.asignaturas;
            this.getRandomNotas();
          }
          this.studentImage = this._studentService.getNextRndImg(this.student.id);
        }
      });
  }

  /**
   * Recupera la información del student
   */
  deleteStudent() {
    let self = this;
    let data = {
      title: this.TEXT_DELETE_TITLE,
      text: this.TEXT_DELETE_BODY,
      acceptText: this.TEXT_ACCEPT,
      cancelText: this.TEXT_CANCEL,
      acceptColor: 'accent',
      cancelColor: 'primary',
      titleAccent: true,
    };

    function successCallback(result: any){
      if(result.accept){
        self._studentService.deleteStudentByUUID$(self.uuid)
          .subscribe((response) => {
            let data: any = {
              text: 'Alumno eliminado correctamente',
              type: 'info'
            }
            self._appService.showSnackBar(data);
            self._router.navigate(['/students']);
          }
        );
      }
    }
    console.log(self.studentForm);

    if(this.studentForm.controls['id'].value < 1000){
      data['title'] = self.TEXT_DELETE_TITLE_ALT;
      data['text'] = self.TEXT_DELETE_BODY_ALT;
      data['showCancelButton'] = false;
    }else{
      data['successCallback'] = successCallback;
    }

    this._appService.openDialog(data);
  }

  /**
   * Añade notas aleatorias para las asignaturas y calcula la nota media del alumno
   */
  getRandomNotas() {
    let globalNota = 0;
    for (let i = 0; i < this.asignaturas.length; i++) {
      let randomNumber = Math.random() * 10;
      randomNumber = Math.round(randomNumber * 100) / 100;
      this.asignaturas[i].nota_asignatura = Math.round(randomNumber * 10) / 10;
      globalNota += randomNumber;
    }
    globalNota = globalNota / this.asignaturas.length;
    this.globalNota = Math.round(globalNota * 10) / 10;
  }

  /**
   * Añade una nueva asigantura
   */
  addAsignatura(asignaturaDialog: any) {
    let newAsignaturaObj: any = {
      curso_asignatura: asignaturaDialog.curso_asignatura,
      id_asignatura: asignaturaDialog.id_asignatura,
      id_profesor: asignaturaDialog.id_profesor,
      nombre_asignatura: asignaturaDialog.nombre_asignatura,
      nota_asignatura: 0,
      observaciones_asignatura: asignaturaDialog.observaciones_asignatura,
    }
    this.asignaturas.push(newAsignaturaObj);
    this.getRandomNotas();
    this.setAlumnoAsignaturas('add');
  }

  /**
   * Modifica una asigantura
   */
  editAsignatura(asignaturaDialog: any, oldAsignatura: any) {
    let asignaturaIndex = this.asignaturas.findIndex((obj => obj.id_asignatura == oldAsignatura.id_asignatura));
    this.asignaturas.splice(asignaturaIndex, 1);
    let newAsignaturaObj: any = {
      curso_asignatura: asignaturaDialog.curso_asignatura,
      id_asignatura: asignaturaDialog.id_asignatura,
      id_profesor: asignaturaDialog.id_profesor,
      nombre_asignatura: asignaturaDialog.nombre_asignatura,
      nota_asignatura: 0,
      observaciones_asignatura: asignaturaDialog.observaciones_asignatura,
    }
    this.asignaturas.push(newAsignaturaObj);
    this.getRandomNotas();
    this.setAlumnoAsignaturas('edit');
  }

  /**
   * Elimina una asigantura
   */
  deleteAsignatura(asignaturaDialog: any) {
    let asignaturaIndex = this.asignaturas.findIndex((obj => obj.id_asignatura == asignaturaDialog.id_asignatura));
    this.asignaturas.splice(asignaturaIndex, 1);
    this.getRandomNotas();
    this.setAlumnoAsignaturas('delete');
  }

  /**
  * Manda al rest la modificacion de las asignaturas
  **/
  setAlumnoAsignaturas(option: string){
    let asignaturas = [];
    for (let i = 0; i < this.asignaturas.length; i++) {
      asignaturas.push(this.asignaturas[i].id_asignatura);
    }

    let uuid = this.studentForm.controls['uuid'].value;
    let oStudent: any = {
      nombre_alumno: this.studentForm.controls['nombre_alumno'].value,
      apellido_1: this.studentForm.controls['apellido_1'].value,
      fecha_nacimiento: this.studentForm.controls['fecha_nacimiento'].value,
      id_direccion: this.studentForm.controls['direccion_alumno'].value.id_direccion
    }
    oStudent.asignaturas_ids = asignaturas;
    let self = this;

    this._studentService.setStudent$(oStudent, uuid)
      .subscribe((response) => {
        let text;
        switch (option) {
          case 'add':
            text = 'añadida';
            break;
          case 'edit':
            text = 'modificada';
            break;
          case 'delete':
            text = 'eliminada';
            break;
          default:
            break;
        }
        let data: any = {
          text: 'Asignatura ' + text +' correctamente',
          type: 'info'
        }
        self._appService.showSnackBar(data);
      }
    );
  }

  /**
   * Abre el dialogo para editar o añadir asiganturas
   */
  openDialogAsignatura(asignatura?: any) {
    let dialogData: any = {};
    if(asignatura){
      dialogData = asignatura;
    }
    const dialogRef = this._dialog.open(StudentEditDialog, {
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.create){
        this.addAsignatura(result.asignatura);
      }else if(result.edit){
        this.editAsignatura(result.asignatura, result.oldAsignatura);
      }else if(result.delete){
        this.deleteAsignatura(result.asignatura);
      }
    });
  }

  /*
  * Obtiene las provincias
  */
  getProv() {
    this._provincesService.getProvinces$().subscribe(
        (items) => {
          const newArray = [];
          for (let index = 0; index < items.length; index++) {
            const newElem = {
              id: items[index].CDPROV,
              text: items[index].DSPROV,
            };
            newArray.push(newElem);
          }
          this.selectOptionsProvinces = newArray;
        },
    );
  }

  /*
* Obtiene los municipios de una provincia dada
  */
  getMun(provCode: string) {
    this._provincesService.getMunicipalities$(provCode).subscribe(
        (items) => {
          const newArray = [];
          for (let index = 0; index < items.length; index++) {
            const newElem = {
              id: items[index].CDMUNI,
              text: items[index].DSMUNI,
            };
            newArray.push(newElem);
          }
          this.selectOptionsMunicipalities = newArray;
        },
    );
  }

  /*
  * Evento de change del select de provincias, para cargar los municipios
  */
  provChange() {
    let province = this.studentForm.controls['province'].value;
    this.getMun(`S:${ province}`);
  }

  /*
  * Subida correcta del pdf
  */
  onSuccessCallback(){
    this.viewerPdfUrl = '';
    let uploaderGetLastResponse = this.mvFileUploader.getLastSuccededUploadResponse();
    if(uploaderGetLastResponse){
      console.log(uploaderGetLastResponse);

      const fileId = uploaderGetLastResponse.data.file_id;
      const pdfUrl = this._configEnvironment['mova']['fileUploaderComponent']['uriUpload'] + '/' + fileId;

      const globalCredentials = this._authenticationService.getCredentials();
      const accessToken = globalCredentials.oWso2.access_token;
      const obj: any = {
        httpHeaders: { Authorization: 'Bearer ' + accessToken }
      }
      this.viewerPdfUrl = pdfUrl + '&parametros_llamada=' + JSON.stringify(obj);
    }
  }

  /*
  * Muestra el visor pdf
  */
  showPdfViewer(){
    this.viewerPdfShow = true;
    this.showPdfViewerButton = false;
  }

  /*
  * Devuelve true si es el scope sc_gestor
  */
  scopeHasPermission(){
    let hasPermission = false;
    let credentials = this._authenticationService.getCredentials();
    if(credentials){
      let scopes = credentials.oWso2.scopes;
      for (let i = 0; i < scopes.length; i++) {
        if(scopes[i].scope == 'sc_admin' && scopes[i].active){
          hasPermission = true;
          break;
        }
      }
    }
    return hasPermission;
  }

  /*
  * Cierra el visor pdf
  */
  closePdfViewer(){
    this.viewerPdfShow = false;
    this.showPdfViewerButton = true;
  }
}

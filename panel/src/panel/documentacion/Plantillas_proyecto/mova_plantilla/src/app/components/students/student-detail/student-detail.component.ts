import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '@app/services/students/student.interface';
import {StudentService} from '@app/services/students/student.service';
import {AppService} from '@mova/components/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.html',
  styleUrls: ['./student-detail.scss'],
})
export class StudentDetail implements OnInit {

  // Datos guardados del alumno
  alumno: Student;
  // Datos del formulario
  formulario: Student;
  // Columnas table
  excludeColumns = [
    'id_asignatura',
  ];
  nameColumns = [
    {
      'title': 'id_asignatura',
      'name': 'ID',
      'sortable': false,
    },
    {
      'title': 'nombre_asignatura',
      'name': 'Asignatura',
      'sortable': false,
    },
    {
      'title': 'curso',
      'name': 'Curso',
      'sortable': false,
    },
    {
      'title': 'id_profesor',
      'name': 'Profesor',
      'sortable': false,
    },
  ];
  // UUID del student
  uuid: string;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    public _studentService: StudentService,
    public readonly _appService:AppService,
  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe(
      (params) => {
        this.uuid = params.get('id');
        if(this.uuid){
          this.getStudentInfo();
        }else{
          this._router.navigate(['/student']);
        }
      },
    );
  }

  /**
   * Recupera la información del alumno
   */
  getStudentInfo() {
    this._studentService.getStudentByUUID$(this.uuid)
      .subscribe((response) => {
        if (response.result.status) {
          this.alumno = response.data as Student;
          this.formulario = Object.create(this.alumno);
          this.alumno.image =
              this._studentService.getNextRndImg(this.alumno.id);
        }
      }
    );
  }

}

import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '@mova/components/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.html',
  styleUrls: ['./student-info.scss'],
})
export class StudentInfo implements OnInit {

  constructor(
    private readonly _router: Router,
    private readonly _authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  goToStudents(){
    // Si no estamos logados, ponemos el sistema wso2 por defecto para que cuando vaya a la pantalla de login tenga marcado ya wso2.
    // También valdría autologin-wso2
    let globalCredentials = this._authenticationService.getCredentials();
    if(!globalCredentials){
      this._authenticationService.setAuthenticationSystemSelected('wso2');
    }
    this._router.navigate(['/students']);
  }

}

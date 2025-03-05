import {Component, OnInit} from '@angular/core';
import {ProvincesService} from '../../services/provinces/provinces.service';

@Component({
  selector: 'app-layout-list-detail',
  templateUrl: './layout-list-detail.html',
  styleUrls: ['./layout-list-detail.scss'],
})
export class LayoutListDetail implements OnInit {
  activeStep = 1;

  dataCuerpo:any = [
    {
      'id': 1,
      'nombre': 'Maestros',
    },
    {
      'id': 2,
      'nombre': 'Bomberos',
    },
    {
      'id': 3,
      'nombre': 'Auxiliares administrativos',
    },
    {
      'id': 4,
      'nombre': 'Técnicos de Hacienda',
    },
  ];

  dataEspecialidad:any = [
    {
      'id': 1,
      'nombre': 'Especialidad 001',
    },
    {
      'id': 2,
      'nombre': 'Especialidad 002',
    },
    {
      'id': 3,
      'nombre': 'Especialidad 003 - subgrupo 1',
    },
    {
      'id': 4,
      'nombre': 'Especialidad 004 - subgrupo 2',
    },
    {
      'id': 5,
      'nombre': 'Especialidad 005 - subgrupo 3',
    },
    {
      'id': 6,
      'nombre': 'Especialidad 006',
    },
  ];

  dataFormaAcceso:any = [
    {
      'id': 1,
      'nombre': 'Forma de acceso 001',
    },
    {
      'id': 2,
      'nombre': 'Forma de acceso 002',
    },
    {
      'id': 3,
      'nombre': 'Forma de acceso 003 - turno libre',
    },
    {
      'id': 4,
      'nombre': 'Forma de acceso 004 - promoción interna',
    },
    {
      'id': 5,
      'nombre': 'Forma de acceso 005 - libre designación',
    },
  ];

  radioSexoModel:any = null;
  radioOptionsSexo: any[] = [
    {
      'id': 'h',
      'text': 'Hombre',
    },
    {
      'id': 'm',
      'text': 'Mujer',
    },
  ];
  radioOptionsTitulacion: any[] = [
    {
      'id': 's',
      'text': 'Sí',
    },
    {
      'id': 'n',
      'text': 'No',
    },
  ];
  radioOptionsEspecialidad: any[] = [
    {
      'id': 'm',
      'text': 'Misma',
    },
    {
      'id': 'd',
      'text': 'Diferente',
    },
  ];

  selectOptionsProvincias: any[];
  selectModelProv:any = null;
  selectOptionsMunicipios: any[];
  selectModelMuni:any = null;

  checkboxCondicionesUso:boolean = null;

  constructor(
    private readonly provincesService: ProvincesService,
  ) { }

  ngOnInit() {
    this.getProvCtrl();
    this.getMunCtrl('S:02');
  }

  nextStep() {
    if (this.activeStep < 8) {
      this.activeStep++;
    }
  }

  prevStep() {
    if (this.activeStep > 1) {
      this.activeStep--;
    }
  }

  goToStep(step: number) {
    this.activeStep = step;
  }

  getProvCtrl() {
    this.provincesService.getProvinces$().subscribe(
        (items) => {
          const newArray = [];
          for (const item of items) {
            const newElem = {
              id: item.CDPROV,
              text: item.DSPROV,
            };
            newArray.push(newElem);
          }
          this.selectOptionsProvincias = newArray;
        },
    );
  }

  getMunCtrl(provCode: string) {
    this.provincesService.getMunicipalities$(provCode).subscribe(
        (items) => {
          const newArray = [];
          for (const item of items) {
            const newElem = {
              id: item.CDMUNI,
              text: item.DSMUNI,
            };
            newArray.push(newElem);
          }
          this.selectOptionsMunicipios = newArray;
        },
    );
  }

  provChange() {
    this.getMunCtrl(`S:${ this.selectModelProv}`);
  }
}

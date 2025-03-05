import {Component, OnInit} from '@angular/core';
import {MvTableResponsiveColumn} from '@mova/components/table-responsive';

@Component({
  selector: 'app-layout-table-responsive',
  templateUrl: './layout-table-responsive.html',
  styleUrls: ['./layout-table-responsive.scss'],
})
export class LayoutTableResponsive implements OnInit {
  data: any[] = [
    {
      'id': 1,
      'nombre': 'Rick',
      'apellido1': 'Sanchez',
      'apellido2': 'Perez',
      'edad': '70',
      'dni': '34844941X',
      'info':
        'Se dedica al desarrollo de soluciones de '+
        'última tecnología en el campo de la medicina',
    },
    {
      'id': 2,
      'nombre': 'Daniel',
      'apellido1': 'Larusso',
      'apellido2': 'Macchio',
      'edad': '56',
      'dni': '87179221K',
      'info':
        'Se dedica a la enseñanza de artes'+
        ' marciales en una academia particular',
    },
    {
      'id': 3,
      'nombre': 'Elizabeth',
      'apellido1': 'Bennet',
      'apellido2': 'Eyre',
      'edad': '26',
      'dni': '63663132Y',
      'info': 'Se dedica a la enseñanza de valores y ética en la universidad',
    },
  ];

  tableColumns: MvTableResponsiveColumn[] = [
    {
      'title': 'id',
      'name': 'Id',
      'sortable': true,
    },
    {
      'title': 'nombre',
      'name': 'Nombre',
      'sortable': true,
    },
    {
      'title': 'apellido1',
      'name': 'Apellido 1',
    },
    {
      'title': 'apellido2',
      'name': 'Apellido 2',
    },
    {
      'title': 'edad',
      'name': 'Edad',
    },
    {
      'title': 'dni',
      'name': 'DNI',
    },
    {
      'title': 'info',
      'name': 'Información',
    },
  ];

  constructor() { }

  ngOnInit() {
  }
}

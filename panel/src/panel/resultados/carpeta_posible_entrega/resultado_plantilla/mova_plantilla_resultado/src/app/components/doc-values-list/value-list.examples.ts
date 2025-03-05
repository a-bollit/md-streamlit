import {MvTableResponsiveColumn} from '@mova/components/table-responsive';
import {
  Student,
} from '@app/services/students/student.interface';

export const dataArrayEjemploUso: Student[] = [{
  "id": 6,
  "uuid": "f17d05a1-2f53-462d-a161-836f67b6acd1",
  "nombre_alumno": "Fátima",
  "apellido_1": "Fernández",
  "apellido_2": "Ramos",
  "nif": "00000006Y",
  "fecha_nacimiento": "2006-06-26T00:00:00",
  "edad": 15,
  "numero_asignaturas_aprobadas": 0
}, {
  "id": 1000,
  "uuid": "ca63f20b-a148-43c2-bb60-91edf335c864",
  "nombre_alumno": "Test",
  "apellido_1": "Test",
  "apellido_2": "Test",
  "nif": "83923202C",
  "fecha_nacimiento": "2001-01-21T00:00:00",
  "edad": 21,
  "numero_asignaturas_aprobadas": 0
}, {
  "id": 1008,
  "uuid": "70267c88-ee54-4793-953c-d4ceb065fef5",
  "nombre_alumno": "Test",
  "apellido_1": "Test",
  "apellido_2": "Test",
  "nif": "53687164N",
  "fecha_nacimiento": "2001-01-21T00:00:00",
  "edad": 21,
  "numero_asignaturas_aprobadas": 0
}, {
  "id": 1009,
  "uuid": "562b53e4-6c69-4dac-8a5d-519905cde8d3",
  "nombre_alumno": "Test",
  "apellido_1": "Test",
  "apellido_2": "Test",
  "nif": "41430329S",
  "fecha_nacimiento": "2001-01-21T00:00:00",
  "edad": 21,
  "numero_asignaturas_aprobadas": 0
}];

export const tableColumnsExample: MvTableResponsiveColumn[] = [
  {
    'title': 'uuid',
    'name': 'UUID',
    'sortable': true,
  },
  {
    'title': 'nombre_alumno',
    'name': 'Nombre',
    'sortable': true,
  },
];

export const tableColumnsEjemploUso: MvTableResponsiveColumn[] = [
  {
    'title': 'uuid',
    'name': 'UUID',
    'sortable': true,
  },
  {
    'title': 'nombre_alumno',
    'name': 'Nombre',
    'sortable': true,
  },
  {
    'title': 'apellido_1',
    'name': 'Apellido 1',
    'sortable': true,
  },
  {
    'title': 'apellido_2',
    'name': 'Apellido 2',
    'sortable': true,
  },
];

import {Direction} from './direction.interface';

/* eslint-disable camelcase */
export interface Student {
    uuid?: string;
    id?: number;
    nif: string;
    nombre_alumno?: string;
    apellido_1?: string;
    apellido_2?: string;
    edad?: number;
    fecha_nacimiento?: string;
    numero_asignaturas_aprobadas?: number;
    image?: string;
    asignaturas?: any;
    direccion_alumno?: Direction;
    direccion_profesor?: Direction;
}

/* eslint-disable camelcase */
export interface StudentFilter {
    uuid: {
        value: string,
        type: string,
        operation: string,
    };
    id: {
        value: number,
        type: string,
        operation: string,
    };
    nif: {
        value: string,
        type: string,
        operation: string,
    };
    nombre_alumno: {
        value: string,
        type: string,
        operation: string,
    };
    apellido_1: {
        value: string,
        type: string,
        operation: string,
    };
    apellido_2: {
        value: string,
        type: string,
        operation: string,
    };
    edad: {
        value: number,
        type: string,
        operation: string,
    };
    fecha_nacimiento: {
        value: string,
        type: string,
        operation: string,
    };
    numero_asignaturas_aprobadas: {
        value: number,
        type: string,
        operation: string,
    };
}

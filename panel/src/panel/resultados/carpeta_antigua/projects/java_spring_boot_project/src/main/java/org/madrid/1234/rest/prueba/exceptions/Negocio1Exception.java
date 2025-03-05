package org.madrid.1234.rest.prueba.exceptions;

import org.madrid.japi.api.exceptions.JapiException;
import org.madrid.japi.api.exceptions.dto.JapiError;

/**
 * Excepción de ejemplo que puede lanzar el negocio y que se gestiona en el CustomControllerAdvice.
 * Esta excepción e puede renombrar o borrar si no se usara.
 *
 * Este es el tipo de excepción que se recomienda utilizar siempre que sea posible en los services, para controlar
 * errores de negocio.
 *
 * Es necesario definir al menos un código de error que se asociará a esta excepción en el ControllerAdvice.
 * De esta forma, cada caso de error siempre tendrá asociado un código, y un mensaje descriptivo.
 * La gestión de la respuesta de error, se da ya implementada en el ControllerAdvice para este ejemplo.
 * 
 * @see CustomExceptionControllerAdvice */
public class Negocio1Exception extends JapiException {
    public Negocio1Exception(JapiError errorCode) {
        super(errorCode);
    }

    public Negocio1Exception(JapiError errorCode, Object... args) {
        super(errorCode, args);
    }

    public Negocio1Exception(Throwable e, JapiError errorCode) {
        super(e, errorCode);
    }

    public Negocio1Exception(Throwable e, JapiError errorCode, Object... args) {
        super(e, errorCode, args);
    }
}

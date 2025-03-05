package org.madrid.1234.rest.prueba.exceptions;

import lombok.Getter;
import lombok.Setter;
import org.madrid.japi.api.exceptions.dto.JapiError;

/**
 * Clase para definir los códigos y descripciones de las excepciones de negocio que se gestionarán en el
 * CustomExceptionControllerAdvice.
 * 
 * Los códigos deben empezar por el 2000. Los menores de 2000 están reservados a JAPI.
 * El código 2000 es un ejemplo que se puede eliminar o borrar. */
@Getter
public enum CustomErrorCodes implements JapiError {
    EJEMPLO_ERROR_EXPEDIENTES(400, "Error de negocio 1", 2000, "Descripción del error de negocio 1"),

    EJEMPLO_ERROR_CON_PARAMETRO(500, "Error de negocio 2", 2001, "Descripción con parámetro: %s");

    /**
     * Valor del result.info.
     * Descripción genérica del error. */
    private String info;

    /**
     * Valor del result.info.
     * Descripción genérica del error. */
    private Integer errorCode;

    /**
     * Valor del result.errors[n].descripcion.
     * Descripción detallada del error. */
    @Setter
    private String errorMessage;

    /**
     * Valor del result.http_code.
     * Código HTTP de la respuesta. */
    private int httpCode;

    private CustomErrorCodes(int httpCode, String info, Integer errorCode, String errorMessage) {
        this.httpCode = httpCode;
        this.info = info;
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }
}

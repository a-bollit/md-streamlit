package org.madrid.1234.rest.prueba.exceptions;

import lombok.extern.slf4j.Slf4j;
import org.madrid.core.standard.api.responses.StandardResponse;
import org.madrid.japi.rest.exception.management.JapiExceptionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * Ejemplo de un controlador propio de excepciones de negocio.
 * Aquí se pueden gestionar todas las excepciones de negocio que se creen.
 * 
 * En el ejemplo se está gestionando "ExcepciónNegocio1", esta excepción se puede renombrar, para que tenga
 * más sentido relacionado con el negocio, o eliminarla.
 * 
 * Negocio1Exception está definida en el paquete exceptions. */
@Slf4j
@ControllerAdvice
public class CustomExceptionControllerAdvice {
    @Autowired
    private JapiExceptionManager exceptionManager;

    @ExceptionHandler(Negocio1Exception.class)
    private ResponseEntity<StandardResponse<?>> handleNegocio1Exception(Negocio1Exception e) {
        log.error("Gestionada excepción de negocio: " + e.getMessage());
        // Devolver la excepción con un objeto result del estándar de API's
        return exceptionManager.manageException(e);
    }
}

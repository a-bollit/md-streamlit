package org.madrid.1234.rest.prueba.files.exceptions;

import org.madrid.core.standard.api.responses.StandardResponse;
import org.madrid.core8.exceptions.StorageException;
import org.madrid.japi.api.exceptions.dto.JapiError;
import org.madrid.japi.api.exceptions.dto.JapiErrorImpl;
import org.madrid.japi.rest.exception.management.JapiExceptionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * ControllerAdvice asociado al controlador de gestión de ficheros.
 * Las excepciones propagadas desde este controlador se pueden capturar y tratar mediante la anotación @ExceptionHandler
 *
 * @author Generador de API Rest 
 * @since 17-dic-2024 13:13:24
 */
@ControllerAdvice
public class FilesControllerAdvice {

	@Autowired
    private JapiExceptionManager exceptionManager;

	@ExceptionHandler(StorageException.class)
	public ResponseEntity<StandardResponse<?>> handleStorageException(StorageException e) {
		JapiError japiError = new JapiErrorImpl(e.getError().getHttpCode(), e.getError().getInfo(), e.getError().getErrorCode(), e.getError().getErrorMessage());
		return exceptionManager.manageException(e, japiError);
	}
}
package org.madrid.1234.rest.prueba.files.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

/**
 * DTO para las peticiones realizadas hacia el controlador de gestión de ficheros.
 *
 * @author Generador de API Rest 
 * @since 17-dic-2024 13:13:24
 */
@Data
public class FileInputDTO {

	@JsonProperty("file_name")
	private String fileName;

	@JsonProperty("base64")
	private String base64;

	@JsonProperty(value = "storage_type")
	private String storageType = "COMPARTIDO";
}


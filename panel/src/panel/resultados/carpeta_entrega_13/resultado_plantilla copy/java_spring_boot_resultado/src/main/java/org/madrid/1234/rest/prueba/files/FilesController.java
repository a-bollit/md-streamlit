package org.madrid.1234.rest.prueba.files;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

import javax.transaction.TransactionalException;

import org.madrid.core.standard.api.responses.StandardResponse;
import org.madrid.core8.exceptions.StorageError;
import org.madrid.core8.exceptions.StorageException;
import org.madrid.core8.model.local.StorageFileInfo;
import org.madrid.core8.services.StorageService;
import org.madrid.core8.services.local.fileid.CoreFileIDGenerator;
import org.madrid.core8.services.local.impl.CoreLocalStorageService;
import org.madrid.1234.rest.prueba.files.dtos.FileInputDTO;
import org.madrid.1234.rest.prueba.files.dtos.FileOutputDTO;
import org.madrid.japi.rest.utils.ResponseBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.InvalidMediaTypeException;

import lombok.extern.slf4j.Slf4j;


/**
 * Modelo genérico de controlador para la subida y descarga de ficheros.
 *
 * @author Generador de API Rest 
 * @since 17-dic-2024 13:13:24
 */
@Slf4j
@RestController
@RequestMapping("/v1/files")
@Transactional(
        propagation = Propagation.REQUIRED,
        rollbackFor = TransactionalException.class
)
public class FilesController {

    private static final String ATTACHMENT_HEADER = "attachment; filename=\"%s\"";
    private static final String FILE_CREATED_SUCCESSFULLY_INFO_MESSAGE = "El fichero se ha creado satisfactoriamente";
    private static final String FILE_DELETED_SUCCESSFULLY_INFO_MESSAGE = "El fichero se ha borrado satisfactoriamente";
    private static final String GENERATED_FILE_ID_INFO_MESSAGE = "Generado identificador de fichero";

    private final CoreLocalStorageService temporalFileService;
    private final CoreLocalStorageService compartidoFileService;
    private final CoreFileIDGenerator coreFileIDGenerator;

    @Autowired
    public FilesController(
    		CoreLocalStorageService storageTypeTemporal,
    		CoreLocalStorageService storageTypeCompartido,
    		CoreFileIDGenerator coreFileIDGenerator)
    {
        this.temporalFileService = storageTypeTemporal;
        this.compartidoFileService = storageTypeCompartido;
        this.coreFileIDGenerator = coreFileIDGenerator;
    }

    /**
     * Inicializa el guardado de un fichero enviado en el body.
     * En el body se ha de recibir un @see {FileInputDTO}, que contiene la siguiente información:
     *
     * - Fichero codificado en base64
     * - (Opcional) Identificador del fichero a utilizar. De recibirse se ignorará el nombre del fichero si se incluye.
     * - (Opcional) Nombre del fichero a emplear. De recibirse, se generará un identificador de fichero que contenga este nombre.
     * - (Opcional) Tipo de guardado a emplear, de no recibirse, se usará: "TEMPORAL"
     *
     * @param 	file - FileInputDTO con los datos del fichero
     * @return	Respuesta con los datos del fichero creado, en formato JSON
     * @throws 	StorageException si ha habido algún problema con el formato de los datos o al guardar el fichero
     */
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public StandardResponse<FileOutputDTO> uploadFile(@RequestBody(required = true) FileInputDTO file) throws StorageException
    {
    	log.debug("Recibida petición de subida de fichero mediante body");
    	StorageFileInfo storageInfo = getStorageService(file.getStorageType()).saveFileComplete(file.getFileName(), file.getBase64());
    	log.debug("Procesada subida de fichero en body correctamente");
        return ResponseBuilder.with(HttpStatus.OK,
        							true,
        							new FileOutputDTO(storageInfo, getStorageService(file.getStorageType()).getStorageType(), -1, -1),
        							FILE_CREATED_SUCCESSFULLY_INFO_MESSAGE);
    }

    /**
     * Inicia el guardado de un fichero enviado como Multipart.
     * Este fichero puede enviarse troceado (chunk) o entero.
     *
     * @param 	fileID - (Opcional) Identificador del fichero, de enviarse, se guardará el fichero con este identificador
     * @param 	fileName - (Opcional) Nombre del fichero a usar. De enviarse, se generará un identificador de fichero que contenga este nombre.
     * @param 	file - Fichero a guardar, como objeto MultipartFile
     * @param 	chunk - (Opcional) Índice del chunk, o partición del fichero, de ser un envío particionado.
     * @param 	chunks - (Opcional) Total de chunks, o particiones, de ser un envío particionado.
     * @return	Respuesta con los datos del fichero creado, o de la partición del fichero añadida al fichero, en formato JSON
     * @throws 	StorageException si ha habido algún problema con el formaro de los datos
     * @throws 	IOException si ha habido algún error de lectura/escritura
     */
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public StandardResponse<FileOutputDTO> uploadFile(
    		@RequestParam(name = "file_id", required = false) String fileID,
    		@RequestParam(name = "file_name", required = false) String fileName,
            @RequestParam MultipartFile file,
            @RequestParam(defaultValue = "-1") int chunk,
    		@RequestParam(defaultValue = "-1") int chunks,
    		@RequestParam(name="storage_type", required = false, defaultValue = "COMPARTIDO") String storageType,
    		@RequestParam(name = "multipart_in_base64", required = false, defaultValue = "true") Boolean multipartInBase64) throws StorageException, IOException
    {
    	StorageFileInfo storageInfo;
    	log.debug("/uploadFile file_id {}, filename {}, chunk {}, chunks {}, storageType {}", fileID, fileName, chunk, chunks, storageType);
		log.info("Tamaño del fichero multipart: {} bytes", file.getSize());

		byte[] fileContent = file.getBytes();

    	if (chunk == -1 && chunks == -1) {
            log.debug("Recibida petición de subida de fichero");
            // En este caso específico, el envío de un fichero completo vía multipart, el API manager (APIM) lo envía codificado en base64
            // por lo que es necesario realizar la conversión. Como esto no ocurre en entornos locales, y no es el funcionamiento normal
            // (dado que además la clase MultipartFile de Spring no ofrece funcionalidades para decodificarlo en este caso)
            // se incluye la propiedad multipartInBase64 para que, en entornos locales, pueda enviarse a false.
            //
            // Es importante tener en cuenta, que esto sólo deberá aplicarse en los ficheros de menos de 5MB, que, obligatoriamente, deberán
            // pasar por el APIM

            if (multipartInBase64 != null && multipartInBase64.booleanValue()) {
            	storageInfo = getStorageService(storageType).saveFileComplete(fileName, new String(fileContent, StandardCharsets.UTF_8));
            }
            else {
            	storageInfo = getStorageService(storageType).saveFileComplete(fileName, file.getInputStream());
            }

            log.debug("Procesada petición de subida de fichero satisfactoriamente, el ID generado es: " + storageInfo.getFileId());
        }
    	else {
    		if (storageType.equalsIgnoreCase("TEMPORAL")) {
    			throw new StorageException(StorageError.INVALID_STORAGE_TYPE_FOR_CHUNKS_ERROR, "TEMPORAL");
    		}

    		if (multipartInBase64 != null && multipartInBase64.booleanValue()) {
        		fileContent = Base64.getDecoder().decode(fileContent);
        	}

    		this.coreFileIDGenerator.checkFileID(fileID);
    		storageInfo = getStorageService(storageType).saveFileChunk(fileID, fileContent, chunk, chunks);
    		log.debug("Procesada petición de subida de fichero particionado satisfactoriamente, el ID asociado es: " + storageInfo.getFileId());
    	}

    	// TODO-JAPI: Llamar al negocio con los datos de StorageInfo

    	return ResponseBuilder.with(HttpStatus.OK,
    								true,
    								new FileOutputDTO(storageInfo, getStorageService(storageType).getStorageType(), chunk, chunks),
    								FILE_CREATED_SUCCESSFULLY_INFO_MESSAGE);
    }

    /**
     * Descarga el fichero asociado al identificador de fichero proporcionado, si existe.
     * De no existir, lanza una excepción.
     *
     * Tanto el nombre del fichero devuelto, como el tipo MIME de la respuesta, se pueden
     * configurar con los campos filename y mime_type en la llamada.
     *
     * @param 	fileID - Identificador del fichero a descargar
     * @param 	desiredFileName - (Opcional) Nombre que se desea para el fichero descargado
     * @param 	mimeType - (Opcional) Tipo MIME deseado en la respuesta. De no incluirse, se devolverá como OCTET_STREAM
     * @param 	storageType - (Opcional) Tipo de guardado que se desea, por defecto es TEMPORAL
     * @return	Respuesta con el fichero asociado
     * @throws 	IOException si ha habido algún problema de lectura/escritura
     * @throws 	StorageException si ha habido algún error con el formato de los datos
     */
    @GetMapping(value = "/{fileID}")
    @ResponseBody
    public ResponseEntity<Resource> downloadFile(
    		@PathVariable String fileID,
    		@RequestParam(name = "file_name", required = false) String desiredFileName,
    		@RequestParam(name = "mime_type", required = false) String mimeType,
    		@RequestParam(name = "storage_type", required = false, defaultValue = "COMPARTIDO") String storageType) throws IOException, StorageException
    {
        MediaType mediaTypeToUse;

    	try {
    		mediaTypeToUse = (mimeType != null && !mimeType.isEmpty()) ? MediaType.parseMediaType(mimeType) : MediaType.APPLICATION_OCTET_STREAM;
    	}
    	catch (InvalidMediaTypeException e) {
    		throw new StorageException(StorageError.INVALID_MIME_TYPE_ERROR, mimeType);
    	}

    	File file = getStorageService(storageType).getFile(fileID);

        if (file != null) {
            String fileName = desiredFileName != null && !desiredFileName.isEmpty() ? desiredFileName : getStorageService(storageType).getFileNameFromFileID(fileID);
            InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

            BodyBuilder response = ResponseEntity.ok().contentType(mediaTypeToUse);

            if (mediaTypeToUse == MediaType.APPLICATION_OCTET_STREAM) {
            	response.header(HttpHeaders.CONTENT_DISPOSITION, String.format(ATTACHMENT_HEADER, fileName));
            	response.header(HttpHeaders.CONTENT_LENGTH, Long.toString(file.length()));
            }

            return response.body(resource);
        }

        throw new StorageException(StorageError.FILE_NOT_FOUND_ERROR, fileID, storageType);
    }

	/**
     * Genera un identificador de fichero, que puede contener el nombre del fichero o no.
     *
     * @param desiredFileName  Nombre del fichero, opcional, sin carácteres especiales
     * @return				   Identificador de fichero
     */
    @GetMapping(value = "/file-id")
    public ResponseEntity<StandardResponse<?>> generateFileId(@RequestParam(name = "file_name", required = false) String desiredFileName) {
    	String generatedFileID = this.coreFileIDGenerator.generateID(desiredFileName);
    	FileOutputDTO responseBody = new FileOutputDTO(generatedFileID);
    	return ResponseEntity.status(HttpStatus.OK)
    						 .body(ResponseBuilder.with(HttpStatus.OK,
    								 					true,
    								 					responseBody,
    								 					GENERATED_FILE_ID_INFO_MESSAGE));
    }

	/**
     * Elimina el fichero a partir de su identificador y el sistema de guardado, que por defecto será COMPARTIDO.
     *
     * @param fileID			 Identificador del fichero
     * @param storageType		 Tipo de guardado sobre el que operar, COMPARTIDO o TEMPORAL
     * @return  				 Texto indicando si el proceso ha sido satisfactorio o no
     * @throws StorageException  Si ha habido algún problema borrando el fichero
     */
    @DeleteMapping(value = "/{fileID}")
    public ResponseEntity<StandardResponse<String>> deleteFile(
    		@PathVariable String fileID,
    		@RequestParam(name = "storage_type", required = false, defaultValue = "COMPARTIDO") String storageType) throws StorageException
    {
        boolean deleted = getStorageService(storageType).remove(fileID);

        if (deleted) {
            return ResponseEntity.ok().body(ResponseBuilder.with(HttpStatus.OK, true, null, FILE_DELETED_SUCCESSFULLY_INFO_MESSAGE));
        }

        throw new StorageException(StorageError.FILE_NOT_FOUND_ERROR, fileID, storageType);
    }

    private StorageService getStorageService(String storageType) throws StorageException {
    	if (storageType.equalsIgnoreCase("COMPARTIDO")) {
    		return this.compartidoFileService;
    	}
    	else if (storageType.equalsIgnoreCase("TEMPORAL")) {
    		return this.temporalFileService;
    	}
    	else {
    		throw new StorageException(StorageError.STORAGE_TYPE_NOT_VALID_ERROR, storageType, "TEMPORAL, COMPARTIDO");
    	}
    }
}


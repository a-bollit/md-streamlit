package org.madrid.1234.rest.prueba.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import java.util.Set;
import lombok.extern.slf4j.Slf4j;
import org.madrid.1234.rest.prueba.t062.doc.GetGimpredocuCddocumResponse;
import org.madrid.1234.rest.prueba.t062.doc.GetGimpredocuResponse;
import org.madrid.1234.rest.prueba.t062.dtos.GetGimpredocuCddocumOutputDTO;
import org.madrid.1234.rest.prueba.t062.dtos.GetGimpredocuOutputDTO;
import org.madrid.1234.rest.prueba.t062.services.T062Service;
import org.madrid.core.standard.api.responses.ResponseMessages;
import org.madrid.core.standard.api.responses.StandardResponse;
import org.madrid.japi.api.exceptions.ServiceException;
import org.madrid.japi.rest.utils.ResponseBuilder;
import org.madrid.japi.starter.openapi.documentation.BadRequestResponse;
import org.madrid.japi.starter.openapi.documentation.NotAuthorizedResponse;
import org.madrid.japi.starter.openapi.documentation.NotFoundResponse;
import org.madrid.japi.starter.openapi.documentation.WithoutPermissionsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controlador asociado a la entidad: T062
 * Controlador REST para el objeto de dominio: <code>{@link org.madrid.1234.rest.prueba.t062.domain.T062}</code>
 *
 *
 * @author Generador de API Rest
 */
@Slf4j
@RestController("gimpredocuV1Controller")
@RequestMapping("/v1/gimpredocu")
@Validated
public class GimpredocuV1Controller {
    private static final String SUCCESSFUL_RESPONSE_MESSAGE = "Respuesta satisfactoria";

    /**
     * Referencia al servicio correspondiente al objeto de dominio: T062 */
    @Autowired
    private T062Service t062Service;

    /**
     * Valor por defecto para limit, leído del fichero .properties empleado */
    @Value("${japi.rest.paginated-request-default-limit}")
    private Integer limitDefaultValue;

    /**
     * método getById del controlador REST para el objeto de dominio: T062 */
    @GetMapping(
            value = "/{cddocum}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    @ResponseStatus(
            code = HttpStatus.OK
    )
    @Operation(
            summary = "Obtener un registro de GIMPREDOCU por su identificador",
            description = "Descripción de getById",
            tags = "Gimpredocus (consultas)"
    )
    @ApiResponse(
            responseCode = "200",
            description = "Obtenido el recurso satisfactoriamente",
            content = @Content(schema = @Schema(implementation = GetGimpredocuCddocumResponse.class))
    )
    @ApiResponse(
            responseCode = "400",
            description = ResponseMessages.CODE_400,
            content = @Content(schema = @Schema(implementation = BadRequestResponse.class))
    )
    @ApiResponse(
            responseCode = "401",
            description = ResponseMessages.CODE_401,
            content = @Content(schema = @Schema(implementation = NotAuthorizedResponse.class))
    )
    @ApiResponse(
            responseCode = "403",
            description = ResponseMessages.CODE_403,
            content = @Content(schema = @Schema(implementation = WithoutPermissionsResponse.class))
    )
    @ApiResponse(
            responseCode = "404",
            description = ResponseMessages.CODE_404,
            content = @Content(schema = @Schema(implementation = NotFoundResponse.class))
    )
    public StandardResponse<GetGimpredocuCddocumOutputDTO> getGimpredocuCddocum(
            @PathVariable("cddocum") String cddocum,
            @RequestParam(value = "$expand", required = false) @Parameter(name = "$expand", description = "Indica si se ha de expandir y añadir una propiedad relacionada") Set<String> expand,
            @RequestParam(value = "$select", required = false) @Parameter(name = "$select", description = "Especifica qué propiedades se han de recuperar, sean estas relacionadas o no") Set<String> select,
            @RequestParam(value = "$exclude", required = false) @Parameter(name = "$exclude", description = "Especifica qué propiedades no se han de añadir a la respuesta") Set<String> exclude)
            throws ServiceException {
        // Se llama al método asociado en el servicio, que devuelve el resultado de la búsqueda ya mapeado
        GetGimpredocuCddocumOutputDTO outputDto = this.t062Service.getGimpredocuCddocum(cddocum, select, exclude, expand);

        // Construye la respuesta y la devuelve
        return ResponseBuilder.with(HttpStatus.OK, true, outputDto, SUCCESSFUL_RESPONSE_MESSAGE);
    }

    /**
     * método GET del controlador REST para el objeto de dominio: T062 */
    @GetMapping(
            value = "/",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    @ResponseStatus(
            code = HttpStatus.OK
    )
    @Operation(
            summary = "Obtener todos los registros de GIMPREDOCU",
            description = "Descripción de get",
            tags = "Gimpredocus (consultas)"
    )
    @ApiResponse(
            responseCode = "200",
            description = "Obtenido el recurso satisfactoriamente",
            content = @Content(schema = @Schema(implementation = GetGimpredocuResponse.class))
    )
    @ApiResponse(
            responseCode = "400",
            description = ResponseMessages.CODE_400,
            content = @Content(schema = @Schema(implementation = BadRequestResponse.class))
    )
    @ApiResponse(
            responseCode = "401",
            description = ResponseMessages.CODE_401,
            content = @Content(schema = @Schema(implementation = NotAuthorizedResponse.class))
    )
    @ApiResponse(
            responseCode = "403",
            description = ResponseMessages.CODE_403,
            content = @Content(schema = @Schema(implementation = WithoutPermissionsResponse.class))
    )
    @ApiResponse(
            responseCode = "404",
            description = ResponseMessages.CODE_404,
            content = @Content(schema = @Schema(implementation = NotFoundResponse.class))
    )
    public StandardResponse<GetGimpredocuOutputDTO> getGimpredocu(
            @RequestParam(value = "$expand", required = false) @Parameter(name = "$expand", description = "Indica si se ha de expandir y añadir una propiedad relacionada") Set<String> expand,
            @RequestParam(value = "$select", required = false) @Parameter(name = "$select", description = "Especifica qué propiedades se han de recuperar, sean estas relacionadas o no") Set<String> select,
            @RequestParam(value = "$exclude", required = false) @Parameter(name = "$exclude", description = "Especifica qué propiedades no se han de añadir a la respuesta") Set<String> exclude)
            throws ServiceException {
        // Se llama al método asociado en el servicio, que devuelve el resultado de la búsqueda ya mapeado
        GetGimpredocuOutputDTO outputDto = this.t062Service.getGimpredocu(select, exclude, expand);

        // Construye la respuesta y la devuelve
        return ResponseBuilder.with(HttpStatus.OK, true, outputDto, SUCCESSFUL_RESPONSE_MESSAGE);
    }
}

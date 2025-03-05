package org.madrid.1234.rest.prueba.status;

import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import org.madrid.core.standard.api.responses.ResponseMessages;
import org.madrid.core.standard.api.responses.StandardResponse;
import org.madrid.japi.checks.health.status.StatusDTO;
import org.madrid.japi.checks.health.status.services.StatusService;
import org.madrid.japi.checks.health.status.StatusResponse;
import org.madrid.japi.rest.utils.ResponseBuilder;
import org.madrid.japi.starter.openapi.documentation.NotAuthorizedResponse;
import org.madrid.japi.starter.openapi.documentation.NotFoundResponse;
import org.madrid.japi.starter.openapi.documentation.WithoutPermissionsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

/**
 * Este recurso no puede ser eliminado porque siempre cada Servicio REST
 * debe tener un recurso /status al menos y uno por cada versión del API
 * <p/>
 * Puede ser modificada la forma de rellenar el StatusDTO
 * La forma estándar será extender statusService y sobreescribir el método
 * getStatus() llamando siempre al super()
 */
@RestController
@RequestMapping(value= {"/status","/v1/status"})
public class StatusController {

	/**
     * Servicio que rellena el statusDTO con información de
     * la aplicación y su estado
     */
    private final StatusService statusService;

    @Autowired
    public StatusController(StatusService statusService) {
        this.statusService = statusService;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiResponse(responseCode = "200", description = "Server UP", content = @Content(schema = @Schema(implementation = StatusResponse.class)))
    @ApiResponse(responseCode = "401", description = ResponseMessages.CODE_401, content = @Content(schema = @Schema(implementation = NotAuthorizedResponse.class)))
    @ApiResponse(responseCode = "403", description = ResponseMessages.CODE_403, content = @Content(schema = @Schema(implementation = WithoutPermissionsResponse.class)))
    @ApiResponse(responseCode = "404", description = ResponseMessages.CODE_404, content = @Content(schema = @Schema(implementation = NotFoundResponse.class)))
    public StandardResponse<StatusDTO> status() {
        return ResponseBuilder.with(HttpStatus.OK, true, statusService.getStatus(true), "Server UP");
    }
}
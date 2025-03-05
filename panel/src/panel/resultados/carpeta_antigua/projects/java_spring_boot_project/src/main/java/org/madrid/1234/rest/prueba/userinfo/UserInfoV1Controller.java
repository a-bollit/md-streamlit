package org.madrid.1234.rest.prueba.userinfo;

import org.madrid.core.standard.api.responses.StandardResponse;
import org.madrid.japi.api.exceptions.JapiException;
import org.madrid.1234.rest.prueba.userinfo.dtos.UserInfoDto;
import org.madrid.1234.rest.prueba.userinfo.services.UserInfoService;
import org.madrid.japi.rest.utils.ResponseBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;

/**
 * Controlador REST para el obtener la información del usuario identificado que realiza la llamada.
 *
 * @author Generador de API Rest 
 * @since 17-dic-2024 13:13:24
 */
@RestController
@RequestMapping("/v1/user-info/me")
@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
public class UserInfoV1Controller {
    /**
     * Referencia al servicio UserInfoService
     */
    @Autowired
    private UserInfoService userInfoService;

    /**
     * Método Get /userInfo
     */
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(code = HttpStatus.OK)
    @Operation(
        summary = "Información del usuario",
        description = "Obtiene información del usuario conectado basada en el token JWT",
        tags = "Información del usuario"
    )
    public StandardResponse<UserInfoDto> getUserInfo() throws JapiException {

        // Llamar al negocio para obtener los datos en un dto
        UserInfoDto userInfo = userInfoService.getUserInfo();
        return ResponseBuilder.with(HttpStatus.OK, true, userInfo, "Respuesta correcta");
    }
}


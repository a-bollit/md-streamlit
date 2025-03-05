package org.madrid.1234.rest.prueba.userinfo.services;

import org.madrid.1234.rest.prueba.userinfo.dtos.UserInfoDto;
import org.madrid.japi.api.exceptions.JapiException;

/**
 * Interfaz asociada al servicio de obtención de información del usuario.
 *
 * @author Generador de API Rest 
 * @since 17-dic-2024 13:13:24
 */
public interface UserInfoService {

    UserInfoDto getUserInfo() throws JapiException;
}


package org.madrid.1234.rest.prueba.userinfo.services;

import java.util.Map;

import org.madrid.1234.rest.prueba.userinfo.dtos.UserInfoDto;
import org.madrid.japi.security.model.JapiAuthentication;
import org.madrid.japi.security.utils.UserUtils;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.madrid.japi.api.exceptions.JapiException;
import org.madrid.japi.api.exceptions.dto.JapiError;
import org.madrid.japi.api.exceptions.dto.JapiErrorImpl;
import org.madrid.japi.api.exceptions.JapiErrors;

/**
 * Servicio para el recurso /user-info
 *
 * @author Generador de API Rest 
 * @since 17-dic-2024 13:13:24
 */
@Service("userInfoServiceImpl")
public class UserInfoServiceImpl implements UserInfoService {

	/**
     * Devuelve los datos del usuario en un DTO para el recurso /user-info/me
     *
     * @throws JapiException - Si ha habido algún problema obteniendo el token o su información
     */
    @Override
    public UserInfoDto getUserInfo() throws JapiException {
    	if (SecurityContextHolder.getContext() == null || SecurityContextHolder.getContext().getAuthentication() == null || !(SecurityContextHolder.getContext()
                .getAuthentication() instanceof JapiAuthentication)) {
    		JapiError noJWTError = new JapiErrorImpl(JapiErrors.AuthenticationErrors.SEGURIDAD_JWT_NO_ACTIVADA);
        	throw new JapiException(noJWTError);
        }

        UserInfoDto userInfoDto = new UserInfoDto();

        // Obtener datos básicos
        userInfoDto.setUserName(UserUtils.getUserName());
        userInfoDto.setNif(UserUtils.getUserNif());

        // Obtener roles
        for (GrantedAuthority grantedAuthority : UserUtils.getUserRoles()) {
            String rol = grantedAuthority.getAuthority();
            userInfoDto.getRoles().add(rol);
        }

        // Obtener userDetails
        Map<String, String> map = UserUtils.getUserDetails();
        for (Map.Entry<String, String> entry : map.entrySet()) {
            userInfoDto.addUserDetail(entry.getKey(), entry.getValue());
        }

        return userInfoDto;
    }
}

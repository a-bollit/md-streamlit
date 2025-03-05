package org.madrid.1234.rest.prueba.userinfo.dtos;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * DTO asociado al servicio de obtención de datos del usuario.
 *
 * @author Generador de API Rest 
 * @since 17-dic-2024 13:13:24
 */
@Data
public class UserInfoDto {

    private String userName;
    private String nif;
    private List<String> roles =  new ArrayList<>();
    private List<UserDetail> userDetails =  new ArrayList<>();



    public void addUserDetail(String key, String value) {
        userDetails.add(new UserDetail(key,value));
    }

    @Data
    @AllArgsConstructor
    private class UserDetail {
        private String key;
        private String value;
    }

}


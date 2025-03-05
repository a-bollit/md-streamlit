package org.madrid.1234.rest.prueba.t062.mappers;

import lombok.extern.slf4j.Slf4j;
import org.madrid.1234.rest.prueba.t062.domain.T062;
import org.madrid.1234.rest.prueba.t062.dtos.GetGimpredocuOutputDTO;
import org.madrid.japi.api.model.mapper.JapiAbstractCustomMapper;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

/**
 * Clase encargada de transformar de un objeto de la entidad <code>{@link org.madrid.1234.rest.prueba.t062.domain.T062}</code> a un DTO.
 * Este DTO es el DTO de salida, el que recibe el usuario.
 */
@Component("getGimpredocuOutputMapper")
@Slf4j
public class GetGimpredocuOutputMapper extends JapiAbstractCustomMapper<GetGimpredocuOutputDTO, T062> {
    private static final String ENTITY_NOT_NULL_MESSAGE = "El parámetro entity es nulo";

    public GetGimpredocuOutputDTO entityToDto(T062 entity) {
        Assert.notNull(entity, ENTITY_NOT_NULL_MESSAGE);

        GetGimpredocuOutputDTO dto = new GetGimpredocuOutputDTO();

        return dto;
    }
}

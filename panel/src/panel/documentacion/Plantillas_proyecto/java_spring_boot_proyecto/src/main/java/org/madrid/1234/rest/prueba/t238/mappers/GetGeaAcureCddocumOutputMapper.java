package org.madrid.1234.rest.prueba.t238.mappers;

import lombok.extern.slf4j.Slf4j;
import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureCddocumOutputDTO;
import org.madrid.japi.api.model.mapper.JapiAbstractCustomMapper;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

/**
 * Clase encargada de transformar de un objeto de la entidad <code>{@link org.madrid.1234.rest.prueba.t238.domain.T238}</code> a un DTO.
 * Este DTO es el DTO de salida, el que recibe el usuario.
 */
@Component("getGeaAcureCddocumOutputMapper")
@Slf4j
public class GetGeaAcureCddocumOutputMapper extends JapiAbstractCustomMapper<GetGeaAcureCddocumOutputDTO, T238> {
    private static final String ENTITY_NOT_NULL_MESSAGE = "El parámetro entity es nulo";

    public GetGeaAcureCddocumOutputDTO entityToDto(T238 entity) {
        Assert.notNull(entity, ENTITY_NOT_NULL_MESSAGE);

        GetGeaAcureCddocumOutputDTO dto = new GetGeaAcureCddocumOutputDTO();

        if (entity.getCddocum() != null) {
            dto.setCddocum(entity.getCddocum());
        }

        if (entity.getCdunidad() != null) {
            dto.setDescription(entity.getCdunidad());
        }

        return dto;
    }
}


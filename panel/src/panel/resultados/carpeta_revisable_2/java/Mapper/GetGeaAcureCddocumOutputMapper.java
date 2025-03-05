package org.madrid.1234.rest.prueba.t238.mappers;

import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureCddocumOutputDTO;
import org.madrid.japi.jpa.mappers.JapiAbstractCustomMapper;
import org.springframework.stereotype.Component;

@Component
public class GetGeaAcureCddocumOutputMapper extends JapiAbstractCustomMapper<GetGeaAcureCddocumOutputDTO, T238> {
    @Override
    public GetGeaAcureCddocumOutputDTO entityToDto(T238 entity) {
        GetGeaAcureCddocumOutputDTO dto = new GetGeaAcureCddocumOutputDTO();
        dto.setCddocum(entity.getCddocum());
        dto.setDescripcion(entity.getDescripcion());
        // Mapear otros campos según se requiera
        return dto;
    }

    @Override
    public T238 dtoToEntity(GetGeaAcureCddocumOutputDTO dto) {
        T238 entity = new T238();
        entity.setCddocum(dto.getCddocum());
        entity.setDescripcion(dto.getDescripcion());
        // Mapear otros campos según se requiera
        return entity;
    }
}
package org.madrid.1234.rest.prueba.t238.mappers;

import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureCddocumOutputDTO;
import org.madrid.japi.api.mappers.JapiAbstractCustomMapper;
import org.springframework.stereotype.Component;

@Component
public class GetGeaAcureCddocumOutputMapper extends JapiAbstractCustomMapper<T238, GetGeaAcureCddocumOutputDTO> {
    @Override
    public GetGeaAcureCddocumOutputDTO entityToDto(T238 entity) {
        if (entity == null) {
            return null;
        }
        GetGeaAcureCddocumOutputDTO dto = new GetGeaAcureCddocumOutputDTO();
        dto.setId(entity.getId());
        dto.setCddocum(entity.getCddocum());
        dto.setNombreDocumento(entity.getNombreDocumento());
        // Map additional attributes as necessary
        return dto;
    }

    @Override
    public T238 dtoToEntity(GetGeaAcureCddocumOutputDTO dto) {
        if (dto == null) {
            return null;
        }
        T238 entity = new T238();
        entity.setId(dto.getId());
        entity.setCddocum(dto.getCddocum());
        entity.setNombreDocumento(dto.getNombreDocumento());
        // Map additional attributes as necessary
        return entity;
    }
}
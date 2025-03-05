package org.madrid.1234.rest.prueba.t238.mappers;

import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureCddocumOutputDTO;
import org.madrid.japi.api.mappings.JapiAbstractCustomMapper;
import org.springframework.stereotype.Component;

@Component
public class GetGeaAcureCddocumOutputMapper extends JapiAbstractCustomMapper<T238, GetGeaAcureCddocumOutputDTO> {

    @Override
    public GetGeaAcureCddocumOutputDTO entityToDto(T238 entity) {
        if (entity == null) {
            return null;
        }

        GetGeaAcureCddocumOutputDTO dto = new GetGeaAcureCddocumOutputDTO();
        
        dto.setCddocum(entity.getCddocum());
        
        // Map other fields accordingly
        // Example:
        dto.setTitulo(entity.getTitulo());
        
        return dto;
    }

    @Override
    public T238 dtoToEntity(GetGeaAcureCddocumOutputDTO dto) {
        if (dto == null) {
            return null;
        }

        T238 entity = new T238();
        
        entity.setCddocum(dto.getCddocum());
        
        // Map other fields accordingly
        // Example:
        entity.setTitulo(dto.getTitulo());
        
        return entity;
    }
}
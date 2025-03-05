package org.madrid.1234.rest.prueba.t238.mappers;

import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.japi.api.mappers.JapiAbstractCustomMapper;
import org.springframework.stereotype.Component;

@Component
public class GetGeaAcureOutputMapper extends JapiAbstractCustomMapper<T238, GetGeaAcureOutputDTO> {
    @Override
    public GetGeaAcureOutputDTO entityToDto(T238 entity) {
        if (entity == null) {
            return null;
        }
        GetGeaAcureOutputDTO dto = new GetGeaAcureOutputDTO();
        dto.setId(entity.getId());
        dto.setNombre(entity.getNombre());
        dto.setDescripcion(entity.getDescripcion());
        // Map additional attributes as necessary
        return dto;
    }

    @Override
    public T238 dtoToEntity(GetGeaAcureOutputDTO dto) {
        if (dto == null) {
            return null;
        }
        T238 entity = new T238();
        entity.setId(dto.getId());
        entity.setNombre(dto.getNombre());
        entity.setDescripcion(dto.getDescripcion());
        // Map additional attributes as necessary
        return entity;
    }
}
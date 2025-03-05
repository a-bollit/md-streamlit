package org.madrid.1234.rest.prueba.t238.mappers;

import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.japi.api.mapper.JapiAbstractCustomMapper;
import org.springframework.stereotype.Component;

@Component
public class GetGeaAcureOutputMapper extends JapiAbstractCustomMapper<T238, GetGeaAcureOutputDTO> {
    @Override
    public GetGeaAcureOutputDTO entityToDto(T238 entity) {
        if(entity == null) {
            return null;
        }

        GetGeaAcureOutputDTO dto = new GetGeaAcureOutputDTO();
        dto.setCddocum(entity.getCddocum());
        dto.setItimpre(entity.getItimpre());
        dto.setNumrelacion(entity.getNumrelacion());
        dto.setFcEmision(entity.getFcEmision());
        dto.setCbMarca(entity.getCbMarca());

        return dto;
    }

    @Override
    public T238 dtoToEntity(GetGeaAcureOutputDTO dto) {
        if(dto == null) {
            return null;
        }

        T238 entity = new T238();
        entity.setCddocum(dto.getCddocum());
        entity.setItimpre(dto.getItimpre());
        entity.setNumrelacion(dto.getNumrelacion());
        entity.setFcEmision(dto.getFcEmision());
        entity.setCbMarca(dto.getCbMarca());

        return entity;
    }
}
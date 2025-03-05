package org.madrid.1234.rest.prueba.t238.mappers;

import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.japi.jpa.mappers.JapiAbstractCustomMapper;
import org.springframework.stereotype.Component;

@Component
public class GetGeaAcureOutputMapper extends JapiAbstractCustomMapper<GetGeaAcureOutputDTO, T238> {
    @Override
    public GetGeaAcureOutputDTO entityToDto(T238 entity) {
        GetGeaAcureOutputDTO dto = new GetGeaAcureOutputDTO();
        dto.setCampo1(entity.getCampo1());
        dto.setCampo2(entity.getCampo2());
        // Mapear otros campos según se requiera
        return dto;
    }

    @Override
    public T238 dtoToEntity(GetGeaAcureOutputDTO dto) {
        T238 entity = new T238();
        entity.setCampo1(dto.getCampo1());
        entity.setCampo2(dto.getCampo2());
        // Mapear otros campos según se requiera
        return entity;
    }
}
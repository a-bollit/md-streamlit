import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.japi.api.mappers.JapiAbstractCustomMapper;
import org.springframework.stereotype.Component;

@Component
public class GetGeaAcureOutputMapper extends JapiAbstractCustomMapper<GetGeaAcureOutputDTO, T238> {
    @Override
    public GetGeaAcureOutputDTO entityToDto(T238 entity) {
        GetGeaAcureOutputDTO dto = new GetGeaAcureOutputDTO();
        dto.setField1(entity.getField1());
        dto.setField2(entity.getField2());
        // Map more fields as necessary
        return dto;
    }

    @Override
    public T238 dtoToEntity(GetGeaAcureOutputDTO dto) {
        T238 entity = new T238();
        entity.setField1(dto.getField1());
        entity.setField2(dto.getField2());
        // Map more fields as necessary
        return entity;
    }
}
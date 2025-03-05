import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureCddocumOutputDTO;
import org.madrid.japi.api.mappers.JapiAbstractCustomMapper;
import org.springframework.stereotype.Component;

@Component
public class GetGeaAcureCddocumOutputMapper extends JapiAbstractCustomMapper<GetGeaAcureCddocumOutputDTO, T238> {
    @Override
    public GetGeaAcureCddocumOutputDTO entityToDto(T238 entity) {
        GetGeaAcureCddocumOutputDTO dto = new GetGeaAcureCddocumOutputDTO();
        dto.setCddocum(entity.getCddocum());
        dto.setField1(entity.getField1());
        dto.setField2(entity.getField2());
        // Map more fields as necessary
        return dto;
    }

    @Override
    public T238 dtoToEntity(GetGeaAcureCddocumOutputDTO dto) {
        T238 entity = new T238();
        entity.setCddocum(dto.getCddocum());
        entity.setField1(dto.getField1());
        entity.setField2(dto.getField2());
        // Map more fields as necessary
        return entity;
    }
}
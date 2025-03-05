import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureCddocumOutputDTO;
import org.madrid.japi.api.mapping.JapiAbstractCustomMapper;
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
        dto.setCbMarca(entity.getCbMarca());
        dto.setDocumento(entity.getDocumento());
        dto.setDsdocum(entity.getDsdocum());
        dto.setExpediente(entity.getExpediente());
        dto.setInteresado(entity.getInteresado());
        dto.setItOficioPdf(entity.getItOficioPdf());
        dto.setItFirmado(entity.getItFirmado());
        dto.setItRegistrado(entity.getItRegistrado());
        dto.setFcEmision(entity.getFcEmision());
        dto.setFcReal(entity.getFcReal());
        dto.setItimpre(entity.getItimpre());
        dto.setNumRelacion(entity.getNumRelacion());
        dto.setCdDeptno(entity.getCdDeptno());
        dto.setCdTexp(entity.getCdTexp());
        dto.setCdNexp(entity.getCdNexp());
        dto.setCdDigito(entity.getCdDigito());
        dto.setCdAexp(entity.getCdAexp());
        dto.setCdInteresado(entity.getCdInteresado());
        dto.setCdInteresadoOld(entity.getCdInteresadoOld());
        dto.setCdSubInt(entity.getCdSubInt());
        dto.setCdSubIntOld(entity.getCdSubIntOld());
        dto.setDsNombre(entity.getDsNombre());
        dto.setDsApellido1(entity.getDsApellido1());
        dto.setDsApellido2(entity.getDsApellido2());
        dto.setDsRazonSoc(entity.getDsRazonSoc());
        dto.setCdPais(entity.getCdPais());
        dto.setCdProv(entity.getCdProv());
        dto.setCdMuni(entity.getCdMuni());
        dto.setDsDireccion(entity.getDsDireccion());
        dto.setDsDireccion1(entity.getDsDireccion1());
        dto.setDsDireccion2(entity.getDsDireccion2());
        dto.setCdPostal(entity.getCdPostal());
        dto.setDsTelefono(entity.getDsTelefono());
        dto.setDsFax(entity.getDsFax());
        dto.setClave2(entity.getClave2());
        dto.setContenido2(entity.getContenido2());

        return dto;
    }

    @Override
    public T238 dtoToEntity(GetGeaAcureCddocumOutputDTO dto) {
        if (dto == null) {
            return null;
        }

        T238 entity = new T238();
        entity.setCddocum(dto.getCddocum());
        entity.setCbMarca(dto.getCbMarca());
        entity.setDocumento(dto.getDocumento());
        entity.setDsdocum(dto.getDsdocum());
        entity.setExpediente(dto.getExpediente());
        entity.setInteresado(dto.getInteresado());
        entity.setItOficioPdf(dto.getItOficioPdf());
        entity.setItFirmado(dto.getItFirmado());
        entity.setItRegistrado(dto.getItRegistrado());
        entity.setFcEmision(dto.getFcEmision());
        entity.setFcReal(dto.getFcReal());
        entity.setItimpre(dto.getItimpre());
        entity.setNumRelacion(dto.getNumRelacion());
        entity.setCdDeptno(dto.getCdDeptno());
        entity.setCdTexp(dto.getCdTexp());
        entity.setCdNexp(dto.getCdNexp());
        entity.setCdDigito(dto.getCdDigito());
        entity.setCdAexp(dto.getCdAexp());
        entity.setCdInteresado(dto.getCdInteresado());
        entity.setCdInteresadoOld(dto.getCdInteresadoOld());
        entity.setCdSubInt(dto.getCdSubInt());
        entity.setCdSubIntOld(dto.getCdSubIntOld());
        entity.setDsNombre(dto.getDsNombre());
        entity.setDsApellido1(dto.getDsApellido1());
        entity.setDsApellido2(dto.getDsApellido2());
        entity.setDsRazonSoc(dto.getDsRazonSoc());
        entity.setCdPais(dto.getCdPais());
        entity.setCdProv(dto.getCdProv());
        entity.setCdMuni(dto.getCdMuni());
        entity.setDsDireccion(dto.getDsDireccion());
        entity.setDsDireccion1(dto.getDsDireccion1());
        entity.setDsDireccion2(dto.getDsDireccion2());
        entity.setCdPostal(dto.getCdPostal());
        entity.setDsTelefono(dto.getDsTelefono());
        entity.setDsFax(dto.getDsFax());
        entity.setClave2(dto.getClave2());
        entity.setContenido2(dto.getContenido2());

        return entity;
    }

    @Override
    public List<GetGeaAcureCddocumOutputDTO> entityListToDtoList(List<T238> entityList) {
        if (entityList == null) {
            return null;
        }

        List<GetGeaAcureCddocumOutputDTO> dtoList = new ArrayList<>();
        for (T238 entity : entityList) {
            dtoList.add(this.entityToDto(entity));
        }

        return dtoList;
    }

    @Override
    public List<T238> dtoListToEntityList(List<GetGeaAcureCddocumOutputDTO> dtoList) {
        if (dtoList == null) {
            return null;
        }

        List<T238> entityList = new ArrayList<>();
        for (GetGeaAcureCddocumOutputDTO dto : dtoList) {
            entityList.add(this.dtoToEntity(dto));
        }

        return entityList;
    }
}
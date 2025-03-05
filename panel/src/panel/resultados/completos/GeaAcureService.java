import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import javax.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.madrid.1234.rest.prueba.t238.dao.T238DAO;
import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureCddocumOutputDTO;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.1234.rest.prueba.t238.mappers.GetGeaAcureCddocumOutputMapper;
import org.madrid.1234.rest.prueba.t238.mappers.GetGeaAcureOutputMapper;
import org.madrid.japi.api.exceptions.ServiceException;
import org.madrid.japi.jpa.services.JapiBaseServiceImpl;
import org.madrid.japi.rest.services.translation.JsonToEntityFieldTranslatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service("GeaAcureService")
@AllArgsConstructor
@NoArgsConstructor
@Transactional(
        propagation = Propagation.REQUIRED,
        rollbackFor = { ServiceException.class, RuntimeException.class },
        readOnly = true,
        transactionManager = "transactionManager"
)
public class GeaAcureService extends JapiBaseServiceImpl<T238, String, T238DAO> {

    @Autowired
    private T238DAO t238DAO;

    @Autowired
    private GetGeaAcureOutputMapper getGeaAcureOutputMapper;

    @Autowired
    private GetGeaAcureCddocumOutputMapper getGeaAcureCddocumOutputMapper;

    @Autowired
    private JsonToEntityFieldTranslatorService traslationService;

    @PostConstruct
    public void initGeaAcureService() {
        setDao(t238DAO);
    }

    @Transactional(readOnly = true)
    public List<GetGeaAcureOutputDTO> findAll() {
        List<T238> entities = t238DAO.findAll();
        return entities.stream()
                .map(getGeaAcureOutputMapper::entityToDto)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public GetGeaAcureOutputDTO findById(String cddocum) {
        T238 entity = t238DAO.findById(cddocum)
                .orElseThrow(() -> new ServiceException("GeaAcure entity not found with id: " + cddocum));
        return getGeaAcureOutputMapper.entityToDto(entity);
    }

    @Transactional
    public GetGeaAcureOutputDTO save(GetGeaAcureOutputDTO geaAcureDTO) {
        T238 entity = getGeaAcureOutputMapper.dtoToEntity(geaAcureDTO);
        T238 savedEntity = t238DAO.save(entity);
        return getGeaAcureOutputMapper.entityToDto(savedEntity);
    }

    @Transactional
    public GetGeaAcureOutputDTO update(String cddocum, GetGeaAcureOutputDTO geaAcureDTO) {
        if (!t238DAO.existsById(cddocum)) {
            throw new ServiceException("GeaAcure entity not found with id: " + cddocum);
        }
        T238 entity = getGeaAcureOutputMapper.dtoToEntity(geaAcureDTO);
        entity.setCddocum(cddocum);
        T238 updatedEntity = t238DAO.save(entity);
        return getGeaAcureOutputMapper.entityToDto(updatedEntity);
    }

    @Transactional
    public void delete(String cddocum) {
        if (!t238DAO.existsById(cddocum)) {
            throw new ServiceException("GeaAcure entity not found with id: " + cddocum);
        }
        t238DAO.deleteById(cddocum);
    }

    public GetGeaAcureCddocumOutputDTO getCddocumDetails(String cddocum) {
        T238 entity = t238DAO.findById(cddocum)
                .orElseThrow(() -> new ServiceException("GeaAcure entity not found with id: " + cddocum));
        return getGeaAcureCddocumOutputMapper.entityToDto(entity);
    }
}
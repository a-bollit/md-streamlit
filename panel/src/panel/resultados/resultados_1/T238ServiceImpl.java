package org.madrid.1234.rest.prueba.t238.services;

import java.util.List;
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
@Service("T238ServiceImpl")
@AllArgsConstructor
@NoArgsConstructor
@Transactional(
        propagation = Propagation.REQUIRED,
        rollbackFor = {ServiceException.class, RuntimeException.class},
        readOnly = true,
        transactionManager = "transactionManager"
)
public class T238ServiceImpl extends JapiBaseServiceImpl<T238, String, T238DAO> implements T238Service {
    @Autowired
    private T238DAO t238DAO;

    @Autowired
    private JsonToEntityFieldTranslatorService traslationService;

    @Autowired
    private GetGeaAcureCddocumOutputMapper getGeaAcureCddocumOutputMapper;

    @Autowired
    private GetGeaAcureOutputMapper getGeaAcureOutputMapper;

    @PostConstruct
    public void initT238Service() {
        setDao(t238DAO);
    }

    @Override
    public GetGeaAcureOutputDTO getGeaAcure(Set<String> select, Set<String> exclude, Set<String> expand) throws ServiceException {
        List<String> selectEntityNames = traslationService.traslateFields(GetGeaAcureOutputDTO.class, select, exclude, expand);
        CoreJpaSearch search = new CoreJpaSearch(T238.class)
                .applyFieldsToSearch(selectEntityNames);
        T238 searchResult = super.findUnique(search);
        return getGeaAcureOutputMapper.entityToDto(searchResult);
    }

    @Override
    public GetGeaAcureCddocumOutputDTO getGeaAcureCddocum(String cddocum, Set<String> select, Set<String> exclude, Set<String> expand) throws ServiceException {
        List<String> selectEntityNames = traslationService.traslateFields(GetGeaAcureCddocumOutputDTO.class, select, exclude, expand);
        List<CoreJpaFilter> filters = new ArrayList<>();
        filters.add(CoreJpaFilter.equal("cddocum", cddocum));
        CoreJpaSearch search = new CoreJpaSearch(T238.class)
                .applyFieldsToSearch(selectEntityNames)
                .addFilters(filters);
        T238 entity = super.findUnique(search);
        return this.getGeaAcureCddocumOutputMapper.entityToDto(entity);
    }
    
    @Override
    @Transactional(readOnly = false)
    public List<GetGeaAcureOutputDTO> findAllGeaAcure() throws ServiceException {
        List<T238> entities = t238DAO.findAll();
        return entities.stream()
                .map(getGeaAcureOutputMapper::entityToDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = false)
    public GetGeaAcureOutputDTO createGeaAcure(GetGeaAcureOutputDTO geaAcureDto) throws ServiceException {
        T238 entity = getGeaAcureOutputMapper.dtoToEntity(geaAcureDto);
        entity = t238DAO.save(entity);
        return getGeaAcureOutputMapper.entityToDto(entity);
    }

    @Override
    @Transactional(readOnly = false)
    public GetGeaAcureOutputDTO updateGeaAcure(String cddocum, GetGeaAcureOutputDTO geaAcureDto) throws ServiceException {
        if (!t238DAO.existsById(cddocum)) {
            throw new ServiceException("GeaAcure not found for this id :: " + cddocum);
        }
        T238 entity = getGeaAcureOutputMapper.dtoToEntity(geaAcureDto);
        entity.setCddocum(cddocum);
        entity = t238DAO.save(entity);
        return getGeaAcureOutputMapper.entityToDto(entity);
    }

    @Override
    @Transactional(readOnly = false)
    public void deleteGeaAcure(String cddocum) throws ServiceException {
        if (!t238DAO.existsById(cddocum)) {
            throw new ServiceException("GeaAcure not found for this id :: " + cddocum);
        }
        t238DAO.deleteById(cddocum);
    }
}
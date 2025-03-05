package org.madrid.1234.rest.prueba.t238.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
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
import org.madrid.core.search.jpa.data.impl.CoreJpaFilter;
import org.madrid.core.search.jpa.data.impl.CoreJpaSearch;
import org.madrid.japi.api.exceptions.ServiceException;
import org.madrid.japi.jpa.services.JapiBaseServiceImpl;
import org.madrid.japi.rest.services.translation.JsonToEntityFieldTranslatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Servicio de la clase de dominio: <code>{@link org.madrid.1234.rest.prueba.t238.domain.T238}</code>
 * 
 */
@Slf4j
@Service("T238ServiceImpl")
@AllArgsConstructor
@NoArgsConstructor
@Transactional(
        propagation = Propagation.REQUIRED,
        rollbackFor = { ServiceException.class, RuntimeException.class },
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
    @Transactional(readOnly = true)
    public GetGeaAcureOutputDTO getGeaAcure(Set<String> select, Set<String> exclude, Set<String> expand) throws ServiceException {
        List<String> selectEntityNames = traslationService.traslateFields(GetGeaAcureOutputDTO.class, select, exclude, expand);

        CoreJpaSearch search = new CoreJpaSearch(T238.class)
                .applyFieldsToSearch(selectEntityNames);

        T238 searchResult = super.findUnique(search);

        GetGeaAcureOutputDTO outputDTO = getGeaAcureOutputMapper.entityToDto(searchResult);

        return outputDTO;
    }

    @Override
    @Transactional(readOnly = true)
    public GetGeaAcureCddocumOutputDTO getGeaAcureCddocum(String cddocum, Set<String> select, Set<String> exclude, Set<String> expand) throws ServiceException {
        List<String> selectEntityNames = traslationService.traslateFields(GetGeaAcureCddocumOutputDTO.class, select, exclude, expand);

        List<CoreJpaFilter> filters = new ArrayList<>();
        filters.add(CoreJpaFilter.equal("cddocum", cddocum));

        CoreJpaSearch search = new CoreJpaSearch(T238.class)
                .applyFieldsToSearch(selectEntityNames)
                .addFilters(filters);

        T238 entity = super.findUnique(search);

        GetGeaAcureCddocumOutputDTO outputDTO = getGeaAcureCddocumOutputMapper.entityToDto(entity);

        return outputDTO;
    }

    @Transactional
    public GetGeaAcureOutputDTO createGeaAcure(T238 entity) throws ServiceException {
        T238 savedEntity = t238DAO.save(entity);
        return getGeaAcureOutputMapper.entityToDto(savedEntity);
    }

    @Transactional
    public GetGeaAcureOutputDTO updateGeaAcure(String cddocum, T238 entity) throws ServiceException {
        T238 existingEntity = t238DAO.findById(cddocum)
                .orElseThrow(() -> new ServiceException("T238 not found"));
        entity.setCddocum(existingEntity.getCddocum());
        T238 updatedEntity = t238DAO.save(entity);
        return getGeaAcureOutputMapper.entityToDto(updatedEntity);
    }

    @Transactional
    public void deleteGeaAcure(String cddocum) throws ServiceException {
        T238 entity = t238DAO.findById(cddocum)
                .orElseThrow(() -> new ServiceException("T238 not found"));
        t238DAO.delete(entity);
    }
}
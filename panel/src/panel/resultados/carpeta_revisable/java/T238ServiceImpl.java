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
import org.madrid.core.search.jpa.data.impl.CoreJpaFilter;
import org.madrid.core.search.jpa.data.impl.CoreJpaSearch;
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

        GetGeaAcureOutputDTO outputDTO = new GetGeaAcureOutputDTO();
        outputDTO.setId(searchResult.getId());
        outputDTO.setField1(searchResult.getField1());
        outputDTO.setField2(searchResult.getField2());
        return outputDTO;
    }

    @Override
    public GetGeaAcureCddocumOutputDTO getGeaAcureCddocum(String cddocum, Set<String> select,
                                                          Set<String> exclude, Set<String> expand) throws ServiceException {
        List<String> selectEntityNames = traslationService.traslateFields(GetGeaAcureCddocumOutputDTO.class, select, exclude, expand);

        List<CoreJpaFilter> filters = new ArrayList<>();
        filters.add(CoreJpaFilter.equal("cddocum", cddocum));

        CoreJpaSearch search = new CoreJpaSearch(T238.class)
                .applyFieldsToSearch(selectEntityNames)
                .addFilters(filters);

        T238 entity = super.findUnique(search);

        GetGeaAcureCddocumOutputDTO outputDTO = this.getGeaAcureCddocumOutputMapper.entityToDto(entity);

        return outputDTO;
    }
}
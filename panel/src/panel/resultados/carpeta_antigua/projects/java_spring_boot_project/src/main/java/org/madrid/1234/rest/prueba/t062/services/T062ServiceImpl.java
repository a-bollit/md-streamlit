package org.madrid.1234.rest.prueba.t062.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import javax.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.madrid.1234.rest.prueba.t062.dao.T062DAO;
import org.madrid.1234.rest.prueba.t062.domain.T062;
import org.madrid.1234.rest.prueba.t062.dtos.GetGimpredocuCddocumOutputDTO;
import org.madrid.1234.rest.prueba.t062.dtos.GetGimpredocuOutputDTO;
import org.madrid.1234.rest.prueba.t062.mappers.GetGimpredocuCddocumOutputMapper;
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
 * Servicio de la clase de dominio: <code>{@link org.madrid.1234.rest.prueba.t062.domain.T062}</code>
 *
 * @author Generador de API Rest
 */
@Slf4j
@Service("T062ServiceImpl")
@AllArgsConstructor
@NoArgsConstructor
@Transactional(
        propagation = Propagation.REQUIRED,
        rollbackFor = { ServiceException.class, RuntimeException.class },
        readOnly = true,
        transactionManager = "transactionManager"
)
public class T062ServiceImpl extends JapiBaseServiceImpl<T062, String, T062DAO> implements T062Service {
    /**
     * Referencia al DAO. El DAO (Data Access Object) proporciona métodos para interactuar con la fuente de datos (buscar, guardar, actualizar...), es similar al patrón Repository
     */
    @Autowired
    private T062DAO t062DAO;

    @Autowired
    private JsonToEntityFieldTranslatorService traslationService;

    /**
     * Referencia al servicio de mapeo para generar el DTO de salida
     */
    @Autowired
    private GetGimpredocuCddocumOutputMapper getGimpredocuCddocumOutputMapper;

    /**
     * Este método es necesario para guardar el DAO una vez se ha inicializado y que sea accesible vía this
     */
    @PostConstruct
    public void initT062Service() {
        setDao(t062DAO);
    }

    @Override
    public GetGimpredocuCddocumOutputDTO getGimpredocuCddocum(String cddocum, Set<String> select,
            Set<String> exclude, Set<String> expand) throws ServiceException {
        // Convierte las variables pasadas como querystring o en el body a variables que hacen referencia a la base de datos
        List<String> selectEntityNames = traslationService.traslateFields(GetGimpredocuCddocumOutputDTO.class, select, exclude, expand);

        // El identificador debe estar correctamente mapeado en la clase OutputDTO para poder ejecutar esta búsqueda
        List<CoreJpaFilter> filters = new ArrayList<>();
        filters.add(CoreJpaFilter.equal("cddocum", cddocum));

        // Preparamos la búsqueda en BBDD
        CoreJpaSearch search = new CoreJpaSearch(T062.class)
                .applyFieldsToSearch(selectEntityNames)
                .addFilters(filters);

        // Hacemos la consulta en BBDD
        T062 entity = super.findUnique(search);

        // Transforma el resultado de base de datos al especificado por el usuario (y definido en los objetos OutputDTO)
        GetGimpredocuCddocumOutputDTO outputDTO = this.getGimpredocuCddocumOutputMapper.entityToDto(entity);

        // Calculamos las variables derivadas del JSON de salida

        return outputDTO;
    }

    @Override
    public GetGimpredocuOutputDTO getGimpredocu(Set<String> select, Set<String> exclude,
            Set<String> expand) throws ServiceException {
        // Convierte las variables pasadas como querystring o en el body a variables que hacen referencia a la base de datos
        List<String> selectEntityNames = traslationService.traslateFields(GetGimpredocuOutputDTO.class, select, exclude, expand);

        // Preparamos la llamada al servicio para hacer la consulta a BBDD

        // TODO-JAPI: T062ServiceImpl - ATENCIÓN. Se devuelve un elemento, pero no se está filtrando en la búsqueda en el método getGimpredocu. Definir y añadir estos filtros con 'addFilters'
        CoreJpaSearch search = new CoreJpaSearch(T062.class)
                .applyFieldsToSearch(selectEntityNames);

        // Hacemos la consulta a BBDD servicio para hacer la consulta a BBDD
        T062 searchResult = super.findUnique(search);

        // Transforma el resultado de base de datos al especificado por el usuario (y definido en los objetos OutputDTO)

        // TODO-JAPI: T062ServiceImpl - El DTO GetGimpredocuOutputDTO no tiene campos, por lo que no se ha podido crear un mapper asociado. Hay que crear el mapper y añadir llamar a su método: entityToDto(searchResultEntities)
        GetGimpredocuOutputDTO outputDTO = new GetGimpredocuOutputDTO();

        // Calculamos las variables derivadas del JSON de salida

        return outputDTO;
    }
}

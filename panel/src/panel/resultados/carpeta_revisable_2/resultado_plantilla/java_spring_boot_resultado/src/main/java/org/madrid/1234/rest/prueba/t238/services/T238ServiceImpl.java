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

/**
 * Servicio de la clase de dominio: <code>{@link org.madrid.1234.rest.prueba.t238.domain.T238}</code>
 *
 * @author Generador de API Rest
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
    /**
     * Referencia al DAO. El DAO (Data Access Object) proporciona métodos para interactuar con la fuente de datos (buscar, guardar, actualizar...), es similar al patrón Repository
     */
    @Autowired
    private T238DAO t238DAO;

    @Autowired
    private JsonToEntityFieldTranslatorService traslationService;

    /**
     * Referencia al servicio de mapeo para generar el DTO de salida
     */
    @Autowired
    private GetGeaAcureCddocumOutputMapper getGeaAcureCddocumOutputMapper;

    /**
     * Este método es necesario para guardar el DAO una vez se ha inicializado y que sea accesible vía this
     */
    @PostConstruct
    public void initT238Service() {
        setDao(t238DAO);
    }

    @Override
    public GetGeaAcureOutputDTO getGeaAcure(Set<String> select, Set<String> exclude,
            Set<String> expand) throws ServiceException {
        // Convierte las variables pasadas como querystring o en el body a variables que hacen referencia a la base de datos
        List<String> selectEntityNames = traslationService.traslateFields(GetGeaAcureOutputDTO.class, select, exclude, expand);

        // Preparamos la llamada al servicio para hacer la consulta a BBDD

        // TODO-JAPI: T238ServiceImpl - ATENCIÓN. Se devuelve un elemento, pero no se está filtrando en la búsqueda en el método getGeaAcure. Definir y añadir estos filtros con 'addFilters'
        CoreJpaSearch search = new CoreJpaSearch(T238.class)
                .applyFieldsToSearch(selectEntityNames);

        // Hacemos la consulta a BBDD servicio para hacer la consulta a BBDD
        T238 searchResult = super.findUnique(search);

        // Transforma el resultado de base de datos al especificado por el usuario (y definido en los objetos OutputDTO)

        // TODO-JAPI: T238ServiceImpl - El DTO GetGeaAcureOutputDTO no tiene campos, por lo que no se ha podido crear un mapper asociado. Hay que crear el mapper y añadir llamar a su método: entityToDto(searchResultEntities)
        GetGeaAcureOutputDTO outputDTO = new GetGeaAcureOutputDTO();

        // Calculamos las variables derivadas del JSON de salida

        return outputDTO;
    }

    @Override
    public GetGeaAcureCddocumOutputDTO getGeaAcureCddocum(String cddocum, Set<String> select,
            Set<String> exclude, Set<String> expand) throws ServiceException {
        // Convierte las variables pasadas como querystring o en el body a variables que hacen referencia a la base de datos
        List<String> selectEntityNames = traslationService.traslateFields(GetGeaAcureCddocumOutputDTO.class, select, exclude, expand);

        // El identificador debe estar correctamente mapeado en la clase OutputDTO para poder ejecutar esta búsqueda
        List<CoreJpaFilter> filters = new ArrayList<>();
        filters.add(CoreJpaFilter.equal("cddocum", cddocum));

        // Preparamos la búsqueda en BBDD
        CoreJpaSearch search = new CoreJpaSearch(T238.class)
                .applyFieldsToSearch(selectEntityNames)
                .addFilters(filters);

        // Hacemos la consulta en BBDD
        T238 entity = super.findUnique(search);

        // Transforma el resultado de base de datos al especificado por el usuario (y definido en los objetos OutputDTO)
        GetGeaAcureCddocumOutputDTO outputDTO = this.getGeaAcureCddocumOutputMapper.entityToDto(entity);

        // Calculamos las variables derivadas del JSON de salida

        return outputDTO;
    }
}

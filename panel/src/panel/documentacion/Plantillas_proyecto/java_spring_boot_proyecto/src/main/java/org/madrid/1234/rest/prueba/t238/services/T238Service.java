package org.madrid.1234.rest.prueba.t238.services;

import java.util.Set;
import org.madrid.1234.rest.prueba.t238.dao.T238DAO;
import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureCddocumOutputDTO;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.japi.api.exceptions.ServiceException;
import org.madrid.japi.jpa.services.BaseService;

public interface T238Service extends BaseService<T238, String, T238DAO> {
    GetGeaAcureOutputDTO getGeaAcure(Set<String> select, Set<String> exclude, Set<String> expand)
            throws ServiceException;

    GetGeaAcureCddocumOutputDTO getGeaAcureCddocum(String cddocum, Set<String> select,
            Set<String> exclude, Set<String> expand) throws ServiceException;
}

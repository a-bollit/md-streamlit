package org.madrid.1234.rest.prueba.t062.services;

import java.util.Set;
import org.madrid.1234.rest.prueba.t062.dao.T062DAO;
import org.madrid.1234.rest.prueba.t062.domain.T062;
import org.madrid.1234.rest.prueba.t062.dtos.GetGimpredocuCddocumOutputDTO;
import org.madrid.1234.rest.prueba.t062.dtos.GetGimpredocuOutputDTO;
import org.madrid.japi.api.exceptions.ServiceException;
import org.madrid.japi.jpa.services.BaseService;

public interface T062Service extends BaseService<T062, String, T062DAO> {
    GetGimpredocuCddocumOutputDTO getGimpredocuCddocum(String cddocum, Set<String> select,
            Set<String> exclude, Set<String> expand) throws ServiceException;

    GetGimpredocuOutputDTO getGimpredocu(Set<String> select, Set<String> exclude,
            Set<String> expand) throws ServiceException;
}

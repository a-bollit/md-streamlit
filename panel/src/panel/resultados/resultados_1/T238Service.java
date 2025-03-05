package org.madrid.1234.rest.prueba.t238.services;

import java.util.List;
import java.util.Set;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureCddocumOutputDTO;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.japi.api.exceptions.ServiceException;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Transactional(
        propagation = Propagation.REQUIRED,
        rollbackFor = {ServiceException.class, RuntimeException.class},
        readOnly = true,
        transactionManager = "transactionManager"
)
public interface T238Service {
    GetGeaAcureOutputDTO getGeaAcure(Set<String> select, Set<String> exclude, Set<String> expand) throws ServiceException;

    GetGeaAcureCddocumOutputDTO getGeaAcureCddocum(String cddocum, Set<String> select, Set<String> exclude, Set<String> expand) throws ServiceException;
    
    List<GetGeaAcureOutputDTO> findAllGeaAcure() throws ServiceException;

    GetGeaAcureOutputDTO createGeaAcure(GetGeaAcureOutputDTO geaAcureDto) throws ServiceException;

    GetGeaAcureOutputDTO updateGeaAcure(String cddocum, GetGeaAcureOutputDTO geaAcureDto) throws ServiceException;

    void deleteGeaAcure(String cddocum) throws ServiceException;
}
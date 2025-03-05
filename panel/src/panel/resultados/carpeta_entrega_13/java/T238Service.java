package org.madrid.1234.rest.prueba.t238.services;

import java.util.List;
import java.util.Set;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureCddocumOutputDTO;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.japi.api.exceptions.ServiceException;

public interface T238Service {
    GetGeaAcureOutputDTO getGeaAcure(Set<String> select, Set<String> exclude, Set<String> expand) throws ServiceException;
    GetGeaAcureCddocumOutputDTO getGeaAcureCddocum(String cddocum, Set<String> select, Set<String> exclude, Set<String> expand) throws ServiceException;

    List<GetGeaAcureOutputDTO> findAll();
    GetGeaAcureOutputDTO findById(String id);
    GetGeaAcureOutputDTO create(GetGeaAcureOutputDTO dto);
    GetGeaAcureOutputDTO update(String id, GetGeaAcureOutputDTO dto);
    void delete(String id);
}
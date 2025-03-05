### GetGeaAcureOutputDTO.java
```java
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.madrid.japi.api.dto.scan.JapiField;
import org.madrid.japi.api.dto.scan.JapiFieldClass;

import java.util.Date;

@Getter
@Setter
@JapiFieldClass
public class GetGeaAcureOutputDTO {
    @JsonProperty("cddocum")
    @JapiField
    private String cddocum;

    @JsonProperty("cbMarca")
    @JapiField
    private String cbMarca;

    @JsonProperty("documento")
    @JapiField
    private String documento;

    @JsonProperty("dsdocum")
    @JapiField
    private String dsdocum;

    @JsonProperty("expediente")
    @JapiField
    private String expediente;

    @JsonProperty("interesado")
    @JapiField
    private String interesado;

    @JsonProperty("itOficioPdf")
    @JapiField
    private String itOficioPdf;

    @JsonProperty("itFirmado")
    @JapiField
    private String itFirmado;

    @JsonProperty("itRegistrado")
    @JapiField
    private String itRegistrado;

    @JsonProperty("fcEmision")
    @JapiField
    private Date fcEmision;

    @JsonProperty("fcReal")
    @JapiField
    private Date fcReal;

    @JsonProperty("itimpre")
    @JapiField
    private String itimpre;

    @JsonProperty("numRelacion")
    @JapiField
    private Integer numRelacion;

    @JsonProperty("cdDeptno")
    @JapiField
    private String cdDeptno;

    @JsonProperty("cdTexp")
    @JapiField
    private String cdTexp;

    @JsonProperty("cdNexp")
    @JapiField
    private Integer cdNexp;

    @JsonProperty("cdDigito")
    @JapiField
    private Integer cdDigito;

    @JsonProperty("cdAexp")
    @JapiField
    private Integer cdAexp;

    @JsonProperty("cdInteresado")
    @JapiField
    private String cdInteresado;

    @JsonProperty("cdInteresadoOld")
    @JapiField
    private String cdInteresadoOld;

    @JsonProperty("cdSubInt")
    @JapiField
    private String cdSubInt;

    @JsonProperty("cdSubIntOld")
    @JapiField
    private String cdSubIntOld;

    @JsonProperty("dsNombre")
    @JapiField
    private String dsNombre;

    @JsonProperty("dsApellido1")
    @JapiField
    private String dsApellido1;

    @JsonProperty("dsApellido2")
    @JapiField
    private String dsApellido2;

    @JsonProperty("dsRazonSoc")
    @JapiField
    private String dsRazonSoc;

    @JsonProperty("cdPais")
    @JapiField
    private String cdPais;

    @JsonProperty("cdProv")
    @JapiField
    private String cdProv;

    @JsonProperty("cdMuni")
    @JapiField
    private String cdMuni;

    @JsonProperty("dsDireccion")
    @JapiField
    private String dsDireccion;

    @JsonProperty("dsDireccion1")
    @JapiField
    private String dsDireccion1;

    @JsonProperty("dsDireccion2")
    @JapiField
    private String dsDireccion2;

    @JsonProperty("cdPostal")
    @JapiField
    private String cdPostal;

    @JsonProperty("dsTelefono")
    @JapiField
    private String dsTelefono;

    @JsonProperty("dsFax")
    @JapiField
    private String dsFax;

    @JsonProperty("clave2")
    @JapiField
    private String clave2;

    @JsonProperty("contenido2")
    @JapiField
    private String contenido2;
}
```

### GetGeaAcureCddocumOutputDTO.java
```java
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.madrid.japi.api.dto.scan.JapiField;
import org.madrid.japi.api.dto.scan.JapiFieldClass;

import java.util.Date;

@Getter
@Setter
@JapiFieldClass
public class GetGeaAcureCddocumOutputDTO {
    @JsonProperty("cddocum")
    @JapiField
    private String cddocum;

    @JsonProperty("cbMarca")
    @JapiField
    private String cbMarca;

    @JsonProperty("documento")
    @JapiField
    private String documento;

    @JsonProperty("dsdocum")
    @JapiField
    private String dsdocum;

    @JsonProperty("expediente")
    @JapiField
    private String expediente;

    @JsonProperty("interesado")
    @JapiField
    private String interesado;

    @JsonProperty("itOficioPdf")
    @JapiField
    private String itOficioPdf;

    @JsonProperty("itFirmado")
    @JapiField
    private String itFirmado;

    @JsonProperty("itRegistrado")
    @JapiField
    private String itRegistrado;

    @JsonProperty("fcEmision")
    @JapiField
    private Date fcEmision;

    @JsonProperty("fcReal")
    @JapiField
    private Date fcReal;

    @JsonProperty("itimpre")
    @JapiField
    private String itimpre;

    @JsonProperty("numRelacion")
    @JapiField
    private Integer numRelacion;

    @JsonProperty("cdDeptno")
    @JapiField
    private String cdDeptno;

    @JsonProperty("cdTexp")
    @JapiField
    private String cdTexp;

    @JsonProperty("cdNexp")
    @JapiField
    private Integer cdNexp;

    @JsonProperty("cdDigito")
    @JapiField
    private Integer cdDigito;

    @JsonProperty("cdAexp")
    @JapiField
    private Integer cdAexp;

    @JsonProperty("cdInteresado")
    @JapiField
    private String cdInteresado;

    @JsonProperty("cdInteresadoOld")
    @JapiField
    private String cdInteresadoOld;

    @JsonProperty("cdSubInt")
    @JapiField
    private String cdSubInt;

    @JsonProperty("cdSubIntOld")
    @JapiField
    private String cdSubIntOld;

    @JsonProperty("dsNombre")
    @JapiField
    private String dsNombre;

    @JsonProperty("dsApellido1")
    @JapiField
    private String dsApellido1;

    @JsonProperty("dsApellido2")
    @JapiField
    private String dsApellido2;

    @JsonProperty("dsRazonSoc")
    @JapiField
    private String dsRazonSoc;

    @JsonProperty("cdPais")
    @JapiField
    private String cdPais;

    @JsonProperty("cdProv")
    @JapiField
    private String cdProv;

    @JsonProperty("cdMuni")
    @JapiField
    private String cdMuni;

    @JsonProperty("dsDireccion")
    @JapiField
    private String dsDireccion;

    @JsonProperty("dsDireccion1")
    @JapiField
    private String dsDireccion1;

    @JsonProperty("dsDireccion2")
    @JapiField
    private String dsDireccion2;

    @JsonProperty("cdPostal")
    @JapiField
    private String cdPostal;

    @JsonProperty("dsTelefono")
    @JapiField
    private String dsTelefono;

    @JsonProperty("dsFax")
    @JapiField
    private String dsFax;

    @JsonProperty("clave2")
    @JapiField
    private String clave2;

    @JsonProperty("contenido2")
    @JapiField
    private String contenido2;
}
```

### GetGeaAcureCddocumOutputMapper.java
```java
import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureCddocumOutputDTO;
import org.madrid.japi.api.mapping.JapiAbstractCustomMapper;
import org.springframework.stereotype.Component;

@Component
public class GetGeaAcureCddocumOutputMapper extends JapiAbstractCustomMapper<T238, GetGeaAcureCddocumOutputDTO> {
    @Override
    public GetGeaAcureCddocumOutputDTO entityToDto(T238 entity) {
        if (entity == null) {
            return null;
        }

        GetGeaAcureCddocumOutputDTO dto = new GetGeaAcureCddocumOutputDTO();
        dto.setCddocum(entity.getCddocum());
        dto.setCbMarca(entity.getCbMarca());
        dto.setDocumento(entity.getDocumento());
        dto.setDsdocum(entity.getDsdocum());
        dto.setExpediente(entity.getExpediente());
        dto.setInteresado(entity.getInteresado());
        dto.setItOficioPdf(entity.getItOficioPdf());
        dto.setItFirmado(entity.getItFirmado());
        dto.setItRegistrado(entity.getItRegistrado());
        dto.setFcEmision(entity.getFcEmision());
        dto.setFcReal(entity.getFcReal());
        dto.setItimpre(entity.getItimpre());
        dto.setNumRelacion(entity.getNumRelacion());
        dto.setCdDeptno(entity.getCdDeptno());
        dto.setCdTexp(entity.getCdTexp());
        dto.setCdNexp(entity.getCdNexp());
        dto.setCdDigito(entity.getCdDigito());
        dto.setCdAexp(entity.getCdAexp());
        dto.setCdInteresado(entity.getCdInteresado());
        dto.setCdInteresadoOld(entity.getCdInteresadoOld());
        dto.setCdSubInt(entity.getCdSubInt());
        dto.setCdSubIntOld(entity.getCdSubIntOld());
        dto.setDsNombre(entity.getDsNombre());
        dto.setDsApellido1(entity.getDsApellido1());
        dto.setDsApellido2(entity.getDsApellido2());
        dto.setDsRazonSoc(entity.getDsRazonSoc());
        dto.setCdPais(entity.getCdPais());
        dto.setCdProv(entity.getCdProv());
        dto.setCdMuni(entity.getCdMuni());
        dto.setDsDireccion(entity.getDsDireccion());
        dto.setDsDireccion1(entity.getDsDireccion1());
        dto.setDsDireccion2(entity.getDsDireccion2());
        dto.setCdPostal(entity.getCdPostal());
        dto.setDsTelefono(entity.getDsTelefono());
        dto.setDsFax(entity.getDsFax());
        dto.setClave2(entity.getClave2());
        dto.setContenido2(entity.getContenido2());

        return dto;
    }

    @Override
    public T238 dtoToEntity(GetGeaAcureCddocumOutputDTO dto) {
        if (dto == null) {
            return null;
        }

        T238 entity = new T238();
        entity.setCddocum(dto.getCddocum());
        entity.setCbMarca(dto.getCbMarca());
        entity.setDocumento(dto.getDocumento());
        entity.setDsdocum(dto.getDsdocum());
        entity.setExpediente(dto.getExpediente());
        entity.setInteresado(dto.getInteresado());
        entity.setItOficioPdf(dto.getItOficioPdf());
        entity.setItFirmado(dto.getItFirmado());
        entity.setItRegistrado(dto.getItRegistrado());
        entity.setFcEmision(dto.getFcEmision());
        entity.setFcReal(dto.getFcReal());
        entity.setItimpre(dto.getItimpre());
        entity.setNumRelacion(dto.getNumRelacion());
        entity.setCdDeptno(dto.getCdDeptno());
        entity.setCdTexp(dto.getCdTexp());
        entity.setCdNexp(dto.getCdNexp());
        entity.setCdDigito(dto.getCdDigito());
        entity.setCdAexp(dto.getCdAexp());
        entity.setCdInteresado(dto.getCdInteresado());
        entity.setCdInteresadoOld(dto.getCdInteresadoOld());
        entity.setCdSubInt(dto.getCdSubInt());
        entity.setCdSubIntOld(dto.getCdSubIntOld());
        entity.setDsNombre(dto.getDsNombre());
        entity.setDsApellido1(dto.getDsApellido1());
        entity.setDsApellido2(dto.getDsApellido2());
        entity.setDsRazonSoc(dto.getDsRazonSoc());
        entity.setCdPais(dto.getCdPais());
        entity.setCdProv(dto.getCdProv());
        entity.setCdMuni(dto.getCdMuni());
        entity.setDsDireccion(dto.getDsDireccion());
        entity.setDsDireccion1(dto.getDsDireccion1());
        entity.setDsDireccion2(dto.getDsDireccion2());
        entity.setCdPostal(dto.getCdPostal());
        entity.setDsTelefono(dto.getDsTelefono());
        entity.setDsFax(dto.getDsFax());
        entity.setClave2(dto.getClave2());
        entity.setContenido2(dto.getContenido2());

        return entity;
    }

    @Override
    public List<GetGeaAcureCddocumOutputDTO> entityListToDtoList(List<T238> entityList) {
        if (entityList == null) {
            return null;
        }

        List<GetGeaAcureCddocumOutputDTO> dtoList = new ArrayList<>();
        for (T238 entity : entityList) {
            dtoList.add(this.entityToDto(entity));
        }

        return dtoList;
    }

    @Override
    public List<T238> dtoListToEntityList(List<GetGeaAcureCddocumOutputDTO> dtoList) {
        if (dtoList == null) {
            return null;
        }

        List<T238> entityList = new ArrayList<>();
        for (GetGeaAcureCddocumOutputDTO dto : dtoList) {
            entityList.add(this.dtoToEntity(dto));
        }

        return entityList;
    }
}
```

### GetGeaAcureOutputMapper.java
```java
import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.japi.api.mapping.JapiAbstractCustomMapper;
import org.springframework.stereotype.Component;

@Component
public class GetGeaAcureOutputMapper extends JapiAbstractCustomMapper<T238, GetGeaAcureOutputDTO> {
    @Override
    public GetGeaAcureOutputDTO entityToDto(T238 entity) {
        if (entity == null) {
            return null;
        }

        GetGeaAcureOutputDTO dto = new GetGeaAcureOutputDTO();
        dto.setCddocum(entity.getCddocum());
        dto.setCbMarca(entity.getCbMarca());
        dto.setDocumento(entity.getDocumento());
        dto.setDsdocum(entity.getDsdocum());
        dto.setExpediente(entity.getExpediente());
        dto.setInteresado(entity.getInteresado());
        dto.setItOficioPdf(entity.getItOficioPdf());
        dto.setItFirmado(entity.getItFirmado());
        dto.setItRegistrado(entity.getItRegistrado());
        dto.setFcEmision(entity.getFcEmision());
        dto.setFcReal(entity.getFcReal());
        dto.setItimpre(entity.getItimpre());
        dto.setNumRelacion(entity.getNumRelacion());
        dto.setCdDeptno(entity.getCdDeptno());
        dto.setCdTexp(entity.getCdTexp());
        dto.setCdNexp(entity.getCdNexp());
        dto.setCdDigito(entity.getCdDigito());
        dto.setCdAexp(entity.getCdAexp());
        dto.setCdInteresado(entity.getCdInteresado());
        dto.setCdInteresadoOld(entity.getCdInteresadoOld());
        dto.setCdSubInt(entity.getCdSubInt());
        dto.setCdSubIntOld(entity.getCdSubIntOld());
        dto.setDsNombre(entity.getDsNombre());
        dto.setDsApellido1(entity.getDsApellido1());
        dto.setDsApellido2(entity.getDsApellido2());
        dto.setDsRazonSoc(entity.getDsRazonSoc());
        dto.setCdPais(entity.getCdPais());
        dto.setCdProv(entity.getCdProv());
        dto.setCdMuni(entity.getCdMuni());
        dto.setDsDireccion(entity.getDsDireccion());
        dto.setDsDireccion1(entity.getDsDireccion1());
        dto.setDsDireccion2(entity.getDsDireccion2());
        dto.setCdPostal(entity.getCdPostal());
        dto.setDsTelefono(entity.getDsTelefono());
        dto.setDsFax(entity.getDsFax());
        dto.setClave2(entity.getClave2());
        dto.setContenido2(entity.getContenido2());

        return dto;
    }

    @Override
    public T238 dtoToEntity(GetGeaAcureOutputDTO dto) {
        if (dto == null) {
            return null;
        }

        T238 entity = new T238();
        entity.setCddocum(dto.getCddocum());
        entity.setCbMarca(dto.getCbMarca());
        entity.setDocumento(dto.getDocumento());
        entity.setDsdocum(dto.getDsdocum());
        entity.setExpediente(dto.getExpediente());
        entity.setInteresado(dto.getInteresado());
        entity.setItOficioPdf(dto.getItOficioPdf());
        entity.setItFirmado(dto.getItFirmado());
        entity.setItRegistrado(dto.getItRegistrado());
        entity.setFcEmision(dto.getFcEmision());
        entity.setFcReal(dto.getFcReal());
        entity.setItimpre(dto.getItimpre());
        entity.setNumRelacion(dto.getNumRelacion());
        entity.setCdDeptno(dto.getCdDeptno());
        entity.setCdTexp(dto.getCdTexp());
        entity.setCdNexp(dto.getCdNexp());
        entity.setCdDigito(dto.getCdDigito());
        entity.setCdAexp(dto.getCdAexp());
        entity.setCdInteresado(dto.getCdInteresado());
        entity.setCdInteresadoOld(dto.getCdInteresadoOld());
        entity.setCdSubInt(dto.getCdSubInt());
        entity.setCdSubIntOld(dto.getCdSubIntOld());
        entity.setDsNombre(dto.getDsNombre());
        entity.setDsApellido1(dto.getDsApellido1());
        entity.setDsApellido2(dto.getDsApellido2());
        entity.setDsRazonSoc(dto.getDsRazonSoc());
        entity.setCdPais(dto.getCdPais());
        entity.setCdProv(dto.getCdProv());
        entity.setCdMuni(dto.getCdMuni());
        entity.setDsDireccion(dto.getDsDireccion());
        entity.setDsDireccion1(dto.getDsDireccion1());
        entity.setDsDireccion2(dto.getDsDireccion2());### T238Service.java
```java
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
```

### T238ServiceImpl.java
```java
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
```

### T238Controller.java
```java
package org.madrid.1234.rest.prueba.t238.controllers;

import java.util.List;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.1234.rest.prueba.t238.services.T238Service;
import org.madrid.japi.api.exceptions.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/gea_acure")
public class T238Controller {
    @Autowired
    private T238Service t238Service;

    @GetMapping
    public ResponseEntity<List<GetGeaAcureOutputDTO>> getAllGeaAcure() {
        List<GetGeaAcureOutputDTO> geaAcureDtoList = t238Service.findAllGeaAcure();
        return ResponseEntity.ok(geaAcureDtoList);
    }

    @GetMapping("/{cddocum}")
    public ResponseEntity<GetGeaAcureOutputDTO> getGeaAcureById(@PathVariable String cddocum) {
        GetGeaAcureOutputDTO geaAcureDto = t238Service.getGeaAcureCddocum(cddocum, null, null, null);
        return ResponseEntity.ok(geaAcureDto);
    }

    @PostMapping
    public ResponseEntity<GetGeaAcureOutputDTO> createGeaAcure(@RequestBody GetGeaAcureOutputDTO geaAcureDto) {
        GetGeaAcureOutputDTO createdGeaAcureDto = t238Service.createGeaAcure(geaAcureDto);
        return ResponseEntity.ok(createdGeaAcureDto);
    }

    @PutMapping("/{cddocum}")
    public ResponseEntity<GetGeaAcureOutputDTO> updateGeaAcure(@PathVariable String cddocum, @RequestBody GetGeaAcureOutputDTO geaAcureDto) {
        GetGeaAcureOutputDTO updatedGeaAcureDto = t238Service.updateGeaAcure(cddocum, geaAcureDto);
        return ResponseEntity.ok(updatedGeaAcureDto);
    }

    @DeleteMapping("/{cddocum}")
    public ResponseEntity<Void> deleteGeaAcure(@PathVariable String cddocum) {
        t238Service.deleteGeaAcure(cddocum);
        return ResponseEntity.noContent().build();
    }
}
```
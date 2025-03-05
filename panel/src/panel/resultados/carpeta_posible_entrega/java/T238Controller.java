package org.madrid.1234.rest.prueba.t238.controllers;

import java.util.List;
import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureCddocumOutputDTO;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.1234.rest.prueba.t238.services.T238Service;
import org.madrid.japi.api.exceptions.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/t238")
public class T238Controller {

    @Autowired
    private T238Service t238Service;

    @GetMapping("/{id}")
    public ResponseEntity<T238> getT238ById(@PathVariable String id) {
        T238 t238 = t238Service.getT238ById(id);
        return ResponseEntity.ok(t238);
    }

    @GetMapping
    public ResponseEntity<List<T238>> getAllT238() {
        List<T238> t238List = t238Service.getAllT238();
        return ResponseEntity.ok(t238List);
    }

    @PostMapping
    public ResponseEntity<T238> createT238(@RequestBody T238 t238) throws ServiceException {
        T238 createdT238 = t238Service.createT238(t238);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdT238);
    }

    @PutMapping("/{id}")
    public ResponseEntity<T238> updateT238(@PathVariable String id, @RequestBody T238 t238) throws ServiceException {
        T238 updatedT238 = t238Service.updateT238(id, t238);
        return ResponseEntity.ok(updatedT238);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteT238(@PathVariable String id) throws ServiceException {
        t238Service.deleteT238(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/geaAcure")
    public ResponseEntity<GetGeaAcureOutputDTO> getGeaAcure(@RequestParam(value = "select", required = false) Set<String> select,
                                                            @RequestParam(value = "exclude", required = false) Set<String> exclude,
                                                            @RequestParam(value = "expand", required = false) Set<String> expand) throws ServiceException {
        GetGeaAcureOutputDTO dto = t238Service.getGeaAcure(select, exclude, expand);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/geaAcure/cddocum/{cddocum}")
    public ResponseEntity<GetGeaAcureCddocumOutputDTO> getGeaAcureCddocum(@PathVariable String cddocum,
                                                                          @RequestParam(value = "select", required = false) Set<String> select,
                                                                          @RequestParam(value = "exclude", required = false) Set<String> exclude,
                                                                          @RequestParam(value = "expand", required = false) Set<String> expand) throws ServiceException {
        GetGeaAcureCddocumOutputDTO dto = t238Service.getGeaAcureCddocum(cddocum, select, exclude, expand);
        return ResponseEntity.ok(dto);
    }
}
package org.madrid.1234.rest.prueba.t238.controllers;

import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureCddocumOutputDTO;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.1234.rest.prueba.t238.services.T238Service;
import org.madrid.japi.api.exceptions.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/gea_acure")
public class T238Controller {

    @Autowired
    private T238Service t238Service;

    @GetMapping
    public ResponseEntity<GetGeaAcureOutputDTO> getAllGeaAcure(@RequestParam Set<String> select,
                                                              @RequestParam Set<String> exclude,
                                                              @RequestParam Set<String> expand) {
        try {
            GetGeaAcureOutputDTO result = t238Service.getGeaAcure(select, exclude, expand);
            return ResponseEntity.ok(result);
        } catch (ServiceException e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/{cddocum}")
    public ResponseEntity<GetGeaAcureCddocumOutputDTO> getGeaAcure(@PathVariable String cddocum,
                                                                   @RequestParam Set<String> select,
                                                                   @RequestParam Set<String> exclude,
                                                                   @RequestParam Set<String> expand) {
        try {
            GetGeaAcureCddocumOutputDTO result = t238Service.getGeaAcureCddocum(cddocum, select, exclude, expand);
            return ResponseEntity.ok(result);
        } catch (ServiceException e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @PostMapping
    public ResponseEntity<GetGeaAcureOutputDTO> createGeaAcure(@RequestBody T238 entity) {
        try {
            GetGeaAcureOutputDTO result = t238Service.createGeaAcure(entity);
            return ResponseEntity.ok(result);
        } catch (ServiceException e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @PutMapping("/{cddocum}")
    public ResponseEntity<GetGeaAcureOutputDTO> updateGeaAcure(@PathVariable String cddocum,
                                                               @RequestBody T238 entity) {
        try {
            GetGeaAcureOutputDTO result = t238Service.updateGeaAcure(cddocum, entity);
            return ResponseEntity.ok(result);
        } catch (ServiceException e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @DeleteMapping("/{cddocum}")
    public ResponseEntity<Void> deleteGeaAcure(@PathVariable String cddocum) {
        try {
            t238Service.deleteGeaAcure(cddocum);
            return ResponseEntity.noContent().build();
        } catch (ServiceException e) {
            return ResponseEntity.status(500).build();
        }
    }
}
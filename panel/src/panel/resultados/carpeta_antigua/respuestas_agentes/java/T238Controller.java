package org.madrid.1234.rest.prueba.t238.controller;

import java.util.List;
import java.util.Set;
import org.madrid.1234.rest.prueba.t238.domain.T238;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureCddocumOutputDTO;
import org.madrid.1234.rest.prueba.t238.services.T238Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/t238")
public class T238Controller {

    @Autowired
    private T238Service t238Service;

    @GetMapping("/gea-acure")
    public ResponseEntity<GetGeaAcureOutputDTO> getGeaAcure(@RequestParam Set<String> select, @RequestParam Set<String> exclude, @RequestParam Set<String> expand) {
        GetGeaAcureOutputDTO outputDTO = t238Service.getGeaAcure(select, exclude, expand);
        return ResponseEntity.ok(outputDTO);
    }

    @GetMapping("/gea-acure-cddocum")
    public ResponseEntity<GetGeaAcureCddocumOutputDTO> getGeaAcureCddocum(@RequestParam String cddocum, @RequestParam Set<String> select, @RequestParam Set<String> exclude, @RequestParam Set<String> expand) {
        GetGeaAcureCddocumOutputDTO outputDTO = t238Service.getGeaAcureCddocum(cddocum, select, exclude, expand);
        return ResponseEntity.ok(outputDTO);
    }

    @GetMapping
    public ResponseEntity<List<T238>> findAll() {
        return ResponseEntity.ok(t238Service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<T238> findById(@PathVariable String id) {
        return ResponseEntity.ok(t238Service.findById(id));
    }

    @PostMapping
    public ResponseEntity<T238> create(@RequestBody T238 entity) {
        return ResponseEntity.ok(t238Service.create(entity));
    }

    @PutMapping("/{id}")
    public ResponseEntity<T238> update(@PathVariable String id, @RequestBody T238 entityDetails) {
        return ResponseEntity.ok(t238Service.update(id, entityDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable String id) {
        t238Service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
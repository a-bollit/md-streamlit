package org.madrid.1234.rest.prueba.t238.controllers;

import java.util.List;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.1234.rest.prueba.t238.services.T238Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/t238")
public class T238Controller {
    @Autowired
    private T238Service t238Service;

    @GetMapping
    public ResponseEntity<List<GetGeaAcureOutputDTO>> getAll() {
        return ResponseEntity.ok(t238Service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<GetGeaAcureOutputDTO> getById(@PathVariable String id) {
        return ResponseEntity.ok(t238Service.findById(id));
    }

    @PostMapping
    public ResponseEntity<GetGeaAcureOutputDTO> create(@RequestBody GetGeaAcureOutputDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(t238Service.create(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<GetGeaAcureOutputDTO> update(@PathVariable String id, @RequestBody GetGeaAcureOutputDTO dto) {
        return ResponseEntity.ok(t238Service.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        t238Service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
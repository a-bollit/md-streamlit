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
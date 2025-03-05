package org.madrid.1234.rest.prueba.t238.controllers;

import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureCddocumOutputDTO;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.1234.rest.prueba.t238.services.T238ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/t238")
public class T238Controller {

    @Autowired
    private T238ServiceImpl t238Service;

    @GetMapping("/{id}")
    public ResponseEntity<GetGeaAcureOutputDTO> getGeaAcure(@PathVariable("id") String id, 
            @RequestParam(required = false) Set<String> select, 
            @RequestParam(required = false) Set<String> exclude, 
            @RequestParam(required = false) Set<String> expand) {
        GetGeaAcureOutputDTO outputDTO = t238Service.getGeaAcure(select, exclude, expand);
        return ResponseEntity.ok(outputDTO);
    }

    @GetMapping("/cddocum/{cddocum}")
    public ResponseEntity<GetGeaAcureCddocumOutputDTO> getGeaAcureCddocum(@PathVariable("cddocum") String cddocum, 
            @RequestParam(required = false) Set<String> select, 
            @RequestParam(required = false) Set<String> exclude, 
            @RequestParam(required = false) Set<String> expand) {
        GetGeaAcureCddocumOutputDTO outputDTO = t238Service.getGeaAcureCddocum(cddocum, select, exclude, expand);
        return ResponseEntity.ok(outputDTO);
    }
    
    // Define other CRUD operations if needed
    // For example:
    // Create, Update, Delete operations
}
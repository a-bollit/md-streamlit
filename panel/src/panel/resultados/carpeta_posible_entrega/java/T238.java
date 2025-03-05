package org.madrid.1234.rest.prueba.t238.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "T238")
public class T238 {
    @Id
    private String id;
    private String cddocum;
    private String nombre;
    private String descripcion;
    private String nombreDocumento;
}
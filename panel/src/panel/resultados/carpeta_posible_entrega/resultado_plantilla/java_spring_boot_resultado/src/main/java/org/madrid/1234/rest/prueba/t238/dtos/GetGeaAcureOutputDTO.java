package org.madrid.1234.rest.prueba.t238.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.madrid.japi.api.dto.scan.JapiField;
import org.madrid.japi.api.dto.scan.JapiFieldClass;

@Getter
@Setter
@JapiFieldClass
public class GetGeaAcureOutputDTO {
    @JsonProperty("id")
    @JapiField(campoDB = "ID")
    private String id;

    @JsonProperty("nombre")
    @JapiField(campoDB = "NOMBRE")
    private String nombre;

    @JsonProperty("descripcion")
    @JapiField(campoDB = "DESCRIPCION")
    private String descripcion;

    // Additional fields can be added as necessary
}
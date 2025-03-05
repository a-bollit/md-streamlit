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
    @JapiField
    private String id;

    @JsonProperty("nombre")
    @JapiField
    private String nombre;

    // Add relevant fields and annotations here based on the database entity T238
    
    // Other relevant attributes as needed

}
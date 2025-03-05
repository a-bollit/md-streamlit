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
    @JsonProperty("campo1")
    @JapiField("campo1")
    private String campo1;

    @JsonProperty("campo2")
    @JapiField("campo2")
    private String campo2;
    
    // Agregar otros campos según se requiera
}
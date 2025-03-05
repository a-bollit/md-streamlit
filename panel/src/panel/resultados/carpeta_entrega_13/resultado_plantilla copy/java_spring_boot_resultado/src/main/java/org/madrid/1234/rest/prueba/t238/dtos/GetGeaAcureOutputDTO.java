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
    @JapiField(entityField = "id")
    private Long id;

    @JsonProperty("name")
    @JapiField(entityField = "name")
    private String name;

    // Add other fields as needed
}
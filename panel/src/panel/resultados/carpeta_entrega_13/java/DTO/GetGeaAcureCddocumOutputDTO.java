package org.madrid.1234.rest.prueba.t238.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.madrid.japi.api.dto.scan.JapiField;
import org.madrid.japi.api.dto.scan.JapiFieldClass;

@Getter
@Setter
@JapiFieldClass
public class GetGeaAcureCddocumOutputDTO {
    @JsonProperty("cddocum")
    @JapiField(entityField = "cddocum")
    private String cddocum;

    @JsonProperty("description")
    @JapiField(entityField = "description")
    private String description;

    // Add other fields as needed
}
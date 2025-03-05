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
    @JsonProperty("id")
    @JapiField(campoDB = "ID")
    private String id;

    @JsonProperty("cddocum")
    @JapiField(campoDB = "CDDOCUM")
    private String cddocum;

    @JsonProperty("nombreDocumento")
    @JapiField(campoDB = "NOMBRE_DOCUMENTO")
    private String nombreDocumento;

    // Additional fields can be added as necessary
}
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
    @JapiField(isIdentity = true)
    private String cddocum;

    @JsonProperty("itimpre")
    private String itimpre;

    @JsonProperty("numrelacion")
    private Integer numrelacion;

    @JsonProperty("fcemision")
    private LocalDate fcEmision;

    @JsonProperty("cbMarca")
    private String cbMarca;
}
package org.madrid.1234.rest.prueba.t238.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.madrid.japi.api.dto.scan.JapiField;
import org.madrid.japi.api.dto.scan.JapiFieldClass;

/**
 * DTO de salida para el objeto de dominio: <code>{@link org.madrid.1234.rest.prueba.t238.domain.T238}</code>
 *
 * @author Generador de API Rest (vnull)
 * @since 17-dic-2024 13:13:24
 */
@Getter
@Setter
@JapiFieldClass
public class GetGeaAcureCddocumOutputDTO {
    /**
     * Identificador único
     */
    @JsonProperty("cddocum")
    @JapiField(
            isId = true,
            entityFieldName = "cddocum"
    )
    private String cddocum;

    /**
     * Descripción del documento
     */
    @JsonProperty("description")
    @JapiField(
            entityFieldName = "cdunidad",
            entityType = String.class
    )
    private String description;
}


package org.madrid.1234.rest.prueba.t062.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.madrid.japi.api.dto.scan.JapiField;
import org.madrid.japi.api.dto.scan.JapiFieldClass;

/**
 * DTO de salida para el objeto de dominio: <code>{@link org.madrid.1234.rest.prueba.t062.domain.T062}</code>
 *
 * @author Generador de API Rest (vnull)
 * @since 17-dic-2024 13:13:24
 */
@Getter
@Setter
@JapiFieldClass
public class GetGimpredocuCddocumOutputDTO {
    /**
     * Identificador único
     */
    @JsonProperty("cddocum")
    @JapiField(
            entityFieldName = "cddocum",
            entityType = String.class
    )
    private String cddocum;

    /**
     * Detalle de la impresión de documento
     */
    @JsonProperty("description")
    @JapiField(
            entityFieldName = "itimpre",
            entityType = String.class
    )
    private String description;
}

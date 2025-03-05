package org.madrid.1234.rest.prueba.t062.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.madrid.japi.jpa.entities.JapiAbstractEntity;

/**
 * Representa el objeto de dominio: <code>{@link org.madrid.1234.rest.prueba.t062.domain.T062}</code>
 * <p/>
 * Mapea la tabla: EXPE_T062
 *
 * @author Generador de API Rest
 */
@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode(
        callSuper = false
)
@Table(
        name = "EXPE_T062"
)
@Getter
@Setter
public class T062 extends JapiAbstractEntity<String> implements Serializable {
    /**
     * Campo serialVersionUID necesario por la interfaz Serializable
     */
    private static final long serialVersionUID = 1L;

    /**
     * Identificador del objeto de dominio T062
     *
     * TODO-JAPI: T062Este identificador no tiene una secuencia asociada, se ha generado como PENDIENTE. */
    @NotBlank
    @Id
    @SequenceGenerator(
            name = "generator",
            sequenceName = "PENDIENTE",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.AUTO,
            generator = "generator"
    )
    @Column(
            name = "CDDEPTNO",
            length = 2
    )
    private String cddeptno;

    /**
     * Campo cdtexp del objeto de dominio T062
     */
    @NotBlank
    @Column(
            name = "CDTEXP",
            length = 4
    )
    private String cdtexp;

    /**
     * Campo cdaexp del objeto de dominio T062
     */
    @NotNull
    @Column(
            name = "CDAEXP"
    )
    private Long cdaexp;

    /**
     * Campo cdnexp del objeto de dominio T062
     */
    @NotNull
    @Column(
            name = "CDNEXP"
    )
    private Long cdnexp;

    /**
     * Campo cddigito del objeto de dominio T062
     */
    @NotNull
    @Column(
            name = "CDDIGITO"
    )
    private Long cddigito;

    /**
     * Campo cddocum del objeto de dominio T062
     */
    @NotBlank
    @Column(
            name = "CDDOCUM",
            length = 11
    )
    private String cddocum;

    /**
     * Campo cdofi del objeto de dominio T062
     */
    @NotBlank
    @Column(
            name = "CDOFI",
            length = 8
    )
    private String cdofi;

    /**
     * Campo prform del objeto de dominio T062
     */
    @NotBlank
    @Column(
            name = "PRFORM",
            length = 8
    )
    private String prform;

    /**
     * Campo cdusuario del objeto de dominio T062
     */
    @NotBlank
    @Column(
            name = "CDUSUARIO",
            length = 8
    )
    private String cdusuario;

    /**
     * Campo cdunidad del objeto de dominio T062
     */
    @NotBlank
    @Column(
            name = "CDUNIDAD",
            length = 5
    )
    private String cdunidad;

    /**
     * Campo nmcopias del objeto de dominio T062
     */
    @Column(
            name = "NMCOPIAS"
    )
    private Long nmcopias;

    /**
     * Campo cdsubpart del objeto de dominio T062
     */
    @Column(
            name = "CDSUBPART",
            length = 2
    )
    private String cdsubpart;

    /**
     * Campo cdparticular del objeto de dominio T062
     */
    @Column(
            name = "CDPARTICULAR",
            length = 9
    )
    private String cdparticular;

    /**
     * Campo itimpre del objeto de dominio T062
     */
    @Column(
            name = "ITIMPRE",
            length = 1
    )
    private String itimpre;

    /**
     * Campo fcimpre del objeto de dominio T062
     */
    @Column(
            name = "FCIMPRE"
    )
    private LocalDateTime fcimpre;

    /**
     * Campo cdrelacion del objeto de dominio T062
     */
    @Column(
            name = "CDRELACION",
            length = 2
    )
    private String cdrelacion;

    /**
     * Campo codarchivo del objeto de dominio T062
     */
    @Column(
            name = "CODARCHIVO"
    )
    private Long codarchivo;

    /**
     * Campo codarchivoPdf del objeto de dominio T062
     */
    @Column(
            name = "CODARCHIVO_PDF"
    )
    private Long codarchivoPdf;

    /**
     * Campo cdtiponoti del objeto de dominio T062
     */
    @Column(
            name = "CDTIPONOTI",
            length = 4
    )
    private String cdtiponoti;

    /**
     * Campo fcbd del objeto de dominio T062
     */
    @Column(
            name = "FCBD"
    )
    private LocalDateTime fcbd;

    public T062(String pk) {
        this.cddeptno = pk;
    }

    /**
     * Implementación de JAPI para obtener el identificador de la entidad
     */
    @Override
    @JsonIgnore
    public String getEntityId() {
        return cddeptno;
    }
}

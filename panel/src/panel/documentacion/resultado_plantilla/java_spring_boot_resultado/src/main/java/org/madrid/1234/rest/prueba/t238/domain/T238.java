package org.madrid.1234.rest.prueba.t238.domain;

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
 * Representa el objeto de dominio: <code>{@link org.madrid.1234.rest.prueba.t238.domain.T238}</code>
 * <p/>
 * Mapea la tabla: EXPE_T238
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
        name = "EXPE_T238"
)
@Getter
@Setter
public class T238 extends JapiAbstractEntity<String> implements Serializable {
    /**
     * Campo serialVersionUID necesario por la interfaz Serializable
     */
    private static final long serialVersionUID = 1L;

    /**
     * Identificador del objeto de dominio T238
     *
     * TODO-JAPI: T238Este identificador no tiene una secuencia asociada, se ha generado como PENDIENTE. */
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
            name = "CDDOCUM",
            length = 11
    )
    private String cddocum;

    /**
     * Campo fcarecibo del objeto de dominio T238
     */
    @NotNull
    @Column(
            name = "FCARECIBO"
    )
    private LocalDateTime fcarecibo;

    /**
     * Campo cdremi del objeto de dominio T238
     */
    @NotBlank
    @Column(
            name = "CDREMI",
            length = 5
    )
    private String cdremi;

    /**
     * Campo cdunidad del objeto de dominio T238
     */
    @NotBlank
    @Column(
            name = "CDUNIDAD",
            length = 5
    )
    private String cdunidad;

    /**
     * Campo cdcorreos del objeto de dominio T238
     */
    @NotBlank
    @Column(
            name = "CDCORREOS",
            length = 2
    )
    private String cdcorreos;

    /**
     * Campo numcer del objeto de dominio T238
     */
    @Column(
            name = "NUMCER",
            length = 5
    )
    private String numcer;

    /**
     * Campo numrelacion del objeto de dominio T238
     */
    @Column(
            name = "NUMRELACION"
    )
    private Long numrelacion;

    /**
     * Campo itimpre del objeto de dominio T238
     */
    @NotBlank
    @Column(
            name = "ITIMPRE",
            length = 1
    )
    private String itimpre;

    /**
     * Campo fcreal del objeto de dominio T238
     */
    @Column(
            name = "FCREAL"
    )
    private LocalDateTime fcreal;

    /**
     * Campo fcemision del objeto de dominio T238
     */
    @Column(
            name = "FCEMISION"
    )
    private LocalDateTime fcemision;

    /**
     * Campo cdaexp del objeto de dominio T238
     */
    @Column(
            name = "CDAEXP"
    )
    private Long cdaexp;

    /**
     * Campo cddeptno del objeto de dominio T238
     */
    @Column(
            name = "CDDEPTNO",
            length = 2
    )
    private String cddeptno;

    /**
     * Campo cddigito del objeto de dominio T238
     */
    @Column(
            name = "CDDIGITO"
    )
    private Long cddigito;

    /**
     * Campo cdtexp del objeto de dominio T238
     */
    @Column(
            name = "CDTEXP",
            length = 4
    )
    private String cdtexp;

    /**
     * Campo cdnexp del objeto de dominio T238
     */
    @Column(
            name = "CDNEXP"
    )
    private Long cdnexp;

    /**
     * Campo cdinteresado del objeto de dominio T238
     */
    @Column(
            name = "CDINTERESADO",
            length = 9
    )
    private String cdinteresado;

    /**
     * Campo cdsubint del objeto de dominio T238
     */
    @Column(
            name = "CDSUBINT",
            length = 2
    )
    private String cdsubint;

    public T238(String pk) {
        this.cddocum = pk;
    }

    /**
     * Implementación de JAPI para obtener el identificador de la entidad
     */
    @Override
    @JsonIgnore
    public String getEntityId() {
        return cddocum;
    }
}

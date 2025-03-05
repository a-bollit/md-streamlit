import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.madrid.japi.api.dto.scan.JapiField;
import org.madrid.japi.api.dto.scan.JapiFieldClass;

import java.util.Date;

@Getter
@Setter
@JapiFieldClass
public class GetGeaAcureOutputDTO {
    @JsonProperty("cddocum")
    @JapiField
    private String cddocum;

    @JsonProperty("cbMarca")
    @JapiField
    private String cbMarca;

    @JsonProperty("documento")
    @JapiField
    private String documento;

    @JsonProperty("dsdocum")
    @JapiField
    private String dsdocum;

    @JsonProperty("expediente")
    @JapiField
    private String expediente;

    @JsonProperty("interesado")
    @JapiField
    private String interesado;

    @JsonProperty("itOficioPdf")
    @JapiField
    private String itOficioPdf;

    @JsonProperty("itFirmado")
    @JapiField
    private String itFirmado;

    @JsonProperty("itRegistrado")
    @JapiField
    private String itRegistrado;

    @JsonProperty("fcEmision")
    @JapiField
    private Date fcEmision;

    @JsonProperty("fcReal")
    @JapiField
    private Date fcReal;

    @JsonProperty("itimpre")
    @JapiField
    private String itimpre;

    @JsonProperty("numRelacion")
    @JapiField
    private Integer numRelacion;

    @JsonProperty("cdDeptno")
    @JapiField
    private String cdDeptno;

    @JsonProperty("cdTexp")
    @JapiField
    private String cdTexp;

    @JsonProperty("cdNexp")
    @JapiField
    private Integer cdNexp;

    @JsonProperty("cdDigito")
    @JapiField
    private Integer cdDigito;

    @JsonProperty("cdAexp")
    @JapiField
    private Integer cdAexp;

    @JsonProperty("cdInteresado")
    @JapiField
    private String cdInteresado;

    @JsonProperty("cdInteresadoOld")
    @JapiField
    private String cdInteresadoOld;

    @JsonProperty("cdSubInt")
    @JapiField
    private String cdSubInt;

    @JsonProperty("cdSubIntOld")
    @JapiField
    private String cdSubIntOld;

    @JsonProperty("dsNombre")
    @JapiField
    private String dsNombre;

    @JsonProperty("dsApellido1")
    @JapiField
    private String dsApellido1;

    @JsonProperty("dsApellido2")
    @JapiField
    private String dsApellido2;

    @JsonProperty("dsRazonSoc")
    @JapiField
    private String dsRazonSoc;

    @JsonProperty("cdPais")
    @JapiField
    private String cdPais;

    @JsonProperty("cdProv")
    @JapiField
    private String cdProv;

    @JsonProperty("cdMuni")
    @JapiField
    private String cdMuni;

    @JsonProperty("dsDireccion")
    @JapiField
    private String dsDireccion;

    @JsonProperty("dsDireccion1")
    @JapiField
    private String dsDireccion1;

    @JsonProperty("dsDireccion2")
    @JapiField
    private String dsDireccion2;

    @JsonProperty("cdPostal")
    @JapiField
    private String cdPostal;

    @JsonProperty("dsTelefono")
    @JapiField
    private String dsTelefono;

    @JsonProperty("dsFax")
    @JapiField
    private String dsFax;

    @JsonProperty("clave2")
    @JapiField
    private String clave2;

    @JsonProperty("contenido2")
    @JapiField
    private String contenido2;
}
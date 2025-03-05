import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.madrid.japi.api.dto.scan.JapiField;
import org.madrid.japi.api.dto.scan.JapiFieldClass;

@Getter
@Setter
@JapiFieldClass
public class GetGeaAcureOutputDTO {
    @JsonProperty("field1")
    @JapiField
    private String field1;

    @JsonProperty("field2")
    @JapiField
    private String field2;

    // Add more fields as necessary, following the same pattern
}
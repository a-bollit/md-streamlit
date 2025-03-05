package org.madrid.1234.rest.prueba;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.servers.Server;
import java.util.TimeZone;
import javax.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.madrid.japi.api.context.JapiCommonComponentsLoader;
import org.madrid.japi.api.dto.scan.JapiScanDto;
import org.madrid.japi.rest.context.JapiWebConfiguration;
import org.madrid.japi.starter.hikari.context.JapiHabilitaConfiguracionHikari;
import org.madrid.japi.starter.openapi.context.JapiHabilitaConfiguracionOpenApi;
import org.madrid.japi.starter.seguridad.context.JapiHabilitaConfiguracionSeguridad;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.ApplicationPidFileWriter;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;

/**
 * Clase Application
 * <br>
 *
 * @author Generador de API Rest
 *
 * @since 17-dic-2024 13:13:24 (v)
 *
 * La anotación @Import(JapiWebConfiguration.class) aplica el CORS y la gestión de la cabecera x-trace-id
 */
@Slf4j
@SpringBootApplication
@JapiCommonComponentsLoader
@ComponentScan(
        basePackages = {"org.madrid.1234.rest.prueba"}
)
@JapiScanDto({"org.madrid.1234.rest.prueba"})
@Import(JapiWebConfiguration.class)
@JapiHabilitaConfiguracionHikari
@JapiHabilitaConfiguracionSeguridad
@JapiHabilitaConfiguracionOpenApi({"org.madrid.1234.rest.prueba"})
@OpenAPIDefinition(
        servers = {@Server(url = "/1234_rest_prueba")}
)
public class Application {
    /**
     * Zona horaria empleada en la aplicación, por defecto Europe/Madrid, configurable en el fichero .properties con la propiedad: default-time-zone
     */
    @Value("${default-time-zone:Europe/Madrid}")
    private String defaultTimeZone;

    public static void main(String[] args) {
        SpringApplication springApplication = new SpringApplication(Application.class);
        springApplication.addListeners(new ApplicationPidFileWriter());
        SpringApplication.run(Application.class, args);
    }

    /**
     * Establece la zona horaria una vez ha iniciado la aplicación
     */
    @PostConstruct
    void initTimeZone() {
        log.info("[INFO] - se establece la zona horaria a: {}", defaultTimeZone);
        TimeZone.setDefault(TimeZone.getTimeZone(defaultTimeZone));
    }
}

package org.madrid.1234.rest.prueba;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.io.IOException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@Tag(
        name = "Página de incio de la aplicación"
)
public class PaginaInicioController {
    @Value("${japi.rest.swagger.pagina-inicio}")
    private String welcomeFile;

    /**
     * Redirige a la ruta de contexto indicada en el application.properties de
     * entorno. */
    @Operation(
            summary = "Redirige a la página de incio de la aplicación, en este caso swagger"
    )
    @GetMapping("/")
    public RedirectView welcomeFile() throws IOException {
        RedirectView redirectView = new RedirectView();
        redirectView.setContextRelative(true);
        welcomeFile = welcomeFile != null && welcomeFile.charAt(0) == '/' ? welcomeFile : "/" + welcomeFile;
        redirectView.setUrl(welcomeFile);
        return redirectView;
    }
}

import java.util.List;
import org.madrid.1234.rest.prueba.t238.dtos.GetGeaAcureOutputDTO;
import org.madrid.1234.rest.prueba.t238.services.GeaAcureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/gea_acure")
public class GeaAcureController {

    @Autowired
    private GeaAcureService geaAcureService;

    @GetMapping
    public List<GetGeaAcureOutputDTO> getAllGeaAcure() {
        return geaAcureService.findAll();
    }

    @GetMapping("/{cddocum}")
    public GetGeaAcureOutputDTO getGeaAcureById(@PathVariable String cddocum) {
        return geaAcureService.findById(cddocum);
    }

    @PostMapping
    public GetGeaAcureOutputDTO createGeaAcure(@RequestBody GetGeaAcureOutputDTO geaAcureDTO) {
        return geaAcureService.save(geaAcureDTO);
    }

    @PutMapping("/{cddocum}")
    public GetGeaAcureOutputDTO updateGeaAcure(@PathVariable String cddocum, @RequestBody GetGeaAcureOutputDTO geaAcureDTO) {
        return geaAcureService.update(cddocum, geaAcureDTO);
    }

    @DeleteMapping("/{cddocum}")
    public void deleteGeaAcure(@PathVariable String cddocum) {
        geaAcureService.delete(cddocum);
    }

    @GetMapping("/details/{cddocum}")
    public GetGeaAcureCddocumOutputDTO getGeaAcureCddocumDetails(@PathVariable String cddocum) {
        return geaAcureService.getCddocumDetails(cddocum);
    }
}
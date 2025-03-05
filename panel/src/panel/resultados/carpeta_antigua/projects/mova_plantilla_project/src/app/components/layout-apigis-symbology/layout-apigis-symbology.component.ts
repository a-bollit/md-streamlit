import { Component, OnInit } from "@angular/core";
import ApiMap from 'apigis/dist/apigis.Map';
import ApiLayer from 'apigis/dist/apigis.Layer';
import ApiViewer from 'apigis/dist/apigis.Viewer';
import ApiSimpleFillSymbol from 'apigis/dist/apigis.SimpleFillSymbol';


@Component({
  selector: "app-layout-apigis-symbology",
  templateUrl: "./layout-apigis-symbology.html",
  styleUrls: ["./layout-apigis-symbology.scss"],
})
export class LayoutApigisSymbology implements OnInit {
  constructor() {}

  /** Visor GIS */
  viewer: any;

  /** Capa vectorial sobre la que se harán las ediciones de simbología */
  configLayer: any;

  /** Transparencia */
  transparency: number;

  /** Color de relleno */
  fillColor: string;

  /** Color de contorno */
  strokeColor: string;

  /** Anchura de contorno */
  strokeWidth: number;

  /** Controla si las etiquetas de la capa están activadas */
  labeled: boolean = false;

  ngOnInit(): void {
    this.initViewer();
  }

  /**
   * Inicia el visor con su capa base
   */
  initViewer(): void {
    // Generación del mapa
    const map = new ApiMap({
      type: "OL",
      options: {
        title: "Mapa 1",
        projection: "EPSG:25830",
        center: [440312.24777, 4474261.2537],
        zoom: 8,
      },
    });
    // Adicción de capa base PNOA al mapa
    const cartoBaseLayer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "XYZ",
      options: {
        title: "Carto Light",
        url: "https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
        baseLayer: true,
      },
    });
    this.configLayer = new ApiLayer({
      type: "OL",
      typeLayer: "Vector",
      subtypeLayer: "Vector",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          typeName: "nomecalles:NMCL_MUNICIPIO",
        },
      },
    });
    map.addLayer(cartoBaseLayer);
    map.addLayer(this.configLayer);

    // Cambiamos la simbología de la capa
    this.strokeColor = "#000000";
    this.fillColor = "#30FF2B";
    this.changeVectorSymbology();
    // Generación del visor con el mapa creado
    this.viewer = new ApiViewer({
      container: "container-apigis-symbology",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [map],
    });
  }

  /**
   *  Modifica la opacidad de la capa
   * @param transparency valor del 0 al 1 con la transparencia para setear la capa
   */
  changeTransparency(transparency: number): void {
    this.configLayer.setOpacity(1 - transparency);
  }

  /**
   *  Modifica las propiedades de la simbología de la capa vectorial de Municipios
   */
  changeVectorSymbology(): void {
    const newSymbology = new ApiSimpleFillSymbol({
      type: "OL",
      properties: {
        fillColor: this.fillColor,
        strokeColor: this.strokeColor,
        strokeWidth: this.strokeWidth,
      },
    });
    this.configLayer.setSymbology(newSymbology);
    if (this.labeled) {
      this.configLayer.labelByProperty("DESCR", {
        fillColor: "grey",
        strokeColor: "white",
        strokeWidth: 1,
      });
    } else {
      // this.configLayer.labelByProperty();
    }
  }

  /**
   *  Hace zoom a la capa de Municipios
   */
  zoomToLayer(): void {
    this.viewer.getActiveMap().zoomToLayer(this.configLayer);
  }

  /**
   *  Controla las etiquetas de la capa
   */
  handleLabels() {
    this.labeled = !this.labeled;
    this.changeVectorSymbology();
  }
}

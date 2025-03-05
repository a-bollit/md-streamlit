import { Component, OnInit } from "@angular/core";
import ApiMap from "apigis/dist/apigis.Map";
import ApiLayer from "apigis/dist/apigis.Layer";
import ApiViewer from "apigis/dist/apigis.Viewer";
import ApiFilter from "apigis/dist/apigis.Filter";
import ApiSimpleFillSymbol from 'apigis/dist/apigis.SimpleFillSymbol';
@Component({
  selector: "app-layout-apigis-filters",
  templateUrl: "./layout-apigis-filters.html",
  styleUrls: ["./layout-apigis-filters.scss"],
})
export class LayoutApigisFilters implements OnInit {
  constructor() {}

  /** Visor GIS */
  viewer: any;

  /** Capa vectorial sobre la que se harán las ediciones de simbología */
  configLayer: any;

  /** Filtro seleccionado */
  filterText: string;

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
    this.configLayer.setSymbology(
      new ApiSimpleFillSymbol({
        type: "OL",
        properties: {
          strokeColor: "#000000",
          strokeWidth: 2,
        },
      })
    );
    map.addLayer(cartoBaseLayer);
    map.addLayer(this.configLayer);
    const overlayLayer = map.addOverlayLayer("find");
    overlayLayer.setSymbology(
      new ApiSimpleFillSymbol({
        type: "OL",
        properties: {
          fillColor:"#fff8ad",
          strokeColor: "#ffe900",
          strokeWidth: 2,
        },
      })
    );
    // Generación del visor con el mapa creado
    this.viewer = new ApiViewer({
      container: "container-apigis-filters",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [map],
    });
  }

  applyFilter() {
    const filter = new ApiFilter();
    if (this.filterText != "") {
      filter.addEqualExpresion("DESCR", this.filterText);
    }
    this.configLayer.setDefinitionQuery(filter);
  }

  applySearch() {
    const filter = new ApiFilter();
    if (this.filterText != "") {
      filter.addEqualExpresion("DESCR", this.filterText);
    }
    let response = this.configLayer.find(filter);
    const overlayLayer = this.viewer.getActiveMap().findOverlayLayer("find");
    if (response) {
      response.then((data) => {
        overlayLayer.addFeatures(data);
        this.viewer.getActiveMap().zoomToFeatures(data);
      });
    }
  }

  remove() {
    this.viewer.getActiveMap().findOverlayLayer("find").clear();
    this.configLayer.setDefinitionQuery(null);
  }
}

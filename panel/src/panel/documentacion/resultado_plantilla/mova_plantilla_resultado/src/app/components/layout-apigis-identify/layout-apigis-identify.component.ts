import { Component, OnDestroy, OnInit } from "@angular/core";
import ApiMap from "apigis/dist/apigis.Map";
import ApiLayer from "apigis/dist/apigis.Layer";
import ApiViewer from "apigis/dist/apigis.Viewer";
import ApiSimpleFillSymbol from 'apigis/dist/apigis.SimpleFillSymbol';
@Component({
  selector: "app-layout-apigis-identify",
  templateUrl: "./layout-apigis-identify.html",
  styleUrls: ["./layout-apigis-identify.scss"],
})
export class LayoutApigisIdentify implements OnInit, OnDestroy {
  constructor() {}
  viewer: any;
  identifyPoint: string = "Sin resultados";
  identifyFeature: string = "Sin resultados";
  identifyOverLayer: any;
  ngOnInit(): void {
    this.initViewer();
    this.initIdentify();
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
    const municipiosLayer = new ApiLayer({
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
    map.addLayer(municipiosLayer);

    // Generación del visor con el mapa creado
    this.viewer = new ApiViewer({
      container: "container-apigis-identify",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [map],
    });
  }

  initIdentify() {
    this.identifyOverLayer = this.viewer
      .getActiveMap()
      .addOverlayLayer("identifyLayer");
    this.identifyOverLayer.setSymbology(
      new ApiSimpleFillSymbol({
        type: "OL",
        properties: { fillColor: [255, 255, 0, 0.5], strokeColor: "yellow" },
      })
    );
    this.viewer
      .getActiveMap()
      .click((clickPoint: any) => this.handleMapClick(clickPoint));
  }

  handleMapClick(clickPoint) {
    this.identifyPoint = `X: ${clickPoint.geometry.coordinates[0]
      .toFixed(2)
      .toString()}, Y:${clickPoint.geometry.coordinates[1]
      .toFixed(2)
      .toString()}`;
    this.identifyFeature = "Sin resultados";
    const layers = this.viewer.getActiveMap().layers;
    const identifyPromises: Promise<any>[] = [];
    for (const aLayer of layers) {
      if (
        aLayer.visible &&
        aLayer.queryable &&
        typeof aLayer.identify === "function"
      )
        identifyPromises.push(aLayer.identify(clickPoint, { tolerance: 10 }));
      Promise.all(identifyPromises).then((identifyResults) => {
        this.identifyOverLayer.clear();
        identifyResults
          .filter((layer) => layer.id !== this.identifyOverLayer.id)
          .forEach((layer) => {
            if (
              (layer.data.features && layer.data.features.length > 0) ||
              (layer.type && layer.type === "xml")
            ) {
              this.identifyOverLayer.addFeatures(layer.data.features);
              const entities = [];
              layer.data.features.forEach((f) => {
                entities.push(f.properties.DESCR);
              });
              this.identifyFeature = entities.join(", ");
            }
          });
      });
    }
  }
  /**
   * Cierra el widget y elimina las interaciones con el mapa.
   */
  ngOnDestroy(): void {
    this.viewer.getActiveMap().removeOverlayLayer("identifyLayer");
    this.viewer.getActiveMap().cleanInteraction();
  }
}

import { Component, OnInit } from "@angular/core";
import ApiMap from "apigis/dist/apigis.Map";
import ApiLayer from "apigis/dist/apigis.Layer";
import ApiViewer from "apigis/dist/apigis.Viewer";
import ApiSimpleMarkerSymbol from "apigis/dist/apigis.SimpleMarkerSymbol";

@Component({
  selector: "app-layout-apigis-cluster",
  templateUrl: "./layout-apigis-cluster.html",
  styleUrls: ["./layout-apigis-cluster.scss"],
})
export class LayoutApigisCluster implements OnInit {
  /** Visor GIS */
  viewer: any;

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
    const farmaciasLayer = new ApiLayer({
      type: "OL",
      typeLayer: "Vector",
      subtypeLayer: "Vector",
      options: {
        title: "Farmacias",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          typeName: "nomecalles:NMCL_FARMACIA",
        },
      },
    });
    farmaciasLayer.setSymbology(new ApiSimpleMarkerSymbol({
      type: "OL",
      properties: {
        strokeColor: "#000000",
        fillColor: "#30ff2b",
        strokeWidth: 2,
      },
    }),
    );
    map.addLayer(cartoBaseLayer);
    map.addLayer(farmaciasLayer);

    /** Aplicación del cluster sobre la capa vectorial. */
    farmaciasLayer.setCluster(100, null, {
      resize: { originalRange: [1, 3744], resizeRange: [20, 40] },
    });

    // Generación del visor con el mapa creado
    this.viewer = new ApiViewer({
      container: "container-apigis-cluster",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [map],
    });
  }
}

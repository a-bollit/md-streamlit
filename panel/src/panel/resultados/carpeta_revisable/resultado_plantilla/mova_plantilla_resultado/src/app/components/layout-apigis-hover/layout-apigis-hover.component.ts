import { Component, OnInit } from "@angular/core";
import ApiMap from "apigis/dist/apigis.Map";
import ApiLayer from "apigis/dist/apigis.Layer";
import ApiViewer from "apigis/dist/apigis.Viewer";
import ApiSimpleFillSymbol from "apigis/dist/apigis.SimpleFillSymbol";
import ApiSimpleMarkerSymbol from "apigis/dist/apigis.SimpleMarkerSymbol";
import ApiSimpleLineSymbol from "apigis/dist/apigis.SimpleLineSymbol";
@Component({
  selector: "app-layout-apigis-hover",
  templateUrl: "./layout-apigis-hover.html",
  styleUrls: ["./layout-apigis-hover.scss"],
})
export class LayoutApigisHover implements OnInit {
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
        zoom: 10,
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
    municipiosLayer.setSymbology(
      new ApiSimpleFillSymbol({
        type: "OL",
        properties: {
          strokeColor: "#000000",
          strokeWidth: 2,
        },
      })
    );
    map.addLayer(cartoBaseLayer);
    map.addLayer(municipiosLayer);
    const overlayLayer = map.addOverlayLayer("find");
    overlayLayer.setSymbology(
      new ApiSimpleFillSymbol({
        type: "OL",
        properties: {
          fillColor: "#fff8ad",
          strokeColor: "#ffe900",
          strokeWidth: 2,
        },
      })
    );
    // Generación del visor con el mapa creado
    this.viewer = new ApiViewer({
      container: "container-apigis-hover",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [map],
    });
    const hoverStyles = [
      new ApiSimpleFillSymbol({
        type: "OL",
        properties: { fillColor: [255, 255, 0, 0.5], strokeColor: "yellow" },
      }),
      new ApiSimpleLineSymbol({
        type: "OL",
        properties: { strokeColor: "yellow", strokeWidth: 2 },
      }),
      new ApiSimpleMarkerSymbol({
        type: "OL",
        properties: { fillColor: [255, 255, 0, 0.5], strokeColor: "yellow" },
      }),
    ];
    map.hover([municipiosLayer], {
      symbol: hoverStyles,
    });
  }
}

import {Component, OnDestroy, OnInit} from "@angular/core";
import ApiMap from "apigis/dist/apigis.Map";
import ApiLayer from "apigis/dist/apigis.Layer";
import ApiViewer from "apigis/dist/apigis.Viewer";
import ApiSimpleMarkerSymbol from 'apigis/dist/apigis.SimpleMarkerSymbol';
import ApiSimpleLineSymbol from 'apigis/dist/apigis.SimpleLineSymbol';
import ApiSimpleFillSymbol from 'apigis/dist/apigis.SimpleFillSymbol';
@Component({
  selector: "app-layout-apigis-draw",
  templateUrl: "./layout-apigis-draw.html",
  styleUrls: ["./layout-apigis-draw.scss"],
})
export class LayoutApigisDraw implements OnInit, OnDestroy {
  constructor() {}
  viewer: any;
  drawOverLayer: any;

  ngOnInit(): void {
    this.initViewer();
    this.createDrawLayer();
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
    map.addLayer(cartoBaseLayer);

    // Generación del visor con el mapa creado
    this.viewer = new ApiViewer({
      container: "container-apigis-draw",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [map],
    });
  }

  createDrawLayer() {
    this.drawOverLayer = this.viewer.getActiveMap().addOverlayLayer("blackboardDrawLayer");

    const drawStyles = (feature) => {
      let symbol;
      switch (feature.geometry.type.toUpperCase()) {
        case 'POLYGON':
        case 'MULTIPOLYGON':
          symbol = ApiSimpleFillSymbol({
            type: 'OL',
            properties: {
              fillColor: [0, 0, 255, 0],
              strokeColor: 'red',
              strokeWidth: 2,
            },
          });
          break;
        case 'LINESTRING':
        case 'MULTILINESTRING':
          symbol = ApiSimpleLineSymbol({
            type: 'OL',
            properties: {
              strokeColor: 'red',
              strokeWidth: 2,
            },
          });
          break;
        case 'POINT':
        case 'MULTIPOINT':
          symbol = ApiSimpleMarkerSymbol({
            type: 'OL',
            properties: {
              type: 'circle',
              fillColor: [0, 0, 255, 0.1],
              strokeColor: 'red',
              radius: 8,
              strokeWidth: 2,
            },
          });
          break;
      }
      return symbol;
    };
    this.drawOverLayer.setSymbology(drawStyles);
  }

  drawCircle() {
    const map = this.viewer.getActiveMap();
    this.drawOverLayer.clear();
    map.cleanMapEvent();
    map.drawCircle({
      layer: this.drawOverLayer,
    });
  }

  drawPoint() {
    const map = this.viewer.getActiveMap();
    map.cleanMapEvent();
    map.drawPoint({
      layer: this.drawOverLayer,
    });
  }

  drawLine() {
    const map = this.viewer.getActiveMap();
    map.cleanMapEvent();
    map.drawLine({
      layer: this.drawOverLayer,
    });
  }

  drawPolygon() {
    const map = this.viewer.getActiveMap();
    map.closePopups();
    map.cleanMapEvent();
    map.drawPolygon({
      layer: this.drawOverLayer,
    });
  }

  remove() {
    this.viewer.getActiveMap().cleanInteraction();
    this.drawOverLayer.clear();
  }

  /**
   * Cierra el widget y elimina las interaciones con el mapa.
   */
  ngOnDestroy(): void {
    this.viewer.getActiveMap().removeOverlayLayer('blackboardDrawLayer');
    this.viewer.getActiveMap().cleanInteraction();
  }
}

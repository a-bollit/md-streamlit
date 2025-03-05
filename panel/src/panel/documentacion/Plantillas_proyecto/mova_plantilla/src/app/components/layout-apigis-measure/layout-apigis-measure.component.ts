import { Component, OnDestroy, OnInit } from '@angular/core';
import ApiMap from 'apigis/dist/apigis.Map';
import ApiLayer from 'apigis/dist/apigis.Layer';
import ApiViewer from 'apigis/dist/apigis.Viewer';
import ApiSimpleMarkerSymbol from 'apigis/dist/apigis.SimpleMarkerSymbol';
import ApiSimpleLineSymbol from 'apigis/dist/apigis.SimpleLineSymbol';
import ApiSimpleFillSymbol from 'apigis/dist/apigis.SimpleFillSymbol';
@Component({
  selector: 'app-layout-apigis-measure',
  templateUrl: './layout-apigis-measure.html',
  styleUrls: ['./layout-apigis-measure.scss']
})
export class LayoutApigisMeasure implements OnInit, OnDestroy {

  constructor() { }
  measureText: string = '';
  viewer: any;
  measureOverLayer: any;

  ngOnInit(): void {
    this.initViewer();
    this.createMeasureLayer();
  }
  /**
   * Inicia el visor con su capa base
   */
  initViewer(): void {
    // Generación del mapa
    let map = new ApiMap({
      type: "OL",
      options: {
        title: "Mapa 1",
        projection: "EPSG:25830",
        center: [440312.24777, 4474261.2537],
        zoom: 10,
      },
    });
    // Adicción de capa base PNOA al mapa
    let cartoBaseLayer = new ApiLayer({
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
      container: "container-apigis-measure",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [map],
    });
  }

  createMeasureLayer() {
    this.measureOverLayer = this.viewer.getActiveMap().addOverlayLayer("blackboardMeasureLayer");

    const measureStyles = feature => {
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
            }
          });
          break;
        case 'LINESTRING':
        case 'MULTILINESTRING':
          symbol = ApiSimpleLineSymbol({
            type: 'OL',
            properties: {
              strokeColor: 'red',
              strokeWidth: 2,
            }
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
            }
          });
          break;
      }
      return symbol;
    };
    this.measureOverLayer.setSymbology(measureStyles);
  }

  measurePoint() {
    let map = this.viewer.getActiveMap();
    map.cleanMapEvent();
    map.drawCircle({
      measure: true,
      layer: this.measureOverLayer,
      callback: (object) => {
          this.measureText = (object.area / 10000000).toFixed(4).toString() + ' Km\u00B2';
          this.measureOverLayer.addFeatures(object.geojson);
      }
  });
  }

  measureLine() {
    let map = this.viewer.getActiveMap();
    map.cleanMapEvent();
    map.drawLine({
      layer: this.measureOverLayer,
      measure: true,
      callback: (object) => {
          this.measureText = (object.length / 1000).toFixed(4).toString() + ' Km';
          this.measureOverLayer.addFeatures(object.geojson);
      }
    });
  }

  measurePolygon() {
    let map = this.viewer.getActiveMap();
    map.cleanMapEvent();
    map.drawPolygon({
      layer: this.measureOverLayer,
      measure: true,
      callback: (object) => {
          this.measureText = (object.area / 10000000).toFixed(4).toString() + ' Km\u00B2';
          this.measureOverLayer.addFeatures(object.geojson);
      }
    });
  }

  remove() {
    this.measureText = '';
    this.viewer.getActiveMap().cleanInteraction();
    this.measureOverLayer.clear();
  }

    /**
   * Cierra el widget y elimina las interaciones con el mapa.
   */
     ngOnDestroy(): void {
      this.viewer.getActiveMap().removeOverlayLayer('blackboardMeasureLayer');
      this.viewer.getActiveMap().cleanInteraction();
    }

}

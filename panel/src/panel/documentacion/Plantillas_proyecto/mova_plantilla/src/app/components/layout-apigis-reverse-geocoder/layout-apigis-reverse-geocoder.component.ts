import { Component, OnInit } from "@angular/core";
import ApiMap from 'apigis/dist/apigis.Map';
import ApiLayer from 'apigis/dist/apigis.Layer';
import ApiViewer from 'apigis/dist/apigis.Viewer';
import ApiSimpleMarkerSymbol from 'apigis/dist/apigis.SimpleMarkerSymbol';
import ApiGeocoder from 'apigis/dist/apigis.Geocoder';
import ApiUtils from 'apigis/dist/apigis.Utils';


@Component({
  selector: "app-layout-apigis-reverse-geocoder",
  templateUrl: "./layout-apigis-reverse-geocoder.html",
  styleUrls: ["./layout-apigis-reverse-geocoder.scss"],
})
export class LayoutApigisReverseGeocoder implements OnInit {
  constructor() {}

  /** Mapa GIS */
  map: any;

  /** Geocoder GIS */
  geocoder: any;

  /** Elemento seleccionado del geocoder */
  latitud: number = 40.3957;
  longitud: number = -3.7177;

  ngOnInit(): void {
    this.initViewer();
  }

  /**
   * Inicia el visor con su capa base
   */
  initViewer(): void {
    // Generación del mapa
    this.map = new ApiMap({
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

    this.map.addLayer(cartoBaseLayer);
    const overlayLayer = this.map.addOverlayLayer("geocoder");
    overlayLayer.setSymbology(
      new ApiSimpleMarkerSymbol({
        type: "OL",
        properties: { fillColor: [21, 244, 238] },
      })
    );
    // Generación del visor con el mapa creado
    const viewer = new ApiViewer({
      container: "container-apigis-reverse-geocoder",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [this.map],
    });

    this.geocoder = new ApiGeocoder("Cartociudad");
  }

  searchOnReverseGeocoder() {
    const overlayLayer = this.map.findOverlayLayer("geocoder");
    if (!isNaN(this.latitud) && !isNaN(this.longitud)) {
      this.geocoder
        .reverse({ lat: this.latitud, lon: this.longitud })
        .then((response) => {
          let feature = ApiUtils.wktToGeoJSON(
            `POINT(${this.longitud} ${this.latitud})`
          );
          feature = this.map.project(feature, "EPSG:4326");
          overlayLayer.addFeatures(feature);
          this.map.zoomToFeatures(feature, 50, 20);
        });
    }
  }
}

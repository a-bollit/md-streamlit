import { Component, OnInit } from "@angular/core";
import ApiMap from "apigis/dist/apigis.Map";
import ApiLayer from "apigis/dist/apigis.Layer";
import ApiViewer from "apigis/dist/apigis.Viewer";
import ApiUtils from 'apigis/dist/apigis.Utils';
import ApiSimpleFillSymbol from 'apigis/dist/apigis.SimpleFillSymbol';
import ApiGeocoder from 'apigis/dist/apigis.Geocoder';
@Component({
  selector: "app-layout-apigis-geocoder",
  templateUrl: "./layout-apigis-geocoder.html",
  styleUrls: ["./layout-apigis-geocoder.scss"],
})
export class LayoutApigisGeocoder implements OnInit {
  constructor() {}

  /** Mapa GIS */
  map: any;

  /** Geocoder GIS */
  geocoder: any;

  /** Elemento seleccionado del geocoder */
  geocoderText: string;

  filteredOptions: any[];

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
    const viewer = new ApiViewer({
      container: "container-apigis-geocoder",
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

  searchOnGeocoder() {
    const overlayLayer = this.map.findOverlayLayer("geocoder");
    const geocoderElement = this.filteredOptions.find(
      (e) => e.address == this.geocoderText
    );
    this.geocoder
      .find({
        id: geocoderElement.id,
        type: geocoderElement.type,
        portal: geocoderElement.portalNumber,
      })
      .then((res) => {
        let feature = ApiUtils.wktToGeoJSON(res.geom);
        feature = this.map.project(feature, "EPSG:4326");
        overlayLayer.addFeatures(feature);
        this.map.zoomToFeatures(feature, 50, 20);
      });
  }

  onDirectionChange(value: string) {
    const paramsCandidatesCarto = {
      q: value,
      limit: 4,
    };
    this.filteredOptions = [];
    if (value.length > 4) {
      this.geocoder.candidates(paramsCandidatesCarto).then((results) => {
        if (results.length > 0) {
          results.forEach((res) => {
            this.filteredOptions.push(res);
          });
        }
      });
    }
  }
}

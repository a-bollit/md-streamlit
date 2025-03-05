import { Component, OnInit } from "@angular/core";
import ApiMap from 'apigis/dist/apigis.Map';
import ApiLayer from 'apigis/dist/apigis.Layer';
import ApiViewer from 'apigis/dist/apigis.Viewer';
@Component({
  selector: "app-layout-apigis-simple",
  templateUrl: "./layout-apigis-simple.html",
  styleUrls: ["./layout-apigis-simple.scss"],
})
export class LayoutApigisSimple implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initViewer();
  }
  initViewer() {
    // Generación de una capa de tipo BaseLayer
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

    // Generación del mapa
    let map = new ApiMap({
      type: "OL",
      options: {
        title: "Mapa 1",
        projection: "EPSG:25830",
        center: ([440312.24777, 4474261.2537]),
        zoom: 10
      },
    });
    map.addLayer(cartoBaseLayer);

    // let map = new ApiMap({
    //   type: "OL",
    //   options: {
    //     title: "Mapa 1",
    //     projection: "EPSG:25830"
    //   },
    // });
    // map.addLayer(cartoBaseLayer);
    // map.setZoom(10);
    // map.atCenter([440312.24777, 4474261.2537]);

    // Generación del visor
    let viewer = new ApiViewer({
      container: "container-apigis-map",
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

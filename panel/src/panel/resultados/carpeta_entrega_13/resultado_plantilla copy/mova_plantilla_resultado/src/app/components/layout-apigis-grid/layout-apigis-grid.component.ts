import {Component, OnInit} from '@angular/core';
import ApiMap from 'apigis/dist/apigis.Map';
import ApiLayer from 'apigis/dist/apigis.Layer';
import ApiViewer from 'apigis/dist/apigis.Viewer';
@Component({
  selector: 'app-layout-apigis-grid',
  templateUrl: './layout-apigis-grid.html',
  styleUrls: ['./layout-apigis-grid.scss'],
})
export class LayoutApigisGrid implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.syncModel = this.syncOptions[0];
    this.initViewer();
  }

  viewer: any;
  syncModel:any;
  syncOptions: any[] = [
    {
      "id": "0",
      "text": "No sincronizados",
    },
    {
      "id": "1",
      "text": "Sincronizados",
    },
    {
      "id": "2",
      "text": "Sincronización continua",
    },
  ];
  initViewer() {
    // Generación de una capa de tipo BaseLayer
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
    // Generación de una capa de tipo BaseLayer
    const googleBaseLayer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "XYZ",
      options: {
        title: "Google Hybrid",
        url: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
        baseLayer: true,
      },
    });
    // Generación del mapa 1
    const map1 = new ApiMap({
      type: "OL",
      options: {
        title: "Mapa 1",
        projection: "EPSG:25830",
        center: ([440312.24777, 4474261.2537]),
        zoom: 10,
      },
    });
    map1.addLayer(cartoBaseLayer);

    // Generación del mapa 2
    const map2 = new ApiMap({
      type: "OL",
      options: {
        title: "Mapa 2",
        projection: "EPSG:25830",
        center: ([440312.24777, 4474261.2537]),
        zoom: 10,
      },
    });
    map2.addLayer(googleBaseLayer);

    // Generación del visor
    this.viewer = new ApiViewer({
      container: "container-apigis-grid",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
        grid: {
          active: true,
        },
      },
      maps: [map1, map2],
    });

    // Activamos el modo grid
    // viewer.setGrid(true);
    // viewer.setSynchronize(1);
  }

  changeSync() {
    this.viewer.setSynchronize(this.syncModel.id);
  }
}

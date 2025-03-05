import {Component, OnInit} from "@angular/core";
import ApiMap from 'apigis/dist/apigis.Map';
import ApiLayer from 'apigis/dist/apigis.Layer';
import ApiViewer from 'apigis/dist/apigis.Viewer';
@Component({
  selector: "app-doc-apigis-viewer",
  templateUrl: "./doc-apigis-viewer.html",
  styleUrls: ["./doc-apigis-viewer.scss"],
})
export class DocApigisViewer implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const map = new ApiMap({
      type: "OL",
      options: {
        title: "Mapa 1",
        projection: "EPSG:25830",
        center: [440312.24777, 4474261.2537],
        zoom: 8,
      },
    });
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

    // Generación de un visor
    const viewer = new ApiViewer({
      container: "doc-apigis-viewer-container",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [map],
    });
  }

  codeViewerExampleHTML = `
    <div id="container-viewer"></div>
  `;
  codeViewerExampleCSS = `
    #doc-apigis-viewer-container {
      width: 100%;
      height: 200px;
    }
  `;
  codeViewerExampleTS = `
  import ApiViewer from 'apigis/dist/apigis.Viewer;

  ...

  constructor(
  ) { }

  ngOnInit() {
    ...
    const viewer = new ApiViewer({
      container: "container-viewer",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [map],
    });
    ...
  }

  ...
  `;
  codeMapExampleHTML = `
  <div id="container-map"></div>
`;
  codeMapExampleTS = `
  import ApiMap from 'apigis/dist/apigis.Map;

  ...

  constructor(
  ) { }

  ngOnInit() {
    ...
    const map = new ApiMap({
      type: "OL",
      options: {
        title: "Mapa 1",
        projection: "EPSG:25830",
        center: [440312.24777, 4474261.2537],
        zoom: 8,
      },
    });
    ...
  }

  ...
  `;
}

import { Component, OnInit } from "@angular/core";
import ApiMap from 'apigis/dist/apigis.Map';
import ApiLayer from 'apigis/dist/apigis.Layer';
import ApiViewer from 'apigis/dist/apigis.Viewer';
@Component({
  selector: "app-doc-apigis-xyz",
  templateUrl: "./doc-apigis-xyz.html",
  styleUrls: ["./doc-apigis-xyz.scss"],
})
export class DocApigisXYZ implements OnInit {
  constructor() {}

  // Mapa y Caoa
  map: any;
  imageLayer: any;

  ngOnInit(): void {
    this.map = new ApiMap({
      type: "OL",
      options: {
        title: "Mapa 3",
        projection: "EPSG:25830",
        center: [440312.24777, 4474261.2537],
        zoom: 8,
      },
    });
    this.imageLayer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "XYZ",
      options: {
        title: "Carto Light",
        url: "https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
        baseLayer: true,
      },
    });
    this.map.addLayer(this.imageLayer);

    // Generación de un visor para incluir el mapa con las capas
    const viewer = new ApiViewer({
      container: "doc-apigis-xyz-container",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [this.map],
    });
  }

  codeImageLayerExampleHTML = `
    ...
    <div id="doc-apigis-xyz-container">
    ...
  `;
  codeImageLayerExampleTS = `
    ...
    import ApiViewer from 'apigis/dist/apigis.Viewer;
    import ApiMap from 'apigis/dist/apigis.Map;
    import ApiLayer from 'apigis/dist/apigis.Layer;

    // Objeto para almacenar la capa
    layer: any;

    ngOnInit() {
      // Generación de una capa de tipo Image/Tile
      this.layer = new ApiLayer({
        type: "OL",
        typeLayer: "Image",
        subtypeLayer: "XYZ",
        options: {
          title: "Carto Light",
          url: "https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
          baseLayer: true,
        },
      });

      // Generación de un mapa
      const map = new ApiMap({
      type: "OL",
      options: {
        title: "Mapa 6",
        projection: "EPSG:25830",
        center: [440312.24777, 4474261.2537],
        zoom: 8,
      },
      });

      // Adicción de las capas al mapa anterior
      map.addLayer(this.layer);

      // Generación de un visor para incluir el mapa con las capas
      const viewer = new ApiViewer({
        container: "doc-apigis-tile-container",
        options: {
          projections: {
            "EPSG:25830":
              "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
          },
        },
        maps: [map],
        });
      }
    ...
  `;

  codeImageLayerExampleCSS = `
    #doc-apigis-tile-container {
      width: 100%;
      height: 200px;
    }
  `;
}

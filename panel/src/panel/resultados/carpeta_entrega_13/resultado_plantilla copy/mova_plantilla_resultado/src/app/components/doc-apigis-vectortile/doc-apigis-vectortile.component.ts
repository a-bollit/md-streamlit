import { Component, OnInit } from "@angular/core";
import ApiMap from 'apigis/dist/apigis.Map';
import ApiLayer from 'apigis/dist/apigis.Layer';
import ApiViewer from 'apigis/dist/apigis.Viewer';
@Component({
  selector: "app-doc-apigis-vectortile",
  templateUrl: "./doc-apigis-vectortile.html",
  styleUrls: ["./doc-apigis-vectortile.scss"],
})
export class DocApigisVectortile implements OnInit {
  constructor() {}

  // Mapa y Caoa
  map: any;
  vectorTileLayer: any;

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
    const vectorLayer = new ApiLayer({
      type: "OL",
      typeLayer: "Vector",
      subtypeLayer: "Vector",
      options: {
        title: "Callejero",
        url: "https://idem.comunidad.madrid/geosrwc/service/wmts",
        params: {
          typename: "nomecalles:NMCL_CALLE",
        },
      },
      inheritedclass: "Geoserver",
    });

    this.vectorTileLayer = new ApiLayer({
      type: "OL",
      typeLayer: "Vector",
      subtypeLayer: "VectorTile",
      options: {
        title: "Callejero",
        url: "https://idem.comunidad.madrid/geosrwc/service/wmts",
        params: {
          LAYER: "nomecalles:NMCL_CALLE",
          MATRIXSET: "VGCM:epsg:25830",
        },
        opacity: 1,
      },
    });
    this.vectorTileLayer.setLinkedLayer(vectorLayer);
    this.map.addLayer(this.vectorTileLayer);

    // Generación de un visor para incluir el mapa con las capas
    const viewer = new ApiViewer({
      container: "doc-apigis-vectortile-container",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [this.map],
    });
  }
  codeVectorTileLayerExampleHTML = `
...
<div id="doc-apigis-vectortile-container">
...
`;
  codeVectorTileLayerExampleTS = `
...
import ApiViewer from 'apigis/dist/apigis.Viewer;
import ApiMap from 'apigis/dist/apigis.Map;
import ApiLayer from 'apigis/dist/apigis.Layer;

// Objeto para almacenar la capa
layer: any;

ngOnInit() {
// Generación de una capa de tipo Vector/VectorTile
this.layer = new ApiLayer({
  type: "OL",
  typeLayer: "Vector",
  subtypeLayer: "VectorTile",
  options: {
    title: "Callejero",
    url: "https://idem.comunidad.madrid/geosrwc/service/wmts",
    params: {
      LAYER: "nomecalles:NMCL_CALLE",
      MATRIXSET: "VGCM:epsg:25830",
    },
    opacity: 1,
  },
});

// Generación de un mapa
const map = new ApiMap({
  type: "OL",
  options: {
    title: "Mapa",
    projection: "EPSG:25830",
    center: [440312.24777, 4474261.2537],
    zoom: 8,
  },
});

// Adicción de las capas al mapa anterior
map.addLayer(this.layer);

// Generación de un visor para incluir el mapa con las capas
const viewer = new ApiViewer({
  container: "doc-apigis-vectortile-container",
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

  codeVectorTileLayerExampleCSS = `
#doc-apigis-vectortile-container {
  width: 100%;
  height: 200px;
}
`;
}

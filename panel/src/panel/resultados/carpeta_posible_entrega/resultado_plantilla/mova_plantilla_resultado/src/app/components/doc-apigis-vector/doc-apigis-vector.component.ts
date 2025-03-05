import { Component, OnInit } from "@angular/core";
import ApiMap from 'apigis/dist/apigis.Map';
import ApiLayer from 'apigis/dist/apigis.Layer';
import ApiViewer from 'apigis/dist/apigis.Viewer';

@Component({
  selector: "app-doc-apigis-vector",
  templateUrl: "./doc-apigis-vector.html",
  styleUrls: ["./doc-apigis-vector.scss"],
})
export class DocApigisVector implements OnInit {
  constructor() {}
  // Mapa y Caoa
  map: any;
  vectorLayer: any;

  ngOnInit(): void {
    this.map = new ApiMap({
      type: "OL",
      options: {
        title: "Mapa",
        projection: "EPSG:25830",
        center: [440312.24777, 4474261.2537],
        zoom: 8,
      },
    });
    this.vectorLayer = new ApiLayer({
      type: "OL",
      typeLayer: "Vector",
      subtypeLayer: "Vector",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        geometryColumn: "BL_GEOM",
        params: {
          typeName: "nomecalles:NMCL_MUNICIPIO",
        },
      },
      inheritedclass: "Geoserver",
    });
    this.map.addLayer(this.vectorLayer);

    // Generación de un visor para incluir el mapa con las capas
    const viewer = new ApiViewer({
      container: "doc-apigis-vector-container",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [this.map],
    });
  }
  codeVectorLayerExampleHTML = `
 ...
 <div id="doc-apigis-vector-container">
 ...
`;
  codeVectorLayerExampleTS = `
...
import ApiViewer from 'apigis/dist/apigis.Viewer;
import ApiMap from 'apigis/dist/apigis.Map;
import ApiLayer from 'apigis/dist/apigis.Layer;

// Objeto para almacenar la capa
layer: any;

ngOnInit() {
 // Generación de una capa de tipo Vector/Vector
 this.layer = new ApiLayer({
   type: "OL",
   typeLayer: "Vector",
   subtypeLayer: "Vector",
   options: {
     title: "Municipios",
     url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
     params: {
       LAYERS: "nomecalles:NMCL_MUNICIPIO",
     },
     geometryColumn: "BL_GEOM",
   },
   inheritedclass: 'Geoserver',
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
   container: "doc-apigis-vector-container",
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

  codeVectorLayerExampleCSS = `
 #doc-apigis-vector-container {
   width: 100%;
   height: 200px;
 }
`;
}

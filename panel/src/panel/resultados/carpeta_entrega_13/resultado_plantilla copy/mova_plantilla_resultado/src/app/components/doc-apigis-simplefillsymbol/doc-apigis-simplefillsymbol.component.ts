import { Component, OnInit } from "@angular/core";
import ApiMap from 'apigis/dist/apigis.Map';
import ApiLayer from 'apigis/dist/apigis.Layer';
import ApiViewer from 'apigis/dist/apigis.Viewer';
import ApiSimpleFillSymbol from 'apigis/dist/apigis.SimpleFillSymbol';

@Component({
  selector: "app-doc-apigis-simplefillsymbol",
  templateUrl: "./doc-apigis-simplefillsymbol.html",
  styleUrls: ["./doc-apigis-simplefillsymbol.scss"],
})
export class DocApigisSimplefillsymbol implements OnInit {
  constructor() {}

  symbology1: any;

  ngOnInit(): void {
    const map = new ApiMap({
      type: "OL",
      options: {
        title: "Mapa",
        projection: "EPSG:25830",
        center: [440312.24777, 4474261.2537],
        zoom: 8,
      },
    });
    // Se crea una Layer de tipo Vector/Vector
    const vectorLayer1 = new ApiLayer({
      type: "OL",
      typeLayer: "Vector",
      subtypeLayer: "Vector",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          typeName: "nomecalles:NMCL_MUNICIPIO",
        },
        geometryColumn: "BL_GEOM",
      },
    });

    // Creación de SimpleFillSymbol mediante propiedades
    this.symbology1 = new ApiSimpleFillSymbol({
      type: 'OL',
      properties: {
        fillColor: [255, 255, 0, 0.5],
        strokeColor: '#00bfff',
      },
    });
    // Asociación de simbología a la capa
    vectorLayer1.setSymbology(this.symbology1);
    // Se añade la capa al mapa
    map.addLayer(vectorLayer1);

    // Se crea otra Layer de tipo Vector/Vector
    const vectorLayer2 = new ApiLayer({
      type: "OL",
      typeLayer: "Vector",
      subtypeLayer: "Vector",
      options: {
        title: "Barrios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          typeName: "nomecalles:NMCL_BARRIO",
        },
        geometryColumn: "BL_GEOM",
      },
    });
    // Cabeceras para pedir un SLD a Geoserver
    const headers = new Headers();
    const username = 'admin';
    const password = 'user_geo99';
    headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));
    // Creación de SimpleFillSymbol mediante SLD
    const symbology2 = new ApiSimpleFillSymbol({
      type: 'OL',
      properties: {
        url: "https://idem.comunidad.madrid/geosrvg/rest/workspaces/nomecalles/styles/NMCL_BARRIO_style.sld",
        headers,
      },
    });
    vectorLayer2.setSymbology(symbology2);
    map.addLayer(vectorLayer2);

    // Generación de un visor para incluir el mapa con las capas
    const viewer = new ApiViewer({
      container: "doc-apigis-simplefillsymbol-container",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [map],
    });
  }
  codeSFSExampleHTML = `
 ...
 <div id="doc-apigis-simplefillsymbol-container">
 ...
`;
  codeSFSExampleTS = `
...
import ApiViewer from 'apigis/dist/apigis.Viewer;
import ApiMap from 'apigis/dist/apigis.Map;
import ApiLayer from 'apigis/dist/apigis.Layer;
import ApSimpleFillSymbol from 'apigis/dist/apigis.SimpleFillSymbol;

// Objeto para almacenar la capa
layerEith: any;

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

  // Generación de simbología de tipo SimpleFillSymbol mediante propiedades
  const symbology = new ApiSimpleFillSymbol({
    type: 'OL',
    properties: {
      fillColor: [255, 255, 0, 0.5],
      strokeColor: '#00bfff',
    },
  });

  // Se asigna la simbología a la capa
  this.layer.setSymbology(symbology);

  // Generación de otra capa de tipo Vector/Vector
  this.layer = new ApiLayer({
    type: "OL",
    typeLayer: "Vector",
    subtypeLayer: "Vector",
    options: {
      title: "Barrios",
      url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
      params: {
        LAYERS: "nomecalles:NMCL_BARRIOS",
      },
      geometryColumn: "BL_GEOM",
    },
    inheritedclass: 'Geoserver',
  });

  // Cabeceras para pedir un SLD a Geoserver
  const headers = new Headers();
  const username = 'XXXX';
  const password = 'XXXX';

  // Generación de simbología de tipo SimpleFillSymbol mediante SLD
  const symbology = new ApiSimpleFillSymbol({
    type: 'OL',
    properties: {
      url: "https://idem.comunidad.madrid/geosrvg/rest/workspaces/nomecalles/styles/NMCL_BARRIO_style.sld",
      headers,
    },
  });
  // Se asigna la simbología a la capa
  this.layer.setSymbology(symbology);

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

  // Adicción de la capa al mapa
  map.addLayer(this.layer);

  // Generación de un visor para incluir el mapa con la capa
  const viewer = new ApiViewer({
    container: "doc-apigis-simplefillsymbol-container",
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

  codeSFSExampleCSS = `
    #doc-apigis-simplefillsymbol-container {
      width: 100%;
      height: 200px;
    }
  `;
}

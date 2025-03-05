import { Component, OnInit } from "@angular/core";
import ApiMap from 'apigis/dist/apigis.Map';
import ApiLayer from 'apigis/dist/apigis.Layer';
import ApiViewer from 'apigis/dist/apigis.Viewer';
import ApiSimpleMarkerSymbol from 'apigis/dist/apigis.SimpleMarkerSymbol';

@Component({
  selector: "app-doc-apigis-simplemarkersymbol",
  templateUrl: "./doc-apigis-simplemarkersymbol.html",
  styleUrls: ["./doc-apigis-simplemarkersymbol.scss"],
})
export class DocApigisSimplemarkersymbol implements OnInit {
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
          typeName: "nomecalles:NMCL_ONG",
        },
        geometryColumn: "BL_GEOM",
      },
    });

    // Creación de SimpleMarkerSymbol mediante propiedades
    this.symbology1 = new ApiSimpleMarkerSymbol({
      type: 'OL',
      properties: {
        fillColor: '#00bfff',
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
          typeName: "nomecalles:NMCL_FARMACIA",
        },
        geometryColumn: "BL_GEOM",
      },
    });
    // Cabeceras para pedir un SLD a Geoserver
    const headers = new Headers();
    const username = 'admin';
    const password = 'user_geo99';
    headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));
    // Creación de SimpleMarkerSymbol mediante SLD
    const symbology2 = new ApiSimpleMarkerSymbol({
      type: 'OL',
      properties: {
        url: "https://idem.comunidad.madrid/geosrvg/rest/workspaces/nomecalles/styles/NMCL_FARMACIA_style.sld",
        headers,
      },
    });
    vectorLayer2.setSymbology(symbology2);
    map.addLayer(vectorLayer2);

    // Generación de un visor para incluir el mapa con las capas
    const viewer = new ApiViewer({
      container: "doc-apigis-simplemarkersymbol-container",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [map],
    });
  }
  codeSMSExampleHTML = `
 ...
 <div id="doc-apigis-simplemarkersymbol-container">
 ...
`;
  codeSMSExampleTS = `
...
import ApiViewer from 'apigis/dist/apigis.Viewer;
import ApiMap from 'apigis/dist/apigis.Map;
import ApiLayer from 'apigis/dist/apigis.Layer;
import ApiSimpleMarkerSymbol from 'apigis/dist/apigis.SimpleMarkerSymbol;

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
        LAYERS: "nomecalles:NMCL_ONG",
      },
      geometryColumn: "BL_GEOM",
    },
    inheritedclass: 'Geoserver',
  });

  // Generación de simbología de tipo SimpleMarkerSymbol mediante propiedades
  const symbology = new ApiSimpleMarkerSymbol({
    type: 'OL',
    properties: {
      fillColor: '#00bfff',
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
        LAYERS: "nomecalles:NMCL_FARMACIA",
      },
      geometryColumn: "BL_GEOM",
    },
    inheritedclass: 'Geoserver',
  });

  // Cabeceras para pedir un SLD a Geoserver
  const headers = new Headers();
  const username = 'XXXX';
  const password = 'XXXX';

  // Generación de simbología de tipo SimpleMarkerSymbol mediante SLD
  const symbology = new ApiSimpleMarkerSymbol({
    type: 'OL',
    properties: {
      url: "https://idem.comunidad.madrid/geosrvg/rest/workspaces/nomecalles/styles/NMCL_FARMACIA_style.sld",
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
    container: "doc-apigis-simplemarkersymbol-container",
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

  codeSMSExampleCSS = `
    #doc-apigis-simplelinesymbol-container {
      width: 100%;
      height: 200px;
    }
  `;
}

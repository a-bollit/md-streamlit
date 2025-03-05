import { Component, OnInit } from "@angular/core";
import ApiViewer from 'apigis/dist/apigis.Viewer';
import ApiMap from 'apigis/dist/apigis.Map';
import ApiLayer from 'apigis/dist/apigis.Layer';
import ApiFilter from 'apigis/dist/apigis.Filter';

@Component({
  selector: "app-doc-apigis-layers",
  templateUrl: "./doc-apigis-layers.html",
  styleUrls: ["./doc-apigis-layers.scss"],
})
export class DocApigisLayers implements OnInit {
  constructor() {}

  // Mapa y Layer
  map: any;
  imageLayer: any;
  vectorLayer: any;

  // Propiedades a obtener con los Getters
  getId: string;
  getTitle: string;
  getContainer: string;
  getViewer: string;
  getSynchronize: string;
  getMapType: string;
  getProps: string;
  getLayerType: string;
  getBbox: string;
  getLegend = false;
  getFilter: string;
  getVisible: string;
  getMaxResolution: string;
  getMinResolution: string;
  getOpacity: string;
  getEventQueue: string;
  getUrl: string;
  getParams: string;
  getBaseLayer: string;

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
    this.imageLayer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          LAYERS: "nomecalles:NMCL_MUNICIPIO",
        },
        opacity: 0.5,
        minResolution: 0,
        maxResolution: 1000,
      },
      inheritedclass: 'Geoserver',
    });
    const filter = new ApiFilter();
    filter.addEqualExpresion("DSMUNICIPIO", "MADRID");
    this.imageLayer.setDefinitionQuery(filter);
    this.map.addLayer(this.imageLayer);

    // Generación de un visor para incluir el mapa con las capas
    const viewer = new ApiViewer({
      container: "doc-apigis-layer-container",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [this.map],
    });
  }

  objectToString(object: any): string {
    return JSON.stringify(object);
  }

  codeLayerExampleHTML = `
    ...
    <div id="doc-apigis-layer-container">
    ...
  `;
  codeLayerExampleTS = `
  ...
  import ApiViewer from 'apigis/dist/apigis.Viewer;
  import ApiMap from 'apigis/dist/apigis.Map;
  import ApiLayer from 'apigis/dist/apigis.Layer;
  import ApiFilter from 'apigis/dist/apigis.Filter;

  // Objeto para almacenar la capa
  layer: any;

  ngOnInit() {
    // Generación de una capa de tipo Image/XYZ
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

    // Generación de una capa de tipo Image/Image con opacidad, minResolution y maxResolution
    this.layer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          LAYERS: "nomecalles:NMCL_MUNICIPIO",
        },
        opacity: 0.5,
        minResolution: 0,
        maxResolution: 1000,
      },
      inheritedclass: 'Geoserver',
    });

    // Adicción de filtro a la capa anterior
    const filter = new ApiFilter();
    filter.addEqualExpresion("DSMUNICIPIO", "MADRID");
    this.layer.setDefinitionQuery(filter);

    // Generación de un mapa
    const map = new ApiMap({
      type: "OL",
      options: {
        title: "Mapa 3",
        projection: "EPSG:25830",
        center: [440312.24777, 4474261.2537],
        zoom: 8,
      },
    });

    // Adicción de las capas al mapa anterior
    map.addLayer(this.layer);
    map.addLayer(cartoBaseLayer);

    // Generación de un visor para incluir el mapa con las capas
    const viewer = new ApiViewer({
      container: "doc-apigis-layer-container",
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

  codeLayerExampleCSS = `
    #doc-apigis-layer-container {
      width: 100%;
      height: 200px;
    }
  `;

  codeIdExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getId()">
    Obtener la propiedad id de la capa
  </mv-button>
  <p>Resultado: {{id}} </p>
  ...
  `;

  codeIdExampleTS = `
  ...
  import ApiLayer from 'apigis/dist/apigis.Layer;
  ...

  layer: any;
  id: string;

  ngOnInit() {
    ...
    this.layer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          'LAYERS': "nomecalles:NMCL_MUNICIPIO",
        },
      },
    });
    ...
  }

  getId() {
    this.id = this.layer.id;
  }

  ...
  `;
  codeTitleExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getTitle()">
    Obtener la propiedad title de la capa
  </mv-button>

  <p>Resultado: {{title}} </p>
  ...
  `;

  codeTitleExampleTS = `
  import ApiLayer from 'apigis/dist/apigis.Layer;

  ...

  layer: any;

  title: string;

  ngOnInit() {
    ...
    this.layer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          'LAYERS': "nomecalles:NMCL_MUNICIPIO",
        },
      },
    });
    ...
  }

  getTitle() {
    this.title = this.layer.title;
  }

  ...
  `;
  codePropsExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getProps()">
    Obtener la propiedad props de la capa
  </mv-button>

  <p>Resultado: {{props}} </p>
  ...
  `;

  codePropsExampleTS = `
  import ApiLayer from 'apigis/dist/apigis.Layer;

  ...
  layer: any;
  props: string;

  ngOnInit() {
    ...
    this.layer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          'LAYERS': "nomecalles:NMCL_MUNICIPIO",
        },
      },
    });
    ...
  }

  getProps() {
    this.props = this.layer.props;
  }

  ...
  `;
  codeMapTypeExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getMapType()">
    Obtener la propiedad mapType de la capa
  </mv-button>

  <p>Resultado: {{mapType}} </p>
  ...
  `;

  codeMapTypeExampleTS = `
  import ApiLayer from 'apigis/dist/apigis.Layer;

  ...
  layer: any;
  mapType: string;

  ngOnInit() {
    ...
    type: "OL",
    typeLayer: "Image",
    subtypeLayer: "Image",
    options: {
      title: "Municipios",
      url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
      params: {
        'LAYERS': "nomecalles:NMCL_MUNICIPIO",
      },
    },
  });
    ...
  }

  getMapType() {
    this.mapType = this.layer.mapType;
  }

  ...
  `;
  codeLayerTypeExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getLayerType()">
    Obtener la propiedad layerType de la capa
  </mv-button>

  <p>Resultado: {{ layerType }} </p>
  ...
  `;

  codeLayerTypeExampleTS = `
  import ApiLayer from 'apigis/dist/apigis.Layer;

  ...
  layer: any;
  layerType: string;

  ngOnInit() {
    ...
    this.layer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          'LAYERS': "nomecalles:NMCL_MUNICIPIO",
        },
      },
    });
    ...
  }


  getLayerType() {
    this.layerType = this.layer.layerType;
  }
  ...
  `;
  codeBboxExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getBbox()">
  Obtener la propiedad layerType de la capa
  </mv-button>

  <p>Resultado: {{ bbox }} </p>
  ...
  `;

  codeBboxExampleTS = `
  import ApiLayer from 'apigis/dist/apigis.Layer;

  ...
  layer: any;
  bbox: string;

  ngOnInit() {
    ...
    this.layer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          'LAYERS': "nomecalles:NMCL_MUNICIPIO",
        },
      },
    });
    ...
  }
  getLayerType() {
    this.bbox = layer.bbox.toString();
  }

  ...
  `;
  codeLegendExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getLegend()">
  Obtener la propiedad legend de la capa
  </mv-button>

  <p>Resultado: </p>
  <img [src]="legend">

  ...
  `;

  codeLegendExampleTS = `
  import ApiLayer from 'apigis/dist/apigis.Layer;

  ...
  layer: any;
  legend: string;

  ngOnInit() {
    ...
    this.layer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          'LAYERS': "nomecalles:NMCL_MUNICIPIO",
        },
      },
    });
    ...
  }

  getLegend() {
    legend = this.layer.getLegend();
  }

  ...
  `;

  codeFilterExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getLegend()">
    Obtener la propiedad filter de la capa
  </mv-button>
  <p>Resultado: {{filter}} </p>
  ...
  `;

  codeFilterExampleTS = `
  import ApiLayer from 'apigis/dist/apigis.Layer;
  import ApiFilter from 'apigis/dist/apigis.Filter;

  ...
  layer: any;
  filter: any;

  ngOnInit() {
    ...
    this.layer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          'LAYERS': "nomecalles:NMCL_MUNICIPIO",
        },
      },
      inheritedclass: 'Geoserver'
    });

    const filter = new ApiFilter();
    filter.addEqualExpresion("DSMUNICIPIO", "Madrid");
    this.layer.setDefinitionQuery(filter);

    ...
  }

  getFilter() {
    return JSON.stringify(this.layer.filter);
  }

  ...
  `;
  getImageLegend() {
    return this.imageLayer.getLegend();
  }

  codeVisibleExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getVisible()">
    Obtener la propiedad visible de la capa
  </mv-button>
  <p>Resultado: {{ visible }} </p>
  ...
  `;

  codeVisibleExampleTS = `
  import ApiLayer from 'apigis/dist/apigis.Layer;

  ...
  layer: any;
  visible: string;

  ngOnInit() {
    ...
    this.layer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          'LAYERS': "nomecalles:NMCL_MUNICIPIO",
        },
      },
    });
    ...
  }

  getVisible() {
    this.visible = this.layer.visible.toString();
  }

  ...
  `;
  codeMaxResolutionExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getMaxResolution()">
    Obtener la propiedad maxResolution de la capa
  </mv-button>
  <p>Resultado: {{ maxResolution }}</p>
  ...
  `;

  codeMaxResolutionExampleTS = `
  import ApiLayer from 'apigis/dist/apigis.Layer;

  ...
  layer: any;
  maxResolution: string;

  ngOnInit() {
    ...
    this.layer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          'LAYERS': "nomecalles:NMCL_MUNICIPIO",
        },
        minResolution: 0,
        maxResolution: 1000
      },
    });

    getMaxResolution() {
      this.maxResolution = this.layer.maxResolution.toString();
    }
    ...
  }

  ...
  `;
  codeMinResolutionExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getMinResolution()">
    Obtener la propiedad minResolution de la capa
  </mv-button>
  <p>Resultado: {{ minResolution }}</p>
  ...
  `;

  codeMinResolutionExampleTS = `
  import ApiLayer from 'apigis/dist/apigis.Layer;

  ...
  layer: any;
  minResolution: string;

  ngOnInit() {
    ...
    this.layer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          'LAYERS': "nomecalles:NMCL_MUNICIPIO",
        },
        minResolution: 0,
        maxResolution: 1000
      },
    });

    ...
  }

  getMinResolution() {
    this.minResolution = this.layer.minResolution.toString();
  }

  ...
  `;
  codeOpacityExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getOpacity()">
    Obtener la propiedad opacity de la capa
  </mv-button>
  <p>Resultado: {{ opacity }}</p>
  ...
  `;

  codeOpacityExampleTS = `
  import ApiLayer from 'apigis/dist/apigis.Layer;

  ...
  layer: any;
  opacity: string;


  ngOnInit() {
    ...
    this.layer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          'LAYERS': "nomecalles:NMCL_MUNICIPIO",
        },
        opacity: 0.5,
      },
    });
    ...
  }

  getOpacity() {
    this.opacity = this.layer.opacity.toString();
  }

  ...
  `;
  codeUrlExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getUrl()">
    Obtener la propiedad url de la capa
  </mv-button>
  <p>Resultado: {{ url }}</p>
  ...
  `;

  codeUrlExampleTS = `
  import ApiLayer from 'apigis/dist/apigis.Layer;

  ...
  layer: any;
  url: string;


  ngOnInit() {
    ...
    this.layer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          'LAYERS': "nomecalles:NMCL_MUNICIPIO",
        },
      },
    });
    ...
  }

  getUrl() {
    this.url = this.layer.url;
  }

  ...
  `;
  codeParamsExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getParams()">
    Obtener la propiedad params de la capa
  </mv-button>
  <p>Resultado: {{ params }}</p>
  ...
  `;

  codeParamsExampleTS = `
  import ApiLayer from 'apigis/dist/apigis.Layer;

  ...
  layer: any;
  params: string;


  ngOnInit() {
    ...
    this.layer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          'LAYERS': "nomecalles:NMCL_MUNICIPIO",
        },
        opacity: 0.5,
      },
    });
    ...
  }

  getParams() {
    this.params = JSON.stringify(this.layer.params);
  }

  ...
  `;
  codeBaseLayerExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getBaseLayer()">
    Obtener la propiedad baseLayer de la capa
  </mv-button>
  <p>Resultado: {{ baseLayer }}</p>
  ...
  `;

  codeBaseLayerExampleTS = `
  import ApiLayer from 'apigis/dist/apigis.Layer;

  ...
  layer: any;
  baseLayer: string;


  ngOnInit() {
    ...
    this.layer = new ApiLayer({
      type: "OL",
      typeLayer: "Image",
      subtypeLayer: "Image",
      options: {
        title: "Municipios",
        url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
        params: {
          'LAYERS': "nomecalles:NMCL_MUNICIPIO",
        },
        opacity: 0.5,
      },
    });
    ...
  }

  getBaseLayer() {
    this.baseLayer = this.layer.baseLayer.toString());
  }

  ...
  `;
}

import { Component, OnInit } from "@angular/core";
import ApiViewer from 'apigis/dist/apigis.Viewer';
import ApiMap from 'apigis/dist/apigis.Map';
import ApiLayer from 'apigis/dist/apigis.Layer';

@Component({
  selector: "app-doc-apigis-map",
  templateUrl: "./doc-apigis-map.html",
  styleUrls: ["./doc-apigis-map.scss"],
})
export class DocApigisMap implements OnInit {
  constructor() {}

  map: any;

  // Propiedades a obtener con los Getters
  getId: string;
  getTitle: string;
  getGrid: string;
  getContainer: string;
  getViewer: string;
  getSynchronize: string;
  getTypeMap: string;
  getProps: string;
  getContainer_ext: string;
  getActive: string;
  getIsOverviewMap: string;
  getLayers: string;
  getEventQueue: string;
  getResolution: string;
  getMinResolution: string;
  getBackgroundColor: string;
  getSnapObject: string;
  getPopups: string;
  ngOnInit(): void {
    this.map = new ApiMap({
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
    this.map.addLayer(cartoBaseLayer);

    // Generación de un visor para incluir el mapa
    const viewer = new ApiViewer({
      container: "doc-apigis-map-container",
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
  codeIdExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getId()">
    Obtener id del mapa
  </mv-button>
  ...
  `;

  codeIdExampleTS = `
  import ApiMap from 'apigis/dist/apigis.Map;

  ...

  map: any;
  id: string;

  ngOnInit() {
    ...
    this.map = new ApiMap({
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

  getId() {
    this.id = this.map.id
  }

  ...
  `;
  codeTitleExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getTitle()">
    Obtener title del mapa
  </mv-button>
  ...
  `;

  codeTitleExampleTS = `
  import ApiMap from 'apigis/dist/apigis.Map;

  ...

  map: any;
  title: string;

  ngOnInit() {
    ...
    this.map = new ApiMap({
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

  getTitle() {
    this.title = this.map.title
  }

  ...
  `;
  codeIdGridExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getGrid()">
    Obtener grid del mapa
  </mv-button>
  ...
  `;

  codeIdGridExampleTS = `
  import ApiMap from 'apigis/dist/apigis.Map;

  ...

  map: any;
  grid: string;

  ngOnInit() {
    ...
    this.map = new ApiMap({
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

  getGrid() {
    this.grid = this.map.grid
  }

  ...
  `;
  codeContainerExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getContainer()">
    Obtener container del mapa
  </mv-button>
  ...
  `;

  codeContainerExampleTS = `
  import ApiMap from 'apigis/dist/apigis.Map;

  ...

  map: any;
  container: string;

  ngOnInit() {
    ...
    this.map = new ApiMap({
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

  getContainer() {
    this.container = this.map.container
  }

  ...
  `;

  codeActiveExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getActive()">
    Obtener container del mapa
  </mv-button>
  ...
  `;

  codeActiveExampleTS = `
  import ApiMap from 'apigis/dist/apigis.Map;

  ...

  map: any;
  active: string;

  ngOnInit() {
    ...
    this.map = new ApiMap({
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

  getActive() {
    this.active = this.map.active.toString();
  }

  ...
  `;

  codeIsOverviewMapExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getIsOverviewMap()">
    Obtener isOverviewMap del mapa
  </mv-button>
  ...
  `;

  codeIsOverviewMapExampleTS = `
  import ApiMap from 'apigis/dist/apigis.Map;

  ...

  map: any;
  isOverviewMap: string;

  ngOnInit() {
    ...
    this.map = new ApiMap({
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

  getIsOverviewMap() {
    this.isOverviewMap = this.map.isOverviewMap.toString();
  }

  ...
  `;

  codeLayersExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getLayers()">
    Obtener isOverviewMap del mapa
  </mv-button>
  ...
  `;

  codeLayersExampleTS = `
  import ApiMap from 'apigis/dist/apigis.Map;

  ...

  map: any;
  layers: string;

  ngOnInit() {
    ...
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

    this.map = new ApiMap({
      type: "OL",
      options: {
        title: "Mapa 1",
        projection: "EPSG:25830",
        center: [440312.24777, 4474261.2537],
        zoom: 8,
      },
    });

    this.map.addLayer(cartoBaseLayer);
    ...
  }

  getLayers() {
    this.layers = SON.stringify(map.layers);
  }

  ...
  `;

  codeResolutionExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getResolution()">
    Obtener resolution del mapa
  </mv-button>
  ...
  `;

  codeResolutionExampleTS = `
  import ApiMap from 'apigis/dist/apigis.Map;

  ...

  map: any;
  resolution: string;

  ngOnInit() {
    ...
    this.map = new ApiMap({
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

  getResolution() {
    this.resolution = this.map.resolution.toString();
  }

  ...
  `;


  codeMinResolutionExampleHTML = `
  ...
  <mv-button color="primary" appearance="raised" (clickEvent)="getMinResolution()">
    Obtener minResolution del mapa
  </mv-button>
  ...
  `;

  codeMinResolutionExampleTS = `
  import ApiMap from 'apigis/dist/apigis.Map;

  ...

  map: any;
  minResolution: string;

  ngOnInit() {
    ...
    this.map = new ApiMap({
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

  getMinResolution() {
    this.minResolution = this.map.minResolution.toString();
  }

  ...
  `;
}

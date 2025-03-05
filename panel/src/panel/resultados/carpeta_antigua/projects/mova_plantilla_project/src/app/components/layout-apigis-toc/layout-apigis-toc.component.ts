import {Component, OnInit} from "@angular/core";
import ApiMap from 'apigis/dist/apigis.Map';
import ApiLayer from 'apigis/dist/apigis.Layer';
import ApiViewer from 'apigis/dist/apigis.Viewer';

@Component({
  selector: "app-layout-apigis-toc",
  templateUrl: "./layout-apigis-toc.html",
  styleUrls: ["./layout-apigis-toc.scss"],
})
export class LayoutApigisToc implements OnInit {
  constructor() {}
  baseLayers: any;
  layers: any[];
  viewer: any;
  baseLayerModel: any;
  baseLayersOptions: any[] = [
    {
      id: "carto-light",
      text: "Carto Light",
    },
    // {
    //   id: "carto-dark",
    //   text: "Carto Dark",
    // },
    {
      id: "osm",
      text: "Open Street Maps",
    },
    {
      id: "esri",
      text: "Esri Topo",
    },
    {
      id: "google",
      text: "Google Hybrid",
    },
  ];

  ngOnInit(): void {
    this.createLayers();
    this.initViewer();
  }

  initViewer(): void {
    // Generación del mapa
    const map = new ApiMap({
      type: "OL",
      options: {
        title: "Mapa 1",
        projection: "EPSG:25830",
        center: [440312.24777, 4474261.2537],
        zoom: 10,
      },
    });
    // Adicción de capa base PNOA al mapa
    map.addLayer(this.baseLayers["carto-light"]);
    this.baseLayerModel = this.baseLayersOptions.find((bl) => bl.id === "carto-light");

    // Adicción de capas al mapa en modo no visible
    for (const layer of this.layers) {
      map.addLayer(new ApiLayer(layer));
    }
    // Generación del visor con el mapa creado
    this.viewer = new ApiViewer({
      container: "container-apigis-toc",
      options: {
        projections: {
          "EPSG:25830":
            "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        },
      },
      maps: [map],
    });
  }

  createLayers(): void {
    this.baseLayers = {
      // "carto-dark": new ApiLayer({
      //   type: "OL",
      //   typeLayer: "Image",
      //   subtypeLayer: "XYZ",
      //   options: {
      //     title: "Carto Dark",
      //     url: "http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
      //     baseLayer: true,
      //   },
      // }),
      "carto-light": new ApiLayer({
        type: "OL",
        typeLayer: "Image",
        subtypeLayer: "XYZ",
        options: {
          title: "Carto Light",
          url: "https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
          baseLayer: true,
        },
      }),
      "osm": new ApiLayer({
        type: "OL",
        typeLayer: "Image",
        subtypeLayer: "XYZ",
        options: {
          title: "OSM",
          url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
          baseLayer: true,
        },
      }),
      "esri": new ApiLayer({
        type: "OL",
        typeLayer: "Image",
        subtypeLayer: "XYZ",
        options: {
          title: "Esri Topo",
          url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
          baseLayer: true,
        },
      }),
      "google": new ApiLayer({
        type: "OL",
        typeLayer: "Image",
        subtypeLayer: "XYZ",
        options: {
          title: "Google Hybrid",
          url: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
          baseLayer: true,
        },
      }),
    };

    this.layers = [
      {
        type: "OL",
        typeLayer: "Image",
        subtypeLayer: "Image",
        options: {
          title: "Municipios",
          url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
          geometryColumn: "BL_GEOM",
          params: {
            LAYERS: "nomecalles:NMCL_MUNICIPIO",
          },
          visible: false,
        },
      },
      {
        type: "OL",
        typeLayer: "Image",
        subtypeLayer: "Image",
        options: {
          title: "Distritos",
          url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
          geometryColumn: "BL_GEOM",
          params: {
            LAYERS: "nomecalles:NMCL_DISTRITO",
          },
          visible: false,
        },
      },
      {
        type: "OL",
        typeLayer: "Image",
        subtypeLayer: "Image",
        options: {
          title: "Barrios (Madrid)",
          url: "https://idem.comunidad.madrid/geosrvg/nomecalles/ows",
          geometryColumn: "BL_GEOM",
          params: {
            LAYERS: "nomecalles:NMCL_BARRIO",
          },
          visible: false,
        },
      },
    ];
  }

  changeBaseMap(): void {
    this.viewer.getActiveMap().addLayer(this.baseLayers[this.baseLayerModel.id]);
  }

  changeLayer(event, layer: any): void {
    this.viewer.getActiveMap().getLayerByTitle(layer.options.title).setVisible(event);
  }
}

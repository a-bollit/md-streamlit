import {Component, OnInit} from "@angular/core";
import {MvTreeFilterExpandItem} from "@mova/components/tree-filter";

@Component({
  selector: "app-documentation-apigis",
  templateUrl: "./documentation-apigis.html",
  styleUrls: ["./documentation-apigis.scss"],
})
export class DocumentationApigis implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // Array con la información del mv-tree-filter
  documentationItems: Array<MvTreeFilterExpandItem> = [
    {
      title: "Punto de entrada al API GIS",
      children: [
        {
          title: "Consideraciones generales",
          subtitle:
            "Aspectos importantes a tener en cuenta al trabajar con el API GIS.",
          link: {
            type: "state",
            uri: "doc-apigis-guide-considerations",
          },
        },
        {
          title: "Integración de API GIS en MOVA2",
          subtitle: "",
          link: {
            type: "state",
            uri: "doc-apigis-integration",
          },
        },
        {
          title: "Dependencias",
          subtitle: "Librerías necesarias para trabajar con el API GIS.",
          link: {
            type: "state",
            uri: "doc-apigis-dependencies",
          },
        },
      ],
    },
    {
      title: "El visor",
      subtitle: "Documentación sobre la generación y uso de visores.",
      link: {
        type: "state",
        uri: "doc-apigis-viewer",
      },
    },
    {
      title: "Los mapas",
      subtitle: "Documentación sobre la generación y uso de mapas.",
      link: {
        type: "state",
        uri: "doc-apigis-map",
      },
    },
    {
      title: "Las capas",
      subtitle: "Documentación sobre la generación y uso de servicios.",
      children: [
        {
          title: "Consideraciones generales sobre capas",
          subtitle:
            "Documentación sobre la contrucción de servicios y sus métodos.",
          link: {
            type: "state",
            uri: "doc-apigis-layers",
          },
        },
        {
          title: "Imágenes WMS",
          subtitle: "typeLayer: Image, subtypeLayer: Image",
          link: {
            type: "state",
            uri: "doc-apigis-image",
          },
        },
        {
          title: "Imágenes WMS tileadas",
          subtitle: "typeLayer: Image, subtypeLayer: Tile",
          link: {
            type: "state",
            uri: "doc-apigis-tile",
          },
        },
        {
          title: "Imágenes XYZ",
          subtitle: "typeLayer: Image, subtypeLayer: Tile",
          link: {
            type: "state",
            uri: "doc-apigis-xyz",
          },
        },
        {
          title: "Imágenes WMTS",
          subtitle: "typeLayer: Image, subtypeLayer: WMTS",
          link: {
            type: "state",
            uri: "doc-apigis-wmts",
          },
        },
        {
          title: "Capas Vectoriales",
          subtitle: "typeLayer: Vector, subtypeLayer: Vector",
          link: {
            type: "state",
            uri: "doc-apigis-vector",
          },
        },
        {
          title: "Capas Operacionales",
          subtitle: "typeLayer: Vector, subtypeLayer: Overlay",
          link: {
            type: "state",
            uri: "doc-apigis-overlay",
          },
        },
        {
          title: "Teselas vectoriales",
          subtitle: "typeLayer: Vector, subtypeLayer: VectorTile",
          link: {
            type: "state",
            uri: "doc-apigis-vectortile",
          },
        },
      ],
    },
    {
      title: "Simbología",
      subtitle: "Documentación sobre simbología.",
      children: [
        {
          title: "SimpleFillSymbol",
          subtitle: "Documentación sobre la generación y uso de simbología poligonal.",
          link: {
            type: "state",
            uri: "doc-apigis-simplefillsymbol",
          },
        },
        {
          title: "SimpleLineSymbol",
          subtitle: "Documentación sobre la generación y uso de simbología lineal.",
          link: {
            type: "state",
            uri: "doc-apigis-simplelinesymbol",
          },
        },
        {
          title: "SimpleMarkerSymbol",
          subtitle: "Documentación sobre la generación y uso de simbología puntual.",
          link: {
            type: "state",
            uri: "doc-apigis-simplemarkersymbol",
          },
        },
      ],
    },
    {
      title: "Filtros",
      subtitle: "Documentación sobre la generación de filtros.",
      link: {
        type: "state",
        uri: "doc-apigis-filters",
      },
    },
    {
      title: "Herencia de Servidores",
      subtitle: "Uso de herencia de servidos en capas (Geoserver, Catastro) y en mapas (MapFish).",
      link: {
        type: "state",
        uri: "doc-apigis-servers",
      },
    },
    {
      title: "Loader",
      subtitle: "Documentación sobre la carga de un visor completo mediante un fichero de configuración",
      link: {
        type: "state",
        uri: "doc-apigis-loader",
      },
    },
    {
      title: "Utilidades",
      subtitle: "Documentación sobre el uso de herramientas genéricas.",
      link: {
        type: "state",
        uri: "doc-apigis-utils",
      },
    },
    {
      title: "Geocoders",
      subtitle: "Documentación sobre el uso de herramientas de geocodificación.",
      link: {
        type: "state",
        uri: "doc-apigis-geocoders",
      },
    },
    {
      title: "Catastro",
      subtitle: "Documentación sobre el uso de servicios de Catastro.",
      link: {
        type: "state",
        uri: "doc-apigis-catastro",
      },
    },
    {
      title: "Impresión",
      subtitle: "Formas de impresión de los mapas generados con el API GIS.",
      link: {
        type: "state",
        uri: "doc-apigis-print",
      },
    },
  ];
}

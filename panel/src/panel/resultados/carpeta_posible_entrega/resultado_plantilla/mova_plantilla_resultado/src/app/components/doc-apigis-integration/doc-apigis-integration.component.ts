import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-doc-apigis-integration",
  templateUrl: "./doc-apigis-integration.html",
  styleUrls: ["./doc-apigis-integration.scss"],
})
export class DocApigisIntegration implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Ejemplo de importación de todos los puntos de entrada del API GIS
  codeAddTS = `
    import ApiViewer from 'apigis/dist/apigis.Viewer;
    // Ya se puede usar cualquier clase o variable relacionada con los visores

    import ApiMap from 'apigis/dist/apigis.Map';
    // Ya se puede usar cualquier clase o variable relacionada con los mapas

    import ApiLayer from 'apigis/dist/apigis.Layer';
    // Ya se puede usar cualquier clase o variable relacionada con los servicios o capas

    import ApiFilter from 'apigis/dist/apigis.Filter';
    // Ya se puede usar cualquier clase o variable relacionada con los filtros

    import ApiUtils from 'apigis/dist/apigis.Utils';
    // Ya se puede usar cualquier clase o variable de utilidades

    import ApiSimpleMarkerSymbol from 'apigis/dist/apigis.SimpleMarkerSymbol';
    // Ya se puede usar cualquier clase o variable relacionada con la simbología puntual

    import ApiSimpleLineSymbol from 'apigis/dist/apigis.SimpleLineSymbol';
    // Ya se puede usar cualquier clase o variable relacionada con la simbología lineal

    import ApiSimpleFillSymbol from 'apigis/dist/apigis.SimpleFillSymbol';
    // Ya se puede usar cualquier clase o variable relacionada con la simbología poligonal

    import ApiLoader from 'apigis/dist/apigis.Loader';
    // Ya se puede usar cualquier clase o variable relacionada con el Loader

    import ApiGeocoder from 'apigis/dist/apigis.Geocoder';
    // Ya se puede usar cualquier clase o variable relacionada con el Geocoder
    `;
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class JsonExampleService {


  constructor(private readonly http: HttpClient ) { }

  getJsonService() {
    if (window.location.href.includes("localhost"))
    {
      return this.http.get<any[]>('/media/jsonEjemplo.json');
    }
    else
    {
      return this.http.get<any[]>('https://gestiona3.madrid.org/portalapps/webapps/mova/media/jsonEjemplo.json'); 
    }
  }
}

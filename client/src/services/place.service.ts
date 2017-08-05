import {Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Rx';

export interface Place{
  _id:string,
}

@Injectable()
export class PlaceService {
  BASE_URL: string = environment.BASE_URL;

  constructor(private http: Http) { }

  handleError(e) {
    console.error("Error en la llamada a la API");
    return Observable.throw(e.json().message);
  }

  indexAtlas() {
    return this.http.get(`${this.BASE_URL}/api/atlas`, {withCredentials: true})
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/places/${id}`)
      .map((res) => res.json());
  }

  edit(place) {
    return this.http.put(`${this.BASE_URL}/api/places/${place.id}`, place)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/places/${id}`)
      .map((res) => res.json());
  }
}

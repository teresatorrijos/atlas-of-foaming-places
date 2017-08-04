import {Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs/Rx';

export interface Place{
  _id:string,
}

@Injectable()
export class PlaceService {
  BASE_URL: string = environment.BASE_URL;
  place:Place;
  options:object = {withCredentials:true};

  constructor(private http: Http) { }

  createPlace(place): Observable<Place> {
    return this.http.post(`${this.BASE_URL}/api/places/new`, place, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(e) {
    console.error("Error en la llamada a la API");
    return Observable.throw(e.json().message);
  }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/places`)
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

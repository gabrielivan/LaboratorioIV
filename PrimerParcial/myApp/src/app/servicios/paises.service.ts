import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(public http: HttpClient) { }
  public obtenerPaises() {
    return this.http.get("https://restcountries.eu/rest/v2/region/americas");
  }


}

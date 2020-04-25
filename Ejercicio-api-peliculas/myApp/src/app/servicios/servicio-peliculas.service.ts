import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculasService {

  constructor(private http: HttpClient) { }
      public obtenerPeliculas() {
        return this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=9497ca44');
      }
}

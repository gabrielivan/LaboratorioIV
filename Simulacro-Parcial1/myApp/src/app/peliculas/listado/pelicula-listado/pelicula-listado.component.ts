import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  listadoPeliculas: Pelicula [];
  peliculaObtenida: Pelicula;

  constructor() { }

  ngOnInit(): void {
    var a = [
      {Id: 1, Nombre: "la guerra de las galaxias", FechaDeEstreno: "15/11/2020", CantidadDePublico: 40, FotoDeLaPelicula: "../../assets/galaxias.jpg", Tipo: "Otros"},
      {Id: 2, Nombre: "matrix4", FechaDeEstreno: "10/10/2020", CantidadDePublico: 60, FotoDeLaPelicula: "../../assets/descarga.jpg", Tipo: "Otros"},
      {Id: 3, Nombre: "Rapido y furioso 9", FechaDeEstreno: "20/12/2020", CantidadDePublico: 70, FotoDeLaPelicula: "../../assets/rapidosyfuriosos9.jpg", Tipo: "Otros"}];

    var b = JSON.stringify(a);
    localStorage.setItem("listado", b);

    var auxListado = localStorage.getItem('listado');
    if(auxListado)
    {
      this.listadoPeliculas = JSON.parse(auxListado);
    }
  }

  borrar(pelicula: Pelicula)
  {
    const index = this.listadoPeliculas.indexOf(pelicula, 0);
    if (index > -1) {
      this.listadoPeliculas.splice(index, 1);
      this.saveChangesInLocalStorage();
    }
  }

  obtenerPelicula(pelicula){
    this.peliculaObtenida = pelicula;
  }

  saveChangesInLocalStorage(){
    localStorage.setItem('listado', JSON.stringify(this.listadoPeliculas));
  }

}

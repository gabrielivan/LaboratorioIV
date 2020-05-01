import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})

export class TablaPeliculaComponent implements OnInit {
  listadoPeliculas: string;

  // @Input() listadoPeliculas: Pelicula[] ;

  constructor() { }

  ngOnInit(): void {
    var a = [
      {Id: 1, Nombre: "la guerra de las galaxias", FechaDeEstreno: "15/11/2020", CantidadDePublico: 40, FotoDePelicula: "../../assets/descarga.jpg", Tipo: "Otros"},
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
}



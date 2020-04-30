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
    var auxListado = localStorage.getItem('listado');
    if(auxListado)
    {
      this.listadoPeliculas = JSON.parse(auxListado);
    }
  }
}



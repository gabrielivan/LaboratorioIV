import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})

export class TablaPeliculaComponent implements OnInit {
  
  @Input() listadoPeliculas: Pelicula[] ;
  @Output() peliculaSeleccionada: EventEmitter<any>= new EventEmitter<any>(); 

  constructor() { }

  emitir(pelicula: Pelicula)
  {
    this.peliculaSeleccionada.emit(pelicula);
  }

  ngOnInit(): void {

  }
}



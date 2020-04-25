import { Component, OnInit } from '@angular/core';
import { ServicioPeliculasService } from 'src/app/servicios/servicio-peliculas.service';

@Component({
  selector: 'app-admin-peliculas',
  templateUrl: './admin-peliculas.component.html',
  styleUrls: ['./admin-peliculas.component.css']
})
export class AdminPeliculasComponent implements OnInit {

  constructor(private servicioPelicula: ServicioPeliculasService) { }

  ngOnInit(): void {
    this.servicioPelicula.obtenerPeliculas().subscribe(resultado => {
      console.log(resultado);
    }, error => {
      console.log('Error, no se pudo obtener las peliculas.');
    });
  }

}

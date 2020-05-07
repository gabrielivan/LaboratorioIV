import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { PaisesService } from '../../../servicios/paises.service';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {

  listadoPaises: Pais[];
  paisObtenido: Pais;

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.paisesService.obtenerPaises().subscribe(resultado => {
      console.log(resultado);
    }, error => {
      console.log('Error');
    });

  }


  // borrar(pais: Pais)
  // {
  //   const index = this.listadoPaises.indexOf(pais, 0);
  //   if (index > -1) {
  //     this.listadoPaises.splice(index, 1);
  //   }
  // }

  // obtenerPais(pais){
  //   this.paisObtenido = pais;
  // }

}

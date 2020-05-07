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
      var array = resultado as Array<any>;
      this.listadoPaises = array.map(function(x){
        return new Pais(x.name, x.capital, x.flag, x.population, x.region, x.subregion);
      });
      console.log(this.listadoPaises);
    }, error => {
      console.log('Error');
    });

  }

  deshabilitar(pais: Pais)
  {
    const index = this.listadoPaises.indexOf(pais, 0);
    if (index > -1) {
      this.listadoPaises.splice(index, 1);
    }
  }

  obtenerPais(pais){
    this.paisObtenido = pais;
  }

}

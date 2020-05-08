import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { PaisesService } from '../../../servicios/paises.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  @Output() SeCreoUnActor: EventEmitter<any>= new EventEmitter<any>(); 
  nuevoActor: Actor;
  listadoPaises: Pais[];
  paisObtenido: Pais;

  constructor(private paisesService: PaisesService) { 

  }

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
  
  crearActor()
  {
    let id: number = Math.floor((Math.random() * 1000) + 1);
    this.nuevoActor.Id = id;
    this.SeCreoUnActor.emit(this.nuevoActor);
    
    var a = this.nuevoActor; 
    var b = JSON.stringify(a);
    localStorage.setItem("actor", b);
    
    this.nuevoActor = null;
  }

  hacerNuevoActor()
  {
    this.nuevoActor = new Actor(0, "", "", "","","","");
  }

  obtenerPais(pais){
    this.paisObtenido = pais;
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  listadoActores: Actor[];
  @Output() actorSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  emitir(actor: Actor) {
    this.actorSeleccionado.emit(actor);
  }

  ngOnInit(): void {
    var a = [
      { Id: 1, Nombre: "Keanu", Apellido: "Reeves", Sexo: "Hombre", Foto: "../../assets/reeves.jpg", FechaDeNacimiento: "02/09/1964" },
      { Id: 2, Nombre: "Laurence", Apellido: "Fishburne", Sexo: "Hombre", Foto: "../../assets/fishburne.jpg", FechaDeNacimiento: "30/07/1961" },
      { Id: 3, Nombre: "Carrie", Apellido: "Moss", Sexo: "Mujer", Foto: "../../assets/moss.jpg", FechaDeNacimiento: "21/08/1967" }];
    
    var b = JSON.stringify(a);
    localStorage.setItem("listadoActores", b);

    var auxListado = localStorage.getItem('listadoActores');
    if (auxListado) {
      this.listadoActores = JSON.parse(auxListado);
    }
  }

}

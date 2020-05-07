import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  @Output() SeCreoUnActor: EventEmitter<any>= new EventEmitter<any>();

  nuevoActor: Actor;

  constructor() { 

  }

  ngOnInit(): void {

  }
  
  crearActor()
  {
    let id: number = Math.floor((Math.random() * 1000) + 1);
    this.nuevoActor.Id = id;
    this.SeCreoUnActor.emit(this.nuevoActor);
    this.nuevoActor = null;
  }

  hacerNuevoActor()
  {
    this.nuevoActor = new Actor(0, "", "", "","","","");
  }

}

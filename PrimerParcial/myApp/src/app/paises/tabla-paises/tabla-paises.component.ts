import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input() listadoPaises: Pais[] ;
  @Output() paisSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 

  constructor() { }

  emitir(pais: Pais)
  {
    this.paisSeleccionado.emit(pais);
  }

  ngOnInit(): void {

  }

}

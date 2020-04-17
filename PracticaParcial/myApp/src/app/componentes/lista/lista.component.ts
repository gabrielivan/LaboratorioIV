import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Producto } from '../../clases/Producto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  @Input() listadoProductos: Producto[] ;
  constructor() { }

  ngOnInit(): void {
  }
}

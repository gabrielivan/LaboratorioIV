import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/clases/Producto';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  @Input() unProducto: Producto;
  @Output() lanzarProductoSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
  }

  emitir(producto)
  {
    this.lanzarProductoSeleccionado.emit(producto);
    this.unProducto = null;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/clases/Producto';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  @Input() unProducto: Producto;

  constructor() { }

  ngOnInit(): void {
  }

}

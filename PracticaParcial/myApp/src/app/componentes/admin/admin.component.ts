import { Component, OnInit } from '@angular/core';
import { Producto } from './../../clases/Producto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ListadoProductosPrincipal: Producto[];

  constructor() { 
    this.ListadoProductosPrincipal= [
      { Id: 1, Descripcion: "Flexible-180x220cm" , Precio: 1000, FechaDeVencimiento: new Date(), RutaDeFoto: "Descktop.jpg", Tipo:  0},
      { Id: 2, Descripcion: "Fijo-190x230" , Precio: 2500, FechaDeVencimiento: new Date(), RutaDeFoto: "Descktop.jpg", Tipo: 1}
    ];
  }

  ngOnInit(): void {
    
  }
  
  mostrarProducto(parametroProducto: Producto)
  {
      console.info("producto",parametroProducto);
      this.ListadoProductosPrincipal.push(parametroProducto);
  }
}

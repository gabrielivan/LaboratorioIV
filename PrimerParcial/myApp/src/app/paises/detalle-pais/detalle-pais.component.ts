import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  constructor() { }

  @Input() unPais: Pais;
  @Output() pasiDeshabilitar: EventEmitter<any>= new EventEmitter<any>(); ;

  ngOnInit(): void {
  }

  emitir(){
    this.pasiDeshabilitar.emit(this.unPais);
  }

}

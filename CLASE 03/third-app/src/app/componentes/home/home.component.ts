import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  perfil = 'Admin';
  lista = [{name: 'Pepito', perfil: 1},{name: 'Matias', perfil: 1},{name: 'Jose', perfil: 2},{name: 'Manuela', perfil: 5} ]

  constructor() { }

  ngOnInit(): void {
  }

  OcultarMostrar(){
    //this.expression = !this.expression;
  }
}

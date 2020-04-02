import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nueva Aplicación';
  name: string;
 
  usuario = new Usuario();
 
  Ingresar() {
    console.log(this.usuario);
  }

}

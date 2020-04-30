import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido/bienvenido.component';
import { TablaPeliculaComponent } from './peliculas/tabla-pelicula/tabla-pelicula.component';


const routes: Routes = [
  {path:"", component: BienvenidoComponent},
  {path: 'tabla-pelicula' , component: TablaPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

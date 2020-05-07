import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from '../app/bienvenido/bienvenido.component';
import { PaisesListadoComponent } from './paises/listado/paises-listado/paises-listado.component';
// import { PeliculaListadoComponent } from './peliculas/listado/pelicula-listado/pelicula-listado.component';
// import { TablaActorComponent } from './actor/tabla-actor/tabla-actor.component';


const routes: Routes = [
  {path:"", component: BienvenidoComponent}
  ,{path: 'paises-listado' , component: PaisesListadoComponent}
  // {path: 'tabla-actor' , component: TablaActorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

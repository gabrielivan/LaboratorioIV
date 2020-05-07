import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from '../app/bienvenido/bienvenido.component';
import { PaisesListadoComponent } from './paises/listado/paises-listado/paises-listado.component';
import { ActorAltaComponent } from './actor/alta/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor/listado/actor-listado/actor-listado.component';
// import { PeliculaListadoComponent } from './peliculas/listado/pelicula-listado/pelicula-listado.component';
// import { TablaActorComponent } from './actor/tabla-actor/tabla-actor.component';


const routes: Routes = [
  {path:"", component: BienvenidoComponent}
  ,{path: 'paises-listado' , component: PaisesListadoComponent}
  ,{path: 'actor-alta' , component: ActorAltaComponent}
  ,{path: 'listado-actor' , component: ActorListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

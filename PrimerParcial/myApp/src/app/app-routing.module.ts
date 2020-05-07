import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { BienvenidoComponent } from './bienvenido/bienvenido/bienvenido.component';
// import { PeliculaListadoComponent } from './peliculas/listado/pelicula-listado/pelicula-listado.component';
// import { TablaActorComponent } from './actor/tabla-actor/tabla-actor.component';


const routes: Routes = [
  // {path:"", component: BienvenidoComponent},
  // {path: 'pelicula-listado' , component: PeliculaListadoComponent},
  // {path: 'tabla-actor' , component: TablaActorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

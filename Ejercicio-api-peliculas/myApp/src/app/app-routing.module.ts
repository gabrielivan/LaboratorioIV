import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPeliculasComponent } from './componentes/admin-peliculas/admin-peliculas.component';


const routes: Routes = [
  {path:"", component: AdminPeliculasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

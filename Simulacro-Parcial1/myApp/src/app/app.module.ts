import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BusquedaComponent } from './busqueda/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './peliculas/alta/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './actor/alta/actor-alta/actor-alta.component';
import { PeliculaListadoComponent } from './peliculas/listado/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './peliculas/tabla-pelicula/tabla-pelicula.component';
import { BienvenidoComponent } from './bienvenido/bienvenido/bienvenido.component';


 
@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    BienvenidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdminPeliculasComponent } from './componentes/admin-peliculas/admin-peliculas.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicioPeliculasService } from './servicios/servicio-peliculas.service';
 
@NgModule({
  declarations: [
    AppComponent,
    AdminPeliculasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicioPeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
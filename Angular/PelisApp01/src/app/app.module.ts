import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeliculaBannerComponent } from './misComponentes/pelicula-banner/pelicula-banner.component';
import { GrillaComponent } from './misComponentes/grilla/grilla.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent,
    GrillaComponent
  ], // AQUI SE DEFINEN TODOS LOS COMPONENTES A USARSE
  imports: [
    BrowserModule
  ],
  providers: [], // SERVICIOS
  bootstrap: [AppComponent] // COMPONENTE PRINCIPAL
}) // AQUI DEFINIMOS TODOS LOS MODULOS
export class AppModule { }

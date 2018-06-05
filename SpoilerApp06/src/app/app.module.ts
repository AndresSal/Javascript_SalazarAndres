import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { PeliculaBannerComponent } from './peliculas/pelicula-banner/pelicula-banner.component';
import { BotonComponent } from './boton/boton.component';
import { GrillaComponent } from './grilla/grilla.component';
import { ItemMenuInicialComponent } from './misComponentes/item-menu-inicial/item-menu-inicial.component';
import { PeliculaRegularComponent } from './misComponentes/pelicula-regular/pelicula-regular.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from 'primeng/button';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {CarouselModule} from 'primeng/carousel';
import {GalleriaModule} from 'primeng/primeng';



@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent,
    BotonComponent,
    GrillaComponent,
    ItemMenuInicialComponent,
    PeliculaRegularComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

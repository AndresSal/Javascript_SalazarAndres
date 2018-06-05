import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pelicula-regular',
  templateUrl: './pelicula-regular.component.html',
  styleUrls: ['./pelicula-regular.component.css']
})
export class PeliculaRegularComponent implements OnInit {

  @Input()nombrePelicula: string;
  @Input()nombrePeliculaCompleto: string;
  @Input()anioPelicula: string;
  @Input()descripcionPelicula: string;
  @Input()urlImagenPelicula: string;
  constructor() { }

  ngOnInit() {
  }

}

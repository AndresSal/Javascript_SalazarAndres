import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  textoBanner = 'Bruce Banner';
  nombreBoton = 'cambiar color';
  estadoBoton = true;

  cambiarColor() {
    if (this.estadoBoton) {

    }
  }
  constructor() { }

  ngOnInit() {
  }

}

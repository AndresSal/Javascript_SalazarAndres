// ELEMENTO PRINCIPAL PARA DEFINIR EL MODELO DE LA APLICACION WEB
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarHola = true;
}

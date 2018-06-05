import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  arregloPeliculasMCU = [
    {
      source: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/1e/Iron_Man_Official_Poster.jpg/revision/latest?cb=201201150356',
      alt: 'Imagen de Iron Man',
      title: 'Iron Man'
    },
    {
      source: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/c/cb/Iron_Man_2_Official_Poster.jpg/revision/latest?cb=20120702233904',
      alt: 'Imagen de Iron Man 2',
      title: 'Iron Man 2'
    },
    {
      source: 'https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg',
      alt: 'Imagen de Capitan américa',
      title: 'Capitan america'
    },
    {
      source: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/c/cb/Iron_Man_2_Official_Poster.jpg/revision/latest?cb=20120702233904',
      alt: 'Imagen de Iron Man 2',
      title: 'Iron Man 2'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

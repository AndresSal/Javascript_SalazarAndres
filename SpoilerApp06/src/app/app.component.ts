import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarHola = false;
  arregloNumeros = [1, 2, 3, 4, 5, 6];
  arregloPeliculas = [
    {
      nombre: 'Tomb Raider',
      descripcion: 'Alicia Vikander, Walton Goggins',
      esEstreno: false,
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_FOh_xn19xgXf_Uq5OK3WWzAmoVoZLHCO2vjFd4LKaxijU59eg'
    },
    {
      nombre: 'Ready Player One',
      descripcion: 'Tye Sheridan, Walton Goggins',
      esEstreno: false,
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFQprASMSiRnRHYgQl5sHoGr8GiMI9IB2XVIQP_tmD61KFgUY'
    }
  ];

  arregloPeliculasEstreno = [
    {
      nombre: 'Black Panther',
      esEstreno: true,
      urlImagen: 'https://pbs.twimg.com/media/DcCiZQ-X0AAFs_h.jpg'
    },
    {
      nombre: 'Maze Runner: The Death Cure',
      esEstreno: true,
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReh7zAJSYLYWnj2amP0w3BRDSihf2uwfyIZIiL5EPDea80lYuq'
    },
    {
      nombre: 'Star Wars: The Last Jedi',
      esEstreno: true,
      urlImagen: 'https://itcamefromblog.files.wordpress.com/2017/12/star-wars-the-last-jedi-2017-8d-1360x768-e1513623589255.jpg?w=480a80lYuq'
    },
    {
      nombre: 'Justice League',
      esEstreno: true,
      urlImagen: 'https://images-na.ssl-images-amazon.com/images/I/51piVhusDHL._SX355_BO1,204,203,200_.jpg'
    },

  ];

  arregloItemsMenuPrincipal = [
    {
      nombre: 'Musica',
      descripcion: 'Ir a la Sección de Música',
      esSeleccionado: false
    },
    {
      nombre: 'Audio Latino',
      descripcion: 'Ver tu programa favorito en audio latino',
      esSeleccionado: false
    },
    {
      nombre: 'Ver los Simpsons',
      descripcion: 'Ir a la pagina simpsonizados',
      esSeleccionado: false
    },
    {
      nombre: 'Facebook',
      descripcion: 'nuestro fanpage en Facebook',
      esSeleccionado: false
    },
    {
      nombre: 'Twitter',
      descripcion: 'siguenos en Twitter',
      esSeleccionado: false
    }
  ];
  arregloPeliculasRegulares = [
    {
      urlImagenPelicula: 'https://i2.wp.com/extraimage.net/images/2018/05/20/48c274a10ffe5abb6d9634dcb174f52f.jpg?w=620&ssl=1'
    },
    {
      urlImagenPelicula: 'http://movie3enter.in/wp-content/themes/moviecenter/timthumb.php?src=http://movie3enter.in/wp-content/uploads/2018/05/lfmqX7Z2O0QGjjEmnZjSXG3X91z-e1526760905202.jpg&h=500&w=330&zc=0'
    },
    {
      urlImagenPelicula: 'https://ia.media-imdb.com/images/M/MV5BN2ZkNWFjYzktODkwNy00YmM3LTkzMGUtMTRhMDlmZGZhZTU0L2ltYWdlXkEyXkFqcGdeQXVyNDg3MTQxOTg@._V1_SY500_CR0,0,333,500_AL_.jpg'
    },
    {
      urlImagenPelicula: 'data:image/jpeg;base64,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'
    },
    {
      urlImagenPelicula: 'https://www.nautiljon.com/images/asian-movie/00/29/running_on_karma_492.jpg'
    },
    {
      urlImagenPelicula: 'https://rental.geo-online.co.jp/cdn/01478000/01477696/4.jpg?dev=on'
    },
    {
      urlImagenPelicula: 'http://filmi.uz/uploads/posts/2018-05/1526824879_k26hw0gd16s6c5srw393dad391.jpg'
    },
    {
      urlImagenPelicula: 'http://imgnews.naver.com/image/001/2008/08/19/AKR20080819106100005_01_i.jpg'
    }
  ];

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

alertar (evento) {
  console.log('Evento: ', evento); // true
  alert('DIO CLICK EN ES ESTRENO!!!!!!!');
}






















//   nombre = 'Andres';
//   apellido = 'Salazar';
//   edad = 22;
//   sueldo = 1;
//   fechaNacimiento = new Date('1995-10-17');
//
//   nombreBoton = 'Cambiar color';
//   nombreClase = 'sa-titulo';
//   clase = 'papa';
//
//   cambiarClaseDeTitulo() {
//     const nombreClaseEsTitulo = this.nombreClase === 'sa-titulo';
//   if (nombreClaseEsTitulo) {
//     this.nombreClase = 'sa-subtitulo';
//   } else {
//   this.nombreClase = 'sa-titulo';
// }
// }
//
//   aplicarClase(textoInput: string) {
//     this.nombreClase = textoInput;
//   }
}

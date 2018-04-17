var nombre = "28";
var edad = 28
var fecha = new Date();

//otros tipos de variables

var casado = false;
var casa = undefined;
var carro  = null;

//forma rápida para probar una función if
console.log(casa ? "True" : "False");
console.log(casado ? "True" : "False");
console.log(carro ? "True" : "False");
console.log(1 ? "True" : "False");
console.log(-1 ? "True" : "False");
console.log(0 ? "True" : "False");


//otra forma de definir funciones
var sumarDosNumerosVersionDos = function amigo(numeroUno, numeroDos){
    return numeroDos+numeroUno;
};

//para escribir objetos, como por ejemplo JSON
var usuario = {
    "nombre":"Andres",
    apellido:"Salazar",
    cedula:'123456789',
    imprimirEnConsola:sumarDosNumerosVersionDos(6,7)
};
console.log("El usuario: ",usuario);
console.log(usuario.imprimirEnConsola);

if (nombre === edad) {
    console.log("Verdadero");//es como print
} else {
    console.log("Falso");
}
console.log(fecha);

function sumarDosNumeros(numeroUno, numeroDos){
    //return numeroUno+numeroDos

}

//como usar la función
console.log(sumarDosNumeros(5,4))

console.log(sumarDosNumerosVersionDos(3,4));
console.log(sumarDosNumerosVersionDos(7,7))









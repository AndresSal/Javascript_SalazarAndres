//inicio
var arregloNumeros = [1, 2, 3, 4, 5];
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
//segunda forma
var totalEdades = function (arregloDeNumeros) {
    //codigo extra
};
//para retornar un cierto valor
//sin parentesis
var facultades = function (a) { return ['Facultad1', 'Facultad2']; }; //sin tener que poner la palabra return
//asignando un tipo de dato
var facultadesDos = function (a) { return ['Facultad1', 'Facultad2']; }; //sin tener que poner la palabra return
//Usar ? dentro de una funcion y junto a un parametro significa que ese parametro es opcional.
facultadesDos();
var sumar = 0;
arregloNumeros.forEach(function (valor, indice, arreglo) {
    console.log('valor', valor);
    console.log('indice', indice);
    console.log('arreglo', arreglo);
    sumar = sumar + valor;
    console.log(sumar);
} //puedo iterar cada elemento del arreglo
);
//operador de la suma

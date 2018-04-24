//inicio
var arregloNumeros = [1, 2, 3, 4, 5];
var arregloDeudas = [73, 123.32, 23, 43, 123, 43, 50, 1];
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
var resultadoDeLaSuma = arregloNumeros.reduce(//primer parametro una funcion el segundo un valor
function (totalAcumulado, valorArreglo) {
    return totalAcumulado + valorArreglo;
}, 20);
//operador de la suma
var resultadoDeLaResta = arregloNumeros.reduce(//primer parametro una funcion el segundo un valor
function (totalAcumulado, valorArreglo) {
    return totalAcumulado - valorArreglo;
}, 20);
console.log('resultadoDeLaSuma ', resultadoDeLaSuma);
console.log('resultadoDeLResta ', resultadoDeLaResta);
///
//let arregloUsuarios: Array<UsuarioArreglo>= [] primera forma
var arregloUsuarios = [
    {
        nombre: 'Andres',
        edad: 28
    },
    {
        nombre: 'Andres',
        edad: 10
    },
    {
        nombre: 'Andres',
        edad: 70
    },
    {
        nombre: 'Andres',
        edad: 32
    },
    {
        nombre: 'Andres',
        edad: 25
    }
];
function calcularDeudaDelUsuario(edad) {
    return arregloDeudas.reduce(function (totalAcumulado, deuda) {
        return totalAcumulado + ((edad) / 100 * deuda);
    }, 0);
}
//mutar el arreglo
var usuariosConCincoAniosMenos = arregloUsuarios.map(function (usuario) {
    usuario.edad = usuario.edad - 5;
    usuario.deuda = calcularDeudaDelUsuario(usuario.edad);
    return usuario;
}).filter(function (usuario) {
    return (usuario.deuda < 100);
});
console.log('Usuario con cinco anios menos', usuariosConCincoAniosMenos);
var resultadoDeLasEdades = arregloUsuarios.reduce(//primer parametro una funcion el segundo un valor
function (totalAcumulado, valorArreglo) {
    return totalAcumulado + valorArreglo.edad;
}, 20);
console.log("resultado de las edades", resultadoDeLasEdades);
///

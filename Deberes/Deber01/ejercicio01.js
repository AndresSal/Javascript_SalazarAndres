function validarNumeroDeStringsEnArreglo(arreglo) {
    var contador = 0;
    for (var aux = 0; aux < arreglo.length; aux++) {
        console.log(typeof arreglo[aux]);
        if (typeof arreglo[aux] === "string") {
            contador++;
        }
    }
    console.log(contador);
}
validarNumeroDeStringsEnArreglo([5, 'Andres', 3, 'Ana', false, null, '12', undefined]);

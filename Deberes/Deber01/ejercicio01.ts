function validarNumeroDeStringsEnArreglo(arreglo){
    let contador = 0;
    for(let aux=0;aux<arreglo.length;aux++){
        console.log(typeof arreglo[aux])
        if(typeof arreglo[aux] === "string" ){
            contador++;
        }
    }
    console.log(contador);
}

validarNumeroDeStringsEnArreglo([5,'Andres',3,'Ana',false,null,'12',undefined])
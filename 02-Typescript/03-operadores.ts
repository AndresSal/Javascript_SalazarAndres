//inicio
let arregloNumeros = [1, 2, 3, 4, 5];


let sumarDosNumeros = (numeroUno: number, numeroDos: number)=>{//fat arrow function
return numeroUno + numeroDos;
};

//segunda forma
let totalEdades = arregloDeNumeros =>{
    //codigo extra
};

//para retornar un cierto valor
//sin parentesis
let facultades = a => ['Facultad1', 'Facultad2'];//sin tener que poner la palabra return
//asignando un tipo de dato
let facultadesDos = (a?:number) => ['Facultad1', 'Facultad2'];//sin tener que poner la palabra return

//Usar ? dentro de una funcion y junto a un parametro significa que ese parametro es opcional.

facultadesDos()

let sumar = 0;
arregloNumeros.forEach(
    (valor, indice, arreglo) => {
        console.log('valor',valor);
        console.log('indice',indice);
        console.log('arreglo',arreglo);
        sumar = sumar + valor;
        console.log(sumar);
    }//puedo iterar cada elemento del arreglo
)

//operador de la suma
let resultadoDeLaSuma = arregloNumeros.reduce( //primer parametro una funcion el segundo un valor
    (totalAcumulado, valorArreglo) => {
        return totalAcumulado + valorArreglo;
    },
    20
);

//operador de la suma
let resultadoDeLaResta = arregloNumeros.reduce( //primer parametro una funcion el segundo un valor
    (totalAcumulado, valorArreglo) => {
        return totalAcumulado - valorArreglo;
    },
    20
);

console.log('resultadoDeLaSuma ', resultadoDeLaSuma);
console.log('resultadoDeLResta ', resultadoDeLaResta);

///

//let arregloUsuarios: Array<UsuarioArreglo>= [] primera forma

let arregloUsuarios: UsuarioArreglo[] = [ //segunda forma
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
]

let resultadoDeLasEdades = arregloUsuarios.reduce( //primer parametro una funcion el segundo un valor
    (totalAcumulado, valorArreglo:UsuarioArreglo) => {
        return totalAcumulado + valorArreglo.edad;
    },
    20
);



interface UsuarioArreglo{
    nombre: string,
    edad: number
}

console.log("resultado de las edades",resultadoDeLasEdades)
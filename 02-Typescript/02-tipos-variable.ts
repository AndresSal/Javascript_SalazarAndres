//inicio
let segundoNombre: string = 'Fernando';
const cedula = '1751670830';

segundoNombre = 'Andres';
//cedula = '1233343445';//Da error read-only


const URL_POLI = 'http//:www.epn.edu.ec';
//segundoNombre = 123;//Duck Typing

///
let nombre: String;
let edad: Number = 28;
let fecha: Date = new Date();
let casado: boolean = false;
let mascotas: object = {};
///

//definición de una clase
class Usuario {
    public mNombre: String;
    private mEdad: Number;
    protected mCedula: String;

    constructor(nombre: String,
                edad: Number,
                cedula: String) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;

    }

    public imprimirEnConsola() {
        //Template Strings Tilde invertida
        console.log(`El usuario se llama:  ${this.mNombre} 
        la cedula del usuario es:  ${this.mCedula}
        la edad del usuario es: ${this.mEdad}`)
    }

}

let usuario: Usuario = new Usuario('Andres', 22, '1715670830');
let usuarioOtro={
    mNombre: 'Jorge',
    mEdad: 32,
    mCedula:'1212121212'
}

console.log(usuario.imprimirEnConsola());
console.log(usuarioOtro);

interface UsuarioDos{
    mNombre: String;
    mEdad: Number;
    mCedula: String;
    imprimirEnConsola(nombre:String):void;
    usuario:Usuario;
}

///
class UsuarioTres{
    constructor(public mNombre: String,
                private mEdad: Number,
                protected mCedula: String){

    }
}
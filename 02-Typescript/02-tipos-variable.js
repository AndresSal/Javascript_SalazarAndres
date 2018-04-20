//inicio
var segundoNombre = 'Fernando';
var cedula = '1751670830';
segundoNombre = 'Andres';
//cedula = '1233343445';//Da error read-only
var URL_POLI = 'http//:www.epn.edu.ec';
//segundoNombre = 123;//Duck Typing
///
var nombre;
var edad = 28;
var fecha = new Date();
var casado = false;
var mascotas = {};
///
//definición de una clase
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        //Template Strings Tilde invertida
        console.log("El usuario se llama:  " + this.mNombre + " \n        la cedula del usuario es:  " + this.mCedula + "\n        la edad del usuario es: " + this.mEdad);
    };
    return Usuario;
}());
var usuario = new Usuario('Andres', 22, '1715670830');
console.log(usuario);

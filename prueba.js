//Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
var nombre = 'Edmir';
var apellidos = 'Galvan Vazquez';
var nombreEnPlatzi = 'Edmir01';
var edad = 18;
var email = 'edmirgalvaz@gmail.com';
var mayorEdad = true;
var dineroAhorrado = 5500;
var deudas = 3200;

// Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
// Nombre completo (nombre y apellido)
// Dinero real (dinero ahorrado menos deudas)

var nombreCompleto = nombre + ' ' + apellido;
var dineroNeto = dineroAhorrado - deudas;

// Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
function presentarme(nombre, nickname) {
   console.log(
      `Hola, mi nombre es ${nombre}, pero prefiero que me llames ${nickname}`
   );
}

// Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = 'Basic';

if (tipoDeSuscripcion === 'Free') {
   console.log('Solo puedes tomar los cursos gratis');
} else if (tipoDeSuscripcion === 'Basic') {
   console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
} else if (tipoDeSuscripcion === 'Expert') {
   console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
} else {
   console.log(
      'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
   );
}

// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
// 1
for (let i = 0; i < 5; i++) {
   console.log('El valor de i es: ' + i);
}

let i = 0;
while (i < 5) {
   i++;
   console.log('El valor de i es: ' + i);
}

// 2
for (let i = 10; i >= 2; i--) {
   console.log('El valor de i es: ' + i);
}

var x = 10;
while (x >= 2) {
   console.log('El valor de x es: ' + x);
   x--;
}

// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
var respuesta = prompt('Cuanto es 2 + 2');
var respuestaInt = parseInt(respuesta);
if (respuestaInt == 4) {
   console.log('Genial, aprobaste');
} else {
   console.log('Vuelve a intentarlo');
}

// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
var array = [1, 2, 3, 4];
function imprimirPrimerElemento(arrayImprimir) {
   console.log(arrayImprimir[0]);
}
imprimirPrimerElemento(array);

// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
function ImprimirElementosArray(arrayImprimir) {
   for (elemento of arrayImprimir) {
      console.log(`El elemento es ${elemento}`);
   }
}
ImprimirElementosArray(array);

// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
var persona = {
   nombre: 'Edmir',
   apollido: 'Galvan',
   edad: 18,
};

function imprimirObjeto(objeto) {
   Object.values(objeto).forEach(function (elemento) {
      console.log(elemento);
   });
}
imprimirObjeto(persona);

//Helpers
function esPar(numero) {
   return numero % 2 === 0;
} //Sabemos si alguna lista es par o impar

function calcularMediaAritmetica(lista) {
   const sumaLista = lista.reduce(function (a = 0, b) {
      return a + b;
   });
   const promedioLista = sumaLista / lista.length;
   return promedioLista;
}

// Calculadora de mediana
function medianaSalarios(lista) {
   const mitad = parseInt(lista.length / 2);

   if (esPar(lista.length)) {
      const personaMitad1 = lista[mitad - 1];
      const personaMitad2 = lista[mitad];

      const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
      return mediana;
   } else {
      const personaMitad = lista[mitad];
      return personaMitad;
   }
}

// Mediana General
const salariosCol = colombia.map(function (persona) {
   return persona.salary;
});

const salariosColSorted = salariosCol.sort((a, b) => {
   return a - b;
}); //Ordenar de menor a mayor los salarios en Colombia

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100; //Nos da el 90% del total de personas del array
const spliceCount = salariosColSorted.length - spliceStart; //Sacamos el 10% restante del array
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount); //Recibe dos parametros, 1 en donde empieza y 2 cuantas posiciones abarcaremos

const medianaTop10Col = medianaSalarios(salariosColTop10);

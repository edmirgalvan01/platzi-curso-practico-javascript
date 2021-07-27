const listaEjemplo = [1, 1, 2, 3, 2, 1, 2, 2, 3, 2, 1];

function convertirListaAObjeto(lista) {
   let listaCount = {};
   listaEjemplo.map((elemento) => {
      if (listaCount[elemento]) {
         listaCount[elemento] += 1;
      } else {
         listaCount[elemento] = 1;
      }
   });
   return listaCount;
}

function calcularModa(lista) {
   const arrayAObjetos = convertirListaAObjeto(lista);
   const listaArray = Object.entries(arrayAObjetos); //Convertimos el objeto a un array de arrays para poder saber cual elemento se repite mas
   const listaOrdenada = listaArray.sort((a, b) => a[1] - b[1]); //Ordena los elementos del que menos se repite al que mas se repite
   const moda = listaOrdenada[listaOrdenada.length - 1]; //Ingresamos al ultimo elemento del array que es el que mas se repite

   return moda;
}

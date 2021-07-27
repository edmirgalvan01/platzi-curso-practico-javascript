function calcularMediaAritmetica(lista) {
   const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
   });
   const promedioLista = sumaLista / lista.length;
   return promedioLista;
}

function esPar(numero) {
   if (numero % 2 === 0) {
      return true;
   } else {
      return false;
   }
} //Sabemos si la lista tiene una cantidad de numeros par o impar

function ordenarLista(lista) {
   const listaOrdenada = lista.sort((a, b) => a - b);
   return listaOrdenada;
} //Ordenamos la lista de menor a mayor

function saberLaMediana(lista) {
   const listaOrdenada = ordenarLista(lista); //Ordenamos la lista para que trabaje bajo la lista ya ordenada
   let mediana;
   let mitadLista = parseInt(listaOrdenada.length / 2);
   if (esPar(listaOrdenada.length)) {
      const elemento1 = listaOrdenada[mitadLista - 1];
      const elemento2 = listaOrdenada[mitadLista];

      const promedioElemento1y2 = calcularMediaAritmetica([
         elemento1,
         elemento2,
      ]);

      mediana = promedioElemento1y2;
   } else {
      mediana = listaOrdenada[mitadLista];
   } //Validamos si la lista es par o impar y dependiendo de eso retornamos la mediana

   return mediana;
}

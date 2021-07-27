const lista1 = [100, 200, 300, 500];

const calcularPromedio = (lista) => {
   const acumular = (valorAcumulado, nuevoElemento) =>
      valorAcumulado + nuevoElemento; //Esta funcion nos retorna el nuevo valor acumulado
   const sumaLista = lista.reduce(acumular, 0);
   const promedioLista = sumaLista / lista.length; //Dividimos esos elementos para sacar el promedio
   return promedioLista;
};

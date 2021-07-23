//Codigo del cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

//Codigo del triangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

//Codigo del circulo
const pi = Math.PI;
const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => {
   const diametro = diametroCirculo(radio);
   return diametro * pi;
};
const areaCirculo = (radio) => pi * (radio * radio);

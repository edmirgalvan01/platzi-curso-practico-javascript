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

// Empezamos a interactuar con HTML
//Area y perimetro del cuadrado
const calcularPerimetroCuadrado = () => {
   const input = document.getElementById('inputCuadrado'); //Tomamos la etiqueta del input por su ID
   const value = input.value; //Tomamos el valor que el usuario escribio en el input
   const perimetro = perimetroCuadrado(value); //Calculamos perimetro mediante el valor del usuario
   alert(perimetro);
};

const calcularAreaCuadrado = () => {
   const input = document.getElementById('inputCuadrado'); //Tomamos la etiqueta del input por su ID
   const value = input.value; //Tomamos el valor que el usuario escribio en el input
   const area = areaCuadrado(value); //Calculamos perimetro mediante el valor del usuario
   alert(area);
};
//Area y perimetro del cuadrado

//Area y perimetro del triangulo
const calcularPerimetroTriangulo = () => {
   const lado1 = parseInt(document.getElementById('inputLado1Triangulo').value); //Tomamos el valor del lado 1
   const lado2 = parseInt(document.getElementById('inputLado2Triangulo').value); //Tomamos el valor del lado 2
   const base = parseInt(document.getElementById('inputBaseTriangulo').value); //Tomamos el valor de la base

   const perimetro = perimetroTriangulo(lado1, lado2, base);
};

const calcularAreaTriangulo = () => {
   const base = parseInt(document.getElementById('inputBaseTriangulo').value); //Tomamos el valor de la base
   const altura = parseInt(
      document.getElementById('inputAlturaTriangulo').value
   ); //Tomamos el valor de la altura
   const area = areaTriangulo(base, altura);
};
//Area y perimetro del triangulo

//Diametro. perimetro y area del circulo
const calcularDiametroCirculo = () => {
   const radio = parseInt(document.getElementById('inputRadioCirculo').value);
   const diametro = diametroCirculo(radio);
};

const calcularPerimetroCirculo = () => {
   const radio = parseInt(document.getElementById('inputRadioCirculo').value);
   const perimetro = perimetroCirculo(radio);
};

const calcularAreaCirculo = () => {
   const radio = parseInt(document.getElementById('inputRadioCirculo').value);
   const area = areaCirculo(radio);
};
//Diametro. perimetro y area del circulo

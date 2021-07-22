//Codigo del cuadrado
console.group('Cuadrado');

const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro del cuadrado mide: ' + perimetroCuadrado + 'cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El area del cuadrado mide: ' + areaCuadrado + 'cm^2');

console.groupEnd();

//Codigo del triangulo
console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
   'Los lados del triangulo miden: ' +
      ladoTriangulo1 +
      'cm, ' +
      ladoTriangulo2 +
      'cm y ' +
      baseTriangulo +
      'cm'
);
console.log('La altura del triangulo es de: ' + alturaTriangulo + 'cm');

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log('El perimetro del triangulo mide: ' + perimetroTriangulo + 'cm');

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log('El area del triangulo mide: ' + areaTriangulo + 'cm^2');

console.groupEnd();

//Codigo del circulo
console.group('Circulo');
const radioCirculo = 4;
console.log('El radio del circulo mide: ' + radioCirculo + 'cm');

const diametroCirculo = radioCirculo * 2;
console.log('El diametro del circulo mide: ' + diametroCirculo + 'cm');

const pi = Math.PI;
console.log('Pi mide: ' + pi + 'cm');

const perimetroCirculo = diametroCirculo * pi;
console.log('El perimetro del circulo es: ' + perimetroCirculo + 'cm');

const areaCirculo = pi * (radioCirculo * radioCirculo);
console.log('El area del circulo es: ' + areaCirculo + 'cm^2');

console.groupEnd();

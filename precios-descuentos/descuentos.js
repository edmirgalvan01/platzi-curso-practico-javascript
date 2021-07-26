const listaCupones = {
   Edmir01: 10,
   Edmir02: 15,
   Epin01: 20,
}; //Lista de los cupones

function descuentoDelCupon() {
   const nombreCupon = document.getElementById('inputCupon').value;
   const cuponDefault = 0;
   const cuponDescuento = listaCupones[nombreCupon] || cuponDefault;
   return cuponDescuento;
} //Esta funcion obtiene cual es el total del cupon

function calcularPrecioConDescuento(precio, descuento, cupon) {
   const descuentoConCupon = descuento + cupon;
   const porcentajePrecioConDescuento = 100 - descuentoConCupon;
   const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
   return precioConDescuento;
} //Esta funcion tiene la formula para hacer el descuento

function onClickButtonPrecioDescuento() {
   const precio = parseInt(document.getElementById('inputPrecio').value); //Nos traemos el valor del input y cambiamos su tipo a numero
   const descuento = parseInt(document.getElementById('inputDescuento').value); //Nos traemos el valor del input y cambiamos su tipo a numero
   const cupon = descuentoDelCupon(); //Nos traemos el valor del cupon que arroja la funcion

   const precioConDescuento = calcularPrecioConDescuento(
      precio,
      descuento,
      cupon
   );

   document.getElementById('resultadoDelDescuento').innerText = //Añadimos el resultado al parrafo mediante su ID
      'El precio con descuento es de $' + precioConDescuento;
}

// expresiones regulares
/* va a validar las expresiones*/


let cadena = "Lorem ipsum dolor sit amet, lorem adipisicing lorem, sed do eiusmod"

// i para ignorar miniscula o mayuscula
// g no te detengas cn la primera conincidencia

// let expReg = new RegExp('lorem','ig');
// // let expReg2= /lorem/;
// // da verdadero o falso si existe la palabra
// console.log(expReg.test(cadena));
// // arrgelo
// console.log(expReg.exec(cadena));
// let expReg2 = /\d/ig; 
// console.log(expReg2.exec(cadena));
// console.log(expReg2.exec(cadena));

// let expReg2 = /[0-9]/ig; 
// console.log(expReg2.exec(cadena));
// console.log(expReg2.exec(cadena));
// console.clear()

let expReg2 = /lorem{2}/ig; 
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
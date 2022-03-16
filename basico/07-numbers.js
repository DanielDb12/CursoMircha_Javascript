// numbers


let a  = 2;
let b = new Number(1);
let c = 7.19;
let d ='5.6';

console.log(a,b);

console.log(c.toFixed(1)); 
// este metodo nos dice cuanto numeros decimales va a tener un valor numeroco

console.log(parseInt(c)); 
// parseINT SOLO DEVUelve la parte entera
// parseFloat imprime la parte numerica como la parte flotante
/*El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo
es decir nos indica que tipo de de dato es number string o objeto
*/

console.log(typeof c, typeof d);
console.log(a + b);

console.log(c + Number.parseInt(d));

console.log(c + Number.parseFloat(d))





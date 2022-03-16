// parametro Rest & Operador Spread

// capacidad de tener parametros infinitos

/* los parametros Rest es ir agregando paramentro infinito a una funcion o dentro de una variables
pe tiens un arreglos pero no sabes cuantos valores vas a recibir y posteriormente
se hacen los procesos hay que definir el rest de esta manera donde estan guardado el valor infinito*/ 


function sumar(a,b, ...c){
	let resultado = a + b;

	c.forEach(function(n){
		resultado += n
		});

	return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
console.log(sumar(1,2,3,4,5,6,7));
console.log(sumar(1,2,3,4,5,6,7,8,9));

/* Spread Operator donde tengamos que guardar varios argumentos pero recibimos nuevos parametros agregar el spread
 operador de propragancion se puede ejecutar en cualquier sentencia de codigo

 */


const arr1 = [1,2,3,4,5]
arr2 = [6,7,8,9,0];

console.log(arr1,arr2);

const arr3 = [...arr1,...arr2];
console.log(arr3)
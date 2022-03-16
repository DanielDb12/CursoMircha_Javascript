// Operador Corto Circuito

/* 

CortoCircuito OR cuando el valor de la izquierda en la 
expresion siempre puede validar a true es el valor que se cargara
por defecto

CortoCircuito AND cuando el valor de la izquierda en la 
expresion siempre puede validar a false es el valor que se cargara
por defecto*/

function saludar(nombre){
	nombre = nombre || 'Desconocido';
	console.log(`Hola ${nombre}`)
}

saludar('daniel');
saludar();

console.log('cadena'|| 'valor de la derecha');
console.log(19|| 'valor de la derecha');
console.log(true|| 'valor de la derecha');
console.log([]|| 'valor de la derecha');
console.log({}|| 'valor de la derecha');
console.log(false|| 'valor de la derecha');
console.log(null|| 'valor de la derecha');
console.log(undefined|| 'valor de la derecha');
console.log(''|| 'valor de la derecha');
console.log(-2|| 'valor de la derecha');
console.log(-2|| 'valor de la derecha');
console.log(0|| 'valor de la derecha');

// && and

console.log(false && 'valor de la derecha')

console.log('cadena'&& 'valor de la derecha');
console.log(19 && 'valor de la derecha');
console.log(true &&'valor de la derecha');
console.log([] && 'valor de la derecha');
console.log({} && 'valor de la derecha');
console.log(false &&'valor de la derecha');
console.log(null &&'valor de la derecha');
console.log(undefined &&'valor de la derecha');
console.log('' && 'valor de la derecha');
console.log(-2 && 'valor de la derecha');
console.log(-2 && 'valor de la derecha');
console.log(0 && 'valor de la derecha');
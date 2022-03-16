// Funciones

/* Una funcion es un bloque de código, aucontenido que se puede definir una
ver y ejecutar en cualquier momento. Opcionalmente una función puede aceptar
parámetros y devolver un valor

Las funciones en JavaScript son objetos, un tipo especial de objetos:

Se dice que las funciones son ciudadanos de primera clase porque puede asignarse
a un valor, y puede pasarse como argumentos y usarse como un valor de retorno

*/


// las funciones son objetos

// Declarada

function estoEsUnaFuncion() {
	console.log('uno');
	console.log('dos');
	console.log('tres');

}
// invocacion de funciones
estoEsUnaFuncion();

// una funcion que devuelve valor se usa return

function unaFuncionQueDevuelveValor() {
	console.log('uno');
	console.log('dos');
	console.log('tres');

	return 'la funcion ha retornado una cadena de texto'
}

// cuando una funcion devuelve un valor usamos la palabra return

let valorDeFuncion = unaFuncionQueDevuelveValor();

// cuando una funcion dentro del cuerpo de la misma funcion el compilador de navegador
// encuentra la palabra reservada return ignora las lineas de abajo y se ejecuta lo que esta antes del return lo que esta despues no lo ejecuta

// la funcion acepta parametro donde internamente se usara para algo

function saludar(nombre = desconocido,edad = 0) {
	console.log(`hola mi nombre es ${nombre} y tengo ${edad}`)


}


saludar('apolo', 7); 
saludar();

// manera de declara funciones vs funciones expresadas

// lo primero que ordena js es variables y funciones

// cuando declaraamo una funcion js hace un hoisting

function funcionDeclarada() {
	console.log('esto es una funcion declarada puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada');

}

funcionDeclarada();



// cuando hacemos funciones expresada usamos const
// funcion anonima es una funcion que no tiene nombre
// si se declara antes de su inicializacion dara un error de referencia 

const funcionExpresada = function() {
	console.log('Esto es una funcion expresada es decir una funcion que se le ha asignando como valor a una variable, si invocamos esta funcion antes de su definicion js nos dira');
}

funcionExpresada();
funcionExpresada('hola mundo')


// ordenamiento de codigo
// 1 importacion de modulos
// 2 decñaracion de variables
// 3 declaracion de funciones
// 4 ejecucion de codigo


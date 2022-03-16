// loops

// while do while
// 0 < entraria en un loop infinito

/* jhon mircha: 0 es menor a 10 imprimiria 0 de manera infinita
imprime el 0 y vuelve a preguntar variable contador es igual a 10
pero como va seguir valiendo 0 seguira imprimiendola; 

importante cuando este tipo de estructura repetitiva bucles o ciclos
para que su ciclo o interacciones den el ciclo
es necesario agregarle un incremento o un decremento

imprime del 0 al 9 y cuando llega a 10 se sale del bucle

*/
let contador = 0;

while(contador < 10) {
	console.log('while' + contador);
	contador++
}

/*

porque solo imprimio 10 no deberia imprimir solo 10
porque la variable en cueestion vale 0 hace todo su si ciclo en el while 
por eso imprimi while 0 a while 9 sale de while y entra el bucle do while
valiendo 10

*/

do {

console.log('do while'+ contador);
contador++;
} while(contador < 10)

// diferencia de do while y while
// while antes de empezar a ejecutar la condicion se debe cumplir
// do while siempre se ejecutara una vez todo el bloque que este dentro las llaves del do porque la evaluacion de la condicion esta al final

// while siempre va a comparar antes de ejecutar las lineas que estan dentro del ciclo
// el do while al menos se va a ejecutar una vez el codigo y apartir de la segunda en adelante si la condicion se cumple

// FOR es una estructura que consta de 3 parte
/* for inicializacion de variables; condicion; decremento o incremento)
    sentencia que ejecuta el for*/
 //  la diferencia while y do while es que en una sola instruccion

for (let i = 0; i <= 10; i++) {
	console.log('for' + i);
}

let numeros = [10,20,30,40,50,60,70,80,90];

for (let i = 0; i < numeros.length; i ++) {
	console.log(numeros[i]);

}

// for of for if

// forin me va a permitir recorrer o iterar las propiedades de un objeto

const daniel = {
	nombre: 'daniel',
	apellido: 'duarte',
	edad: 30

}
for (const propiedad in daniel) {
	console.log(`Key:${propiedad}, Value: ${daniel[propiedad]}`);
}

// cuando estamos trabajando en un for in queremos imprimir el valor de una propiedad de  un objeto la anotacion del punto no funciona
// para acceder a la referenciad e una propiedad de un objeto es con corchete cuadrado[]

// for of
// nos permite recorrer todos los elementos de cualquier objeto que sea iterable en javascript
// diferencia de for in es para objetos primitivos for of para arreglos

for (const elemento of numeros) {
	console.log(elemento)
}

let cadena ='hola mundo'

for (const caracter of cadena) {
	console.log(caracter)
}


// for in recorre todas la propiedades del objeto y for of recorre todos los elementos de cualquier
// objeto iterable que significa iterable que pueda partirlo en pequeños elementos como los arreglos o las cadena de texto




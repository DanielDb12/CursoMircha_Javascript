// iterables & iterators

/* cuando una variables es iterable o un dato es iterable es una
estructura lineal que se pueda recorrer como por un arrglos,string
maps y sets y los elementos del Dom

los elementos que nos ayudan a caputar los elementos del Dom del javascript
tambien son elementos iterables ya que se pueden ejecutar por medio una
funcion accion y pueden afectar los parrafos o nodos  

iterables son los elementos que se puede recorrer
iterador es eel apuntador o mecanismo que va recorriendo   los elementos

for,foreach,spreadOperator, promesas

*/
// Array
const iterable = [1,2,3,4,5];
// String
// const iterable = "Hola Mundo";
// Set 
// const iterable = new Set([1,2,3,4,5,]);
// Map
// const iterable = new Map([['nombre','jon'['edad,35']]);
// Accedemos al iterador del iterables
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next = iterador.next();

while(!next.done){
	console.log(next.value);
	next = iterador.next();
}






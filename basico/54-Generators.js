// Geneators

/* para crear un generador se le coloca un * al lado de la 
palabra function */

function* iterable() {
	yield 'hola';
	console.log('Hola consola');
	yield 'hola2';
	console.log('seguimos con mas instrucciones de nuestro codigo');
	yield 'hola  3';
	yield 'hola 4';

}

let iterador = iterable();
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

for(let y of iterador){
	console.log(y)
}

const arr = [...iterable()];
console.log(arr)


function cuadrado(valor){
	setTimeout(()=>{
	return	console.log({valor, resultado: valor*valor})

	},Math.random()*1000);


}

function* generador(){
	console.log('inicia Generator');
	yield cuadrado(0)
	yield cuadrado(1)
	yield cuadrado(2)
	yield cuadrado(3)
	yield cuadrado(4)
	yield cuadrado(5)
	console.log('termina Generator');

}

let gen = generador();

for(let y of gen){
	console.log(y)
}


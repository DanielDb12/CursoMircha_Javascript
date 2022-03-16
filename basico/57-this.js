// this

// this hace referencia al objeto global windows

console.log(this)
console.log(window);
console.log(this === window)

this.nombre = 'Contexto Global';
console.log(this.nombre);

function imprimir () {
	console.log(this.nombre)
}

imprimir()

const obj = {
	nombre : 'Contexto Objeto',
	imprimir: function () {
		console.log(this.nombre)
	}
}

obj.imprimir();

const obj2 = {
	nombre:"Contexto Objeto2",
	imprimir
}

obj2.imprimir();

/* las arrow function no maneja su propio scope el contexto 
de la palabra this lo agarra del padre por eso no imprimi 
el contexto glbal

el cambio una funcion anonima maneja su propio scope 

*/


const obj3 = {
	nombre : 'Contexto Objeto 3',
	imprimir: () => {
		console.log(this.nombre)
	}
}

obj3.imprimir();

// clausara o clouchor retornar una funcion dentro de una funcion
function Persona(nombre){
	const that = this;
	that.nombre = nombre
	// this.nombre = nombre;
	// return console.log(this.nombre)
	// return function(){
	// 	console.log(this.nombre)
	// }
	// return () => console.log(this.nombre);
	return function () {
		console.log(that.nombre)
	}
}

/* cada funcion crea un contexto menos al arrow funcion 
*/
let daniel = new Persona("Daniel")
daniel()


// symbols

/* es un tipo de dato primitivo que fue introducido despues ecma2015
despues de que creamos un simbolo su valor se va a manterner privado y del uso interno
-los simbolos nos permite crear identificadores unico
-evitar colisiones de propiedades que podamos sobreescribir
-las buenas practicas nos dice que debemos escribirla con const
-su funcion principal es crear elementos privados dentro de un objeto
que tambien su referencia seran unicas.


*/


let id = Symbol('id');
let id2 = Symbol('id');

console.log(id === id2)
console.log(id,id2);
console.log(typeof id, typeof id2);

const NOMBRE = Symbol('nombre');
const SALUDAR = Symbol('saludar');

const persona = {
	[NOMBRE]:'Daniel'
	edad: 35
};


persona.NOMBRE = 'Daniel Duarte'
console.log(persona)
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
	console.log('hola')
}

console.log(persona);
persona[SALUDAR]();

for(let propiedad in persona) {
	console.log(propiedad)
	console.log(persona[propiedad]);
}

console.log(Object.getOwnPropertySymbols(persona))
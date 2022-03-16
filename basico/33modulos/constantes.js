export const PI = Math.PI;


export let usuario = 'daniel';

let password = 'qwerty';
// export default password;

// cuando va hacer exportado por default debe ser abajo

const hello = () => console.log('hola')

export default function saludar(){
	console.log('hola mundo es6')
}

// default cuando se exporte esa funcion automaticamente


export  class Saludar {
	constructor() {
		console.log('hola modulos + ES6')
	}
}
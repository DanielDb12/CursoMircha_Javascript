// arrow fuction
// es una implementacion es expresivo y sintetico 

// arrow function expresada
// const saludo = () => console.log('hola');
// saludo()

// cuando un funcion recibe un parametro no es necesario usar parentesis

const saludar = nombre => console.log(`hola ${nombre}`);
saludar('noris');

// const sumar = function (a,b) {
// 	return a + b;
// }
// console.log(sumar(9,9));

const sumar =  (a,b) => a + b; 

console.log(sumar(9,8));

// cuando una arrow fuction hay que respetar el cuerpo

const funcionDeVariasLineas = () => {
	console.log('uno');
	console.log('dos');
	console.log('tres');
}

funcionDeVariasLineas();

const numeros = [1,2,3,4,5];

numeros.forEach((el,index)=> console.log(`${el} esta en la posicion ${index}`)
);


function Perro () {
	console.log(this);
}

Perro();

const perro = {
	nombre: 'apolo'
	ladrar: function () {
		console.log(this)
	}
}

perro.ladrar()

// al transformar la propiedad ladrar a una funcion flecha el objeto this no es el objeto
// el arrow function tiene la capacidad de capturar el contexto del objeto en el que se encuentra 
// tener cuidado cuando se usa arrow fution para declarar metodos en objetos literales porque pueden saltarse el contexto donde estan y heredar o reconocer 
// el contexto donde se encuentra el objeto padre
// no puedes crear en un objeto literal no es una buena practicar crear un metodo con arrow function 


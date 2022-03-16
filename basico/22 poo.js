//prototipos

/*
Clases - modelo a seguir
Objetos - instancia de una clase o copia de ese modelo a seguir
   Atributos - es una carateristica o propiedad del objeto
   ( son variables dentro de un objeto)
   Metodos - son las acciones que un objeto puede realizar
   (funciones  dentro de un objeto)

js es un lenguaje orientada a objeto es basad  en prototipos y no en clases 
   

*/


const animal = {
	nombre: 'garfield',
	sonar(){
		console.log('miau')
	}
}

console.log(animal)

// funcion constructora
 // los atributos como los metodos tienen que colgar del objeto (this)

// function Animal (nombre, genero) {
// 	// atributos
// 	this.nombre = nombre;
// 	this.genero = genero;
// 	// metodos 
// 	this.sonar = function () {
// 		console.log('miua miau')
// 	}	
// 	this.saludar = function () {
// 		console.log(`hola me llamo ${this.nombre}`)	

// 	}
// }
// function constructora donde asignamos los metodos al prototipo no a la funcion como tal
function Animal (nombre, genero) {
	// atributos
	this.nombre = nombre;
	this.genero = genero;
	// metodos 

}
// metodos agregados al prototipo de la funcion constructora
	Animal.prototype.sonar = function () {
		console.log('miua miau')
	}	
	Animal.prototype.saludar = function () {
		console.log(`hola me llamo ${this.nombre}`)	

	}
// new nos permite hacer una nueva instancia en el objeto
const apolo = new Animal ('Apolo', 'Macho');
osa = new Animal('Osa', 'hembra')

console.log(apolo);
console.log(osa);

apolo.sonar();
apolo.saludar();

osa.sonar();
osa.saludar()

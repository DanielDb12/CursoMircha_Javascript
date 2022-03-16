// herencia protototipica

function Animal (nombre, genero) {
	// atributos
	this.nombre = nombre;
	this.genero = genero;
	 

}

// metodos
	Animal.prototype.sonar = function () {
		console.log('miua miau')
	}	
	Animal.prototype.saludar = function () {
		console.log(`hola me llamo ${this.nombre}`)	
	}	

function Perro(nombre,genero,tamanio) {
	this.super = Animal;
	this.super(nombre,genero);
	this.tamanio = tamanio;
}


// Perro esta heredando de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobreescribir de metodos del prototipo del padre en el hijo

Perro.prototype.sonar = function () {
	console.log('soy un perro y mi sonido es un ladrido');
};

Perro.prototype.ladrar = function () {
	console.log('guau guau')
};


const apolo = new Perro('Apolo','Macho','pequeño'),
	osa = new Perro ('Osa', 'hembra','mediano');

console.log(apolo);
console.log(osa);

apolo.sonar();
apolo.saludar();

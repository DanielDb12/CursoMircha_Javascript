// clases y Herencias

class Animal {
	constructor (nombre,genero) {
		this.nombre = nombre;
		this.genero = genero;
	}

	sonar() {
		console.log('Hago sonidos por que estoy vivo');
	}
	saludar(){
		console.log(`hola me llamo ${this.nombre}`);
	}


}

 class Perro extends Animal {
	constructor(nombre,genero,tamaño){
	// con el metodo super() se manda a llamar el constructor de la clase padre
	super(nombre, genero);
	this.tamaño = tamaño;
	}

	sonar(){
		console.log('soy un perro y mi sonido es un ladrido')
	}

	ladrar(){
		console.log('guauu guauu')
	}

}




// Metodos


const mimi = new Animal('mimi', 'hembra'),
scooby = new Perro('Scooby','Macho', 'Gigante');


console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();

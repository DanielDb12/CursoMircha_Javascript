// metodos estaticos getters y setters


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
	this.raza = null; 
	}

	sonar(){
		console.log('soy un perro y mi sonido es un ladrido')
	}

	ladrar(){
		console.log('guauu guauu')
	}

	// metodos estaticos es aquel que se puede ejecutar sin necesidad de instanciar la clase

	static queEres(){
		console.log('los perros somos los mejores amigos del hombre')

	}

	// Metodos setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
	 
	get getRaza(){
		return this.raza;
	}

	set setRaza(raza){
		this.raza = raza;
	}
}

Perro.queEres();


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
// los metodos get y set se trabaja como atributo
console.log(scooby.getRaza);
scooby.setRaza = 'Gran Danés';
console.log(scooby.getRaza);

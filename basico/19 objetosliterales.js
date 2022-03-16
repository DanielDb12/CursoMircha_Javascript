//  objetos literales

let nombre = 'Apolo',
edad = 1;

const perro = {
	nombre:nombre,
	edad:edad,
	ladrar:function () {
		console.log('guauu, guauu')
	}
}

console.log(perro);
perro.ladrar()

// con la nueva caracteristica

const dog = {
	nombre, 
	edad,
	raza:'mierdero',
	ladrar(){
		console.log('guau guau guau')
	}

}

console.log(dog);
dog.ladrar();
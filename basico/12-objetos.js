// objetos

// se puede utilizar una constante para definir un objeto no importa si se transforma porque sera igual un objeto
// es recomendable usar const para declarar objetos para que no sufra cambios en el futuro evito que otro objeto ocupe la referencia de un objeto

const b = {}
console.log(b);

const daniel = {
	nombre:'daniel',
	apellido: 'duarte',
	edad: 35,
	pasatiempo: ['correr', 'entrenar'],
	soltero: true,
	contacto: {
		email:'danielduarte@hotmail.com',
		twitter:'@danielduarte',
		movil:'0426404888'
	}, 
	saludar: function () {
		console.log('hello bitch .)')
	}
	decirMinombre: function(){
		console.log(`hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad}`)
	}
}

console.log(daniel)


// atributos son variables que tiene dentro de un objeto
// objeto dentro de un objeto a la variables se le van llamar atributos propiedades y a las funciones 
// un objeto es una coleccion de pare valor pueden tener cadenas de texto numero. boolean etc

// metodo
console.log(Object.keys);
// permite listar la llaves del objeto y convierte un objeto en un array p.e Nombre: Apellido: Edad:
console.log(Object.values)
// forma una arreglo da los valores del objeto p.e Daniel Duarte 30
console.log(jon.hasOwnProperty('nombre')) 
// busca la propieda y valida si el nombre de la propiedad se encuentra dentro de los objetos


// diferencia entre la variables de un objetos se van a llamar atributos o propiedades y las funciones se van a llamar metodos


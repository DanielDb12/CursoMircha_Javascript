// CALL APPLY BIND


console.log(this);
this.lugar = "Contexto Global";

function saludar(saludo, aQuien) {
console.log(`${saludo} ${aQuien} ${this.lugar}`)

}

saludar();

const obj = {
	lugar: "Contexto Objeto"
}

saludar.call(obj, "Hola", "Daniel")
saludar.call(null, "Hola", "Daniel")
saludar.call(this, "Hola", "Daniel")
saludar.apply(obj, ["Hola", "Daniel"])
saludar.apply(null,["Hola", "Daniel"])
saludar.apply(this,["Hola", "Daniel"])

/*  diferencia de call apply call se manda a llamar los parametros
con comas y apply se hace por medio de un arreglo */

// bind nos permite enlacer contexto diferentes

this.nombre = 'window';

const persona = {
	nombre:'Daniel',
	saludar: function(){
		console.log(`hola ${this.nombre}`)
	}
}

persona.saludar();

const otraPersona = {
	saludar: persona.saludar.bind(this)
}


otraPersona.saludar()
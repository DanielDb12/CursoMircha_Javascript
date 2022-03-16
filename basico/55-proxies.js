// proxies

/*
Es un nuevo mecanismo que permite crear un objeto basado en un objeto literal
inicial



*/

const persona = {
	nombre: "",
	apellido:"",
	edad:0
}

const manejador = {
	set(obj,prop,valor){

		if (Object.keys(obj).indexOf(prop) === -1) {
			return console.error(`la propiedad '${prop}'
				no existe en el objeto persona`)
		}

		if (
			(prop === 'nombre' || prop ==='apellido') &&
			!(/^[A-Za-zÑñäáÁÄÉËéëíÍÏïÓÖöóÚúüÜ\s]+$/g.test(valor))

			) {
			return console.error(`la propiedad '${prop}'solo acepta letras y espacios en blanco`)
		}
		// validacion edad
		// if (prop ==== 'edad')  {
		// 	expression
		// }
		obj[prop] = valor;

	}
}
const daniel = new Proxy(persona,manejador)
daniel.nombre = 'Daniel';
daniel.apellido = 'Duarte';
daniel.edad = 30;
daniel.twitter ='@daniel';

console.log(daniel);

console.log(persona)

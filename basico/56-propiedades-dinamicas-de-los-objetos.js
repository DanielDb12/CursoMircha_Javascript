// propiedades dinamicas de los objetos

// sirve para cargar objetos de manera dinamica

let aleatorio = Math.round(Math.random()* 100 + 5)
const objUsuarios = {
	propiedad:'valor',
	[`id_${aleatorio}`]:'valor aleatorio'
};

console.log(objUsuarios)

const usuarios = ['jon','Irma','Daniel','Apolo'];
usuarios.forEach((usuario,index)=> objUsuarios[`id_${index}`]= usuario);

console.log(objUsuarios);
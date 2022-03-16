// Destructuracion

const numeros = [1,2,3];


// sin destructuracion
let uno = numeros[0],
	dos = numeros[1],
	tres = numeros[2]

console.log(uno,dos,tres);

// con destructuracion
const [one,two,three] = numeros;
console.log(one,two,three);

const persona = {
	nombre: 'daniel',
	apellido: 'duarte',
	edad: 30
}

let {nombre,apellido,edad} = persona;
console.log(nombre,apellido,edad);

// la destructuracion se debe llama igual a la propiedad del objeto 
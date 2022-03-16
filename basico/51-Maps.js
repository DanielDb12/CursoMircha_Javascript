// Maps


const mapa = new Map();

mapa.set('nombre','Daniel');
mapa.set('apellido','Duarte');
mapa.set('edad',35);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has('corre'))
console.log(mapa.has('nombre'))
console.log(mapa.get('nombre'))
// get para obtener los valores
mapa.set('nombre','Daniel Duarte')
console.log(mapa.get('nombre'))
mapa.delete('apellido');

mapa.set(19,'diecinueve')
mapa.set(false,'falso')
mapa.set({},{})

console.log(mapa);

for(let[key,value] of mapa) {
	console.log(`llave ${key}, Valor.${value}`);
}

const mapa2 = new Map([
	['nombre','Apolo'],
	['edad',7],
	['animal', 'perro'],
	[null, 'nulo']


	]);


console.log(mapa2);


const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2)
console.log(valoresMapa2)
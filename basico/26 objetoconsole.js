// objeto console

// console es un objeto de javascritp
// 

console.log(console);
console.error('esto es un error');
console.warn('aviso');
console.info('mensaje informativo');
console.log('registro de lo que pasa en nuestra aplicacion');

let nombre = 'daniel',
apellido = 'duarte'
edad = 30;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre,apellido,edad);
console.log(`hola mi nombre es ${nombre} y mi apellido ${apellido}, y tengo ${edad} años `);

// comodin %s, digito %d

console.clear();

console.log(window);
console.log(document);
console.dir(window);
console.dir(document);

console.clear();

console.group('cursos de los mejores js');
console.log('curso de javascritp');
console.log('curso de node.js');
console.log('curso de PWAS');
console.log('curso de FLEXBOX');
console.groupEnd();

console.log(console);
console.table(Object.entries(console).sort());

const numeros = [1,2,3,4,5],
vocales = ['a','e','i','o','u']

console.table(numeros);
console.table(vocales);

const perro = {
	nombre: 'Apolo',
	raza: 'golden',
	color: 'cafe'
}

console.table(perro);
console.clear();

console.time('cuanto tarda mi codigo')
const arreglo = Array(1000000);

for (let i = 0; i < arreglo.length; i++) {
	arreglo[i] = i;
}

console.timeEnd('cuanto tarda mi codigo');

console.clear();


for (let i = 0; i <=100; i++) {
	console.count('codigo for');
	console.log(i);
}

console.clear();

let x = 3,
y = 2
pruebaXY = 'Se espera que X sea menor que Y';

console.assert(x < y,{x,y,pruebaXY})
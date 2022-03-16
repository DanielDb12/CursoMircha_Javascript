// Practica Cadena

let nombre = 'Daniel';
let apellido = 'Duarte'

console.log(nombre, apellido)

// cuantos caracteres tiene una cadena

console.log(nombre.length, apellido.length)

// metodos

// concat
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

// Prototupe entries

const a = ['Daniel', 'Duarte', 'Bossa'],
interator = a.entries()

for(let a of interator)
console.log(a)
// Variables

// palabra reservada Var

var hola = 'hola mundo';
console.log(hola);

// bloque de codigo
// estructuras condicionales condicionales repetitivas

// ambito de bloque :
// var ambito global
// se declara con la variable let para ambito bloque 
// let solamente permite que aparezca en el bloque donde fue definido

// objeto window es un mapeo global de lo que contiene el navegador

// ejemplo porque no se puede escribir variables globales
var musica = 'rock';
console.log('varibale musica antes del bloque', musica);
// esto es un bloque
{
var musica = 'pop';
console.log('varibale musica dentro del bloque', musica);
}

console.log('varibale musica dentro del bloque', musica);

// ahora utilizando let
let musica2 = 'rock';
console.log('varibale musica antes del bloque', musica2);
// esto es un bloque
{
let musica2 = 'pop';
console.log('varibale musica dentro del bloque', musica2);
}

console.log('varibale musica dentro del bloque', musica2);

// cadena texto strings

/* el objeto: las propiedades esta dentro como caracteristicas 
que definen el objeto y los metodos son acciones del objeto y terminan con parentesis*/

let nombre = "Daniel";
let apellido = 'Duarte';
let lorem = "lorem amet";

// constructor
let saludo = new String("Hola Mundo");

console.log(nombre,apellido,saludo);

// para saber cuantos caracteres tiene la cadena
console.log(nombre.length);

// metodos

nombre.toUpperCase();
apellido.toLowerCase();
lorem.includes("amet");
lorem.trim();
lorem.split("");
lorem.split(",");
lorem.slice()

// include busca la palabra dentro del texto
// trim quitar los espacios en blanco los caracteres del texto
// split genera un arreglo un conjunto de elementos
// slice
/* propiedades son caracteristica y atributos 
 los metodos: son acciones o funciones que permiten ejecutar 
 con la variable o tipo de dato.
*/ 

// Template string

// concatenacion e interpolacion

// concatenacion

let nombre = 'Daniel';
let apellido = 'Duarte';

let saludo = "hola mi nombre es" + nombre + " " + apellido + " ";
console.log(saludo);

 // interpolacion 

 // Template string

 let saludo2 =  `hola mi nombre es ${nombre} ${apellido}`;
 console.log(saludo2);

  
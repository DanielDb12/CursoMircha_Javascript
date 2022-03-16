// modulos (import/export)

/* 	1)importacion de modulos
	2)declaracion de variables
	3)declaracion de funciones
	4)ejecucion de codigo */

// utilizar servidor
// ./busca a partir de la carpeta donde estoy
// ../ si tengo que subir niveles 
// solo se puede tener una exportacion por default
// todo lo que no se llama por defecto se llama por estructuracion
// si es una variable o una constante se exporta debajo y si es una funcion o una clase se exporta default
// tambien se puede crear alias as

import saludar, {Saludar,PI, usuario} from './constantes.js';
import {aritmetica as calculos} from './aritmetica.js';

console.log(PI, usuario);
console.log(calculos.sumar(3,4));
console.log(calculos.restar(3,4));
saludar();
let saludo = new Saludar();
saludo;
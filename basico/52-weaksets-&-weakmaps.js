// weaksets & weakmaps

/* mapas debiles y conjuntos debiles solo pueden almacenar
referencias debiles es decir que las llaves deben ser tipos
objetos, 

al recolector de basura de js se hayan nullificado que se haga su limpieza
todas estas referencias debiles hacen una mejora en nuestra
aplicacion

tienen carecias no podemos itirarlos no podemos usar fo y foreach

no podemos eliminar los elementos totales y podemos eliminar
en uno en uno

no podemos verificar su tamaño no tiene la propiedad size

*/
// const ws = new WeakSet(1,2,3,4,5,true,false,false, {},{}, ' hola', 'HOLA' ); no se puede hacer de esta manera

/*const ws = new WeakSet();

let valor1 = {'valor1': 1}
let valor2 = {'valor2': 2}
let valor3 = {'valor3': 3}

ws.add(valor1);
ws.add(valor2)


console.log(ws);

console.log(ws.has(valor1));
console.log(ws.has(valor3));


ws.delete(valor2);
console.log(ws);

ws.add(valor2);
ws.add(valor3);
console.log(ws);

setInterval(() => console.log(ws),1000);

setTimeout(()=>{
	valor1 = null;
	valor2 = null;
	valor3 = null; 
},5000);
*/

// weakmaps

/*
no se debe hacer
const wm = new WeakMap([
	['nombre','Apolo'],
	['edad',1],
	['animal','perro'],
	[null, 'nulo']

]);*/

const wm = new WeakMap();
let llave1 ={};
let llave2 ={};
let llave3 ={};


wm.set(llave1,1);
wm.set(llave2,2);
console.log(wm);

console.log(wm.has(llave1));
console.log(wm.has(llave3));

console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));

wm.delete(llave2);
console.log(wm)

wm.set(llave2,2);
wm.set(llave3,3);
console.log(wm)

// setInterval(() => console.log(wm),1000);

/* en una variable de estado en una aplicacion de react 
la he declarado como objeto en vanilla js
usaria un weakmap si una variable de estado lo usaria como arreglo un weakset
*/

setTimeout(()=> {
	llave1 = null;
	llave2 = null;
	llave3 = null;
},5000)



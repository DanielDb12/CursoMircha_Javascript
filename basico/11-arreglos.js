// arreglo


const a = [];
const b = [1, true, 'hola',['A', 'B', 'C',[1,2,3]]];
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][3][0 ]);

const c = Array.of('x','y','z',9,8,7);
console.log(c);

/* of El método Array.of() crea una nueva instancia Array 
con un número variable de elementos pasados como argumento, 
independientemente del número o del tipo. */

const d = Array(100).fill(false);
console.log(d);

const e = new Array();
console.log(e);

const f = new Array(1,2,3,true, false);
console.log(f);

const colores = ['rojo','verde','azul'];
console.log(colores)

// ya no se usa new porque es un constructor
// push agrega un elemento
// metodo pop es quitar el ultimo elemento

colores.push('negro');
console.log(colores);

colores.pop();
console.log(colores);

// foreach recibe una funcion
colores.forEach( function(el, index) {
	console.log(`<li id ="${index}">${el}</li`);
	
});

/*El bucle foreach en js, y en general en muchos lenguajes, 
es un bucle que simplemente recorre los objetos de un array.*/
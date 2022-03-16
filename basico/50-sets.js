// sets

// es un arreglo valores unicos

const set = new Set([1,2,3,4,5,true,false,{},'hola','HOLA']);
console.log(set)

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set.add(true);
set2.add(false);
set2.add({});

console.log(set2)
console.log(set2.size);

console.log('recorriendo set')
for (item of set) {
	console.log(item);
}

console.log('recorriendo set2')
set2.forEach(item=>console.log(item))

console.log(set[0])

let arr = Array.from(set);
console.log(arr)
console.log(arr[0])

set.delete("HOLA")
console.log(set)

console.log(set.has("hola"));
console.log(set.has(19));

set2.clear();
console.log(set2)

/* set es una nueva estructura de datos que parece a un  arreglo  unicos 
pero no es un arreglo foreach sirve para los arreglos y sets 

metodo from un valor iterable es cualquier dato que pueda cortar su elemento 
como una cadena de texto, objetos, arreglos etc

el set es un tipo de arreglo iterable pero no es un arreglo

el metodo from no sirve convertir los set en array 
*/
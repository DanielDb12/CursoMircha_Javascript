// promesas

// es un if else si la promesa se cumple se ejecutaria el resolt
// resolve es el positivo
// reject es el negativo

function cuadradoPromise(value) {
	if(typeof value !== 'number') {
		return Promise.reject(`error, el valor "${value}"ingresado no es un numero`);
	} 
	
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
		resolve({
			value,
			result:value * value
		})
	},0|Math.random() * 1000);

	});
	
}

// metodo then se va ejecutar cuando se cumpla la funcion inicial
// catch va capturar el error del reject
cuadradoPromise(0)
.then((obj) => {
	// console.log(obj)
	console.log('inicio promise')
	console.log(`Promise; ${obj.value}, ${obj.result}`);
	return cuadradoPromise(1);

})
.then(obj => {
	console.log(`Promise: ${obj.value}, ${obj.result}`);
	return cuadradoPromise(2);
})

.then(obj => {
	console.log(`Promise: ${obj.value}, ${obj.result}`);
	return cuadradoPromise(3);	
})	

.then(obj => {
	console.log(`Promise: ${obj.value}, ${obj.result}`);
	return cuadradoPromise(4);
})
.then(obj => {
	console.log(`Promise: ${obj.value}, ${obj.result}`);
	return cuadradoPromise(5);					
})

.then(obj => {
	console.log(`Promise: ${obj.value}, ${obj.result}`);
	 console.log('fin de la promesa');					
})
.catch(err => console.error(err));
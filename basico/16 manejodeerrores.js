// manejo de erroes

try {
	console.log('en el try se agrega el condigo a evaluar');
	noExiste;

} catch(error) {
	console.log('catch, captura cualquier error surgido o lanzado en el try')
	console.log(error);
} finally {
	console.log('en el bloque finally se ejecutara siempre al final de un bloque try-catch');

}




try {
 	let numero = 10;

 	if (isNaN(numero)) {
 		throw new new Error('El caracter introducido no es un numero')
 	}

 	console.log(numero*numero);
 } catch(e) {
 	console.log(`se produjo el siguiente error:${error}`);
 	console.log(e);
 } 


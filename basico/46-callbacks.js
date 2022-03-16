// callbacks

function cuadradoCallback(value, callback) {
	setTimeout(() => {
		callback(value,value * value)
	},0|Math.random() * 1000);
}


cuadradoCallback(0, (value,resultado) =>{
	console.log('inicia callbacks');

	console.log(`callbacks ${value}, ${resultado}`);

	cuadradoCallback(1,(value,resultado) => {
		console.log(`callbacks ${value}, ${resultado}`);
	cuadradoCallback(2,(value,resultado) => {
		console.log(`callbacks ${value}, ${resultado}`);
	cuadradoCallback(4,(value,resultado) => {
		console.log(`callbacks ${value}, ${resultado}`);
	cuadradoCallback(5,(value,resultado) => {
		console.log(`callbacks ${value}, ${resultado}`);

	})		

	})	

	})	

	})
});
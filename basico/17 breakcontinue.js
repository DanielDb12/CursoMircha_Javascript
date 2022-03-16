// Break continue

// break cuando se cumple le dice salte de la estructura del control
const numeros = [1,2,3,4,5,6,7,8,9,0];

for(let i=0; i < numeros.length; i++) {
	if(i===5){
		break;
	}
		console.log(numeros[i]);

}
// el continue odmite que imprimas el codigo del ciclo rompe la vuelta que en el caso es 6 que es la interacion pero sigue con la ejecucion del ciclo
for(let i=0; i < numeros.length; i++) {
	if(i===5){
		continue;
	}
		console.log(numeros[i]);

}
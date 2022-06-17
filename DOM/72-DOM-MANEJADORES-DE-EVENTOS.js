0// Manejadores de Eventos

/* evento objeto especial

-cuando es un evento semantico igualas a los parentesis

- No puedes asignar diferenctes funciones a un mismo evento es
como remplazar el valor

-manejadores multiples addEventlistener nos permite un manejador escuchador de vento
- con addevenlister se puede agregar varias funciones en un mismo elemento
colocar los parentesis() en un evento quiere decir funcion inmediata 


*/

function holaMundo() {
	alert('hola Mundo')
	console.log(event)
}

const $eventoSemantico = document.getElementById('evento-semantico')
	  $eventoMultiple = document.getElementById('evento-multiple')


$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = (e) => {
	alert('esto es un manejador semantico')
	console.log(e)
	console.log(event)

}
// definir diferentes funciones aun mismo elemento se llama manejadores multiples

$eventoMultiple.addEventListener('click', holaMundo)
$eventoMultiple.addEventListener('click', (e) => {
	alert('esto son eventos multiples')

	console.log(e)
	console.log(e.target)
	console.log(e.type)
	console.log(event)

});

// type el tipo del evento y el target el tipo que lo origina el evento

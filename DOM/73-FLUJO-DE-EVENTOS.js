// Flujos de Eventos

function holaMundo() {
	alert('hola Mundo')
	console.log(event)
}

// Con Parametros
function quePasoPerro(nombre = 'Desconocid@ ') {
	alert(`Qué lo que ${nombre}`)
	console.log(event)
}



const $eventoSemantico = document.getElementById('evento-semantico')
	  $eventoMultiple = document.getElementById('evento-multiple')
	  $eventoRemover = document.getElementById('evento-remover')


$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = (e) => {
	alert('esto es un manejador semantico')
	console.log(e)
	console.log(event)

}

$eventoMultiple.addEventListener('click', holaMundo)
$eventoMultiple.addEventListener('click', (e) => {
	alert('esto son eventos multiples')

	console.log(e)
	console.log(e.target)
	console.log(e.type)
	console.log(event)

});


$eventoMultiple.addEventListener('click', (e)=> {
	quePasoPerro()
	quePasoPerro('Daniel')
})

// Eveneto Remover solo se hace con eventos multiples


const removerdobleclick = (e) => {
	alert(`removiendo eventos multiples ${e.type}`);
	console.log(e)
	$eventoRemover.removeEventListener('dblclick', removerdobleclick)
	$eventoRemover.disabled = true;
}




$eventoRemover.addEventListener('dblclick', removerdobleclick)


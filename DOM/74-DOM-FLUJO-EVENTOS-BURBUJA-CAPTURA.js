// Flujo de EVENTOS


/* DEL ELEMENTO MAS INTERNO SE PROPAGA AL EVENTO SUPERIOR WINDOW*/

const $divsEventos = document.querySelectorAll('.eventos-flujo div');

function flujoDeEventos(e) {
	console.log(`Hola te saluda ${this.className} y lo origino ${e.target.className}`)
}

console.log($divsEventos);



$divsEventos.forEach(div => {
	// fase de burbuja
	// div.addEventListener('click', flujoDeEventos)
	// fase de captura
	// div.addEventListener('click', flujoDeEventos,true)

	div.addEventListener('click', flujoDeEventos, {
		capture:false,
		once:true
	})


})


// fase de capture true y fase de burbuja sin especificar opcion en addlistener false
// once para que el evento se ejecute una sola vez
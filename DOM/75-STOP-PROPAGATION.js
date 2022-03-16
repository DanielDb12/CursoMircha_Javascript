// STOP PROPAGATION



/* DEL ELEMENTO MAS INTERNO SE PROPAGA AL EVENTO SUPERIOR WINDOW*/

const $divsEventos = document.querySelectorAll('.eventos-flujo div');
const $LinksEventos = document.querySelector('.eventos-flujo a');

function flujoDeEventos(e) {
	console.log(`Hola te saluda ${this.className} y lo origino ${e.target.className}`)

	e.stopPropagation();

}

console.log($divsEventos);



$divsEventos.forEach(div => {
	// fase de burbuja
	 div.addEventListener('click', flujoDeEventos)
	// fase de captura
	// div.addEventListener('click', flujoDeEventos,true)
	// div.addEventListener('click', flujoDeEventos, {
	// 	capture:false,
	// 	once:true
	// })


})


$LinksEventos.addEventListener('click', (e)=>{
	alert('Hola soy tu amigo Daniel');
	e.preventDefault();
	e.stopPropagation()
})



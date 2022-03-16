// Delegeacopm de eventos


/* DEL ELEMENTO MAS INTERNO SE PROPAGA AL EVENTO SUPERIOR WINDOW*/


function flujoDeEventos(e) {
	console.log(`Hola te saluda ${this.className} y lo origino ${e.target.className}`)

	/*El método matches() comprueba si el Element sería seleccionable por el selector 
	CSS especificado en la cadena; en caso contrario, retorna false.*/

}

document.addEventListener('click',(e) =>{
	console.log('Click en', e.target);

	if (e.target.matches('.eventos-flujo div')) {
		flujoDeEventos(e)
	}

	if(e.target.matches('.eventos-flujo a')){
		alert('Hola soy tu amigo Daniel');
		e.preventDefault();

	}
})


/*
$LinksEventos.addEventListener('click', (e)=>{
	alert('Hola soy tu amigo Daniel');
	e.preventDefault();
	e.stopPropagation()
})

*/

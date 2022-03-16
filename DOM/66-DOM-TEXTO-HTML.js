// 66 TEXTO HTML

const $whatlsDOM = document.getElementById('que-es');



let text = `
	<p>
	El modelo de los objetos del documento (<b> <i> DOM) Document Objetc Model </i> </b> es un Api para 
	documentos HTML Y new XML  
	</P>
	<p>
	Este provee una representacion estructura del documento permitiendo modificar su contenido
	y presentacion visual mediante codigo JS 
	</p>
	<p>
	<mark> El DOM no es parte de la especificacion de JavaScript es una Api para los navegadores
	</mark>

	</p>
`
;

// innert Texto no se maneja en el estandar y forma parte de internet Explorer
// $whatlsDOM.innerText = text;

// text content se maneja de estandar y respeta la informacion y quita las tabulaciones
$whatlsDOM.textContent = text
// innerHtml todas las etiquetas que tenga codigo html se reanderiza es decir remplaza lo que tenga el nodo
// y a remplazar el codigo html
$whatlsDOM.innerHTML = text

// usar textContent cuando se la informacion solo textom pero cuando tengo codigo html innerHTML

// remplaza el dom por el contenido que tengo luego del = 
$whatlsDOM.outerHTML = text












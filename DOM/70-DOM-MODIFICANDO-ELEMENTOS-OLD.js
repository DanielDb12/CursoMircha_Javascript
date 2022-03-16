// Modificanco Elemento (Manera anterior)

const $cards = document.querySelector(".cards"),
$newCard = document.createElement('figure');
$cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
	<img src="https://placeimg.com/200/200/any" alt="Any">
      <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");


// INSERTAR EN LA POSICION DE LA IMAGEN
// $cards.replaceChild($newCard, $cards.children[2])

// ELIMINAR
 // $cards.removeChild($cards.lastElementChild);

 // INSERTAR DE PRIMERO
//  $cards.insertBefore($newCard, $cards.firstElementChild);

document.body.appendChild($cloneCards);
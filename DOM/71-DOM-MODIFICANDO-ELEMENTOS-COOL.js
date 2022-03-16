// Modificando elementos

/* insertAdjacent
.insertAdjacentElement(position,el)
.insertAdjacentHTML(position,html)
.insertAdjacentText(position,text)

Posiciones
beforegin(hermano anteior)
afterbegin(primer hijo)
beforeend(ultimo hijo)
afterend(hermano siguiente)

*/

const $cards = document.querySelector(".cards"),
$newCard = document.createElement('figure');

let $ContenCard = `
	<img src="https://placeimg.com/200/200/any" alt="Any">
      <figcaption></figcaption>
`;

$newCard.classList.add("card");


$newCard.insertAdjacentHTML("beforeend", $ContenCard)
$newCard.querySelector("figcaption").insertAdjacentText('afterbegin','Ani')
// $cards.insertAdjacentElement("afterbegin", $newCard);

// primer hijo
 // $cards.prepend($newCard) 
 // hermano anterior
  // $cards.before($newCard) 
 // hijo ultimo
 // $cards.before($newCard)
 // hermano posterior
 $cards.after($newCard)



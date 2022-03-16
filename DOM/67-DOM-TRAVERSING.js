// DOM TRAVERSING elementos html

const $cards = document.querySelector('.cards')
console.log($cards);
// hijo elemento
console.log($cards.children);
console.log($cards.children[2]);
//  padres elemento
console.log($cards.parentElement);
// primer hijo nodo
console.log($cards.firstChild);
// primer hijo elemento html
console.log($cards.firstElementChild);
// ultimo hijo nodo
console.log($cards.lastChild);
// ultimo hijo elemento html
console.log($cards.lastElementChild);
// hermnao del elemento html 
console.log($cards.previousElementSibling)
// script del html
console.log($cards.nextElementSibling)
// busca el padre mas cercano de los elementos
console.log($cards.closest('div'))
console.log($cards.closest('body'))
console.log($cards.children[3].closest('section'))
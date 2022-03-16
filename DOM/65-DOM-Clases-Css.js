// Dom Clases Css

const $card = document.querySelector('.card');

console.log($card);
// devuelve cadena de texto que tiene el nombre
console.log($card.className);
// devuelve un DomTokenList muestra en lista donde se encuentra la etiqueta
console.log($card.classList);
// nos devuelve un booleans
console.log($card.classList.contains('rotate-45'))
// agregar clase
$card.classList.add("rotate-45");
console.log($card.className);
console.log($card.classList);
// quita la clase agregada
$card.classList.remove('rotate-45')
console.log($card.classList.contains("rotate-45"));
// interruptor funciona como palanca funciona como add y remove
$card.classList.toggle('rotate-45')
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle('rotate-45')
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle('rotate-45')
// remplaza el primer parametro el primer parametro es la que sera remplazadas y la segunda quien remplaza
$card.classList.replace('rotate-45','rotate-135');
$card.classList.add('opacity-80', 'sepia')
$card.classList.remove('opacity-80', 'sepia')
$card.classList.toggle('opacity-80', 'sepia')



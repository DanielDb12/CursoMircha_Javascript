const $figure = document.createElement('figure'),

$figcaption = document.createElement('figcaption'),
$img = document.createElement('img'),
$figcaptiontex = document.createTextNode('flower'),
$cards = document.querySelector('.cards');

$figure2 = document.querySelector('figure')

$img.setAttribute('src', 'https://img.freepik.com/foto-gratis/hermoso-arreglo-papel-tapiz-flores_23-2149057015.jpg?w=2000')
$img.setAttribute('alt', 'flowers')
$figure.classList.add('card')



$figure.appendChild($img)
$figure.appendChild($figcaption)
$figcaption.appendChild($figcaptiontex)
$cards.appendChild($figure)

$figure.innerHTML = `<img src="https://media.admagazine.com/photos/61fcaeb106c10ae95c71bb0d/1:1/w_1280,h_1280,c_limit/rosas%20colores.jpg", alt="flower2"> <figcaption>flower2</figcaption>`  



const $ul = document.createElement('ul'),
 
$meses = ["Enero", "Febrero", "Marzo", "Abril"]
$fragment = document.createDocumentFragment();

$meses.forEach(el => {
  const $li = document.createElement('li')
  $li.textContent = el;
  $fragment.appendChild($li)
  
});

$ul.appendChild($fragment)
document.body.appendChild($ul)

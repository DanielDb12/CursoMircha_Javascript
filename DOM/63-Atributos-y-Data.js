// atributos y Data
/*

getElementesByTagName TRAEME TODOS LOS ELEMENTOS QUE POR NOMBRE DE ETIQUETAS TENGAS
getElementesByClassName Busca por nombre de clase
getElementesByName busca por nombre
getElementeById los indicadores son unicos

los tres primeros han sido remplazos por dos metodos
queryselector recibe como parametro un selector valido de ccs, id, class, un id una etiqueta html
queryselector es mas lenta para el proceso porque analiza el texto que le estas enviando
por eso se una get elementbyid

-queryselecto solo traera el primer selector que le hayas indicado si queremos todos
los selectores  utilizamos querySelectorAll 

*/

/*
getatribute solo trae el valor que esta escrito en el html
queryselector trae el dominio y lo escrito html pero la forma correcta es usar
getAttribute

target abre una pagina en el mismo documento
rel,no opener para evitar posibles hackeos

*/



console.log(document.documentElement.lang);

console.log(document.documentElement.getAttribute('lang'));
console.log(document.querySelector('.link-dom').href);
// get atribute trae el valor que estaba escrito en href del enlace
console.log(document.querySelector('.link-dom').getAttribute('href'));
//lang cambia el idioma
document.documentElement.lang = 'es';
console.log(document.documentElement.lang)
// get atribut recibe el nombre del attribute pero setAttribute usa el nombre del atributo y el nuevo valor
document.documentElement.setAttribute('lang','es-Vn')
console.log(document.documentElement.lang)

// $ utilizar variables con el $ significa que hace referencia al dom
const $linkDOM = document.querySelector('.link-dom');

$linkDOM.setAttribute('target','blank');
//  para evitar cualquier tipo de hackeo o sea insegura se usa rel noopener
$linkDOM.setAttribute('rel','noopener');
$linkDOM.setAttribute('href','hhtps://youtube.com/jonmircha')

console.log($linkDOM.hasAttribute('rel'))
$linkDOM.removeAttribute('rel')
// mi variable linldom.hasttribute tiene el atributo rel
// para validar hasAttribute
console.log($linkDOM.hasAttribute('rel'))

// Data-Attributes no los da html5

console.log($linkDOM.getAttribute('data-description'))
console.log($linkDOM.dataset);

$linkDOM.setAttribute('data-description', "Modelo de Objeto del Documento")
console.log($linkDOM.dataset.description)
$linkDOM.dataset.description =' Suscribete al canal'
console.log($linkDOM.dataset.description)
console.log($linkDOM.removeAttribute('data-id'))
console.log($linkDOM.hasAttribute('data-id'))



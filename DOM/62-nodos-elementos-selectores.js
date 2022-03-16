
// los tres primeros han sido remplazadso por query selector
// si me traigo todas la li
// console.log(document.getElementsByTagName('li'))
// // por nombre de clase
// console.log(document.getElementsByClassName('card'))
// // por el atributo name
// console.log(document.getElementsByName('nombre'))
// busca id
console.log(document.getElementsById('menu'))
// queryselector hace referencia que va usar un elemento de css
// queryselector es mas lento por la validacion de selector que vas a usar
// queryselector solo busca 1 selector
console.log(document.querySelector('a'))
// nusca todos los selectores de ese tipo
console.log(document.querySelectorAll('a'))
// comparte el metodo lentgh
console.log(document.querySelectorAll('a').length)
// comparte foreach 
document.querySelectorAll('a').forEach((e)=>{ console.log(el)});
console.log(document.querySelectorAll('card'))
console.log(document.querySelectorAll('card')[2])
console.log(document.querySelectorAll('#menu li'))
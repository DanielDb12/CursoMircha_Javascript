// BOM METODOS


// window.alert('que paso perro')
// window.confirm('Confirmacion')
// window.prompt('Aviso')

const $btnAbrir = document.getElementById('abrir-ventana')
	  $btnCerrar = document.getElementById('cerrar-ventana')
	  $btnImprimir = document.getElementById('imprimir-ventana')

let ventana;

$btnAbrir.addEventListener('click', (e) => {
ventana = window.open('https://jonmircha.com ')
})

$btnCerrar.addEventListener('click', (e) => {
// window.close()
ventana.close();
})

$btnImprimir.addEventListener('click', (e) => {
window.print()
})








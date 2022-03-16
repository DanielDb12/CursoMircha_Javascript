// BOM 

window.addEventListener('resize', (e) => {
console.log('************Evento Resize*******')
console.log(window.innerWidth)
console.log(window.innerHeight)
console.log(window.innerWidth)
console.log(window.innerHeight)
console.log(e)

})


window.addEventListener('scroll', e => {
console.log('************Evento Resize*******')
console.log(window.scrollX)
console.log(window.scrollY)
console.log(e)
})


window.addEventListener('load',e => {
console.log('************Evento Loaded*******')
console.log(window.screenX)
console.log(window.screenY)
console.log(e)

})

// DOMContentLoaded es disparado cuando el objeto html ha sido cargado y parciando cuando el navegador doctipe
// domcontentloaded no va a esperar la hoja de stilo y scrips y el load espera a que se parceen y cargen las hojas de estilo scripts imagenes etc


document.addEventListener('DOMContentLoaded', (e)=>{
console.log('************Evento DOMContentLoaded*******')
console.log(window.screenX)
console.log(window.screenY)
console.log(e)
})
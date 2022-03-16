export default function hamburgerMenu(panelBtn, panel,menuLink) {
	const d = document;
 

	d.addEventListener('click', (e) => {
		if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
			d.querySelector(panel).classList.toggle('is-active')
			d.querySelector(panelBtn).classList.toggle('is-active')

		}

		if (e.target.matches(menuLink)) {
			d.querySelector(panel).classList.remove('is-active')
			d.querySelector(panelBtn).classList.remove('is-active')
		}
	})
}

/* 
exportar por default una funcion que se llame hamburguerMenu
si el evento.target si el evento que origina con el evento
 el selector que me estas dando panelBtn 

el metodo matches para la delegacion de eventos esta esperando un selector valido
si presiono el panelBtn hay es donde quiero que se intercambie is active quitarsela
o ponersela en el evento panel

seria document.queryselector busca en el selector que tenga por selector la palabra
panel y luego entra a su lista de clases y utiliza el metodo toggle que le vas a intercambiar
esa clase its-active

no funciona el boton porque la delegacion de eventos se la asigno al boton 
pero no a las lineas que representa su hijo 

cuando el evento sea quien origina el boton o cualquier cosa que este dentro del
boton (recuerden que matche recibe un selector valido de css) cuando se agrega un * toma todo
y tambien hay que agregarselo al condicional de la delegacion de eventos

si el evento que origina el eventos es el boton o || el objeto que origina
el evento coincide  utiliza template string cualquier elemento hijo que pulses
va activar e intercambiar esas clases 
|| o 

cuando el usuario de click en una de la seccion quitar el menu 

segundo if
 
 si e objeto que origino el evento su selector conicide con lo que venga en la
 varible link entonces que vamos hacer

 entonces para quitar el menur en vez de un toggle se usa un remove


 */

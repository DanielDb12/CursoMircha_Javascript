import hamburguerMenu from "../dom/js/menu_hamburguesa.js";
import {digitalClock,alarm} from "../dom/js/reloj.js";
import {moveBall,shortcuts,} from "../dom/js/teclado.js";
import countdown from "../dom/js/cuenta_regresiva.js";
import botonScroll from "../dom/js/boton_scroll.js";

const d = document;



d.addEventListener('DOMContentLoaded', e => {
	hamburguerMenu('.panel-btn','.panel','menuLink')
	digitalClock('#reloj',"#activar-reloj","#desactivar-reloj")
	alarm('../dom/assetes/alarma.mp3','#activar-alarma','#desactivar-alarma')
	// countdown('countdown', 'Jan 01, 2022 00:00:00','Feliz año');
	botonScroll('.scroll-top-btn')
})

d.addEventListener('keydown', (e) => {
	moveBall(e,'.ball','.stage')
	shortcuts(e);
})




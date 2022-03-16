
import hamburgerMenu from "../js/dom/1_menu_hamburguesa.js";
import {digitalClock, alarm} from "../js/dom/2_reloj.js";
import {ball} from "../js/dom/3_teclado.js";
import countdown  from "../js/dom/4_cuenta_regresiva.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) =>{
	hamburgerMenu(".panel-btn",".panel",".menu a");
	digitalClock('#reloj','#activar-reloj','#detener-reloj')
	alarm('./js/assetes/alarma.mp3','#activar-alarma','#detener-alarma')
	countdown('countdown', 'Jan 01, 2022 00:00:00','Feliz año');

	
	
})

d.addEventListener('keydown',(e)=> {
	ball(e,'.ball','.stage')
})

// menu hamburguesa
/*entonces el nombre del selector es panel-btn

Que recibe mi funcion hamburguesa? el selector que me hace funcionar mi boton
se llama .panel-btn, le decimos en el indexDom el boton es un selector que se llama
panel-btn y la segunda variable seria panel que se encuentra en el aside

donde seria la forma correcta de invocar esto a la carga del documento
el metodo windowloaded o metodo DOMContadedLoaded ques es mejor para cargar
la funcionalidades del documento 

dentro del evento addEventListener ejecutamos el menú hamburguesa

selector valido del html para remover el menu "menu a"

*/

// reloj 

/* vamos importar como no hay funcion por default usamo la destructuracion de objeto 
que necesitamos para que reloj funcione? 
necesitamos el selector del reloj y lo botones mandamos a llamar los parametros del html
#reloj, #boton-activar y boton play


  */


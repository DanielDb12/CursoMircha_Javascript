/*
-Key Down cuando presionamos la tecla
-Key Up cuando soltamos la tecla
-Key press mientras mantegas la tecla presionada se va a ejecutar


*/

const d = document
let x = 0,
	y = 0
export function moveBall (e,ball,stage) {

	const $ball = d.querySelector(ball),
		$stage = d.querySelector(stage),
		limitBall = $ball.getBoundingClientRect(),
		limitStage = $stage.getBoundingClientRect()
		console.log(e.keyCode);
		console.log(e.key);
		console.log(limitBall,limitStage)

		// const move = (direction) => {
		// 	/* transform*/
			

		// 	}

		switch(e.keyCode) {
			case 37 :
				if(limitBall.left > limitStage.left){
					e.preventDefault()
					x--
				}; 
				break;
			case 38 :
			if(limitBall.top > limitStage.top){
				e.preventDefault()
				y--;
			}
				
				break;
			case 39:
			if(limitBall.right < limitStage.right){
				e.preventDefault()
				x++;
			}
				
				break;
			case 40:
			if(limitBall.bottom < limitStage.bottom){
				e.preventDefault()
				y++
				};
				
				break;
				default:
				break;


		} 

		$ball.style.transform = `translate(${x*10}px, ${y * 10}px)`;
			

	}

	
	

export  function shortcuts (e) {

	/*console.log(e.type);
	console.log(e.key);
	console.log(e.keyCode)
	console.log(e.ctrlKey);
	console.log(e.altKey);
	console.log(e.shiftKey);
	console.log(e)*/
/* si evento.key es exactamente igual a a  y && aparte el evento del teclado
presiono la tecla altkey al mismo tiempo si esto se cumple manda una alerta con
el teclado */

	if (e.key === 'a' && e.altKey) {
		alert('Has presionado una alerta con el tecleado')

	}

	if (e.key === 'c' && e.altKey) {
		confirm('Confirmacion del teclado')

	}

	if (e.key === 'd' && e.ctrlKey) {
		prompt('aviso del teclado')

	}
}



const d = document;
let x = 0,
	y = 0;

/*
-Key Down cuando presionamos la tecla
-Key Up cuando soltamos la tecla
-Key press mientras mantegas la tecla presionada se va a ejecutar


*/

export function ball (e,ball, stage) {

	const $ball = d.querySelector(ball),
		  $stage = d.querySelector(stage),
		  limitBall = $ball.getBoundingClientRect(),
		  limitStage = $stage.getBoundingClientRect();

	console.log(e.keyCode)
	console.log(e.key)
	console.log(limitBall,limitStage)



	switch(e.keyCode) {
		case 37:
			if (limitBall.left > limitStage.left) {
				e.preventDefault()
				x--
			}
			
			
			break;
		case 38:
			if (limitBall.top > limitStage.top) {
				e.preventDefault()
				y--
			}
			
			break;

		case 39:
			if (limitBall.right < limitStage.right) {
				e.preventDefault()
				x++
			}
			
			break;
		case 40:
		if (limitBall.bottom < limitStage.bottom) {
				e.preventDefault()
				y++
			}

			break;
			default:
			break;
	}

		$ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
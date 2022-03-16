const d = document;

 export default function countdown(id, limitDate, finalMassage) {

const $countdown = d.getElementById(id),
countdownDate = new Date(limitDate).getTime();


let countdownTempo = setInterval(()=>{

	let now = new Date().getTime(),
	limitTime = countdownDate - now,

	/* cuantos miles segundo habrian en un dia la expresion matematica seria 1000 milesegundos
	para volverlos segundo *60 y minutos *60 horas * 24horas*/
	days = Math.floor(limitTime/(1000*60*60*24)),
	hours = ("0" + Math.floor((limitTime % (1000*60*60*24))/(1000*60*60))).slice(-2),
	minutes = ("0" + Math.floor((limitTime % (1000*60*60))/(1000*60))).slice(-2),
	seconds = ("0" + Math.floor((limitTime % (1000*60))/1000)).slice(-2);

  $countdown.innerHTML = `<h3>Faltan: ${days} días, ${hours} horas, ${minutes} minutos
  ${seconds} segundos </h3>`

console.log(countdownDate,now,limitTime)

 // if(limitTime < 0)
	// clearInterval(countdownTempo);
 // 	$countdown.innerHTML = `<h3>${finalMassage} </h3>`;

},1000)

	
}
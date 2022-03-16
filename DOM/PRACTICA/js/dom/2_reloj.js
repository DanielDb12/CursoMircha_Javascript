/*
vamos a usar la delegacion de eventos el evento click detectar con el metodo matches
que objeto origino el evento e.target.matches

 me va a interesar cierta programacion para cuando el selector sea el btnPlay
de igual manera cuando el selector sea btnstop

que necesito cuando le presione el boton play que se este actualizando cada segundo
un reloj en el id reloj que tengo guardado en el html

entonces necesito un set interval que se ejecute cada segundo y que dentro este una
varible clockhour de tipo Date y vamos a usar el metodo to localetimestring()

que al elemento como selector tiene el selector que le pase al primer parametro esta 
en la varicable clock en su contenido innerHtml vamos a poner un h3 para que interpole
el valor de la variable clock hour y esto lo hara cada segundo 

adicionalmente para que no se genere varios adlistener vamos a desactivar el boton
e.target.disable = true

si quiero una referencia de un set interval o un settimeout creamos una variable llamada
clocktempo vacia porque cuando presione el boton play esa variable va almacenar setinterval

cuando presione el botonstop ejecuto un clearinterval limpio el set interval que esta en la
varibale 
anulo el contenido html  del elemento reloj queryselector(clock).innerHtml = null
me interesa regresarle el disable el boton play en vez de usar e.target usamos
e.document.queryselector(botonplay).disable = false; 



*/



const d = document;

export function digitalClock(clock,btnPlay,btnStop) {
	
	let clockTempo;

	d.addEventListener('click', e => {
		if (e.target.matches(btnPlay)) {
		clockTempo = setTimeout(()=>{
			let clockHour = new Date().toLocaleTimeString()
			d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
		},1000)

		e.target.disabled = true
	}

		if (e.target.matches(btnStop)) {
			clearsetinterval(clockTempo)
			d.querySelector(clock).innerHTML = null;
			d.querySelector(btnPlay).disable = false;
			
		}

	})
	
}


export  function alarm(sound,btnPlay,btnStop){
	let alarmTempo;
	const $alarm = d.createElement("audio");
	$alarm.src = sound;

	d.addEventListener('click', (e) =>{
		if (e.target.matches('btnPlay')) {
			alarmTempo =  setTimeout(()=>{
				$alarm.play();

			},2000);
			
			
		}

		if (e.target.matches('btnStop')) {
			
			
		}


	})

}


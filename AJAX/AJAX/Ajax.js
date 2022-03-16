

// CAP 106: Ejemplo 1 XMLHttpRequest

// 1)la instancia de una variable objet XMLHttpRequest()
(() => {
	const xhr = new XMLHttpRequest(),
	$xhr = document.getElementById('xhr'),
	$fragment = document.createDocumentFragment();

/*
	onreadystatechange = detecta todo los de arriba
	readystate = esta inicializado pero se encuentra en 0 por no  tener una peticion
	response text = la respuesta en formato textual
	response xmnl = respuest en forma exml
	status = es codigo de respuesta del estado un 200,400
	wicredencial = nos indica si es un api publica o privada


*/

// 2) Asignar un Evento
	xhr.addEventListener('readystatechange', e =>{
		if (xhr.readyState !== 4) return;
		
		if(xhr.status >= 200 && xhr.status < 300) {
		 console.log(xhr)
		  // console.log(xhr.responseText)
		  let json = JSON.parse(xhr.responseText)
		  console.log(json)

		  json.forEach( e => {
		  	const $li = document.createElement('li');
		  	$li.innerHTML = `${e.name}--${e.email}--${e.phone}`;
		  	$fragment.appendChild($li)

		  })

		  $xhr.appendChild($fragment)

		} else {

			// console.log('error')
			let message = xhr.statusText ||'Ocurrio un Error'
			$xhr.innerHTML = `Error ${xhr.status}: ${message}`;
			
		}
		/*todo lo que esta antes del if y del else se ejecutara idependientemente
		si la respuesta objeto es exitosa o no*/


		console.log('Este mensaje cargara de cualquier forma')

	})

// 3) metodo open para comunicarnos


	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

// 4) Enviar la peticion
	xhr.send()
})();



/*
Atras de bambalinas fech trabaja con xmlhttprequest*/



// Cap 107: AJAX API FETCH

(() => {
	
	const $fetch = document.getElementById('fetch'),
	$fragment = document.createDocumentFragment();

	fetch('https://jsonplaceholder.typicode.com/users')
	/*.then((res) => {
		console.log(res)
		return res.ok ? res.json(): Promise.reject(res);


	})
	*/
	.then((res) => (res.ok ? res.json() : Promise.reject(res)))
	

	.then((json) => {
		 // console.log(json);
		//$fetch.innerHTML = json;
		json.forEach( e => {
		  	const $li = document.createElement('li');
		  	$li.innerHTML = `${e.name}--${e.email}--${e.phone}`;
		  	$fragment.appendChild($li)

		  })

		 $fetch.appendChild($fragment)
		

	})

	.catch((err) =>{
		// console.log(err)
		let message = err.statusText ||'Ocurrio un Error';
			$fetch.innerHTML = `Error ${err.status}: ${message}`;
	})

	.finally(() =>
		console.log('esto se ejecutara independientemente del resultado de la promesa fecth')
	)



// FETCH
})();

/*
	*la diferencia de XMLHTTPREQUEST es que fetch es un objeto response
	*el ok es como readyState
	*la respuesta se va a convertir a un formato valido
	*el api de fetch tiene un metodo llamado json o dependiendo de la
	solicitud podemos transformarla en texto con text por ejemplo cuando
	estamos solicitando documentacion html
	*un formato datauli tenemos un metodo blog 
	*Con fetch se puede usar una direccion local

	*Documentacion .json .blob .text moxilla developernetwork.com


*/

// Curso Js 108 AJAX: API FECTH + ASYNC-AWAIT

(() => {
	const $fecthAsync = document.getElementById('fetch-async'),
	$fragment = document.createDocumentFragment();

	async function getData() {

		try {
			let res = await fetch('https://jsonplaceholder.typicode.com/users'),
			json = await res.json();

			console.log(res,json);

			// if(!res.ok) throw new Error('Ocurrio un Error al solicitar los Datos');
			// throw es un return que manda a nuestro cathc
			if(!res.ok) throw {status: res.status, statusText: res.statusText};

			json.forEach( e => {
		  	const $li = document.createElement('li');
		  	$li.innerHTML = `${e.name}--${e.email}--${e.phone}`;
		  	$fragment.appendChild($li)

		  })

		  $fecthAsync.appendChild($fragment)

		} catch (err) {
			console.log('estoy en el catch',err)
			let message = err.statusText || 'Ocurrio un error'
			$fecthAsync.innerHTML = `Error ${err.status}: ${message}`

		} finally {
			console.log('esto se ejecutara independientemente del try.. catch')

		}
		
	}


	getData();
})();

// Curso 109 libreria Axios

(() => {

	const $axios = document.getElementById('axios'),
	$fragment = document.createDocumentFragment();

	axios

	.get('https://jsonplaceholder.typicode.com/users')

	.then((res) => {
		 console.log(res)

		let json = res.data;

		json.forEach( e => {
		  	const $li = document.createElement('li');
		  	$li.innerHTML = `${e.name}--${e.email}--${e.phone}`;
		  	$fragment.appendChild($li)

		  });

		  $axios.appendChild($fragment)



	})

	.catch((err) => {

		let message = err.response.statusText || 'Ocurrio un error'
			$axios.innerHTML = `Error ${err.response.status}: ${message}`


	})

	.finally(()=>{
		console.log('Esto se ejecutara independientemente del resultado Axios')
	})


})();

// CAP 110 AJAX LIBRERIA AXIOS + ASYNC AWAIT

(()=>{

	const $axiosAsync = document.getElementById('axios-async'),
	$fragment = document.createDocumentFragment();

	

	async function getData(){
		try{

			let res = await axios.get('https://jsonplaceholder.typicode.com/users'),
			json = await res.data;

			console.log(res,json);

			json.forEach( e => {
		  	const $li = document.createElement('li');
		  	$li.innerHTML = `${e.name}--${e.email}--${e.phone}`;
		  	$fragment.appendChild($li)

		  })

		  $axiosAsync.appendChild($fragment)


		}catch(err){
			console.log(err.response)
			let message = err.response.statusText || 'Ocurrio un error'
			$axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`


		}finally{
			console.log('esto se ejecutara independientemente del resultado axiosasync')

		}
	}


	getData();
})();

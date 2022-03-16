// Asincronia y el Event Loop

/* Antes de xplicar como funciona el modelo de javascript es importante
entender algunos conceptos

Procesamiento Single thread y multiThread

Operaciones de Cpu y operaciones de I/O:

las operaciones de cpu son las que mayormente se estara consumiento los recursos del cpu
operaciones de i/o imput out estara esperando la peticion de los recursos solicitado

Operaciones Concurrentes y Paralelas:

concurrencia significa dos o mas tarea progresa simultaneamente 

parelo dos o mas tarea se ejecutan al mismo tiempo 
single thread concurrenci
Operaciones Bloqueantes y no Bloqueantes:

face de espera que se ejecuta la operaciones 

operacion bloqueante no de devolvera el control de la aplicacion hasta que termine su tarea

no bloqueante las operaciones se ejecutan y devuelven el control al hilo principal y no importan
si terminaron la tarea

OPERACIONES SINCRONAS Y ASINCRONAS
cuando tendra lugar la respuesta

SINCRONAS espera el resultado en tiempo presente

ASINCRONICAS la respuesta se espera en un futuro

Javascript usa un modelo asincrono y no bloqueante con un logo de evento 
implementando en un solo hilo (single thread) para operaciones de entrada y
salida(input/output)

*/

// Codigo Sincrono Bloqueante

/*(() => {
console.log('Codigo Sincrono');
console.log('inicio');

function dos() {
	console.log('dos')
} 

function uno() {
	console.log('uno')
	dos();
	console.log('tres')
}

uno();
console.log('fin')

})();
*/

//  Codigo Asincrono no Bloqueante

(() => {
	console.log('Codigo Sincrono');
console.log('inicio');

function dos() {
	setTimeout(function () {
		console.log('dos')

	},1000);
	
} 

function uno() {
	setTimeout(function(){
		console.log('uno')
	},0);
	
	dos();
	console.log('tres')
}

uno();
console.log('fin')

})();


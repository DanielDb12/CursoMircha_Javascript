//  JSON

const json = {
	cadena: "Daniel",
	numero: "35",
	booleano: true,
	arreglo: ['correr', 'programar','cocinar'],
	objeto: {
		twitter:'@DanDuar1991',
		email: "danielduarte1991@hotmail.com"
	}
}
// parse
console.log(json)
console.log(JSON)
console.log(JSON.parse("{}"))
console.log(JSON.parse("[1,2,3]"))
console.log(JSON.parse("true"))
console.log(JSON.parse("null"))
// console.log(JSON.parse("undefined"))

// stringfy

console.log(JSON.stringify({}))
console.log(JSON.stringify({}))
console.log(JSON.stringify([1,2,3]))
console.log(JSON.stringify(true))
console.log(JSON.stringify(null))
console.log(JSON.stringify(undefined))
/* PARSE analiza una notacion json cadena de texto y la transforma en un objeto arreglo booleans
convierte un objeto o un valor de js en caena de texto
*/ 

console.log(JSON.stringify(json))
console.log(JSON.parse('{"cadena": "Daniel","numero": "35","booleano": "true","arreglo": ["correr", "programar","cocinar"],"objeto": {"twitter":"@DanDuar1991","email": "danielduarte1991@hotmail.com"},"nulo":null}'));

// condicionales

// if else es una estructura que permite tomar una decision que si se cumple se muestra en la pantalla cierta acciones

let edad = 17;

if(edad > 17) {
	console.log('eres mayor de edad');
} else {
	console.log('eres menor de edad');
}

if(edad >= 18) {
	console.log('eres mayor de edad');
} else {
	console.log('eres menor de edad');
}

if(edad < 18) {
	console.log('eres mayor de edad');
} else {
	console.log('eres menor de edad');
}

if(edad <= 17) {
	console.log('eres mayor de edad');
} else {
	console.log('eres menor de edad');
}

// if else aninados
/*dejame dormir 0hr - 5hr
  Buenos dias 6horas a 11 horas
  buenas tardes 12hr a 18hora
  buenas noches 19horas a 23hr */
let hora = 7;

if (hora >= 0 && hora <=5) {
	console.log('dejame dormir');
} else if (hora >=6 && hora <=11) {
	console.log('buenos dias');
	
} else if (hora >=12 && hora <=18) {
	console.log('buenas tardes')
} else  {
	console.log('buenas noches');


}


if ( hora <6) {
	console.log('dejame dormir');
} else if (hora >5 && hora <12) {
	console.log('buenos dias');
	
} else if (hora >11 && hora <19) {
	console.log('buenas tardes')
} else  {
	console.log('buenas noches');

}

// Operador Ternario (condicion)? verdadero : falsa

// solo se ejecuta una linea de codigo

console.log('operador ternario')
let eresMayor =(edad>=18)
? 'eres mayor de edad'
: 'eres menor de edad';
console.log(eresMayor);

// switch case cuando tengamos que evaluar una situacion diferentes valores en unamisma variable
/*
domingo 0
lunes 1
martes 2 
miercoles 3
jueves 4
viernes 5
sabado 6
*/

let dia = 1;

switch (dia) {
	case 0 :
		console.log('Domingo');
		break;
	case 1 :
		console.log('Lunes');
		break;
	case 2:
		console.log('Martes');
		break;
	case 3:
		console.log('Miercoles');
		break;
	case 4:
		console.log('Jueves');
		break;
	case 5:
		console.log('Viernes');
		break;
	case 6:
		console.log('Sabado');
		break;						
	default:
		console.log('no existe');
		break;
}
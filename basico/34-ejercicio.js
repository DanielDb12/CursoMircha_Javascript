

/*ENUNCIADO EJERCICIO 1
Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:
En caso afirmativo el usuario responderá si
En caso contrario responderá no.
Si el usuario responde si se escribirá por el documento «irás a la cárcel».
Si el usuario responde no se escribirá por el documento web «irás a casa».
En cualquier caso en el documento web se escribirá «la documentación por favor».
*/

/* const culpable = window.prompt('eres culpable?');

 if (culpable == 'si') {
    document.write('iras a la carcel')

 } else {
    document.write('iras a casa')

 }
*/

/* Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuanto le costará en función del topping que elija.
El helado sin topping cuesta 1.90€.
El topping de oreo cuesta 1€.
El topping de KitKat cuesta 1.50€.
El topping de brownie cuesta 0.75€.
El topping de lacasitos cuesta 0.95€.
En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla «no tenemos este topping, lo sentimos. » y a continuación informar del precio del helado sin ningún topping.
Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno).
*/

/*let topping = window.prompt('que topping quieres ');
    helado = 1.90;
    precio = 0;
    precioFinal = 0.00;



if (topping == 'oreo') {
    precio = 1;
} 
else if (topping =='KitKat' ) {
    precio = 1.50;
}
else if (topping == 'brownie' ) {
    precio = 0.75;

}else if (topping == 'flaquito' ) {
     precio = 0.95; 

}else {
    document.write('lo siento ese topping no lo tenemos,')
    precio = 0;
    
};

 precioFinal =  helado + precio;
document.write(` el helado cuesta ${precioFinal} $`)

*/

// function unaFuncionQueDevuelveValor() {
//  console.log('uno');
//  console.log('dos');
//  console.log('tres');

//  return 'la funcion ha retornado una cadena de texto'
// }

// let valorDeFuncion = unaFuncionQueDevuelveValor();


// const suma = function(num1,num2) {
//  return num1 * num2;
// }

// console.log(suma(12,3))

// const nombre = ['Daniel','Victoria','Victor','Noris']

// nombre.forEach( function(element, index) {
//  console.log(`li id = ${index} ${element}`)
// });

// for (let i = 0; i < nombre.length; i++) {
//  console.log(nombre[i])
// };







// Ejercicio


 /* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */

 const contarNumero = (cadena = "") => 
(!cadena) 
 ? console.warn('no has ingresado los caracteres')
 : console.info(`el caracter ${cadena} tiene ${cadena.length} caracteres`);


// contarNumero();

// contarNumero("hola mundo");

/*



*/

const metodo2 = (cadena = " ") => {

if (!cadena) {
    console.warn('no ingresaste el codigo'); 

}  

 else {
  console.info(`${cadena} tiene caracteres ${cadena.length}`);

 } 

    
}

// metodo2('hola mundo') ;


/* 2) Programa una función que te devuelva el texto 
recortado según el número de caracteres indicados, 
pe. miFunción("Hola Mundo", 4) devolverá "Hola" */

const recortarTexto = (cadena = '', longitud = undefined) =>
(!cadena)
? console.warn('escribe tu caracter')
:console.info(`${cadena.slice(0,longitud)} `);

// recortarTexto()
// recortarTexto('hola mundo',4)


/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

const arrayTexto = (cadena = "", separador = undefined ) =>
(!cadena)
? console.warn('no ingresaste la cadena de texto')
:(separador === undefined)
    ? console.warn('no ingresaste el separador')
    : console.info(cadena.split(separador));

// arrayTexto();
// arrayTexto('hola que tal'," ")

const arrayTexto2 = (cadena= "", separador = undefined) => {

    if (!cadena) 
        console.warn('no ingresaste la cadena de texto')
  

    if(separador === undefined)
        console.warn('no ingresaste el numero de longitud');


    else {
        console.info(cadena.split(separador)); 
            
        }    
    
}


// arrayTexto2('hola como estas ustedes', " ");



/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */

 const repetirTexto = (cadena = "", repetir = undefined)=>
 (!cadena)
?console.warn('no has ingresado el caracter')
: console.info(cadena.repeat(repetir))


// repetirTexto('hola ', 50)

const repetirTexto2 = (texto = "" , repetir = undefined) => {
  // si el texto no viene
  // cuando un condicional solo ejecuta la linea de abajo es imprecendible y no es necesario usar {}
    if (!texto) return console.warn('no ingresaste un texto');

    if (repetir === undefined) return console.warn('no ingresaste el numero de veces repetir texto');

    if (repetir === 0) return console.error('el numero de veces no puede ser 0');

    if (Math.sign(repetir)=== -1) return console.error('el numero de veces no puede ser negativo');

    for(let i = 1; i <= repetir; i++){
        console.info(`${texto}.${i}`);

    } 
    

}

// repetirTexto2('hola mundo', 3)
/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */

const reversaTexto = (cadena = "") =>

(!cadena)
? console.warn('no has ingresado la palabra')
: console.info(cadena.split(" ").reverse().join());


// reversaTexto();
// reversaTexto('hola mundo');


 /* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

const vecesTexto = (cadena = "", texto ="") => {
    if (!cadena) return console.warn('no ingresaste el texto largo');

    if (!texto) return console.warn('no ingrestaste la palabra a evaluar');
       
     let i = 0,
     contador = 0;

    while (i !== -1) {
       i = cadena.indexOf(texto, i);

       if(i!== -1){
        i++;
        contador++;
       }

    }
    
    return console.info(`la palabra ${texto} se repite ${contador} veces`);
}

// vecesTexto('juan tenia un mundo y en ese mundo habia una tierra donde el mundo era universal','mundo');



/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */

const palindromo = (palabra = "") => {

    if (!palabra) return console.warn('no ingresaste ninguna palabra')

    palabra = palabra.toLowerCase();
    
    let alReves = palabra.split("").reverse().join("");    

    return ( palabra === alReves)

    ?console.info(`Si es palindromo, palabra original ${palabra}, palabra al reves ${alReves}`)
    :console.info(`No es palindromo, palabra original ${palabra}, palabra al reves ${alReves}`);



}

// palindromo('hola mundo')


    /* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */


const eliminarPatron = (caracter = "", patron) => 

    (!caracter)

     ? console.warn('no has ingresado ninguna palabra')
     : (!patron)
        ? console.warn('no ingresaste el patron')
        : console.info(caracter.replace(new RegExp(patron, "ig"), ""));

  // eliminarPatron()
  // eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
    


    /* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */

    const numeroAleatorio = () =>  console.info(Math.floor(Math.random()*100)+500);

    // numeroAleatorio();
        
    /* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */

    const capicua = (numero = 0) => {

        if(!numero) return console.warn('no has ingresado el digito');

        if(typeof numero !== "number") return console.error(`el valor "${numero}" ingresado no es un numero`);

        numero = numero.toString();
        let alReves = numero.split("").reverse().join("")

        return(numero === alReves)
        ? console.info(`si es capicua, numero original ${numero}, numero al reves ${alReves}`)
        : console.info(`No es capicua, numero original ${numero}, numero alReves ${alReves}`)
    }

    // capicua();
    // capicua(235555)
    // capicua(2002)


    /* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */

    const factor = (numero = undefined) => {
         if (numero === undefined) return console.warn('no ingresaste un numero')

        if (typeof numero !== "number") return console.error(`el valor "${numero}" ingresado, no es un numero `)

        if (numero ===0) return console.error('el numero no puede ser 0')

        if (Math.sign(numero)===-1) return console.error('el numero no puede ser negativo')
        
        let factorial = 1;

        for (let i = numero; i > 1; i--) {
            factorial *=  i;
        }    
        return console.info(`el factorial de ${numero} es ${factorial}`)
    }


    // factor(5)

   


    /* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */

        const numeroPrimo = (numero = undefined) => {
         if (numero === undefined) return console.warn('no ingresaste un numero')

        if (typeof numero !== "number") return console.error(`el valor "${numero}" ingresado, no es un numero `)

        if (numero ===0) return console.error('el numero no puede ser 0')

        if (numero ===1) return console.error('el numero no puede ser 1')

        if (Math.sign(numero)===-1) return console.error('el numero no puede ser negativo')
            
        let divisible = false;

        for (let i = 2; i < numero; i++) {
            if((numero % i) === 0) {
                divisible = true;
                break
            }
        }

        return ( divisible)

        ?console.log(`el numero ${numero}, no es primo`)
        :console.log(`numero ${numero}, si es primo`);
        }

// numeroPrimo();
// numeroPrimo('320');
// numeroPrimo(true);
// numeroPrimo(0);
// numeroPrimo(1);
// numeroPrimo(-13);
// numeroPrimo(13);
// numeroPrimo(200);

    /* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */

const numeroParImpar = (numero = undefined) => {
         if (numero === undefined) return console.warn('no ingresaste un numero')

        if (typeof numero !== "number") return console.error(`el valor "${numero}" ingresado, no es un numero `)

        return((numero%2)===0)
        ? console.info(`el numero ${numero} es Par`)
        : console.info(`el numero ${numero} es impar`)


}

// numeroParImpar()
// numeroParImpar("23");
// numeroParImpar(-398);
// numeroParImpar(19);


    /* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */
    const convertirGrados = (grados = undefined, unidad = undefined) => {
        if (grados === undefined) return console.warn('no ingresaste grado a convertir');

        if (typeof grados !== "number") return console.error(`el valor "${grados}" ingresado, no es un numero`);

        if (unidad === undefined) return console.warn('no ingresaste el tipo de grado a convertir');

        if (typeof unidad !== "string") return console.error(`el valor "${unidad}" ingresado, No es una cadena de texto`)

        if (unidad.length !== 1||!/(C|F)/.test(unidad)) return console.warn('valor de unidad no reconocido')
 
        if (unidad === 'C') {
           return console.info(`${grados}°C = ${Math.round((grados * (9/5))+32)}°F`)
        }

        if (unidad === 'F') {
           return console.info(`${grados}°C = ${Math.round((grados -32)*(5/9))}°C`)
        }

     

    }

// convertirGrados()
// convertirGrados(2,"C")
// convertirGrados(2,'F')
// convertirGrados(100, "C")
// convertirGrados(100, "F")



    /* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */

     const convertirbinarioDecimal = (numero = undefined, base = undefined) => {

        if(!numero) return console.warn('no ingresaste numero a convertir');
        
        if(typeof numero !== "number") return console.error(`el valor "${numero}" ingresado, no es un numero`);
        
        if (!base) return console.warn('no ingresaste la base a convertir');

        if (typeof base !== "number") return console.error(`el valor "${base}" ingresado, no es un numero`);
            
        if( base === 2) {
            return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`)
        } else if(base === 10) {
            return console.info(`${numero} base ${base} = ${(numero.toString(base))} base 2`)
        } else {
            return console.error(`el tipo de base a convertir no es valido`)
        }
    }

    // convertirbinarioDecimal();
    // convertirbinarioDecimal("2");
    // convertirbinarioDecimal(100);
    // convertirbinarioDecimal(100,"2");
    // convertirbinarioDecimal(100, 2);
    // convertirbinarioDecimal(1110010,2);
    // convertirbinarioDecimal(4,10);
    // convertirbinarioDecimal(114,10);
    // convertirbinarioDecimal(114,3);
    




/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */

const descuento = (monto = undefined, descuento = 0) => {

    if(!monto) return console.warn('no ingresaste numero a convertir');
        
    if(typeof monto !== "number") return console.error(`el valor "${numero}" ingresado, no es un numero`);
        
    if(monto ===0) return console.error('el monto no puede ser 0');

    if(Math.sign(monto)===-1) return console.error('el monto no puede ser negativo');

    if (typeof descuento !== "number") return console.error(`el valor "${base}" ingresado, no es un numero`);

    if(Math.sign(descuento)===-1) return console.error('el monto no puede ser negativo');

    return console.info(`$${monto} - ${descuento} % = $${monto-(monto*descuento)/100}`)
    

            
}

// descuento(60)
// descuento(50,10)


/* 17) Programa una función que dada una fecha válida determine cuantos años han 
pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
devolverá 35 años (en 2020) */

const validarFecha = (fecha = undefined ) => {

    if(fecha === undefined) return console.warn(" no ingresaste la fecha");

    if(!(fecha instanceof Date)) return console.error(`el valor que ingresaste no es una fecha valida`);

     let hoyMenosFecha =  new Date().getTime() - fecha.getTime(),
     aniosEnMs = 1000*60*60*24*365
     aniosHUmanos = Math.floor(hoyMenosFecha/aniosEnMs);

     return (Math.sign(aniosHUmanos) === -1)
     ?console.info(`faltan ${Math.abs(aniosHUmanos)} años para el ${fecha.getFullYear()}`)
     :(Math.sign(aniosHUmanos) === 1)
        ?console.info(`Han pasado ${aniosHUmanos} años desde ${fecha.getFullYear()}`)
        :console.info(`estamos en el año actual ${fecha.getFullYear()}`)


}

// validarFecha();
// validarFecha({});
// validarFecha(false);
// validarFecha(new Date());
// validarFecha(new Date(1984,4,23));
// validarFecha(new Date(1884,3,12));
// validarFecha(new Date(2084,3,12));
/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */
const contarLetras = (cadena ="") =>{
     if(!cadena) return console.warn('no ingresaste cadena de texto');
        
     if(typeof cadena !== "string") return console.error(`el valor "${cadena}" ingresado, no es un cadena`);
        
     let vocales = 0,
     consonantes = 0;

     cadena = cadena.toLocaleLowerCase();

     for(let letra of cadena){
         if(/[aeiouáéíóúäëïöü]/.test(letra)) vocales ++;
         

         if(/[bcdfghlkmnopqrstvwxyz]/.test(letra)) {
            consonantes ++;
         }


     }
     return console.info({
        cadena,
        vocales,
        consonantes
     })
}


// contarLetras();
// contarLetras(3);
// contarLetras('hola mundo');
// contarLetras('ñoño');

/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */
const validarNombre = (nombre = "")=>{
    if(!nombre) return console.warn('no ingresaste cadena de texto'); 
        
    if(typeof nombre !== "string") return console.error(`el valor "${nombre}" ingresado, no es un cadena de texto`);

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

    return (expReg)
        ? console.info(`"${nombre}",es un nombre valido`)
        : console.warn(`"${nombre}", No es un nombre válido`);


}

// validarNombre();
// validarNombre('Daniel Duarte');
// validarNombre('Daniel Duarte,19');

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */

const validarEmail = (email = "")=>{
    if(!email) return console.warn('no ingresaste cadena de texto'); 
        
    if(typeof email !== "string") return console.error(`el valor "${email}" ingresado, no es un cadena de texto`);

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg)
        ? console.info(`"${email}",es un nombre valido`)
        : console.warn(`"${email}", No es un nombre válido`);

    }

// validarEmail();
// validarEmail(34);
// validarEmail('dan.duar_te@hotmail.com')

// fusion 19 y 20

const validarPatron = (cadena ="", patron="undefined") => {

    if (!cadena) return console.warn('no ingresaste una cadena de texto a evaluar');

    if (typeof cadena !== 'string') return console.error(`el valor '${patron}' ingresado, No es una cadena de texto`)

    if(patron === undefined) return console.warn('no ingresaste un patron a evaluar');

    if (!(patron instanceof RegExp)) return console.error(`el valor "${patron}" ingresado, No es una cadena de texto`)
    
    let expReg = patron.test(cadena)

    return (expReg)

    ?console.info(`"${cadena}", cumple con el patron ingresado`)
    :console.warn(`"${cadena}", No cumple con el patron ingresado`);
}

// validarPatron('Daniel Duarte,19',/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);
// validarPatron('Daniel Duarte',/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g)
// validarPatron('danielduarte1991@gmail.com',new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/","i"))

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

    const devolverCuadrados = (arr = undefined) => {

    if (!arr) return console.warn('no ingresaste un arreglo a evaluar');

    if (!(arr instanceof Array)) return console.error(`no ingresaste un arreglo`)

    if (arr.length === 0) return console.error('el arreglo esta vacio')

    for (let num of arr) {
        if (typeof num !== 'number') return console.error(`el valor ${num} ingresado, no es un numero`)

    }

    const newArr = arr.map(el => el*el);

    return console.info(`Arreglo origina ${arr}.\narreglo elevado al cuadrado ${newArr}`)

}

// devolverCuadrados(true)
// devolverCuadrados({})
// devolverCuadrados([1,"2",3,{}])
// devolverCuadrados({})
// devolverCuadrados([])
// devolverCuadrados([1,4,8])



/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */

const devolverValor = (arr = undefined) => {

if (!arr) return console.warn('no ingresaste un arreglo de texto a evaluar');

if (!(arr instanceof Array)) return console.error(`no ingresaste un arreglo`)

if (arr.length === 0) return console.error('el arreglo esta vacio')

for (let num of arr) {
        if (typeof num !== 'number') return console.error(`el valor ${num} ingresado, no es un numero`)

    }

console.info (`arreglo original ${arr}.\nValor mayor: ${Math.max(...arr)}\nValor menor: ${Math.min(...arr)}`)

}
// devolverValor(true)
// devolverValor([1,"2",3,{}])
// devolverValor({})
// devolverValor([])
// devolverValor([1,40,-80])


/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

const separarParesImpares = (arr = undefined) => {

if (!arr) return console.warn('no ingresaste un arreglo de texto a evaluar');

if (!(arr instanceof Array)) return console.error(`no ingresaste un arreglo`)

if (arr.length === 0) return console.error('el arreglo esta vacio')

for (let num of arr) {
        if (typeof num !== 'number') return console.error(`el valor ${num} ingresado, no es un numero`)

    }

return console.info({
    pares: arr.filter(num => num % 2 === 0), 
    impares:arr.filter(num => num % 2 === 1) 

})


}
// separarParesImpares(true)
// separarParesImpares([]);
// separarParesImpares('hola')
// separarParesImpares([3,2,4,5,6,7,8,9])
/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/

const ascendentesDescendentes = (arr = undefined) => {

if (!arr) return console.warn('no ingresaste un arreglo de texto a evaluar');

if (!(arr instanceof Array)) return console.error(`no ingresaste un arreglo`)

if (arr.length === 0) return console.error('el arreglo esta vacio')

for (let num of arr) {
        if (typeof num !== 'number') return console.error(`el valor ${num} ingresado, no es un numero`)

    }

    return console.info ({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()



    });

}
// ascendentesDescendentes(true)
// ascendentesDescendentes([]);
// ascendentesDescendentes('hola')
// ascendentesDescendentes({})
// ascendentesDescendentes([5,{}])
// ascendentesDescendentes([5,6,8,5,9])

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */

const eliminarDuplicados = (arr = undefined) => {

if (!arr) return console.warn('no ingresaste un arreglo de texto a evaluar');

if (!(arr instanceof Array)) return console.error(`no ingresaste un arreglo`)

if (arr.length === 0) return console.error('el arreglo esta vacio')

if (arr.length === 1) return console.warn('el arreglo debe tener dos elementos')



    return console.info ({
       original: arr,
       sinDuplicados: arr.filter((value,index,self) => self.indexOf(value) === index)

    });


}
// eliminarDuplicados()
// eliminarDuplicados([])
// eliminarDuplicados({})
// eliminarDuplicados([1])
// eliminarDuplicados([5,4,3,6,7,4,"X","A","b","X"])

// resuelto con objeto set

const eliminarDuplicados2 = (arr = undefined) => {

if (!arr) return console.warn('no ingresaste un arreglo de texto a evaluar');

if (!(arr instanceof Array)) return console.error(`no ingresaste un arreglo`)

if (arr.length === 0) return console.error('el arreglo esta vacio')

if (arr.length === 1) return console.warn('el arreglo debe tener dos elementos')



    return console.info ({
       original: arr,
       sinDuplicados: [...new Set(arr)]

    });


}
// eliminarDuplicados2()
// eliminarDuplicados2([])
// eliminarDuplicados2({})
// eliminarDuplicados2([1])
// eliminarDuplicados2([5,4,3,6,7,4,"X","A","b","X"])



/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */

const promedio = (arr = undefined) => {

if (!arr) return console.warn('no ingresaste un arreglo de texto a evaluar');

if (!(arr instanceof Array)) return console.error(`no ingresaste un arreglo`)

if (arr.length === 0) return console.error('el arreglo esta vacio')

for (let num of arr) {
        if (typeof num !== 'number') return console.error(`el valor ${num} ingresado, no es un numero`)

    }

    return console.info (
        arr.reduce((total,num,index,arr) =>{
            total += num;

        if(index === arr.length-1) {
            return `el promedio de ${arr.join("+")} es ${total/arr.length}`;
        } else {
            return total;
        }

        })
    );

}

// promedio()
// promedio({})
// promedio([])
// promedio([2,true])
// promedio([1,2,3,4,5,6,7])
/* 27) Programa una clase llamada Pelicula.
        La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
          - Todos los datos del objeto son obligatorios.
          - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
          - Valida que el título no rebase los 100 caracteres.
          - Valida que el director no rebase los 50 caracteres.
          - Valida que el año de estreno sea un número entero de 4 dígitos.
          - Valida que el país o paises sea introducidos en forma de arreglo.
          - Valida que los géneros sean introducidos en forma de arreglo.
          - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
          - Crea un método estático que devuelva los géneros aceptados*.
          - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
          - Crea un método que devuelva toda la ficha técnica de la película.
          - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
        * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
        */


class Pelicula {
    constructor({id,titulo,director,estreno,pais,generos, calificacion}) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos  = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo (titulo);
        this.validarDirector (director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);

    }

    static get listaGeneros() {
        return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary',
        'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 
        'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
    }

    static generosAceptados() {
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(",")}`);
    }


    validarCadena (propiedad,valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)
    
        if (typeof valor !== "string") return console.error(`${propiedad} ${valor} ingresado, No es una cadena de texto`);
    
        return true;

    }   

    validarArray (propiedad,valor) {
       if (!valor) return console.warn(`${propiedad} ${valor} esta vacio`);

        if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" no es un arreglo`)

        if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tienes datos`)

        for (let cadena of valor) {
        if (typeof cadena !== 'string') return console.error(`el valor ${cadena} ingresado, no es una cadena de texto`)

    }
    
        return true;

    }  

    validarLongitudCadena(propiedad,valor,longitud){
        if(valor.length > longitud) return console.error(`${propiedad}"${valor}" excede el
            numero de caracteres permitidos(${longitud})`);

            return true;
    }

    validarNumero(propiedad,valor) {
        if(!valor) return console.warn(`${propiedad} ${valor} ingresado No es un número`);

        if (typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado. No es un número`);
        
        return true;
    }


    validarIMDB (id) {
        if (this.validarCadena("IMDB id",id)) 
        if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) 
            return console.error(`IMDB id ${id} no es valido debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`);
         

    }

    validarTitulo (titulo) {
        if (this.validarCadena("Titulo",titulo)) 
            this.validarLongitudCadena('Titulo',titulo,100);

    }

    validarDirector (director) {
        if (this.validarCadena("Director",director)) 
            this.validarLongitudCadena('Director',director,50);

    }

     validarEstreno (estreno) {
        if (this.validarNumero("Año de Estreno",estreno)) 
        if(!(/^([0-9]){4}$/.test(estreno))) 
            return console.error(`Año de estreno ${estreno} no es valido debe ser un número de 4 digitos `);
         
    
       }  

    validarPais(pais){
        this.validarArray("Pais", pais)
    }

    validarGeneros(generos){
        if(this.validarArray("Generos", generos)){
            for(let genero of generos) {
                // console.log(genero, Pelicula.listaGeneros.includes(genero))
            if(!Pelicula.listaGeneros.includes(genero)) {
                console.error(`Genero(s) incorrectos "${generos.join(",")}"`);
                Pelicula.generosAceptados();
            }


            }
        }
    } 

     validarCalificacion (calificacion) {
        if (this.validarNumero("Calificacion",calificacion)) 
        return (calificacion < 0 || calificacion > 10)
        ? console.error('la calificacion tiene que estar en un rango 0 y 10')
        : this.calificacion = calificacion.toFixed(1);
       }      

       fichTecnica(){
        console.info(`Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector"${this.director}"\nAño "${this.estreno}"\nPaís: "${this.pais.join('-')}" \nGéneros "${this.generos.join(",")}"\nCalificación: "${this.calificacion}"\nIMDB id: "${this.id}"`)
       }



}

// Pelicula.generosAceptados();

// const peli = new Pelicula({
//     id:"tt1234567",
//     titulo:'Spider-Man',
//     director: 'Stan lee',
//     estreno: 1957,
//     pais: ['Venezuela','Colombia'],
//     generos: ['Crime','Fantasy'],
//     calificacion: 7.5


// })  

// peli.fichTecnica() 
//     

const misPelis = [
{
    id:"tt1234567",
    titulo:'Spider-Man',
    director: 'Stan lee',
    estreno: 1957,
    pais: ['Venezuela','Colombia'],
    generos: ['Crime','Fantasy'],
    calificacion: 7.5


},

{
    id:"tt1234547",
    titulo:'Mega-mente',
    director: 'Spilberd',
    estreno: 2004,
    pais: ['Ucrania',],
    generos: ['Crime','Sport'],
    calificacion: 7.9


},

{
    id:"tt1234047",
    titulo:'baki',
    director: 'juan chu',
    estreno: 2018,
    pais: ['japon',],
    generos: ['Fantasy','Sport'],
    calificacion: 7.9


},


];

misPelis.forEach(el => new Pelicula(el).fichTecnica())
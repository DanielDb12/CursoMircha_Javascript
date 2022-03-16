// objeto date

console.log(Date());

let fecha = new Date();
console.log(fecha);
// dia del mes
console.log(fecha.getDate());
// doa de la semana D L M MI J V S -> 0 1 2 3 4 5 6
console.log(fecha.getDay());
// mes Ene, Feb, March, Abril, May, Jun, July, Ago, Sep, Oct, Nov
console.log(fecha.getMonth());
// año
console.log(fecha.getFullYear());
// hora
console.log(fecha.getHours());
// minutes
console.log(fecha.getMinutes());
// Seconds
console.log(fecha.getSeconds());
// milesegundos
console.log(fecha.getMilliseconds());

console.log(fecha.toString());
// solo la fecha
console.log(fecha.toDateString());
// fecha con numero y hora
console.log(fecha.toLocaleString());
// solo fecha
console.log(fecha.toLocaleTimeString());
// solo hora
console.log(fecha.toLocaleTimeString());
// uso horario
console.log(fecha.getTimezoneOffset());
// dia
console.log(fecha.getUTCDate());
// Horario
console.log(fecha.getUTCHours());
// 
console.log(Date.now());
let cumpledaniel = new Date(1991,3,12);
console.log(cumpled aniel);

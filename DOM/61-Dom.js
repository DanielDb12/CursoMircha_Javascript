//  

console.log('*********Elementos del documento**********')

console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
// para obtener la etiqueta html se escribe documentElement para obtenerla
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(()=>{
	console.log(document.getSelection().toString());
},3000)

document.write('<h2> hola mundo desde el DOM </h2>');
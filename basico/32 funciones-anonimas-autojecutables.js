// funciones anonimas autoejecutables
// cuando se tenga una funcion anonima usar ;
(function () {
	console.log('mi primero IIFFE');

})();

(function(d,w,c){
	console.log('mi segunda IIFE');
	console.log(d);
	console.log(w);
	c.log('esto es un console.log')
})(document,window,console);

// formas de escribir las funciones anonimas autoejecutables
// clasicas
(function () {
	console.log('version clasica')
})();

// la crockford(javascript the god parts)
((function () {
	console.log('version Crockford')
})());

// Unaria
+function () {
	console.log('version Unaria')
}();

// facebook
!function(){
	console.log('version Facebook')
}();
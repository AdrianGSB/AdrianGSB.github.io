$(document).ready(function(){

	var sobreMi = $('#sobre-mi').offset().top,
		trabajos = $('#trabajos').offset().top,
		contacto = $('#contacto').offset().top;


	$('#btn-sobre-mi').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: sobreMi 
		}, 500);
	});

	$('#btn-trabajos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: trabajos
		}, 500);
	})

	$('#btn-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto 
		}, 500);
	});

});
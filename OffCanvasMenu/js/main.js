$(document).ready(function(){
	$('.menu').click(function(){
		$('header').toggleClass('openHeader');
		$('nav ul').toggleClass('open');
	});
	var navUl = $('nav ul');
	navUl.height($(window).height());
});
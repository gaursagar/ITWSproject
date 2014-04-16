$('#logocopy').css('opacity', '1');
$(function(){
	$(window).load(function(){
		$("body").animate({
			opacity: 1
		});
	});
	$('.darkbody').hide();

	var infotemplate = $('.infotemplate');
	var requestform = $('.requestform');
	var whatsthis = $('.whatsthis');
	var dbody = $('.darkbody');

	$('li.list').on('click', function(){		
		infotemplate.fadeIn();
		dbody.fadeIn();
	});

	$('#addnew').on('click', function(){
		requestform.fadeIn();
		dbody.fadeIn();
	});

	$('#about').on('click', function(){
		whatsthis.fadeIn();
		dbody.fadeIn();
	});
	
	dbody.on('click', function(){
		dbody.fadeOut(200);
		requestform.fadeOut();
		whatsthis.fadeOut();
	});
});
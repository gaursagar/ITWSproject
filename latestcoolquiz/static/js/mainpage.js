$('#logo').css('opacity', '1');
$(function(){
	$(window).load(function(){
		$("body").animate({
			opacity: 1
		});
	});
	$('.darkbody').hide();

	//var infotemplate = $('.infotemplate');
	var dbody = $('.darkbody');
	var grid  = $('.grid');
	var quiz  = $('.quiz');
	var reflect = $('.reflect'); 
	var scores = $('.scores'); 
	var about = $('.about');

	$('#grid').on('click', function(){		
		grid.fadeIn();
		dbody.fadeIn();
	});

	$('#reflect').on('click', function(){		
		reflect.fadeIn();
		dbody.fadeIn();
	});

	$('#quiz').on('click', function(){	
		quiz.fadeIn();
		dbody.fadeIn();
	});

	$('#stats').on('click', function(){		
		scores.fadeIn();
		dbody.fadeIn();
	});

	$('#addnew').on('click', function(){
		about.fadeIn();
		dbody.fadeIn();
	});

	dbody.on('click', function(){
		dbody.fadeOut(200);
		about.fadeOut();
		//About.fadeOut();
		grid.fadeOut();
		quiz.fadeOut();
		reflect.fadeOut();
		scores.fadeOut();
	});
});
var rr=document.getElementById('icon');

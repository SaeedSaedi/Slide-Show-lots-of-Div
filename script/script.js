// Javascript

$(function(){
	var part = $('div.slideshow div.part');

	//set background position of each part

	part.each(function(i){
		if(i<4){
			$(this).css({backgroundPosition:(i)*-112.5+"px 0px"})
		}
		else
		if(i<8){
			$(this).css({backgroundPosition:(i)*-112.5+"px -100px"})
		}
		else{
			$(this).css({backgroundPosition:(i)*-112.5+"px -200px"})
		}
	});

	// changeBackground 

	cbg = function(n){
		part.each(function(i){
			part.eq(i).animate({backgroundImage:'url(\'image/pic'+n+'.jpg\')'},i*300)
		})
	};
	
	cbg(1);	
});

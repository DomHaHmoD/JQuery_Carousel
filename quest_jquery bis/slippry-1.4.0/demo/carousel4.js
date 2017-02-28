'use strict'
$(document).ready(function(){

  // Set interval to be 3 seconds
  	var t = setInterval(function(){
    	//slide en 1 second = 1000  et marginlet fait la transition
    	// utilisation de la fonction .animate
    	$("#carousel ul").animate({marginLeft:-640},1000,function(){
      		//find last img and at the end return to the first img
      		$(this).find("li:last").after($(this).find("li:first"));
  			$(this).css({marginLeft:0});
   			//console.log(this); //vérif de l'img appelée
  		})
	//},3000);
/*
	$(function(){
		$(".next").click(function(){
		$("#carousel ul").animate({marginLeft: +640},1000,function(){ 
			$(this).css({marginLeft:-220}).find("li:last").before($(this).find("li:first"));
		})
		});
	});*/
		$(function(){
		$(".next").click(function(){
		$("#carousel ul").animate({marginRight: +640},1000,function(){ 
			$(this).css({marginRight: 0}).find("li:last").after($(this).find("li:first"));
		})
		});
	});
		$(function(){
		$(".prev").click(function(){
		$("#carousel ul").animate({marginLeft: -640},1000,function(){ 
			$(this).css({marginLeft:-220}).find("li:last").before($(this).find("li:first"));
		})
		});
	});
	
	},3000);
});

/*
let intervalId;
let a = function(){    
$("#carousel ul li:first-child").animate({marginLeft: -640}, 600, function(){    
	$(this).css({marginLeft: 0}).appendTo("#carousel ul");    
	})
};

$(function(){ 
	intervalId = setInterval(a,3000);
	
	$(".next").click(function(){
		clearInterval(intervalId);
		$("#carousel ul li:first-child").animate({marginLeft: -640}, 600, function(){    
			$(this).css({marginLeft : 0}).appendTo("#carousel ul");
		}) 
		intervalId = setInterval(a,3000);
	});
	
	$(".prev").click(function(){
		clearInterval(intervalId);
		$("#carousel ul li:last-child").prependTo("#carousel ul").css({marginLeft: -640}).animate({marginLeft: 0}, 600, function(){    		
		})
		intervalId = setInterval(a,3000);
	});	
});
//});
*/
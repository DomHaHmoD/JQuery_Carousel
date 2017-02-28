'use strict'
$(document).ready(function(){
  // Set interval to be 3 seconds
  var t = setInterval(function(){
    //slide en 1 second
    $("#carousel ul").animate({marginLeft:-480},1000,function(){
      //find last img and at the end return to the first img
      $(this).find("li:last").after($(this).find("li:first"));
      $(this).css({marginLeft:0});
    })
  },3000);
});
//})
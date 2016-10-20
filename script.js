$(function(){
	
	$(".activator").on("mousemove", function(event){
		
		$(this).prev().css("clip", "rect(0px, " + (event.clientX-event.target.offsetLeft) + "px, 100vh, 0px)");
		
	});
	
	$(".airplane").animate();
	
})
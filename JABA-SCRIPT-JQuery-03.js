$(document).ready(function(){

	$(".name").click(function(){
		$(".lst_name").toggle();
	});
	// if($(".lst_name").css("display") == 'none'){
	//		$(".lst_name").show();
	//	} else {
	//		$(".Ist_name").hide();
	//	}
	// but this one doesn't working now. maybe something have been changed.

	$(".habby").click(function(){
		$(".lst_habby").toggle();
	});

	$(".interest").click(function(){
		$(".lst_interest").toggle();
	});
});


//$(document).ready(function(){
//	$(".name").click(function(){
//		$(".lst_name").show();
//	});
//	$(".habby").click(function(){
//		$(".lst_habby").show();
//	});
//	$(".interest").click(function(){
//		$(".lst_interest").show();
//	});
//});

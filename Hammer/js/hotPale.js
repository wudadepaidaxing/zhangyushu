$(function(){
		$(".hotKey1").click(function(){
			$(".partBody").stop().animate({
				left:-1218
			},500);
			$(".hotKey1").css({border:"1px solid rgba(0,0,0, .3)",color:"#646464"})
			$(".hotKey2").css({border:"1px solid rgba(0,0,0, .1)",color:"#999999"})
		});
		$(".hotKey2").click(function(){
			$(".partBody").stop().animate({
				left:0
			},500);
			$(".hotKey1").css({border:"1px solid rgba(0,0,0, .1)",color:"#999999"})
		    $(".hotKey2").css({border:"1px solid rgba(0,0,0, .3)",color:"#646464"})
		});
	});
	
// //点击小对勾
// let Oimg = document.querySelector(".c1a");
// Oimg.onclick = function() {
// 	if (Oimg.offsetTop == 0) {
// 		Oimg.style.top = "-20px";
// 	} else if (Oimg.offsetTop == -20) {
// 		Oimg.style.top = "0";
// 	}

// }
// 单机添加
$(function() {
	let index = 0+ +sessionStorage.getItem("wnumber");
	$(".c4b3").click(function() {
		index += 1;
		$(".c4b2").html(index);
		let str1 = +$(".c4a span").html();
		let str2 = +$(".c4b2").html();
		let str = str1 * str2;
		let arr = str.toFixed(2);
		
		$(".b3b2").html($(".c4c2").html());
		$(".c4c2").html(arr);
		$(".b2b2").html(index);
		$(".b2a2").html($(".b2b2").html());
	});
	
	$(".c4b1").click(function() {
		index -= 1;
		if(index<0){
			 index = 0;
			 $(".c4b2").html(index);
			 let str1 = +$(".c4a span").html();
			 let str2 = +$(".c4b2").html();
			 let str = str1 * str2;
			 let arr = str.toFixed(2);
			 $(".b2a2").html($(".b2b2").html());
			 $(".b3b2").html($(".c4c2").html());
			 $(".c4c2").html(arr);
			 $(".b2b2").html(index);
		}else{
			$(".c4b2").html(index);
			let str1 = +$(".c4a span").html();
			let str2 = +$(".c4b2").html();
			let str = str1 * str2;
			let arr = str.toFixed(2);
			$(".c4c2").html(arr);
			$(".b2b2").html(index);
			$(".b2a2").html($(".b2b2").html());
			$(".b3b2").html($(".c4c2").html());
		}
	});
	// 保留i
	// $(".c1a").click(function(){
	//  	if($(".c1a").offset().top != 1){
	//  		$(".b2a2").html($(".b2b2").html());
	//  		$(".b3b2").html($(".c4c2").html());
	 	   
	//  	}else{
	//  		$(".b2a2").html(0);
	//  		$(".b3b2").html(0.00);
	//  	}
	//  })
	// 删除整行
	$(".c4d span").click(function(){
		$(".cartItems").remove();
		$(".b2a2").html(0);
		$(".b2b2").html(0);
		$(".b3b2").html(0.00);
	});
	
	
});

	
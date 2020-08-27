let index = 1;
$(function(){
	
	$(".addBtn").click(function(){
		 index += 1;
		$(".a1").html(index);
		$(".thing").html(index);
		let str = +$(".artical span").html();
		let arr = str*index;
		let a_rr =arr.toFixed(2);
		 $(".dollor span").html(a_rr);
	})
	$(".minBtn").click(function(){
		index -= 1;
		if(index<0){
			index=0;
			$(".a1").html(index);
			$(".thing").html(index);
			let str = +$(".artical span").html();
			let arr = str*index;
			let a_rr =arr.toFixed(2);
			 $(".dollor span").html(a_rr);
		}else{
			$(".a1").html(index);
			$(".thing").html(index);
			let str = +$(".artical span").html();
			let arr = str*index;
			let a_rr =arr.toFixed(2);
			 $(".dollor span").html(a_rr);
		}
		
	});
	
	$(".btnOdd").click(function(){
		sessionStorage.setItem("wimg",$(".max").html());
		sessionStorage.setItem("wtext",$(".artical h1").html());
		sessionStorage.setItem("wsinglePrice",$(".artical span").html());
		sessionStorage.setItem("wnumber",$(".a1").html());
		sessionStorage.setItem("wsum",$(".dollor span").html());
	})
	
	
	
	
});

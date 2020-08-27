// 设置下拉菜单
		$(function() {
				var index = 0;
				$("#secondMenu ul li ").each(function(){
					$(this).mouseenter(function(){
						index=$(this).index();
						$(".SecondSelectBody").stop().slideDown(400);
						$(".homePage1").eq(index).css({display:"block"}).siblings().css({display:"none"});
						// $(".SecondSelectBody").eq(index).slideDown(1000).siblings().css({display:"none"});					
					});
				});
				$(".SecondSelectBody").mouseenter(function(){
					$("#SecondSelect").css({display:"block"});
					$(".SecondSelectBody").css({display:"block"});
				});
				$("#allSecondMenu,.SecondSelectBody").mouseleave(function(){
					$(".SecondSelectBody").stop().slideUp(500);
				});
			
			$("#secondMenu ul li,#SecondSelect .homePage1 li").click(function(){
				location.href = "listPage.html"
				return false
			})	
			$("#secondMenu ul li").eq(0).click(function(){
				// console.log("heihei")
				location.href = "firstPage.html"
				return false
			})	
	});
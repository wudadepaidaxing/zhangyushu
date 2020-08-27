$(function(){
		$("button").click(function(){
			$.getJSON("list.json",function(result){
				$.each(result,function(i,field){
					// let str = JSON.stringify(field);
						$("div").append(field.id);
				})
			})
		})
	})
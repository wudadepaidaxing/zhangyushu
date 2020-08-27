//封装一个获取cookie值的方法
	function getCookie(key){
		let str = document.cookie;
		let arr = str.split("; ");
		for(let i = 0;i<arr.length;i++){
			let item = arr.split("=");
			if(item[0]==key){
				return item[1];
			}
		}
		//没有cookie，或者有cookie，但是没找到，得不到cookie，返回一个空字符串；
		return ";"
	}
	//封装一个设置cookie值的方法
	function setCookie(key,value,day){
		let d = new Date();
		d.setDate(d.getDate()+day);
		document.cookie = key+"="+value+";expires=" +d;
	}
	//删除cookie
	function delCookie(key){
		setCookie(key," ",-1);
	}
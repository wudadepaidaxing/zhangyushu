class MoveBig {
		constructor(newSmall, newMask, newBig) {
			this.small = newSmall;
			this.mask = newMask;
			this.big = newBig;
		}
	
		onmouseover() {
			let that = this;
			this.small.onmouseover = function() {
				that.mask.style.display = "block";
				that.big.style.display = "block";
			}
			console.log(123);
		}
		onmouseout() {
			let that = this;
			this.small.onmouseout = function() {
				that.mask.style.display = "none";
				that.big.style.display = "none";
			}
			console.log(12);
		}
		onmousemove() {
			console.log(3);
			let that = this;
			this.small.onmousemove = function(evt) {
				let e = evt = event;
	
				let left = e.pageX - that.small.offsetLeft - that.mask.offsetWidth / 2;
				let top = e.pageY - that.small.offsetTop - that.mask.offsetHeight / 2;
				
				let maxLeft = that.small.offsetLeft -that.mask.offsetWidth;
				
				if(left>maxLeft){
					left = maxLeft;
				}
				
				if (left < 0) {
					left = 0;
				}
				
				let maxTop = that.small.offsetTop -that.mask.offsetHeight;
				
				if(top>maxTop){
					top = maxTop;
				}

				if (top < 0) {
					top = 0;
				}
	
				that.mask.style.left = left + "px";
				that.mask.style.top = top + "px";
				
				let x= that.big.offsetWidth*left/that.mask.offsetWidth;
				let y= that.big.offsetHeight*top/that.mask.offsetHeight;
				
				that.big.style.backgroundPositionX = -x+"px";
	            that.big.style.backgroundPositionY = -y+"px";
			}
	
		}
	   eventbind(){
		    this.onmouseover();
			this.onmouseout();
			this.onmousemove();
	   }
	
	
	}
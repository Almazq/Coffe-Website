var gif = document.getElementById('gif');
var btn = document.getElementById('btn');
var ten = document.getElementById('ten');
var twenty = document.getElementById('twenty');
var thirty = document.getElementById('thirty');
var forty = document.getElementById('forty');
var fifty = document.getElementById('fifty');
var cost = document.getElementById('cost');
btn.onclick = function(){
	gif.style.display = "block";
	btn.style.display = "none";
	setTimeout(function set(){
		gif.style.display = "none";
		var number = Math.random() * 100;
		number = Math.ceil(number);
		console.log(number);
		if (number > 1 && number <= 40) {
			ten.style.display = "block";
			 
		}
		if (number > 40  && number <= 70) {
			twenty.style.display = "block";
			
		}
		if (number > 70  && number <= 85) {
			thirty.style.display = "block";
			
		}
		if (number > 85  && number <= 95) {
			forty.style.display = "block";
			
		}
		if (number > 95  && number <= 100) {
			fifty.style.display = "block";
		}
	},3000)
	setTimeout( function cst(){
		cost.style.display = "block";
	},4800)
}
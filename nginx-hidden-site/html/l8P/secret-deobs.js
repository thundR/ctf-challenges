window.onload = function() {
	var e = document.getElementById('secret')
	e.innerHTML = 't isnt right! Are you supposed to be here?!?';
}
var x = [122, 128, 117, 123, 143, 118, 137, 135, 136, 71, 120, 53, 145]
var t = false
function secret(){
	if(t && !document.getElementById('flag')){
		var e = document.getElementById('secret')
		e.innerHTML = "t is right!";
		var s = document.createElement("div")
		s.id = "flag";
		var h = ""
		for (var i = 0; i < x.length; i++) {
			h += String.fromCharCode(x[i]-20);
		}
		var f = document.createTextNode(h);
		s.appendChild(f);
		document.body.appendChild(s);
	}
}
setInterval(secret, 100);
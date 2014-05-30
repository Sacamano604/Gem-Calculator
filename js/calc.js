

var impEmeraldCalc = function(num) {
	if (isNaN(num)){
		document.getElementById('results').innerHTML = "<p>Sorry please enter a valid number</p>";
	} else {
		var val = num * 3;
		document.getElementById('results').innerHTML = "<p>You need " + val + " Marquise Emeralds to create " + num + " Imperial Emeralds</p>";
	}
}





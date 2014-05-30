

var impEmeraldCalc = function(quantity, type) {
	console.log(type);
	if (isNaN(quantity)){
		document.getElementById('results').innerHTML = "<p>Sorry please enter a valid number</p>";
	} else {
		var val = quantity * 3;
		document.getElementById('results').innerHTML = "<p>You need " + val + " Marquise Emeralds to create " + quantity + " Imperial Emeralds</p>" + type;
	}
}





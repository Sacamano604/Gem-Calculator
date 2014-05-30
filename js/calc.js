

var impEmeraldCalc = function(quantity, gemKind, type) {
	if (isNaN(quantity)){
		document.getElementById('results').innerHTML = "<p id='error'>Please enter a valid number</p>";
	} else {
		  	if (type === "imperial") {
				var val = quantity * 3;
				document.getElementById('results').innerHTML = "<p>You need " + val + " Marquise to create " + quantity + " Imperial " + gemKind;	
			} else if (type === "flawlessimperial") {
				var val = quantity * 9;
				document.getElementById('results').innerHTML = "<p>You need " + val + " Marquise to create " + quantity + " Flawless Imperial " + gemKind;
			} else if (type === "royal") {
				var val = quantity * 27;
				document.getElementById('results').innerHTML = "<p>You need " + val + " Marquise to create " + quantity + " Royal " + gemKind; 
			} else if (type === "flawlessroyal") {
				var val = quantity * 81;
				document.getElementById('results').innerHTML = "<p>You need " + val + " Marquise to create " + quantity + " Flawless Royal " + gemKind;
			}
	}
}





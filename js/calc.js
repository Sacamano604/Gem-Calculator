

var impEmeraldCalc = function(quantity, gemKind, type) {
	if (isNaN(quantity)){
		document.getElementById('results').innerHTML = "<p id='error'>Please enter a valid number</p>";
	} else {
//			document.getElementById('initialRequest').innerHTML = "<p>To create " + quantity + " " + type + " " + gemKind;
		  	if (type === "imperial") {
				var val = quantity * 3;
				document.getElementById('results').innerHTML = "<p>You need " + val + " Marquise to create " + quantity + " Imperial " + gemKind;	



			} else if (type === "flawlessimperial") {
				var val = quantity * 9;
				document.getElementById('results').innerHTML = "<p>You need " + val + " Marquise to create " + quantity + " Flawless Imperial " + gemKind + "<br />"
				+ "<p>You need " + val/3 + " Imperial to create " + quantity + " Flawless Imperial " + gemKind;



			} else if (type === "royal") {
				var val = quantity * 27;
				document.getElementById('results').innerHTML = "<p>You need " + val + " Marquise to create " + quantity + " Royal " + gemKind + "<br />"
				+ "<p>You need " + val/3 + " Imperial to create " + quantity + " Royal " + gemKind + "<br />"
				+ "<p>You need " + val/9 + " Flawless Imperial to create " + quantity + " Royal " + gemKind;  



			} else if (type === "flawlessroyal") {
				var val = quantity * 81;
				document.getElementById('results').innerHTML = "<p>You need " + val + " Marquise to create " + quantity + " Flawless Royal " + gemKind + "<br />"
				+ "<p>You need " + val/3 + " Imperial to create " + quantity + " Flawless Royal " + gemKind + "<br />"
				+ "<p>You need " + val/9 + " Flawless Imperial to create " + quantity + " Flawless Royal " + gemKind
				+ "<p>You need " + val/27 + " Royal I to create " + quantity + " Flawless Royal " + gemKind;  
				;

			}
	}
}





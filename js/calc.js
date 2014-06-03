var gemCalculator = function(quantity, gemType){
	// Checks to make sure if the quantity entered is a number or not.
	if (isNaN(quantity)){
		document.getElementById('errorMessage').innerHTML = "<p id='error'>Please enter a valid number</p>";
	} else {

	function imperialCalc(quantity){
		var impQuantity = quantity * 3;
		document.getElementById("imperialOutput").className = "";
		document.getElementById('imperialResults').innerHTML = impQuantity;
	}
	function flawlessImperialCalc(quantity){
		var flawImpQuantity = imperialCalc(quantity) * 3;
		document.getElementById("flawlessImperialOutput").className = "";
		document.getElementById('flawlessImperialResults').innerHTML = flawImpQuantity;
	}



	switch (gemType){
		case "imperial":
		imperialCalc(quantity);
		break;

		case "flawlessimperial":
		imperialCalc(quantity);
		flawlessImperialCalc(quantity);
		break;

		//Default not nessecary being that the values are choosen from a drop down 
		default:
		document.getElementById('errorMessage').innerHTML = "<p id='error'>You have not choosen a valid gemtype</p>";
		break;
	};
};
};




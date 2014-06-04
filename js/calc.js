var gemCalculator = function(quantity, gemType, gemKind){
	// Checks to make sure if the quantity entered is a number or not.
	if (isNaN(quantity)){
		document.getElementById('errorMessage').innerHTML = "<p id='error'>Please enter a valid number</p>";
	} else {

	document.getElementById('selectionOutput').innerHTML = "<h4 id='warning'>To create " + quantity + " " + gemType + " " + gemKind + " you will need:</h4>";
	
	function imperialCalc(quantity){
		var impQuantity = quantity * 3;
		document.getElementById("imperialOutput").className = "";
		document.getElementById('imperialResults').innerHTML = impQuantity;
		return impQuantity;
	}
	function flawlessImperialCalc(quantity){
		var flawImpQuantity = imperialCalc(quantity) * 3;
		document.getElementById("flawlessImperialOutput").className = "";
		document.getElementById('flawlessImperialResults').innerHTML = flawImpQuantity;
		return flawImpQuantity;
	}
	function royalCalc(quantity){
		var royalQuantity = flawlessImperialCalc(quantity) * 3;
		document.getElementById("royalOutput").className = "";
		document.getElementById('royalResults').innerHTML = royalQuantity;
		return royalQuantity;
	}
	function flawlessRoyalCalc(quantity){
		var flawlessRoyalQuantity = royalCalc(quantity) * 3;
		document.getElementById("flawlessRoyalOutput").className = "";
		document.getElementById('flawlessRoyalResults').innerHTML = flawlessRoyalQuantity;
		return flawlessRoyalQuantity;
	}

	switch (gemType){
		case "imperial":
		imperialCalc(quantity);
		break;

		case "flawlessimperial":
		flawlessImperialCalc(quantity);
		break;
		
		case "royal":
		royalCalc(quantity);
		break;
		
		case "flawlessroyal":
		flawlessRoyalCalc(quantity);
		break;
		//Default not nessecary being that the values are choosen from a drop down 
		default:
		document.getElementById('errorMessage').innerHTML = "<p id='error'>You have not choosen a valid gemtype</p>";
		break;
	};
};
};




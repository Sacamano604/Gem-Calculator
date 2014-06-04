var gemCalculator = function(quantity, gemType, gemKind){
	// Checks to make sure if the quantity entered is a number or not.
	if (isNaN(quantity)){
		document.getElementById('errorMessage').innerHTML = "<p id='error'>Please enter a valid number</p>";
	} else {

	document.getElementById('selectionOutput').innerHTML = "<h4 id='warning'>To create " + quantity + " " + gemType + " " + gemKind + " you will need:</h4>";
	
	function imperialCalc(quantity){
		var gemsNeeded = quantity * 3;
		document.getElementById("imperialOutput").className = "";
		document.getElementById('imperialResults').innerHTML = gemsNeeded;
	}
	function flawlessImperialCalc(quantity){
		var gemsNeeded = quantity * 3;
		imperialCalc(gemsNeeded);
		document.getElementById("flawlessImperialOutput").className = "";
		document.getElementById('flawlessImperialResults').innerHTML = gemsNeeded;
	}
	function royalCalc(quantity){
		var gemsNeeded = quantity * 3;
		flawlessImperialCalc(gemsNeeded);
		document.getElementById("royalOutput").className = "";
		document.getElementById('royalResults').innerHTML = gemsNeeded;
	}
	function flawlessRoyalCalc(quantity){
		var gemsNeeded = quantity * 3;
		royalCalc(gemsNeeded);
		document.getElementById("flawlessRoyalOutput").className = "";
		document.getElementById('flawlessRoyalResults').innerHTML = gemsNeeded;
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




var gemCalculator = function(quantity, gemType){
	if (isNaN(quantity)){
		document.getElementById('errorMessage').innerHTML = "<p id='error'>Please enter a valid number</p>";
	} else {
	switch (gemType){
		case "imperial":
		document.getElementById("imperialOutput").className = "";
		document.getElementById('imperialResults').innerHTML = quantity * 3;
		document.getElementById('imperialGoldAmount').innerHTML = quantity * 200000;
		break;

		case "flawlessimperial":
		document.getElementById("flawlessImperialOutput").className = "";
		document.getElementById('flawlessImperialResults').innerHTML = quantity * 9;
		document.getElementById('flawlessImperialGoldAmount').innerHTML = quantity * 200000;
		break;

		case "royal":
		document.getElementById('results').innerHTML = quantity * 27;
		break;

		case "flawlessroyal":
		document.getElementById('results').innerHTML = quantity * 81;
		break;
		//Default not nessecary being that the values are choosen from a drop down 
		default:
		document.getElementById('errorMessage').innerHTML = "<p id='error'>You have not choosen a valid gemtype</p>";
		break;
	};
};
};




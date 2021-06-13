// Assignment code here
var length = 0;
var length_on = 0;
var exit = 0;
var numeric_on = 0;
var upper_on = 0;
var lower_on = 0;
var sCharacters_on = 0;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
	var refresh = refreshValues()

}

function runPrompt() {
	while (exit === 0) {

		while (length_on === 0) {
			//prompts to the length of the password between 8 to 128
			length = prompt("Enter the Length of the Password between 8 to 128");
			if (length >= 8 && length <= 128) {
				length_on = 1;
			}  else { 
				alert("Length of password should be a  number between 8 and 128. Continue?");
			}	
		}
		while (lower_on === 0) {
			//prompts to include lowers case letters 
			var Lowercase1 = prompt("Enter Y / N to Include Lowercase ");
			//changes the value to lower case
			Lowercase1 = Lowercase1.toLowerCase();
			if ((Lowercase1 === "y" || Lowercase1 === "Y") || (Lowercase1 === "n" || Lowercase1 === "N")) {
				if (Lowercase1 === "y" || Lowercase1 === "Y") {
					lower_on = 1;
				} else {
					lower_on = 2;
				}
			}
		}
		while (upper_on === 0) {
			//prompts to include uppercase letters
			var Uppercase1 = prompt("Enter Y / N  to Include Uppercase");
			//changes the value to lower case
			Uppercase1 = Uppercase1.toLowerCase();
			if ((Uppercase1 === "y" || Uppercase1 === "Y") || (Uppercase1 === "n" || Uppercase1 === "N")) {
				if (Uppercase1 === "y" || Uppercase1 === "Y") {
					upper_on = 1;
				} else {
					upper_on = 2;
				}
			}
		}
		while (numeric_on === 0) {
			// prompts to include numeric value 
			var numeric1 = prompt("Enter Y / N to Include Numbers");
			//changes the value to lower case
			numeric1 = numeric1.toLowerCase();
			if ((numeric1 === "y" || numeric1 === "Y") || (numeric1 === "n" || numeric1 === "Y")) {
				if (numeric1 === "y" || numeric1 === "Y") {
					numeric_on = 1;
				} else {
					numeric_on = 2
				}
			}
		}

		while (sCharacters_on === 0) {
			// prompts special charcter choice on the page
			var Specialcharacter1 = prompt("Enter Y / N to include special characters");
			//changes the value to lower case
			Specialcharacter1 = Specialcharacter1.toLowerCase();
			if ((Specialcharacter1 === "y" || Specialcharacter1 === "Y") || (Specialcharacter1 === "n" || Specialcharacter1 === "N")) {
				if (Specialcharacter1 === "y" || Specialcharacter1 === "Y") {
					sCharacters_on = 1;
				} else {
					sCharacters_on = 2;
				}
			}
		}
		//Validates at least one characted is selected
		if ((sCharacters_on === 1) || (numeric_on === 1) || (upper_on === 1) || (lower_on === 1)) {

			exit = 1;
			break;

		}
		//Validate if no character is selected
		if ((sCharacters_on === 2) && (numeric_on === 2) && (upper_on === 2) && (lower_on === 2)) {
			//holds the length value temporarly
			var temLength = length;
			//reset all the values
			var tempReferesh = refreshValues();
			//assignes the length
			length = temLength;
			//assigns the length to 
			length_on = 1;
			alert("Please choose at least one character !")
		}
	}
}

//this object contains random generators 
var randomFunction = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	SpecialCharacter: getSpecialCharacter,
};

//Generates a random lower case
function getRandomLower() {
	var lower = "abcdefghijklmnopqrstuvwxyz";
	return lower[Math.floor(Math.random() * lower.length)];
}
//Generates a random Upper case
function getRandomUpper() {
	var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return upper[Math.floor(Math.random() * upper.length)];
}
//Generates a random Number 
function getRandomNumber() {
	var number = '0123456789';
	return number[Math.floor(Math.random() * number.length)];
}
//Generates a special character
function getSpecialCharacter() {
	var symbols = '~!@#$%^&*()_+{}":?><;.,';
	return symbols[Math.floor(Math.random() * symbols.length)];
}


//password generator function
function generatePassword() {

	//runs the Propmt to get the values
	var run = runPrompt();

	//an array that holds the selected characters
	var characters = [];
	var password = "";

	//pushes to the charaters array if lower case character is selected 
	if (lower_on === 1) {
		characters.push("lower");
	}
	//pushes to the charaters array if uppers case character is selected 
	if (upper_on === 1) {
		characters.push("upper");
	}
	//pushes to the charaters array if numeric character is selected 
	if (numeric_on === 1) {
		characters.push("number");
	}
	//pushes to the charaters array if special character is selected 
	if (sCharacters_on === 1) {
		characters.push("SpecialCharacter");
	}

	for (var i = 0; i < length; i++) {
		//Generates a random type from characters array
		var type = characters[Math.floor(Math.random() * characters.length)];
		//build the password characters
		password += randomFunction[type]();
	}
	//returns the password
	return password;
}

//resets the values to intial value
function refreshValues() {
	length = 0;
	length_on = 0;
	exit = 0;
	numeric_on = 0;
	upper_on = 0;
	lower_on = 0;
	sCharacters_on = 0;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
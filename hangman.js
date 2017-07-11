
var answerList = ["Ferrari", "Lamborghini", "Bugatti", "Pagani", "Koenigesegg", "Porsche", "Aston-Martin", "Alpha-Romeo", "BMW", "Audi", "Mercedes-Benz", "Toyota", "Nissan", "Honda", "Ford", "Dodge", "Fiat", ]
var availableLetters = "abcdefghijklmnopqrstuvwxyz";
var answer;
var clue;
var guessesRemaining;
var wins;
var losses;
var keyPressed;
var letterIndex;
  	

function newClue() {
	
	// Selects the div we want to place the clue inside
	var targetDiv = document.getElementById("clue");
	// Selects a random answer from answerList
		 answer = answerList[Math.floor(Math.random() * answerList.length)]
	console.log(answer);
	 clue = "";
		for (i = 0; i <  answer.length; i++) {
			
			if (availableLetters.indexOf(answer[i].toLowerCase()) != -1) {
				clue += "_"; 
			} else {
				clue += answer[i];
			} 
				
		}
	
		targetDiv.innerHTML = clue;

}

 function initializeAvailableLetters() {

 	var letterBox = document.getElementById("letterBox");
		
	letterBox.innerHTML = availableLetters.toUpperCase();
 
}

function updateClue() {
	// For every character index of answer
		 	for (i = 0;i < answer.length;i++) {
		 		// Does keyPressed  match up with answer at index of i?
		 		if (answer[i].toLowerCase() === keyPressed.toLowerCase()) {
		 			// If so, add to letterIndex array
		 			letterIndex.push(i);
		 		} 

		 	}
		 	// For every match keyPressed has
		 	for (j = 0;j < letterIndex.length;j++) {
				// Replace the matching underscore with the matching character from answer
				clue = clue.substring(0,letterIndex[j]) + answer[letterIndex[j]] + clue.substring(letterIndex[j] + 1);
			}
			return clue;
}

function updateAvailableLetters() {
	for (i = 0;i < availableLetters.length;i++) {
		if (availableLetters.indexOf(keyPressed.toLowerCase()) != -1) {
			availableLetters = availableLetters.replace(keyPressed.toLowerCase(),"");
		}
	}
		return availableLetters;
}

function reset() { 
					newClue();
					initializeAvailableLetters();
}






		//Page Load	//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

	window.onload = function reset() { 
					newClue();
					initializeAvailableLetters();
					document.getElementById("guessesRemaining").textContent = "10";
					document.getElementById("wins").textContent = "0";
					document.getElementById("losses").textContent = "0";
				}


	 document.onkeyup = function(event) {
	
	keyPressed = event.key;
	guessesRemaining = document.getElementById("guessesRemaining");
	wins = document.getElementById("wins");
	losses = document.getElementById("losses");	
	var correspondingIndex = answer.indexOf(keyPressed.toLowerCase());
  	var clueDiv = document.getElementById("clue");
  	var clueDiv = document.getElementById("clue");
    letterIndex = [];
  	var alreadyGuessed = [];

		// Is keyPressed is an alphabetical character
		if (availableLetters.indexOf(keyPressed.toLowerCase()) != -1) {
			if (answer.toLowerCase().indexOf(keyPressed.toLowerCase()) === -1) {
				guessesRemaining.innerHTML--;
			}


			//Update clue on page with keyPressed
			clueDiv.innerHTML = updateClue();
			letterBox.innerHTML = updateAvailableLetters().toUpperCase();

			if (clue === answer) {
				wins.innerHTML++;
				reset();
			}
			if (guessesRemaining.innerHTML < 1 && clue != answer) {
				losses.innerHTML++;
				reset();
			}
 


			

		}


	} // End of document.onkeyup function()

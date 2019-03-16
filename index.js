// jQuery Functions Go Here 
$('#rock').click(function(){
	game('rock');
})

$('#paper').click(function(){
	game('paper');
})

$('#scissors').click(function(){
	game('scissors');
})

// Computer Range for Game
// rock = 1-3
// paper = 4-7
// scissors = 8-10


// Game function starts here
function game(choice) {
	// Defining our computer variable
	var computer = Math.floor(Math.random() * 10) + 1;

	// if computer chose rock
	if(computer <= 3){
		if(choice === 'rock'){
			$('#result').html("It's A Tie! The computer also chose rock.")
		}
		else if(choice === 'paper'){
			$('#result').html("You win! The computer chose rock.")
		}
		else {
			$('#result').html("You Lose! The computer chose rock.")
		}
	}
	
	// if computer chose paper
	else if(computer >= 4 && computer <= 7){
		if(choice === 'rock'){
			$('#result').html("You lose! The computer chose paper.")
		}
		else if(choice === 'paper'){
			$('#result').html("It's a tie! The computer also chose paper.")
		}
		else {
			$('#result').html("You win! The computer chose paper.")
		}
	}
	// if computer chose scissors
	else {
		if(choice === 'rock'){
			$('#result').html("You win! The computer chose scissors.")
		}
		else if(choice === 'paper'){
			$('#result').html("You lose! The computer chose scissors.")
		}
		else {
			$('#result').html("It's a tie!")
		}
	}
}


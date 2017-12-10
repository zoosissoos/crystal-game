let numberToGuess = 0;
let userNumber = 0;
let crystalValues = [0,0,0,0];
let winCounter = 0;
let lossCounter = 0;


const numberToGuessText = $("#numberToGuess");
const userNumberText = $("#userNumber");
let firstClick = true;

function crystalNumberGen(){
	return Math.floor((Math.random()*12) + 1 );
};

function numberGenerator(){
	return Math.floor(Math.random()*(120-19+1)+19);
};


function updateCrystals(){
	for(let i = 0; i < crystalValues.length; i++){
		crystalValues[i]=crystalNumberGen();
	}
	/*console.log(crystalValues);*/
	$("#crystalA").val(crystalValues[0]);
	$("#crystalB").val(crystalValues[1]);
	$("#crystalC").val(crystalValues[2]);
	$("#crystalD").val(crystalValues[3]);
	console.log($("#crystalA").val());
	console.log($("#crystalB").val());
	console.log($("#crystalC").val());
	console.log($("#crystalD").val());
}

function start(){
	firstClick = true;
	userNumber = 0;
	userNumberText.empty();
	numberToGuess = 0;
	numberToGuessText.empty();
};

$(".crystal").on("click", function(){
	if(firstClick == true){
		updateCrystals();
		numberToGuess = numberGenerator();
		$(numberToGuessText).text(numberToGuess);
		userNumber += parseInt($(this).val());
		userNumberText.text(userNumber);
		firstClick = false;
	}else{
		userNumber += parseInt($(this).val());
	  userNumberText.text(userNumber);
	}
	winCondition();
});

function winCondition(){
	if(parseInt(userNumber) === parseInt(numberToGuess)){
		console.log("winner");
		winCounter++;
		$(win).text(winCounter);
		start();
	}else if(parseInt(userNumber)>parseInt(numberToGuess)){
		console.log("loss");
		lossCounter++;
		$(loss).text(lossCounter);
		start();
	}
}

var randomNum = Math.round(Math.random()*99)+1;
console.log("The answer is "+randomNum+", Brother.");

function sendData(form){
    var guessNum = form.inputbox.value;
    if(guessNum>randomNum)
    {
        document.getElementById("cat").src="numberGuess2High.png";
    }
    else if(guessNum<randomNum)
    {
        document.getElementById("cat").src="numberGuess2Low.png";
    }
    else if(guessNum==randomNum){
        document.getElementById("cat").src="numberGuessWin.png";
    }
    else{
        document.getElementById("cat").src="numberGuessWhat.png";
    }
}
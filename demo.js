
var randomNum = Math.round(Math.random()*99)+1;
console.log("The answer is "+randomNum+", Brother.");
var tries=1;
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
        document.body.style.background="url(party.gif)";

            if(tries==1)
            console.log("You got the answer in "+tries+" try.")
            else if(tries>1)
            console.log("You got the answer in "+tries+" tries.")
    }
    else{
        document.getElementById("cat").src="numberGuessWhat.png";
    }
    tries++;
}
console.log("http://api.openweathermap.org/data/2.5/forecast?q=Salt+Lake+City,us&appid=73586499c17eb1dcc199a2f1291140e6")

//questions:
//how to make background party gif non-repeat across the page
//
//why does page refresh when I press enter on the input-box?
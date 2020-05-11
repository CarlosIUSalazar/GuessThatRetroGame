

let userScore = 0;
let gameRound = 0;
let gameTitle = "";
let gamePublisher = "";
let yearPublished = "";
let platform = "";
let answer1 = "";
let answer2 = "";
let answer3 = "";
let answer4 = "";
let rightAnswer = "";
let currentScore = document.getElementById('Score').innerHTML = userScore;
let currentRound = document.getElementById('Round').innerHTML = gameRound;
let button1 = document.getElementById("answer1");
let button2 = document.getElementById("answer2");
let button3 = document.getElementById("answer3");
let button4 = document.getElementById("answer4");
let filterStrength = 40;
console.log("length",nesGames.length)
let randomGameNumber = ""
let randomGame = [] 
let potentialWinnablePoints = 100;
let wrongGuessesCount = 0;

function generateNewGame(){

    //IF 10 ROUNDS END THE GAME
    if (gameRound === 10){
        alert("Game Finished!!")
        gameFinished()
    }

    //SETS A BLUR OF 40 BY DEFAULT TO IMAGE
    filterStrength = 40;
    document.getElementById('boxArt').style.filter = `blur(40px)`

    //SETS GAME ROUND TO 1
    gameRound++
    document.getElementById('Round').innerHTML = gameRound;

    //RESET WINNABLE POINTS TO 100
    wrongGuessesCount = 100;

    //DISPLAYS THIS ROUND WINNABLE POINTS
    document.getElementById('WinnablePoints').innerHTML = potentialWinnablePoints;

    //RESET WRONG GUESSES COUNT TO 0
    wrongGuessesCount = 0;
    
    //GENERATE A RANDOM NUMBER IN THE DATA ARRAY
    randomGameNumber = Math.floor(Math.random() * nesGames.length)
    console.log(randomGameNumber)
    randomGame = nesGames[randomGameNumber]
    console.log(randomGame)
    //ACTIVATE ANSWER BUTTONS AND DEACTIVATE NEXT BUTTON
    document.getElementById("answer1").style.visibility = "visible";
    document.getElementById("answer2").style.visibility = "visible";
    document.getElementById("answer3").style.visibility = "visible";
    document.getElementById("answer4").style.visibility = "visible";

    document.getElementById("answer1").disabled = false;
    document.getElementById("answer2").disabled = false;
    document.getElementById("answer3").disabled = false;
    document.getElementById("answer4").disabled = false;
    document.getElementById("nextGame").disabled = true;

    //Gets the image from the random number array selected
    document.getElementById('boxArt').src=randomGame.Image;

    //Gets the right Game Title 
    rightAnswer = randomGame.Title;
    console.log("right Answer", rightAnswer)

    //Places the right answer in a random button from the 4 answer buttons
    let random1to4 = Math.floor(Math.random() * 4 + 1)
    console.log(random1to4)
    //Right answer button
    document.getElementById('answer'+random1to4).innerHTML=rightAnswer;
    
    //Calls to make Wrong Answers and assign them to remaining buttons
    wrongAnswersGenerator(rightAnswer,random1to4,gameRound)
}

//generateNewGame()

function wrongAnswersGenerator(rightAnswer,random1to4){
    let count = 0;
    let buttonArray = [1,2,3,4]

    //REMOVE The number of button that has the right answer
    const index = buttonArray.indexOf(random1to4);
    if (index > -1) {
        buttonArray.splice(index, 1);
    }
    console.log("buttonArrayFiltered", buttonArray)

    //GRABS Random game names that are NOT the right answer and assigns to the remaining 3 buttons
    for(let i = 0; count < 3; i++){
        randomWrongGameName = Math.floor(Math.random() * nesGames.length)
        if(nesGames[i].Title !== rightAnswer){
            document.getElementById('answer'+ buttonArray[0]).innerHTML=nesGames[i].Title;
            count++
            buttonArray.shift()
        }
    }
}

function guessGame(x){
    console.log("From guessGame function with value of ", x)
    console.log(rightAnswer)
    console.log(document.getElementById("answer"+x).innerHTML)
    console.log("userScore before is ", userScore)
    
    //Sequence for guessing a new game.
    //If the user guesses the right answer
    if (document.getElementById("answer"+x).innerHTML === rightAnswer) {
        //IF ANSWER IS RIGHT
        //Increase Score
        userScore += potentialWinnablePoints;
        document.getElementById('Score').innerHTML = userScore
        //Increase Round
        document.getElementById('Round').innerHTML = gameRound;
        document.getElementById('boxArt').style.filter = `blur(${0}px)`
        // DISABLE ANSWER BUTTONS UPON CORRECT ANSWER AND ENABLE NEXT BUTTON
        document.getElementById("nextGame").disabled = false;
        document.getElementById("answer1").disabled = true;
        document.getElementById("answer2").disabled = true;
        document.getElementById("answer3").disabled = true;
        document.getElementById("answer4").disabled = true;
        potentialWinnablePoints = 100;

    } else {
        //DECREASE INTENSITY OF FILTER BY 10
        filterStrength -= 10;
        document.getElementById('boxArt').style.filter = `blur(${filterStrength}px)`
        document.getElementById("answer"+x).disabled = true;
        //
        if(potentialWinnablePoints === 25){
            potentialWinnablePoints = 0;
        }
        if(potentialWinnablePoints === 50){
            potentialWinnablePoints = 25;
        }
        if(potentialWinnablePoints === 100){
            potentialWinnablePoints = 50;
        }
        //UPDATES THIS ROUND WINNABLE POINTS
        document.getElementById('WinnablePoints').innerHTML = potentialWinnablePoints;

        //INCREASES THE WRONG GUESS COUNT
        wrongGuessesCount++
        console.log("WrongGuessesCount ",wrongGuessesCount)
        //IF GUESSES 3 ANSWERS WRONG
        if(wrongGuessesCount === 3){
            document.getElementById('boxArt').style.filter = `blur(0px)`;
            document.getElementById("answer1").disabled = true;
            document.getElementById("answer2").disabled = true;
            document.getElementById("answer3").disabled = true;
            document.getElementById("answer4").disabled = true;
            document.getElementById("nextGame").disabled = false;
            wrongGuessesCount = 0;
        }
        
    }


}

function gameFinished(){
    alert("Your Final Score is "+userScore+". Play again?")
    location.reload()
}



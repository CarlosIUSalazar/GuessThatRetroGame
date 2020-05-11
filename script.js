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

function generateNewGame(){
    //Gets a random number in the data array
    filterStrength = 40;
    document.getElementById('boxArt').style.filter = `blur(40px)`

    randomGameNumber = Math.floor(Math.random() * nesGames.length)
    console.log(randomGameNumber)
    randomGame = nesGames[randomGameNumber]
    console.log(randomGame)


    document.getElementById("answer1").disabled = false;
    document.getElementById("answer2").disabled = false;
    document.getElementById("answer3").disabled = false;
    document.getElementById("answer4").disabled = false;
    document.getElementById("nextGame").disabled = true;

    //Gets the image from the random number array selected
    document.getElementById('boxArt').src=randomGame.Image;



    rightAnswer = randomGame.Title;
    console.log("right Answer", rightAnswer)

    let random1to4 = Math.floor(Math.random() * 4 + 1)
    console.log(random1to4)
    //Right answer button
    document.getElementById('answer'+random1to4).innerHTML=rightAnswer;
    
    //Wrong Answers to remaining buttons
    wrongAnswersGenerator(rightAnswer,random1to4)

}

//generateNewGame()

function wrongAnswersGenerator(rightAnswer,random1to4){
    let count = 0;
    let buttonArray = [1,2,3,4]
    let randomWrongGameName;

    //REMOVE The number of button that has the right answer
    const index = buttonArray.indexOf(random1to4);
    if (index > -1) {
        buttonArray.splice(index, 1);
    }
    console.log("buttonArrayFiltered", buttonArray)

    //GRABS Random game names that are NOT the right answer
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
    
    if (document.getElementById("answer"+x).innerHTML === rightAnswer) {
        //if answer is right: increase score, deactivate answer buttons, display next button
        userScore += 100;
        document.getElementById('Score').innerHTML = userScore
        //console.log("userScore after is ", userScore)
        //gameRound++;
        document.getElementById('Round').innerHTML = gameRound;
        document.getElementById('boxArt').style.filter = `blur(${0}px)`
        // DISABLE ANSWER BUTTONS UPON CORRECT ANSWER AND ENABLE NEXT BUTTON
        document.getElementById("nextGame").disabled = false;
        document.getElementById("answer1").disabled = true;
        document.getElementById("answer2").disabled = true;
        document.getElementById("answer3").disabled = true;
        document.getElementById("answer4").disabled = true;
   

    } else {
        //decrease intensity of filter by 10
        filterStrength -= 10;
        document.getElementById('boxArt').style.filter = `blur(${filterStrength}px)`
    }

}
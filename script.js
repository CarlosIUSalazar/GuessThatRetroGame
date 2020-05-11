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

console.log("length",nesGames.length)

let randomGameNumber = Math.floor(Math.random() * nesGames.length)
console.log(randomGameNumber)

let randomGame = nesGames[randomGameNumber]
console.log(randomGame)

function generateNewGame(){
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

generateNewGame()

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

    //GRABS Random game names that are NOT the right name
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
    
}
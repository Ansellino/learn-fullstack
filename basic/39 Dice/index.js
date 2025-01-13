function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1; 
}

var rollButton = document.getElementById("roll-button");

rollButton.addEventListener("click", function(){
    // random number 1
    var randomNumber1 = getRandomNumber();
    var randomDiceImage = "dice" + randomNumber1 +".png";
    var randomImageSource = "images/" + randomDiceImage;
    var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

    // random number 2
    var randomNumber2 = getRandomNumber();
    var randomDiceImage2 = "dice" + randomNumber2 +".png";
    var randomImageSource = "images/" + randomDiceImage2;
    var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

    // If player 1 wins
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
});
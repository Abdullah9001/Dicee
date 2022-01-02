// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomImage = "dicee" + randomNumber1 + ".png";

// var randomImageSource = "images/" + randomImage;

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dicee" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 1 wins !";
// } 
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 wins !";
// }
// else {
//   document.querySelector("h1").innerHTML= "Draw !";
// }




var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomImage = "images/dicee" + randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dicee" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomImage > randomImage2){
  document.querySelector("h1").innerHTML = "player 1 is wins";
}
  else if(randomImage2 > randomImage){
    document.querySelector("h1").innerHTML = "player 2 is wins";
  }
  else{
    document.querySelector("h1").innerHTML = "draw";
  }

var player1 = document.querySelector(".img1");
var player2 = document.querySelector(".img2");
var diceImages = ["images/dice1.svg", "images/dice2.svg", "images/dice3.svg", "images/dice4.svg", "images/dice5.svg", "images/dice6.svg"];

function throwDice() {
  var diceThrow1 = Math.floor(Math.random() * diceImages.length);
  var diceThrow2 = Math.floor(Math.random() * diceImages.length);
  player1.setAttribute("src", `${diceImages[diceThrow1]}`);
  player2.setAttribute("src", `${diceImages[diceThrow2]}`);
  
  if (diceThrow1 > diceThrow2) {
    document.getElementById("p1").innerText = "Player 1 🚩";
    document.getElementById("p1").style.color = "green";
  }
  
  else if (diceThrow1 < diceThrow2) {
    document.getElementById("p2").innerText = "Player 2 🚩";
    document.getElementById("p2").style.color = "green";
  }
  
  else if (diceThrow1 == diceThrow2) {
    document.getElementById("p1").innerText = "It's a TIE!";
    document.getElementById("p2").innerText = "It's a TIE!";
  }
}

throwDice();
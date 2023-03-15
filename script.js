// Define variables
var playerCar;
var computerCar;
var gameBoard;
var startButton;
var playerCarPosition = 0;
var computerCarPosition = 0;

// Function to move the player car
function movePlayerCar(event) {
  if (event.keyCode == 37) {
    playerCarPosition -= 10;
    if (playerCarPosition < 0) {
      playerCarPosition = 0;
    }
    playerCar.style.left = playerCarPosition + "px";
  } else if (event.keyCode == 39) {
    playerCarPosition += 10;
    if (playerCarPosition > gameBoard.offsetWidth - playerCar.offsetWidth) {
      playerCarPosition = gameBoard.offsetWidth - playerCar.offsetWidth;
    }
    playerCar.style.left = playerCarPosition + "px";
  }
}

// Function to move the computer car
function moveComputerCar() {
  var randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber == 0) {
    computerCarPosition -= 10;
    if (computerCarPosition < 0) {
      computerCarPosition = 0;
    }
    computerCar.style.left = computerCarPosition + "px";
  } else {
    computerCarPosition += 10;
    if (computerCarPosition > gameBoard.offsetWidth - computerCar.offsetWidth) {
      computerCarPosition = gameBoard.offsetWidth - computerCar.offsetWidth;
    }
    computerCar.style.left = computerCarPosition + "px";
  }
}

// Function to start the game
function startGame() {
  // Initialize variables
  playerCar = document.getElementById("player-car");
  computerCar = document.getElementById("computer-car");
  gameBoard = document.getElementById("game-board");
  startButton = document.getElementById("start-button");

  // Set initial positions of the cars
  playerCar.style.left = playerCarPosition + "px";
  computerCar.style.left = computerCarPosition + "px";

  // Add event listener to move the player car
  document.addEventListener("keydown", movePlayerCar);

  // Start moving the computer car
 

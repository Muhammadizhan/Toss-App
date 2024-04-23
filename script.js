document.getElementById("headsButton").addEventListener("click", function () {
  tossCoin("Heads");
});

document.getElementById("tailsButton").addEventListener("click", function () {
  tossCoin("Tails");
});

function tossCoin(choice) {
  var resultText = document.getElementById("result");
  var coin = document.getElementById("coin");

  // Disable buttons during animation
  document.getElementById("headsButton").disabled = true;
  document.getElementById("tailsButton").disabled = true;

  // Show the coin
  coin.style.display = "block";

  // Clear previous result
  resultText.innerText = "";

  // Simulate coin toss
  setTimeout(function () {
    // Enable buttons after animation finishes
    document.getElementById("headsButton").disabled = false;
    document.getElementById("tailsButton").disabled = false;

    // Hide the coin
    coin.style.display = "none";

    // Randomly determine result
    var result = Math.floor(Math.random() * 2) + 1; // Use 1 for Heads and 2 for Tails

    // Show result message
    if (
      (result === 1 && choice === "Heads") ||
      (result === 2 && choice === "Tails")
    ) {
      resultText.innerText = "Congratulations! You win!";
    } else {
      resultText.innerText = "Sorry! You lose!";
    }
  }, 1000); // Adjust timing to match the toss animation duration
}

document.getElementById("headsButton").addEventListener("click", function () {
  tossCoin("Heads");
});

document.getElementById("tailsButton").addEventListener("click", function () {
  tossCoin("Tails");
});

function tossCoin(choice) {
  var resultText = document.getElementById("result");
  var coin = document.getElementById("coin");

  
  document.getElementById("headsButton").disabled = true;
  document.getElementById("tailsButton").disabled = true;


  coin.style.display = "block";


  resultText.innerText = "";

 
  setTimeout(function () {
    // Enable buttons after animation finishes
    document.getElementById("headsButton").disabled = false;
    document.getElementById("tailsButton").disabled = false;

   
    coin.style.display = "none";

  
    var result = Math.floor(Math.random() * 2) + 1;



    
    if (
      (result === 1 && choice === "Heads") ||
      (result === 2 && choice === "Tails")
    ) {
      resultText.innerText = "Congratulations! You win!";
    } else {
      resultText.innerText = "Sorry! You lose!";
    }
  }, 1000);
}

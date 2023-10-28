let count = 0;
let bullet = 12;
let gameEnded = false;

//bullet sound and bullet count
document.body.addEventListener("click", () => {
  if (gameEnded) return;

  let bullet = parseInt(document.getElementById("currentbullets").innerHTML);

  if (bullet > 0) {
    bullet -= 1;
    document.getElementById("gunshot").play();
    document.getElementById("currentbullets").innerHTML = bullet;
  } else if (bullet === 0 && count < 6000) {
    gameOver(false);
  } else if (count === 6000) {
    gameOver(true);
  }
});

//shooting bird
function shoot(bird) {
  
  bird.style.animation = 'fall 2s linear 0s 1 forwards';

  let dog = document.getElementById('dog');
  dog.style.animation = '';
  void dog.offsetWidth;
  dog.style.animation = 'dogmov 0.5s linear 0s 2 alternate';

  document.getElementById('duck-caught').play();

  count += 500;
  document.getElementById("currentscore").innerHTML = count;

}

//bird flying sound
const birdElements = [
  document.getElementById("bird1"),
  document.getElementById("bird2"),
  document.getElementById("bird3"),
  document.getElementById("bird4"),
  document.getElementById("bird5"),
  document.getElementById("bird6"),
  document.getElementById("bird7"),
  document.getElementById("bird8"),
  document.getElementById("bird9"),
  document.getElementById("bird10"),
  document.getElementById("bird11"),
  document.getElementById("bird12"),
];

function playBirdSoundWithDelay() {
  setTimeout(() => {
    document.getElementById("duck-flapping").play();
  }, 1000); 
}

birdElements.forEach((birdElement) => {
  birdElement.addEventListener("animationstart", playBirdSoundWithDelay);
});

const tryAgainButton = document.getElementById("try-again");


function gameOver(isWin) {
  if (gameEnded) return; 

  gameEnded = true;

  document.getElementById("gunshot").pause();
  document.getElementById("duck-caught").pause();
  document.getElementById("duck-flapping").pause();

  birdElements.forEach((birdElement) => {
    birdElement.style.animation = "none";
  });

  if (isWin) {
    document.getElementById("box").innerHTML = "YOU WON!!";
  } else {
    document.getElementById("box").innerHTML = "YOU LOST!!";
  }

  tryAgainButton.style.display = "block";
}

tryAgainButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

function switchToLandscapeMode() {
  if (window.matchMedia("(max-width: 769px) and (orientation: portrait)").matches) {
    // Check if the screen width is less than 769px and is in portrait mode.
    // Attempt to force landscape mode.
    if (window.screen.orientation && window.screen.orientation.lock) {
      window.screen.orientation.lock("landscape").then(() => {
        console.log("Switched to landscape mode");
      }).catch((error) => {
        console.error("Failed to switch to landscape mode:", error);
      });
    } else if (window.screen.lockOrientation) {
      // Alternative method (may not be supported by all browsers).
      window.screen.lockOrientation("landscape");
    }
  }
}

// Call the function when the page loads.
window.addEventListener("load", switchToLandscapeMode);
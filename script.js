let count = 0;
let bullet = 20;

document.body.addEventListener('click', () => {
   document.getElementById('gunshot').play();

  let bullet = parseInt(document.getElementById("currentbullets").innerHTML);

  if (bullet > 0) {
    bullet -= 1;
    document.getElementById("currentbullets").innerHTML = bullet;
  }
});


function shoot(bird) {
  
  bird.style.animation = 'fall 2s linear 0s 1 forwards';

  let dog = document.getElementById('dog');
  dog.style.animation = '';
  void dog.offsetWidth;
  dog.style.animation = 'dogmov 0.5s linear 0s 2 alternate';

  document.getElementById('duck-caught').play();

  count += 500;
  bullet -= 1;

  document.getElementById("currentscore").innerHTML = count;
  document.getElementById("currentbullets").innerHTML = bullet;
}

// Create an array of bird elements
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

// Function to play the bird sound
function playBirdSound() {
  document.getElementById("duck-flapping").play();
}

// Add animationstart event listener to each bird element
birdElements.forEach((birdElement) => {
  birdElement.addEventListener("animationstart", playBirdSound);
});


// Initialize the bird sound and a flag to track if it's playing
const birdSound = document.getElementById("duck-flapping");
let birdSoundPlaying = false;

// Function to play the bird sound
function playBirdSound() {
  birdSound.play();
  birdSoundPlaying = true;
}

// Function to stop the bird sound
function stopBirdSound() {
  birdSound.pause();
  birdSound.currentTime = 0;
  birdSoundPlaying = false;
}

// Add animationstart event listener to each bird element
birdElements.forEach((birdElement) => {
  birdElement.addEventListener("animationstart", playBirdSound);
});

// When the audio ends, restart it
birdSound.addEventListener("ended", () => {
  if (birdSoundPlaying) {
    birdSound.currentTime = 0; // Reset the audio to the beginning
    birdSound.play(); // Play it again
  }
});

// Click event listener to decrement bullets
document.body.addEventListener('click', () => {
  let bullet = parseInt(document.getElementById("currentbullets").innerHTML);

  if (bullet > 0) {
    document.getElementById('gunshot').play();
    bullet -= 1;
    document.getElementById("currentscore").innerHTML = count;
    document.getElementById("currentbullets").innerHTML = bullet;
  } else {
    // When bullets are zero, stop the bird sound
    stopBirdSound();
  }
});
































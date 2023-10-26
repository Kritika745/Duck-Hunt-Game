let count = 0;
let bullet = 20;



//bullet sound and bullet count
document.body.addEventListener('click', () => {
  
  let bullet = parseInt(document.getElementById("currentbullets").innerHTML);

  if (bullet > 0) {
    bullet -= 1;
    document.getElementById("currentbullets").innerHTML = bullet;
  }
  if(bullet){
  document.getElementById('gunshot').play();
}
});


function shoot(bird) {
  
  bird.style.animation = 'fall 2s linear 0s 1 forwards';

  let dog = document.getElementById('dog');
  dog.style.animation = '';
  void dog.offsetWidth;
  dog.style.animation = 'dogmov 0.5s linear 0s 2 alternate';
  if(bullet){
     document.getElementById('duck-caught').play();
  }
  count += 500;
 

  document.getElementById("currentscore").innerHTML = count;
 
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
let timeoutID; 

function playBirdSoundWithDelay() {
  timeoutID = setTimeout(() => {
    if (bullet > 0) {
      document.getElementById("duck-flapping").play();
    }
  }, 100);
}

function stopBirdSound() {
  clearTimeout(timeoutID);
}

// Add animationstart event listener to each bird element
birdElements.forEach((birdElement) => {
  birdElement.addEventListener("animationstart", playBirdSoundWithDelay);
});

// Check for bullet changes and update the sound accordingly
function updateSound() {
  if (bullet > 0) {
    playBirdSoundWithDelay();
  } else {
    stopBirdSound();
  }
}

// Assuming you have a way to update the value of 'bullet' in your code,
// you can call updateSound() whenever 'bullet' changes to control the sound:
updateSound();


































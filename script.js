let count = 0;
let bullet = 12;

//bullet sound and bullet count
document.body.addEventListener('click', () => {

  let bullet = parseInt(document.getElementById("currentbullets").innerHTML);

  if (bullet > 0) {
    bullet -= 1;
    document.getElementById('gunshot').play();
    document.getElementById("currentbullets").innerHTML = bullet;
  } 
  else if (bullet === 0 && count < 6000) {
    document.getElementById("box").innerHTML = "YOU LOST!!";
  }
  else if (count === 6000) {
    document.getElementById("box").innerHTML = "YOU WON!!";
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





//gun sound
document.body.addEventListener('click', () => document.getElementById('gunshot').play());

//bird flapping sound





let count = 0;
let bullet = 6;

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


































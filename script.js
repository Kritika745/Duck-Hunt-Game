document.body.addEventListener('click', () => document.getElementById('gunshot').play());

let bullet=6;
let count=0;

function shoot(bird){

            bird.style.animation='fall 2s linear 0s 1 forwards';

            let dog = document.getElementById('dog');
            dog.style.animation = 'dogmov 0.5s linear 0s 2 alternate';

            
}

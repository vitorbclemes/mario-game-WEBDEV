const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud')
const gameover = document.querySelector('.game-over')

let score = 0;
const jump = () => {
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump')

        if(pipe.offsetLeft >= 1600){
            score++;
            document.getElementById('score-display').textContent = `Score: ${score}`;
        }
    },500);
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','') ;
    const cloudPosition = cloud.offsetLeft;

    if(pipePosition <= 120 && pipePosition >  0 && marioPosition <= 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        cloud.style.animation = 'none'
        cloud.style.left = `${cloudPosition}px`;

        gameover.style.display = 'block'

        clearInterval(loop)
    }
},10);

document.addEventListener('keydown', function(event) {
    if(event.key == " " || event.key == "Spacebar")
        jump();
});
document.addEventListener('DOMContentLoaded',()=>{
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let countDownTimerId;
let btn = document.querySelector('#start');
let btn2 = document.querySelector('#stop');

btn.addEventListener('click', () => {
    btn.setAttribute('disabled','true');
    moveMole();
    countDownTimerId = setInterval(countDown, 1000);
    countDown();
})

btn2.addEventListener('click', () => {
    location.reload();
    alert('GAME OVER!!! Your final score is ' + result);
})

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole');
  })

  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('mole');

  hitPosition = randomPosition.id;
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 500);
}

function countDown() {
 currentTime--;
 timeLeft.textContent = currentTime;

 if (currentTime < 0) {
   clearInterval(countDownTimerId);
   clearInterval(timerId);
   alert('GAME OVER!!! Your final score is ' + result);
   location.reload();
 }

}

})
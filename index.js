const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timer;


const createTimerAnimator = () => {
  return (seconds) => {

    timer = setInterval(() => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const sec = seconds % 60;
      timerEl.innerHTML = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(sec)
      seconds--
      console.log(seconds);

      if (seconds < 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

};

function padZero(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}



const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
  const cleanedValue = event.target.value.replace(/[^0-9]/g, '');
  event.target.value = cleanedValue;
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});

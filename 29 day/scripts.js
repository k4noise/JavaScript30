let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const timerButtons = document.querySelectorAll("[data-time]");

function addZero(number) {
  return number < 10 ? "0" + number : number;
}

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${addZero(remainderSeconds)}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const minutes = end.getMinutes();
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  endTime.textContent = `Be Back At ${adjustedHour}:${addZero(minutes)}`;
}

function startTimer() {
  const seconds = +this.dataset.time;
  timer(seconds);
}

timerButtons.forEach((button) => button.addEventListener("click", startTimer));

document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
function setDate() {
  const now = new Date();
  const secondHand = document.querySelector(".second-hand"),
    minuteHand = document.querySelector(".min-hand"),
    hourHand = document.querySelector(".hour-hand");
  secondHand.style.transform = `rotate(${getSeconds(now)}deg)`;
  minuteHand.style.transform = `rotate(${getMinutes(now)}deg)`;
  hourHand.style.transform = `rotate(${getHours(now)}deg)`;
}

const getSeconds = (currentTime) => 
  (secondsDegrees = (currentTime.getSeconds() / 60) * 360 + 90);


const getMinutes = (currentTime) => 
  (minuteDegrees = (currentTime.getMinutes() / 60) * 360 + 90);


const getHours = (currentTime) => 
  (hourDegrees = (currentTime.getHours() / 12) * 360 + 90);


setDate() // fix delay after page loading
setInterval(setDate, 1000);

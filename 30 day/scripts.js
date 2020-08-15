const holes = document.querySelectorAll(".hole");
const scoreboard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const button = document.querySelector("button");
let lastHole;
let haveTime = false;
let score = 0;

function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function appearedMole() {
  const time = random(400, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (haveTime) appearedMole();
  }, time);
}

function toggleGame() {
  score = 0;
  scoreboard.textContent = score;
  if (haveTime) {
    haveTime = false;
    button.textContent = 'Start!'
  } else {
    haveTime = true;
    button.textContent = 'Stop!'
    appearedMole();
  }
}

function moleBonk(e) {
  if (!e.isTrusted) return;
  score++;
  this.classList.remove("up");
  scoreboard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener("click", moleBonk));

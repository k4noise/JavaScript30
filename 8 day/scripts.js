const canvas = document.getElementById("draw"),
  ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hue = 0;

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = hue;
let direction = true;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue == 360 ? (hue = 0) : hue++;
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
  direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
const imgSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAKCAQAAABbXRvvAAAAAXNSR0IArs4c6QAAAMRJREFUOI21U1EWAiEIHNq9/5W6WEY/acyA2vZe+CHIgCMg4LRA+l28/14kBvdgwOCAD518UKufVb6fLIvUzgyJ5I3OLPlRYLOtcSuCQk1T+kddcRHpsPScS1kOB4BmwK1glm70kT0NRAgzCWX7oJQ+tYDHey+qNiFmcH1+SDnryoA2Iq01jqGn7HtiSSjptl39u+ykDdCmak4K3W8FoI6N3TQFapzM2nyCuvfLGZ7JM2ecS5i1XGb99rXFZ0ukX8nZG/kCzWKNkHWdJYEAAAAASUVORK5CYII=";

const DIGIT_HEIGHT = 10;
const DIGIT_WIDTH = 7;

const img = new Image();
img.src = imgSrc;

const canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

const pixelRatio = window.devicePixelRatio || 1;
canvas.width = canvas.offsetWidth * pixelRatio;
canvas.height = canvas.offsetHeight * pixelRatio;
context.scale(pixelRatio, pixelRatio);

canvas.width = 8 * DIGIT_WIDTH;
canvas.height = DIGIT_HEIGHT;

const drawNumber = (x, number) => {
  context.drawImage(img, DIGIT_WIDTH * number, 0, DIGIT_WIDTH, DIGIT_HEIGHT, x, 0, DIGIT_WIDTH, DIGIT_HEIGHT);
}

const drawSeparator = (x) => {
  drawNumber(x, 10);
}

const draw = () => {
  const d = new Date();
  const hh = d.getHours();
  const mm = d.getMinutes();
  const ss = d.getSeconds();
  
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  drawNumber(0, Math.floor(hh/10));
  drawNumber(1 * DIGIT_WIDTH, hh%10);
  
  drawSeparator(2 * DIGIT_WIDTH);
  
  drawNumber((3 * DIGIT_WIDTH), Math.floor(mm/10));
  drawNumber(4 * DIGIT_WIDTH, mm%10);
  
  drawSeparator(5 * DIGIT_WIDTH);
  
  drawNumber(6 * DIGIT_WIDTH, Math.floor(ss/10));
  drawNumber(7 * DIGIT_WIDTH, ss%10);
 
  requestAnimationFrame(draw);
};

draw();
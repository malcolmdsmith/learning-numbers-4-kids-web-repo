let i = 0;
let prev = -1;

sums = [
  { num1: 1, num2: 1, result: 2 },
  { num1: 1, num2: 2, result: 3 },
  { num1: 1, num2: 3, result: 4 },
  { num1: 1, num2: 4, result: 5 },
  { num1: 2, num2: 2, result: 4 },
  { num1: 2, num2: 3, result: 5 },
  { num1: 2, num2: 4, result: 6 },
  { num1: 2, num2: 5, result: 7 },
  { num1: 3, num2: 1, result: 4 },
  { num1: 3, num2: 2, result: 5 },
  { num1: 3, num2: 3, result: 6 },
];

function loadAddingPage() {
  displayWelcome("adding");
  showNextEquation();
}

function showNextEquation() {
  const num1Puppies = document.querySelector("#num1Puppies");
  const num2Puppies = document.querySelector("#num2Puppies");
  const num1Num = document.querySelector("#num1Num");
  const num2Num = document.querySelector("#num2Num");
  const resultNum = document.querySelector("#resultNum");
  clearElement(num1Puppies);
  clearElement(num2Puppies);
  clearElement(resultPuppies);
  resultNum.innerText = "?";

  addPuppies(num1Puppies, sums[i].num1);
  addPuppies(num2Puppies, sums[i].num2);
  addNumber(num1Num, sums[i].num1);
  addNumber(num2Num, sums[i].num2);
  prev = -1;
}

function addPuppies(div, num) {
  for (let j = 1; j <= num; j++) {
    const img = document.createElement("img");
    img.src = "/images/dog50x54.png";
    div.appendChild(img);
  }
}

function addNumber(div, num) {
  div.innerText = num;
}

function showResult() {
  if (prev === i) return;

  const resultPuppies = document.querySelector("#resultPuppies");
  const resultNum = document.querySelector("#resultNum");
  addPuppies(resultPuppies, sums[i].result);
  resultNum.innerText = sums[i].result;
  if (i === sums.length - 1) {
    i = 0;
  } else i++;
  prev = i;
}

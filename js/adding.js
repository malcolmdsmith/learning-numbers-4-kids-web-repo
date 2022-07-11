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

minuses = [
  { num1: 2, num2: 1, result: 1 },
  { num1: 3, num2: 1, result: 2 },
  { num1: 4, num2: 2, result: 2 },
  { num1: 5, num2: 1, result: 4 },
  { num1: 5, num2: 2, result: 3 },
  { num1: 5, num2: 3, result: 2 },
  { num1: 6, num2: 1, result: 5 },
  { num1: 6, num2: 6, result: 0 },
  { num1: 6, num2: 3, result: 3 },
  { num1: 7, num2: 2, result: 5 },
  { num1: 7, num2: 3, result: 4 },
];

function loadAddingPage(type) {
  i = 0;
  displayWelcome("subtracting");
  if (type === "sums") $("#plus").text("+");
  else $("#plus").text("-");
  showNextEquation(type);
}

function showNextEquation(type) {
  let arr = [];
  if (type === "sums") arr = sums;
  else arr = minuses;

  $("#num1 div:first").empty();
  $("#num2 div:first").empty();
  $("#answer div:first").empty();
  $("#answer div:last").text("?");

  addPuppies($("#num1 div:first")[0], arr[i].num1);
  addPuppies($("#num2 div:first")[0], arr[i].num2);

  addNumber($("#num1 div:last")[0], arr[i].num1);
  addNumber($("#num2 div:last")[0], arr[i].num2);

  prev = -1;
}

function addPuppies(div, num) {
  for (let j = 1; j <= num; j++) {
    const img = document.createElement("img");
    img.src = "/images/dog50x54.png";
    div.append(img);
  }
}

function addNumber(div, num) {
  div.innerText = num;
}

function showResult(type) {
  if (prev === i) return;

  let arr = [];
  if (type === "sums") arr = sums;
  else arr = minuses;

  addPuppies($("#answer div:first")[0], arr[i].result);
  addNumber($("#answer div:last")[0], arr[i].result);
  if (i === sums.length - 1) {
    i = 0;
    congrats();
  } else i++;
  prev = i;
}

let eqNum = 0;
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
  eqNum = 0;
  if (type === "sums") {
    displayWelcome("adding");
    $("#plus").text("+");
  } else {
    displayWelcome("subtracting");
    $("#plus").text("-");
  }
  showNextEquation(type);
}

function showNextEquation(type) {
  if (eqNum === 0) $("#congrats").text("");

  let arr = [];
  if (type === "sums") arr = sums;
  else arr = minuses;

  $("#num1 div:last").empty();
  $("#num2 div:last").empty();
  $("#answer div:last").empty();
  $("#answer div:first").empty();
  $("#answer div:last").text("?");

  addPuppies($("#num1 div:last")[0], arr[eqNum].num1);
  addPuppies($("#num2 div:last")[0], arr[eqNum].num2);

  addNumber($("#num1 div:first")[0], arr[eqNum].num1);
  addNumber($("#num2 div:first")[0], arr[eqNum].num2);

  prev = -1;
}

function addPuppies(div, num) {
  for (let j = 1; j <= num; j++) {
    const img = document.createElement("img");
    img.src = "/images/dog50x54.png";
    img.width = 50;
    img.height = 54;
    div.append(img);
  }
}

function addNumber(div, num) {
  const html =
    "<div id='numWord'>" +
    numWords[num - 1] +
    "</div><div id='eqNum'>" +
    num +
    "</div>";
  console.info(html);
  div.innerHTML = html;
}

function showResult(type) {
  if (prev === eqNum) return;

  let arr = [];
  if (type === "sums") arr = sums;
  else arr = minuses;

  $("#answer div:last").text("");
  $("#answer div:first").text("");

  addPuppies($("#answer div:last")[0], arr[eqNum].result);
  addNumber($("#answer div:first")[0], arr[eqNum].result);
  if (eqNum === sums.length - 1) {
    eqNum = 0;
    congrats();
  } else {
    eqNum++;
  }
  prev = eqNum;
}

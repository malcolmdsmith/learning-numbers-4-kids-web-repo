let number = 1;

numWords = [
  "ONE",
  "TWO",
  "THREE",
  "FOUR",
  "FIVE",
  "SIX",
  "SEVEN",
  "EIGHT",
  "NINE",
  "TEN",
];

function startCounting() {
  console.info("Start counting...", number);
  $("#congrats").val("");
  $("#imgDiv").empty();
  run();
}

function run() {
  const img = document.createElement("img");
  img.src = "/images/dog.png";
  $("#imgDiv").append(img);
  $("#numDiv").empty();
  $("#numDiv").append(
    "<div id='num'>" +
      number +
      "</div><div id='numWord'>" +
      numWords[number - 1] +
      "</div>"
  );

  setTimeout(() => {
    number++;
    if (number <= 10) {
      run();
    } else {
      number = 1;
      congrats();
    }
  }, 1000);
}

function initializeButtonModePage() {
  startAnimation();
  displayWelcome("counting");
  number = 1;
  nextNumber();
}

function nextNumber() {
  if (number === 10) congrats();

  if (number === 11) {
    number = 1;
    $("#imgDiv").empty();
    $("#congrats").empty();
  }

  const img = document.createElement("img");
  img.src = "/images/dog.png";
  $("#imgDiv").append(img);
  $("#numDiv").empty();
  $("#numDiv").append(
    "<div id='num'>" +
      number +
      "</div><div id='numWord'>" +
      numWords[number - 1] +
      "</div>"
  );
  number++;
}

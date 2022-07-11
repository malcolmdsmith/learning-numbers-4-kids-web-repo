let i = 1;
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
  console.info("Start counting...");
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
      i +
      "</div><div id='numWord'>" +
      numWords[i - 1] +
      "</div>"
  );

  setTimeout(() => {
    i++;
    if (i <= 10) run();
    else {
      i = 1;
      congrats();
    }
  }, 1000);
}

function initializeButtonModePage() {
  displayWelcome("counting");
  i = 1;
  nextNumber();
}
function nextNumber() {
  if (i === 10) congrats();

  if (i === 11) {
    i = 1;
    $("#imgDiv").empty();
    $("#congrats").empty();
  }

  const img = document.createElement("img");
  img.src = "/images/dog.png";
  $("#imgDiv").append(img);
  $("#numDiv").empty();
  $("#numDiv").append(
    "<div id='num'>" +
      i +
      "</div><div id='numWord'>" +
      numWords[i - 1] +
      "</div>"
  );
  i++;
}

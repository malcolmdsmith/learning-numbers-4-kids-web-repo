function displayWelcome() {
  const name = getCookie("kidsname");
  const tmp = document.getElementById("kidsname");
  tmp.textContent = "Hello " + name + " lets start counting!!";
}

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
  const congrats = document.querySelector("#congrats");
  congrats.innerText = "";
  const imgDiv = document.querySelector("#imgDiv");
  clearElement(imgDiv);
  run(imgDiv);
}

function run(imgDiv) {
  const numDiv = document.querySelector("#numDiv");
  const img = document.createElement("img");
  img.src = "/images/dog.png";
  imgDiv.appendChild(img);
  numDiv.innerHTML =
    "<div id='num'>" +
    i +
    "</div><div id='numWord'>" +
    numWords[i - 1] +
    "</div>";

  setTimeout(() => {
    i++;
    if (i <= 10) run(imgDiv);
    else {
      i = 1;
      congrats();
    }
  }, 1000);
}

function congrats() {
  const congrats = document.querySelector("#congrats");
  congrats.innerText = "Well Done " + getCookie("kidsname") + "!!!";
}

function initializeButtonModePage() {
  displayWelcome();
  i = 1;
  nextNumber();
}
function nextNumber() {
  if (i === 11) {
    i = 1;
    const imgDiv = document.querySelector("#imgDiv");
    clearElement(imgDiv);
  }
  console.info("next...");
  const numDiv = document.querySelector("#numDiv");
  const img = document.createElement("img");
  img.src = "/images/dog.png";
  imgDiv.appendChild(img);
  numDiv.innerHTML =
    "<div id='num'>" +
    i +
    "</div><div id='numWord'>" +
    numWords[i - 1] +
    "</div>";
  i++;
}

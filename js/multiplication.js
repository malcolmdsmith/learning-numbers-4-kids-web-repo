let multi1 = 1;
let multi2 = 1;
let fromMulti = 0;
let toMulti = 0;

function loadMultiplicationPage() {
  fromMulti = parseInt(getCookie("fromMulti"));
  multi1 = fromMulti;
  multi2 = fromMulti;
  toMulti = parseInt(getCookie("toMulti"));
  console.info(fromMulti, toMulti);
  displayWelcome("multiplying");
  showNumbers();
}

function showNextMultiEquation() {
  console.info("---", multi1, multi2, toMulti);
  if (multi2 === toMulti) {
    multi1 += 1;
    if (multi1 > toMulti) {
      multi1 = 1;
    }
    multi2 = 1;
  } else {
    multi2 += 1;
  }
  showNumbers();
}

function showNumbers() {
  $("#multi1").text(multi1);
  $("#multi2").text(multi2);
  $("#multi-answer").text("?");
}

function showMultiResult() {
  //console.info("...", multi1 * multi2);
  $("#multi-answer").text(multi1 * multi2);

  if (multi1 === toMulti && multi2 === toMulti) congrats();
}
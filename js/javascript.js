function setCookie(name, value) {
  document.cookie = name + "=" + escape(value) + "; Path=/;"; // expires=" + expiry.toGMTString();
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function deleteCookie(name) {
  //document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie = name + "=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function displayWelcome(stype) {
  let name = getCookie("kidsname");
  if (!name) name = "Joe";
  const result = "Hello " + name + ", lets start " + stype + "!!";
  $("#welcome").text(result);
}

function loadIndexPage() {
  deleteCookie("fromMulti");
  deleteCookie("toMulti");
  function processForm() {
    const kidsname = $("#kidsname").val();
    console.info(kidsname);
    setCookie("kidsname", kidsname);
  }

  const name = getCookie("kidsname");
  console.info(name);
  if (name) {
    $("#kidsname").val(name);
  }

  // Access the form element...
  const form = $("form")[0];

  if (!form) return;
  // ...and take over its submit event.
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    processForm();
    const mode = getCookie("countingMode");
    window.location =
      mode === "auto" ? "/counting.html" : "/countingButton.html";
  });
}

function clearElement(imgDiv) {
  while (imgDiv.firstChild) {
    imgDiv.removeChild(imgDiv.firstChild);
  }
}

function loadCountingPage(src) {
  let mode = getCookie("countingMode");
  if (!mode) {
    mode = "button";
    setCookie("countingMode", mode);
  }
  if (mode === "auto") {
    if (src !== "auto") window.location = "/counting.html";
  } else {
    if (src !== "button") window.location = "/countingButton.html";
  }
}

function congrats() {
  let name = getCookie("kidsname");
  if (!name) name = "Joe";
  $("#congrats").text("Well Done " + name + "!!!");
}

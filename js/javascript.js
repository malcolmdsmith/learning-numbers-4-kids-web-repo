function setCookie(name, value) {
  document.cookie = name + "=" + escape(value); // + "; path=/; expires=" + expiry.toGMTString();
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const name = parts.pop().split(";").shift();
    return name;
  }
}

function displayWelcome(stype) {
  const name = getCookie("kidsname");
  const tmp = document.getElementById("kidsname");
  console.info(stype, name);
  tmp.textContent = "Hello " + name + " lets start " + stype + "!!";
}

function loadIndexPage() {
  //alert("Hi");
  function processForm() {
    const kidsname = document.getElementById("kidsname").value;
    setCookie("kidsname", kidsname);
  }

  const name = getCookie("kidsname");
  if (name) {
    const kidsname = document.getElementById("kidsname");
    kidsname.value = name;
  }

  // Access the form element...
  const form = document.getElementById("userNameForm");

  if (!form) return;

  // ...and take over its submit event.
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    processForm();
    window.location = "/counting.html";
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

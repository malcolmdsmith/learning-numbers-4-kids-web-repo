function setCookie(name, value) {
  document.cookie = name + "=" + escape(value); // + "; path=/; expires=" + expiry.toGMTString();
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function displayWelcome(stype) {
  const name = getCookie("kidsname");
  const result = "Hello " + name + " lets start " + stype + "!!";
  $("#welcome").text(result);
}

function loadIndexPage() {
  function processForm() {
    const kidsname = $("#kidsname").val();
    console.info(kidsname);
    setCookie("kidsname", kidsname);
  }

  const name = getCookie("kidsname");
  if (name) {
    const kidsname = $("#kidsname").val();
    kidsname.value = name;
  }

  // Access the form element...
  const form = $("form")[0];

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

function congrats() {
  $("#congrats").text("Well Done " + getCookie("kidsname") + "!!!");
}

function settingsOnLoad() {
  updateSettingsFromCookies();
  const form = document.getElementById("settingsForm");

  if (!form) return;

  // ...and take over its submit event.
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const countingMode = document.querySelector(
      'input[name="countingMode"]:checked'
    ).value;
    setCookie("countingMode", countingMode);

    const fromMulti = document.querySelector("#fromMulti").value;
    if (fromMulti !== "") {
      setCookie("fromMulti", fromMulti);
      const toMulti = document.querySelector("#toMulti").value;
      setCookie("toMulti", toMulti);
    }
    window.location = "/";
    //loadCountingPage("settings");
  });
}

function updateSettingsFromCookies() {
  const mode = getCookie("countingMode");
  $("#" + mode + "Mode").prop("checked", true);
  const fromMulti = getCookie("fromMulti");
  $("#fromMulti").val(fromMulti);
  const toMulti = getCookie("toMulti");
  $("#toMulti").val(toMulti);
}

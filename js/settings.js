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
    loadCountingPage("settings");
  });
}

function updateSettingsFromCookies() {
  const mode = getCookie("countingMode");
  $("#" + mode + "Mode").prop("checked", true);
}

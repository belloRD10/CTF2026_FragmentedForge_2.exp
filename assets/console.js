(function () {
  "use strict";

  function boot() {
    var trigger = document.querySelector("[data-action='scan']");
    var screen = document.getElementById("screen");

    if (!trigger) {
      return;
    }

    trigger.addEventListener("click", function () {
      if (typeof window.runShadowScan === "function") {
        window.runShadowScan();
      }
      if (screen) {
        screen.textContent = "Shadow scan executed. The instrument only reports to the console.";
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

(function () {
  "use strict";

  var MEMORY_KEY = "forge_shadow_archive";
  var archiveFragment = "X2MwbnQxbnUzc18xbg==";

  function seedMemory() {
    try {
      if (!localStorage.getItem(MEMORY_KEY)) {
        localStorage.setItem(MEMORY_KEY, archiveFragment);
      }
    } catch (err) {
      return;
    }
  }

  function inspectMemory() {
    var out = document.getElementById("result");
    var value = null;

    try {
      value = localStorage.getItem(MEMORY_KEY);
    } catch (err) {
      value = null;
    }

    if (out) {
      out.textContent = value
        ? "Memory entry located under " + MEMORY_KEY + ". Open Developer Tools -> Application -> Local Storage to read it."
        : "Memory chamber empty. Local storage may be blocked in this browser context.";
    }

    console.log("[ARCHIVE] position -> SECOND");
    console.log("[ARCHIVE] key -> " + MEMORY_KEY);
    console.log("[ARCHIVE] stored value ->", value);
  }

  function boot() {
    seedMemory();
    var trigger = document.querySelector("[data-action='inspect']");
    if (trigger) {
      trigger.addEventListener("click", inspectMemory);
    }
    console.log("[SHADOW ARCHIVE] Memory chamber warmed. Nothing printed here, everything stored in the browser.");
  }

  window.inspectMemory = inspectMemory;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

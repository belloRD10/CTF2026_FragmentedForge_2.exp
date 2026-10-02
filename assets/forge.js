(function () {
  "use strict";

  var SKY_DENSITY = 70;

  function seedSky() {
    var sky = document.querySelector("[data-sky]");
    if (!sky) {
      return;
    }

    var frag = document.createDocumentFragment();

    for (var i = 0; i < SKY_DENSITY; i += 1) {
      var star = document.createElement("i");
      var size = (Math.random() * 1.6 + 1).toFixed(2);
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.left = (Math.random() * 100).toFixed(2) + "%";
      star.style.top = (Math.random() * 100).toFixed(2) + "%";
      star.style.animationDelay = (Math.random() * 5).toFixed(2) + "s";
      star.style.animationDuration = (Math.random() * 4 + 3.5).toFixed(2) + "s";
      frag.appendChild(star);
    }

    sky.appendChild(frag);
  }

  function buildOrbits() {
    var shell = document.querySelector("[data-orbits]");
    if (!shell) {
      return;
    }
    ["o1", "o2", "o3"].forEach(function (name) {
      var ring = document.createElement("span");
      ring.className = "orbit " + name;
      ring.setAttribute("aria-hidden", "true");
      shell.appendChild(ring);
    });
  }

  function reportScope() {
    var scope = document.querySelector("[data-scope]");
    if (!scope) {
      return;
    }
    console.log("[SHADOW ARCHIVE] The eyepiece reports no signal.");
    console.log("[SHADOW ARCHIVE] The instrument that is not reporting is the instrument you are reading.");
    console.log("[SHADOW ARCHIVE] Inspect the eyepiece element in Developer Tools -> Elements.");
  }

  function boot() {
    seedSky();
    buildOrbits();
    reportScope();
    console.log("[SHADOW ARCHIVE] Observatory node reached.");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

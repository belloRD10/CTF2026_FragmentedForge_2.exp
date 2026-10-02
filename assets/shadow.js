(function () {
  "use strict";

  var encodedLast = "X3RoM19zaDRkMHd9";
  var nodeLabel = "SHADOW ARCHIVE";

  function shadowDecode() {
    try {
      return atob(encodedLast);
    } catch (err) {
      return "[decode failed]";
    }
  }

  function runShadowScan() {
    console.clear();
    console.log("%c[" + nodeLabel + "] RUNTIME FORENSICS",
      "color:#7ad7ff;font-weight:bold;font-size:15px");
    console.log("[" + nodeLabel + "] position -> LAST");
    console.log("[" + nodeLabel + "] the third piece was rebuilt in memory, never written to the page.");
    console.log("[" + nodeLabel + "] runtime fragment:", shadowDecode());
  }

  function boot() {
    console.log("[" + nodeLabel + "] Console node loaded. Call runShadowScan() or use the instrument panel.");
  }

  window.runShadowScan = runShadowScan;
  window.shadowDecode = shadowDecode;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

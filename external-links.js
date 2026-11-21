/* Makes every link that goes to another website open in a new tab. */
(function () {
  function markExternal(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    try {
      var url = new URL(href, document.baseURI);
      if ((url.protocol === "http:" || url.protocol === "https:") && url.host !== location.host) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
    } catch (e) {}
  }

  function markAll() {
    document.querySelectorAll("a[href]").forEach(markExternal);
  }

  if (document.readyState !== "loading") {
    markAll();
  } else {
    document.addEventListener("DOMContentLoaded", markAll);
  }

  document.addEventListener(
    "click",
    function (event) {
      var link = event.target && event.target.closest && event.target.closest("a[href]");
      if (link) markExternal(link);
    },
    true
  );
})();

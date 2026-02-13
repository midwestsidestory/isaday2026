(function () {
  window.getLang = function () {
    return localStorage.getItem("vday_lang") || "en";
  };

  window.applyTranslations = function () {
    var t = window.TRANSLATIONS;
    var l = window.getLang();
    document.querySelectorAll("[data-t]").forEach(function (el) {
      var key = el.dataset.t;
      var text = null;
      if (el.dataset.tEn && (el.dataset.tKo || el.dataset.tFr)) {
        // Prefer explicit Korean attribute, but fall back to the old French one
        // if it still exists for backwards compatibility.
        if (l === "ko") {
          text = el.dataset.tKo || el.dataset.tFr;
        } else {
          text = el.dataset.tEn;
        }
      } else if (t) {
        var page = document.body.dataset.translatePage || "home";
        var tr = t[page];
        if (tr && tr[key]) {
          if (l === "ko" && tr[key].ko) {
            if (!el.dataset.originalEn) el.dataset.originalEn = el.innerHTML;
            text = tr[key].ko;
          } else if (l === "en" && el.dataset.originalEn) {
            text = el.dataset.originalEn;
          } else if (l === "en" && tr[key].en) {
            text = tr[key].en;
          }
        }
      }
      if (text !== null) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });
  };
})();

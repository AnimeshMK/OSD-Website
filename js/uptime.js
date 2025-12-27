(() => {
  const STORAGE_KEY = "offsec_uptime_start";

  if (!sessionStorage.getItem(STORAGE_KEY)) {
    sessionStorage.setItem(STORAGE_KEY, Date.now().toString());
  }

  const start = Number(sessionStorage.getItem(STORAGE_KEY));

  function format(seconds) {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  }

  function update() {
    const el =
      document.querySelector(".sys-uptime") ||
      document.getElementById("sys-uptime");

    if (!el) return;

    const diff = Math.floor((Date.now() - start) / 1000);
    el.textContent = format(diff);
  }

  update();
  setInterval(update, 1000);
})();

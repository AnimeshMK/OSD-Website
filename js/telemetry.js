document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("telemetryOutput");
  if (!output) return;

  // session start tracking
  if (!sessionStorage.getItem("sessionStart")) {
    sessionStorage.setItem("sessionStart", Date.now().toString());
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function formatUptime(ms) {
    const total = Math.floor(ms / 1000);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
  }

  function getTime() {
    const d = new Date();
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}.${Math.floor(d.getMilliseconds() / 10)}`;
  }

  function getLatency() {
    return Math.floor(25 + Math.random() * 40);
  }

  function renderTelemetry() {
    const start = Number(sessionStorage.getItem("sessionStart"));

    const lines = [
      "USER DATA",
      "────────────────────────",
      `TIME            ${getTime()}`,
      `TIMEZONE        ${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
      `SESSION_UPTIME  ${formatUptime(Date.now() - start)}`,
      `LANGUAGE        ${navigator.language}`,
      `PLATFORM        ${navigator.platform || "Unknown"}`,
      `CPU CORES       ${navigator.hardwareConcurrency || "N/A"}`,
      `MEMORY          ${navigator.deviceMemory ? navigator.deviceMemory + " GB" : "N/A"}`,
      `SCREEN          ${screen.width}x${screen.height}`,
      `CONNECTION      ${navigator.connection?.effectiveType || "unknown"}`,
      `LATENCY         ${getLatency()} ms`,
      `STATUS          ACTIVE`,
      "────────────────────────",
      "> telemetry synchronized"
    ];

    output.textContent = lines.join("\n");
  }

  // initial render
  renderTelemetry();

  // update every second
  setInterval(renderTelemetry, 1000);
});

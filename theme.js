// Apply saved theme on page load
window.addEventListener("load", () => {
  const theme = localStorage.getItem("theme"); // "dark" or "light"
  const modeLabel = document.getElementById("mode");
  const checkbox = document.querySelector('input[type="checkbox"]');

  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    if (modeLabel) modeLabel.innerHTML = "LIGHT MODE";
    if (checkbox) checkbox.checked = true;
  } else {
    document.body.classList.remove("dark-mode");
    if (modeLabel) modeLabel.innerHTML = "DARK MODE";
    if (checkbox) checkbox.checked = false;
  }
});

// Toggle theme and save to localStorage
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  const modeLabel = document.getElementById("mode");
  if (modeLabel) modeLabel.innerHTML = isDark ? "LIGHT MODE" : "DARK MODE";

  const checkbox = document.querySelector('input[type="checkbox"]');
  if (checkbox) checkbox.checked = isDark;
}

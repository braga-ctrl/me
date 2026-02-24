// MOBILE MENU
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// TYPING EFFECT
const text = ["Your Name", "a Developer", "an ML Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 100);
})();
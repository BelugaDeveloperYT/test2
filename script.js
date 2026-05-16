// LOADER

window.addEventListener("load", () => {

  const loader =
  document.querySelector(".loader-wrapper");

  setTimeout(() => {

    loader.classList.add("fade");

  }, 900);
});

// SCROLL REVEAL

const reveals =
document.querySelectorAll(".reveal");

function revealSections() {

  reveals.forEach((section) => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    section.getBoundingClientRect().top;

    const revealPoint = 120;

    if (
      revealTop <
      windowHeight - revealPoint
    ) {

      section.classList.add("active");
    }
  });
}

window.addEventListener(
"scroll",
revealSections);

revealSections();

// TYPING EFFECT

const text = [

  "Game Developer",
  "YouTuber",
  "Creative",
  "Gamer"
];

let count = 0;
let index = 0;

let currentText = "";
let letter = "";

(function type() {

  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];

  letter =
  currentText.slice(0, ++index);

  document.querySelector(
  ".typing-text"
  ).textContent = letter;

  if (
    letter.length ===
    currentText.length
  ) {

    count++;

    index = 0;

    setTimeout(type, 1200);

  } else {

    setTimeout(type, 100);
  }

})();

// CURSOR GLOW

const cursorGlow =
document.querySelector(".cursor-glow");

window.addEventListener(
"mousemove",
(e) => {

  cursorGlow.style.left =
  e.clientX + "px";

  cursorGlow.style.top =
  e.clientY + "px";
});

// DARK/LIGHT MODE

const themeToggle =
document.getElementById(
"theme-toggle");

themeToggle.addEventListener(
"click",
() => {

  document.body.classList.toggle(
  "light");
});

// ACTIVE NAVIGATION

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
    section.offsetTop;

    const sectionHeight =
    section.clientHeight;

    if (
      pageYOffset >=
      sectionTop - 200
    ) {

      current =
      section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {

    link.classList.remove(
    "active-link");

    if (
      link.getAttribute("href")
      === `#${current}`
    ) {

      link.classList.add(
      "active-link");
    }
  });
});

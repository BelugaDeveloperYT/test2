console.log("Website loaded!");
// =========================
// LOADER
// =========================

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");

  setTimeout(() => {
    loader.classList.add("fade");
  }, 800);
});

// =========================
// SCROLL REVEAL
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  reveals.forEach((section) => {

    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;

    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);

revealSections();

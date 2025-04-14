const hamburger = document.querySelector(".nav__hamburger");
const linksContainer = document.querySelector(".nav__menu");
const links = document.querySelector(".nav__menu__links");

hamburger.addEventListener("click", () => {
  linksContainer.classList.toggle("active");
  hamburger.classList.toggle("active");
});

window.addEventListener("resize", () => {
    if (window.matchMedia("{max-width: 550px}").matches) {
        closeMenu();
    }
});

if (window.matchMedia("{max-width: 550px}").matches) {
    closeMenu();
}

function closeMenu() {
    links.forEach((link) => {
        linksContainer.classList.remove("active");
        hamburger.classList.remove("active");
    })
};

const navToggler = document.querySelector(".nav-toggler");
const navbar = document.querySelector(".navbar");

navToggler.addEventListener("click", navToggle);

function navToggle() {
    navToggler.classList.toggle("active");
    navbar.classList.toggle("open");
    if (navbar.classList.contains("open")) {
        navbar.style.maxHeight = navbar.scrollHeight + "px";
    }
    else {
        navbar.removeAttribute("style");
    }
}

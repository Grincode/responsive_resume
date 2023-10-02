const navToggler = document.querySelector(".nav-toggler");


navToggler.addEventListener("click", navToggle);

function navToggle() {
    console.log("hi");
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    navbar.classList.toggle("open");
    if (navbar.classList.contains("open")) {
        navbar.style.maxHeight = navbar.scrollHeight + "px";
    }
    else {
        navbar.removeAttribute("style");
    }
}

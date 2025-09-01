const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 40;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
      current = sections[sections.length - 1].getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-blue-400", "font-bold");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-blue-400", "font-bold");
    }
  });
});


AOS.init({
  duration: 1000,
  once: false,
});

const sections = document.querySelectorAll(".fade-in");

const reveal = () => {
  sections.forEach((section, index) => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      section.style.transitionDelay = `${index * 0.15}s`;
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", reveal);
reveal();

const slides = document.querySelectorAll(".slide");

slides.forEach((slides) => {
  slides.addEventListener("click", () => {
     removeCurentActives()
    slides.classList.add('active') 
  });
});

function  removeCurentActives() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  });
}
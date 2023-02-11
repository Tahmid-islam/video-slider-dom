const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
console.log(menuBtn);
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

//javascript for video slider
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

const sliderNav = (manual) => {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides.forEach((slides) => {
    slides.classList.remove("active");
  });
  contents.forEach((content) => {
    content.classList.remove("active");
  });
  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

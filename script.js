 window.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
 document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
window.addEventListener('scroll', () => {
  const decor = document.querySelector('.hero-decor');
  if (decor) {
    const scrollY = window.scrollY;
    decor.style.transform = `translateY(${scrollY * 0.2}px)`;
  }
});

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});


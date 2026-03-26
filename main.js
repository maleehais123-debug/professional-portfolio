import './style.css'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Scroll Reveal Animation
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));

  // Initialize Swipers
  const swiperOptions = {
    loop: true,
    autoHeight: true, // <--- THIS FIXES THE BLACK VOID
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    // This ensures it recalculates height when the window or images load
    on: {
      init: function () {
        this.update();
      },
    },
  };

  new Swiper('.merch-swiper', swiperOptions);
  new Swiper('.landing-swiper', swiperOptions);
  new Swiper('.ab-swiper', swiperOptions);
  new Swiper('.about-swiper', swiperOptions);
});
const burger = document.getElementById("burger");
const navbar = document.querySelector(".navbar");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

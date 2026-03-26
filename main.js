import './style.css'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Force page to start at top on refresh
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
if (window.location.hash) {
  window.history.replaceState(null, null, window.location.pathname);
}
window.scrollTo(0, 0);

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
  // Smooth scroll links without appending hash to the URL
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');

      if (targetId === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // Accommodate navbar height
          behavior: 'smooth'
        });
      }
    });
  });

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));

  // Initialize Swipers
  const swiperOptions = {
    loop: false,
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

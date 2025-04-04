// window.addEventListener('scroll', () => {
//     const header = document.getElementById('header');
//     const scrollPosition = window.scrollY;

//     if (scrollPosition > 50) { // Change 50 to the scroll position where you want the effect to trigger
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
// });
// window.addEventListener('scroll', () => {
//     const header = document.getElementById('header_nav_btn');
//     const scrollPosition = window.scrollY;

//     if (scrollPosition > 50) { // Change 50 to the scroll position where you want the effect to trigger
//         header.classList.add('scrolled_header_nav_btn');
//     } else {
//         header.classList.remove('scrolled_header_nav_btn');
//     }
// });

const headerNavLinks = document.querySelectorAll('.header_nav__link');


const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');
const menu = document.getElementById('menu');
// const homeLink = document.getElementById('home_link');
// const closeLink = document.getElementById('close_link');
const closeLinks = document.querySelectorAll('.close_link');



openMenu.addEventListener('click', () => {
    openMenu.style.display = "none";
    closeMenu.style.display = "flex";
    menu.classList.add('visible');
});

closeMenu.addEventListener('click', () => {
    closeMenu.style.display = "none";
    openMenu.style.display = "flex";
    menu.classList.remove('visible');
});

// homeLink.addEventListener('click', () => {
//     closeMenu.style.display = "none";
//     openMenu.style.display = "flex";
//     menu.classList.remove('visible');
// });
closeLinks.forEach(closeLink => {
    closeLink.addEventListener('click', () => {
        closeMenu.style.display = "none";
        openMenu.style.display = "flex";
        menu.classList.remove('visible');
    });
});





document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: "0px 0px -50px 0px" });

    // Select all elements with the class .fade_in_left
    const fadeInElements = document.querySelectorAll('.fade_in_left');
    fadeInElements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: "0px 0px -50px 0px" });

    // Select all elements with the class .fade_in_left
    const fadeInElements = document.querySelectorAll('.fade_in_right');
    fadeInElements.forEach(element => observer.observe(element));
});


document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: "0px 0px -50px 0px" });

    // Select all elements with the class .fade_in_up
    const fadeInElements = document.querySelectorAll('.fade_in_up');
    fadeInElements.forEach(element => observer.observe(element));
});
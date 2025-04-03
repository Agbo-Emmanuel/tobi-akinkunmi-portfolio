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

// window.addEventListener('scroll', () => {
//     const scrollPosition = window.scrollY;

//     headerNavLinks.forEach(link => {
//         if (scrollPosition > 50) {
//             link.classList.add('scrolled_header_nav');
//         } else {
//             link.classList.remove('scrolled_header_nav');
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselImages = document.querySelector('.carousel-images');
    const images = carouselImages.querySelectorAll('img');
    const imageCount = images.length;
    let index = 0;

    let startX;

    function updateCarousel() {
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    function handleSwipe(direction) {
        if (direction === 'left') {
            index = (index < imageCount - 1) ? index + 1 : 0;
        } else if (direction === 'right') {
            index = (index > 0) ? index - 1 : imageCount - 1;
        }
        updateCarousel();
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : imageCount - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index < imageCount - 1) ? index + 1 : 0;
        updateCarousel();
    });

    carouselImages.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carouselImages.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;

        if (Math.abs(deltaX) > 30) { // Threshold for swipe distance
            if (deltaX > 0) {
                handleSwipe('left');
            } else {
                handleSwipe('right');
            }
        }
    });
});



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

    // Select all elements with the class .fade_in_left
    const fadeInElements = document.querySelectorAll('.fade_in_up');
    fadeInElements.forEach(element => observer.observe(element));
});
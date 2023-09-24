// Burger-menu

let burgerButton = document.querySelector(".burger-menu");
let menu = document.querySelector(".menu");
let menuLinks = document.querySelectorAll(".menu__link");

burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("menu--active");
    if(burgerButton.classList.contains("menu--active")) {
        menu.classList.add("menu--active");
        document.body.style.overflow = 'hidden';
    } else {
        menu.classList.remove("menu--active");
        document.body.style.overflow = 'visible';
    }
})

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerButton.classList.remove("menu--active");
        menu.classList.remove("menu--active");
        document.body.style.overflow = 'visible';
    })
})

// Scroll section

let sections = document.querySelectorAll("section");
let links = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 110;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height) {
            links.forEach(links => {
                links.classList.remove('menu__link--active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('menu__link--active');
            })
        }
    })
}

// Scroll Up

function scrollUp() {
    const scrollUp = document.querySelector(".arrow-up");

    if(this.scrollY >= 500) {
        scrollUp.classList.add("arrow-up__active")
    } else {
        scrollUp.classList.remove("arrow-up__active")
    }
    scrollUp.onclick = () => {
        window.scrollTo(0, 0);
    }
}

window.addEventListener('scroll', scrollUp)

// Animation AOS

AOS.init();

// Slider swiper

let swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
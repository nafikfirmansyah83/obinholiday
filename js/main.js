const menuBurger = document.querySelector("#menuBurger");
const iconBar = document.querySelector(".fa-bars");
const navMobile = document.querySelector("#navMobile");

menuBurger.addEventListener("click", function () {
    iconBar.classList.toggle("fa-x");
    navMobile.classList.toggle("hidden")
})

const scrollContainer = document.querySelector('.scroll-container');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');
let isDown = false;
let startX;
let scrollLeft;

// Scroll buttons
scrollLeftBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 300;
});

scrollRightBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft += 300;
});

// Mouse drag scrolling
scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollContainer.classList.add('active');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile
scrollContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('touchmove', (e) => {
    if (!startX) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.scrollLeft = scrollLeft - walk;
});

scrollContainer.addEventListener('touchend', () => {
    startX = null;
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function scroll(amount) {
    const container = document.querySelector('.overflow-x-auto');
    container.scrollBy({
        left: amount,
        behavior: 'smooth'
    });
}
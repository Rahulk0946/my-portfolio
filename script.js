// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// 1. Hero Entrance Animation
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.from("#hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    })
    .from("#hero-sub", {
        y: 20,
        opacity: 0,
        duration: 0.8
    }, "-=0.6")
    .from("#hero-cta", {
        opacity: 0,
        duration: 0.5
    });
});

// 2. Scroll-Based Reveal for Sections
const revealElements = document.querySelectorAll(".reveal");

revealElements.forEach((el) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%", // Starts when the top of the element hits 85% of the viewport height
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    });
});
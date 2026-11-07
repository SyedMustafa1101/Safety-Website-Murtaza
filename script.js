// SAFETY WEBSITE JAVASCRIPT

// Welcome message
console.log("Welcome to SAFETY - Drive Safe, Live Safe!");

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Traffic sign interaction
document.querySelectorAll(".sign-card").forEach(card => {
    card.addEventListener("click", function() {
        this.classList.toggle("selected");
    });
});

// Reveal sections on scroll
const sections = document.querySelectorAll(
    ".about, .rules, .signs, .message, .contact"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
});
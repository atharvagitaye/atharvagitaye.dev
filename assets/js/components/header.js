export function initHeader() {
    const menuIcon = document.getElementById("menuIcon");
    const navMenu = document.getElementById("navMenu");
    const nav = document.querySelector("nav");
    let lastScroll = 0;

    // Menu toggle functionality
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-menu li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            menuIcon.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!menuIcon.contains(e.target) && !navMenu.contains(e.target)) {
            menuIcon.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });

    // Hide/show navbar on scroll
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            nav.classList.remove("hide");
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            nav.classList.add("hide");
        } else {
            // Scrolling up
            nav.classList.remove("hide");
        }

        lastScroll = currentScroll;
    });
}

export function initHeader() {
    const menuIcon = document.getElementById("menuIcon");
    const navMenu = document.getElementById("navMenu");
    const nav = document.querySelector("nav");
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("theme-icon");
    const logo = document.getElementById("logo");
    let lastScroll = 0;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.src = "/assets/images/icons/light-mode.png";
        logo.src = "/assets/images/logos/logo-dark.png";
    }

    // Theme toggle functionality
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        if (document.body.classList.contains("dark-mode")) {
            themeIcon.src = "/assets/images/icons/light-mode.png";
            logo.src = "/assets/images/logos/logo-dark.png";
            localStorage.setItem("theme", "dark");
        } else {
            themeIcon.src = "/assets/images/icons/dark-mode.png";
            logo.src = "/assets/images/logos/logo-light.png";
            localStorage.setItem("theme", "light");
        }
    });

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
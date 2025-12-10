export function initHeader() {
    const menuIcon = document.getElementById("menuIcon");
    const navMenu = document.getElementById("navMenu");
    const nav = document.querySelector("nav");
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("theme-icon");
    const logo = document.getElementById("logo");
    let lastScroll = 0;

    // Function to update theme icon
    function updateThemeIcon(isDark) {
        themeToggle.innerHTML = isDark 
            ? '<i data-lucide="sun" id="theme-icon"></i>'
            : '<i data-lucide="moon" id="theme-icon"></i>';
        lucide.createIcons();
    }

    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem("theme") || "dark";
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        updateThemeIcon(true);
        logo.src = "/assets/images/logos/logo-dark.png";
    } else {
        lucide.createIcons();
    }

    // Theme toggle functionality
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        if (document.body.classList.contains("dark-mode")) {
            updateThemeIcon(true);
            logo.src = "/assets/images/logos/logo-dark.png";
            localStorage.setItem("theme", "dark");
        } else {
            updateThemeIcon(false);
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
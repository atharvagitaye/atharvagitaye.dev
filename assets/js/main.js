async function loadComponent(selector, file) {
    const html = await fetch(file).then((res) => res.text());
    document.querySelector(selector).innerHTML = html;
}

import { initHeader } from "./components/header.js";

document.addEventListener("DOMContentLoaded", async () => {
    // Load header
    await loadComponent("header", "/components/header.html");

    // Load footer
    await loadComponent("footer", "/components/footer.html");

    // Initialize header JS behaviors
    initHeader();

    // Initialize accordion
    initAccordion();

    // Initialize Lucide icons for new content
    lucide.createIcons();

    // Set current year in footer
    setCurrentYear();
});

function setCurrentYear() {
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function initAccordion() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const accordionItem = header.parentElement;
            const isActive = accordionItem.classList.contains("active");

            // Close all accordion items
            document.querySelectorAll(".accordion-item").forEach((item) => {
                item.classList.remove("active");
            });

            // Toggle current item
            if (!isActive) {
                accordionItem.classList.add("active");
            }

            // Re-create icons to ensure chevrons render correctly
            lucide.createIcons();
        });
    });
}

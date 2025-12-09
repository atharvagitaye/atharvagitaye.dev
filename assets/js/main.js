async function loadComponent(selector, file) {
    const html = await fetch(file).then((res) => res.text());
    document.querySelector(selector).innerHTML = html;
}

import { initHeader } from "./components/header.js";

document.addEventListener("DOMContentLoaded", async () => {
    // Load header
    await loadComponent("header", "/components/header.html");

    // Initialize header JS behaviors
    initHeader();
});

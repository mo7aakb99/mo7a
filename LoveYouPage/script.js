// script.js
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", () => {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 50;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
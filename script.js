/* ==========================================
   OXENTE BRIGADEIRO
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* Hover 3D dos Cards */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 12;

            const rotateX = ((y / rect.height) - 0.5) * -12;

            card.style.transform =
            `perspective(900px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0)";

        });

    });

});

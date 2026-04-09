// Effet "Machine à écrire" pour le titre de l'accueil
const textArray = ["données.", "réseaux.", "serveurs.", "applications web."];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Délai entre chaque mot
let textArrayIndex = 0;
let charIndex = 0;

const typedTextSpan = document.querySelector(".typing-text");
const cursorSpan = document.querySelector(".cursor");

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Démarrer l'animation de texte
    if(textArray.length) setTimeout(type, newTextDelay + 250);

    // Gérer l'envoi du formulaire (Simulation)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche le rechargement de la page
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        
        btn.textContent = "Requête cryptée et envoyée !";
        btn.style.backgroundColor = "var(--neon-green)";
        btn.style.color = "var(--bg-color)";
        
        form.reset();

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = "transparent";
            btn.style.color = "var(--neon-green)";
        }, 3000);
    });
});
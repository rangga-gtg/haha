// Efek Ketik Otomatis
const text = "Happy Valentine's Day, Adek! 💖";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Tampilkan Pesan Kejutan
function showLoveMessage() {
    document.getElementById("loveMessage").classList.toggle("show");
}

// Efek Confetti
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    document.getElementById("confetti-container").appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
}

setInterval(createConfetti, 200);

// Efek Balon Terbang
function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.innerHTML = "🎈";
    balloon.style.left = Math.random() * 100 + "vw";
    document.getElementById("balloon-container").appendChild(balloon);
    setTimeout(() => balloon.remove(), 7000);
}

setInterval(createBalloon, 500);
               

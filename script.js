let timeLeft = 5; 

const timerDisplay = document.getElementById('timer');
const openBtn = document.getElementById('open-btn');
const countdownScreen = document.getElementById('countdown-screen');
const giftScreen = document.getElementById('gift-screen');
const bgMusic = document.getElementById('bg-music');

const countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = timeLeft < 10 ? '0' + timeLeft : timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        timerDisplay.style.display = 'none';
        openBtn.style.display = 'block';
    }
}, 1000);

function revealGift() {
    countdownScreen.style.display = 'none';
    giftScreen.style.display = 'block';
    
    // Add class to trigger photo flying animations
    document.getElementById('gift-screen').classList.add('animate-photos');

    bgMusic.play().catch(e => console.log("Audio issue:", e));
    triggerConfetti();
}

function triggerConfetti() {
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
    });
}

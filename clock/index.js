const hoursHand = document.querySelector(".hand--hours");
const minutesHand = document.querySelector(".hand--minutes");
const secondsHand = document.querySelector(".hand--seconds");

function updateClock() {
    const now = new Date()
    
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    const secondsDeg = seconds * 6
    const minutesDeg = minutes * 6 + seconds * 0.1
    const hoursDeg = (hours % 12) * 30 + minutes * 0.5

    secondsHand.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
    minutesHand.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
    hoursHand.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;
}

setInterval(updateClock, 1000);

const numbers = document.querySelectorAll('.number');
const radius = 130;

numbers.forEach((numberEl, index) => {
    const angle = (index + 1) * 30;
    const x = radius * Math.sin((angle * Math.PI) / 180);
    const y = -radius * Math.cos((angle * Math.PI) / 180);

    numberEl.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
});


const digitalClock = document.querySelector(`.digital-clock`);

function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours()

    const secondsDeg = seconds * 6;
    const minutesDeg = minutes * 6 + seconds * 0.1;
    const hoursDeg = (hours % 12) * 30 + minutes * 0.5;

    secondsHand.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
    minutesHand.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
    hoursHand.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;

    const paddedHrs = String(hours).padStart(2, '0');
    const paddedMin = String(minutes).padStart(2, '0');
    const paddedSec = String(seconds).padStart(2, '0')

    digitalClock.textContent = `${paddedHrs}:${paddedMin}:${paddedSec}`;
};
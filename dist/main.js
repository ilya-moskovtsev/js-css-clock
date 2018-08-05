function tick() {
    const date = new Date();

    const seconds = date.getSeconds();
    const degreesSeconds = ((seconds / 60) * 360) + 90;
    const secondHand = document.querySelector('.second-hand');
    if (seconds === 0) {
        secondHand.style.transitionProperty = 'none';
    }
    if (seconds === 1) {
        secondHand.style.transitionProperty = 'all';
    }
    secondHand.style.transform = `rotate(${degreesSeconds}deg)`;

    const minutes = date.getMinutes();
    const degreesMinutes = ((minutes / 60) * 360) + 90;
    const minHand = document.querySelector('.min-hand');
    if (minutes === 0) {
        minHand.style.transitionProperty = 'none';
    }
    if (minutes === 1) {
        minHand.style.transitionProperty = 'all';
    }
    minHand.style.transform = `rotate(${degreesMinutes}deg)`;

    const hours = date.getHours();
    const degreesHours = ((hours / 12) * 360) + 90;
    const hourHand = document.querySelector('.hour-hand');
    if (hours === 0) {
        hourHand.style.transitionProperty = 'none';
    }
    if (hours === 1) {
        hourHand.style.transitionProperty = 'all';
    }
    hourHand.style.transform = `rotate(${degreesHours}deg)`;
}

setInterval(tick, 1000);
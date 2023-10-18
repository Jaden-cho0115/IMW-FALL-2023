const container = document.getElementById('interactionContainer');

const circles = container.querySelectorAll('.colors');

const inputText = document.getElementById('inputText');

const textLength = document.getElementById('text-length');

circles.forEach((circle) => {
    circle.addEventListener('click', function () {
        const color = window.getComputedStyle(circle).backgroundColor;
        container.style.backgroundColor = color;
    });
});

const square = document.getElementById('square');
document.addEventListener('mousemove', (e) => {
    const y = e.clientY;
    const color = `rgb(0, ${y % 255}, 0)`;
    square.style.backgroundColor = color;
});

setInterval(function () {
    fontSize++;
    increaseText.style.fontSize = `${fontSize}px`;
}, 1000);

const loopContainer = document.getElementById('loopContainer');
const textToAdd = 'LOOP ';
for (let i = 0; i < 10; i++) {
    const span = document.createElement('span');
    span.textContent = textToAdd;
    loopContainer.appendChild(span);
}

const increaseText = document.getElementById('increaseText');
let fontSize = 16;

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputLength = inputText.value.length;
    textLength.textContent = `Character count: ${inputLength}`;
});

console.log('You got this! Do not give up!');

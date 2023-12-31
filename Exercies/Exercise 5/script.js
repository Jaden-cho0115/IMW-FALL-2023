const container = document.getElementById('interactionContainer');

const circles = container.querySelectorAll('.colors');

const inputText = document.getElementById('inputText');

const textLength = document.getElementById('text-length');

const loopContainer = document.getElementById('loopContainer');

const textToAdd = 'LOOP ';

const increaseText = document.getElementById('increaseText');

const square = document.getElementById('square');

let fontSize = 16;

circles.forEach((circle) => {
    circle.addEventListener('click', function () {
        const color = window.getComputedStyle(circle).backgroundColor;
        container.style.backgroundColor = color;
    });
});

document.addEventListener('mousemove', (e) => {
    const y = e.clientY;
    const color = `rgb(0, ${y % 255}, 0)`;
    square.style.backgroundColor = color;
});

setInterval(function () {
    fontSize++;
    increaseText.style.fontSize = `${fontSize}px`;
}, 1000);

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputLength = inputText.value.length;
    textLength.textContent = `Character count: ${inputLength}`;
});

for (let i = 0; i < 10; i++) {
    const span = document.createElement('span');
    span.textContent = textToAdd;
    loopContainer.appendChild(span);
}

console.log('You got this! Do not give up!');

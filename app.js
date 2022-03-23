const bgColors = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink']

let button = document.getElementById('btn');
let background = document.querySelector('body')
button.addEventListener('click', changeBg);

function changeBg() {
    background.style.backgroundColor = bgColors[Math.floor(Math.random() * bgColors.length)]
}
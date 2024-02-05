const img = document.getElementById('img');
const buttons = document.getElementById('buttons');

const trafficLght = (event) => {
   turnOn[event.target.id]();

}

const turnOn = {
    'red': () => img.src = 'Vermelho.png',
    'yellow': () => img.src = 'Amarelo.png',
    'green': () => img.src = 'Verde.png'

}

buttons.addEventListener('click', trafficLght);
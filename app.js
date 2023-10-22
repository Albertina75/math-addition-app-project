//generate random numbers. Utilizo la biblioteca Chance !
// https://chancejs.com/basics/integer.html

//creamos la instancia chance y así usar sus métodos

const chance = new Chance();

//Genero dos números aleatorios guandandolos cada uno en una variable

let firstNumber = chance.integer({ min: 0, max: 10 });

let secondNumber = chance.integer({ min: 0, max: 10 });

//get the total

let total = firstNumber + secondNumber;



// numero aleatorio visible. SElecciono un elemento DOM  y actualizo su contenido

const firstNumberNode = document.querySelector('#primary-number'); firstNumberNode.textContent = firstNumber;

const secondNumberNode = document.querySelector('#secondary-number');
secondNumberNode.textContent = secondNumber;


const CheckButton = document.querySelector('#btn');
CheckButton.addEventListener('click', function () {

    const userGuessInput = document.querySelector('#guess');
    const userGuess = parseInt(userGuessInput.value);


    const messageNode = document.querySelector('#message');

    if (total === userGuess) {
        messageNode.textContent = '¡La suma es correcta!';

    }
    else {
        messageNode.textContent = 'Lo siento, la suma no coincide!';

    }
});





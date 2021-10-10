const bill = document.getElementById('bill');
const cinco = document.getElementById('cinco');
const resetar = document.getElementsByClassName("r");
const person = document.getElementById('pessoas');

let tipCaunt = document.querySelector('#tipCaunt');
let conta;
let pessoas;



function cincoPorcento() {
    // vai setar as cores ao clicar
    cinco.onmouseout = function() { cinco.style.backgroundColor = 'hsl(183, 100%, 15%)'; }
    cinco.style.backgroundColor = 'rgb(100, 202, 168)';

    // vai fazer  o calculo
    conta = bill.value;
    pessoas = person.value;
    let result1 = parseFloat(conta * 0.5 / pessoas);
    tipCaunt.innerHTML = result1.toFixed(2);
};

// vai resetar tudo
function Reset() {
    location.reload()

}
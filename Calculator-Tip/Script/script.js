const bill = document.getElementById('bill');
const cinco = document.getElementById('cinco');
const dez = document.getElementById('dez');
const quinze = document.getElementById('quinze');
const vinteCinco = document.getElementById('vinteCinco');
const cinquenta = document.getElementById('cinquenta');
const custom = document.getElementById('botao');
const resetar = document.getElementsByClassName("r");
const person = document.getElementById('pessoas');
const tipCaunt = document.querySelector('#tipCaunt');
const totalCaunt = document.querySelector('#totalCaunt');


let conta;
let pessoas;
let custumatizar;

// OBS = result2 está colculando errado, quando só number ele retorna errado o resultado e quando flutuado ele retorna NaN

// 5%
function cincoPorcento() {
    // vai setar as cores ao clicar e ao sair de cima
    cinco.onmouseout = function() { cinco.style.backgroundColor = 'hsl(183, 100%, 15%)'; }
    cinco.style.backgroundColor = 'rgb(100, 202, 168)';

    // vai fazer  o calculo
    conta = bill.value;
    pessoas = person.value;
    // tip amount
    let result1 = conta * 0.05 / pessoas;
    tipCaunt.innerHTML = parseFloat(result1).toFixed(2);
    // total
    let result2 = (result1 + conta) / pessoas;
    totalCaunt.innerHTML = parseFloat(result2).toFixed(2);

};
// 10%
function dezPorcento() {
    // vai setar as cores ao clicar e ao sair de cima
    dez.onmouseout = function() { dez.style.backgroundColor = 'hsl(183, 100%, 15%)'; }
    dez.style.backgroundColor = 'rgb(100, 202, 168)';

    // vai fazer  o calculo
    conta = bill.value;
    pessoas = person.value;
    let result1 = parseFloat(conta * 0.1 / pessoas);
    tipCaunt.innerHTML = result1.toFixed(2);
};
// 15%
function quinzePorcento() {
    // vai setar as cores ao clicar e ao sair de cima
    quinze.onmouseout = function() { quinze.style.backgroundColor = 'hsl(183, 100%, 15%)'; }
    quinze.style.backgroundColor = 'rgb(100, 202, 168)';

    // vai fazer  o calculo
    conta = bill.value;
    pessoas = person.value;
    let result1 = parseFloat(conta * 0.15 / pessoas);
    tipCaunt.innerHTML = result1.toFixed(2);
};
// 25%
function vinteCincoPorcento() {
    // vai setar as cores ao clicar e ao sair de cima
    vinteCinco.onmouseout = function() { vinteCinco.style.backgroundColor = 'hsl(183, 100%, 15%)'; }
    vinteCinco.style.backgroundColor = 'rgb(100, 202, 168)';

    // vai fazer  o calculo
    conta = bill.value;
    pessoas = person.value;
    let result1 = parseFloat(conta * 0.25 / pessoas);
    tipCaunt.innerHTML = result1.toFixed(2);
};
// 50%
function cinquentaPorcento() {
    // vai setar as cores ao clicar e ao sair de cima
    cinquenta.onmouseout = function() { cinquenta.style.backgroundColor = 'hsl(183, 100%, 15%)'; }
    cinquenta.style.backgroundColor = 'rgb(100, 202, 168)';

    // vai fazer  o calculo
    conta = bill.value;
    pessoas = person.value;
    let result1 = parseFloat(conta * 0.15 / pessoas);
    tipCaunt.innerHTML = result1.toFixed(2);
};
// Numero costumatizado
function custumerPorcent() {
    // vai setar as cores ao clicar e ao sair de cima
    custom.onmouseout = function() { custom.style.backgroundColor = 'rgb(255,255,255)'; }
    custom.style.backgroundColor = 'rgb(100, 202, 168)';

    // vai fazer  o calculo
    custumatizar = custom.value;
    conta = bill.value;
    pessoas = person.value;
    let result1 = parseFloat((conta * (custumatizar / 100)) / pessoas);
    tipCaunt.innerHTML = result1.toFixed(2);
};
// vai resetar tudo
function Reset() {
    location.reload()

}
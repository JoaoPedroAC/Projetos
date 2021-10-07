const bill = document.getElementById('#bill');
var b;
var cinco = document.getElementById('#cinco');
var resetar = document.getElementsByClassName(".r");

function Cinco() {
    b = bill.value;
    result1 = Number(b * 0.5)
    console.log(result)

};

// vai resetar tudo
function Reset() {
    location.reload()

}
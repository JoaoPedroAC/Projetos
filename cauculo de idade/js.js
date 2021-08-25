window.onload = function() {

    var anoNascimento = prompt('Informe seu ano de nascimento!')

    // o loop é para aconferir e caso esteja errado a solicitaçao ira se repetir
    while (anoNascimento >= 2021) {
        alert('Escreva o ano de forma coerente')
        var anoNascimento = prompt('Informe seu ano de nascimento!')
    }
    var anoAtual = prompt('Informe o ano atual!')

    var idade = anoAtual - anoNascimento;

    console.log('sua idade é: ' + idade);
}
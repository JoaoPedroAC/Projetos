// createElement('') -> cria uma tag
//createTextNode('') -> cria texto dentro de um nó(tag) ou area especificada
//appendChild() -> vai anexar como ultima filha dentro de um nó(tag)

//LOGICA
/*
eu preciso casdastrar nome, email usando os botões e fazer os dados aparecerem no textarea e preciso tbm fzr um relogio atualizando em tempo real.
 */

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cadastrar = document.getElementById('cadastrar');
const texto = document.getElementById('AreaTexto');
var n;
var e;
var numero = 0;
// aqui quando apertar o bota vai pedir para cadastrar o nome
Nome_Botao = () => {
    nome.onmouseout = () => {
        nome.style.backgroundColor = 'rgb(241, 236, 236)';
    };
    nome.style.backgroundColor = "rgb(223, 219, 219)";
    n = prompt('Escreva seu nome aqui')

}


// aqui quando apertar o bota vai pedir para cadastrar o e-mail
Email_Botao = () => {
    email.onmouseout = () => {
        email.style.backgroundColor = 'rgb(241, 236, 236)';
    };
    email.style.backgroundColor = "rgb(223, 219, 219)";
    e = prompt('Escreva seu e-mail aqui') + '\n';

}


// Ao clicar nisso vai trazer para dentro do textarea o conteudo informado
Cadastrar_Botao = () => {
    cadastrar.onmouseout = () => {
        cadastrar.style.backgroundColor = 'rgb(241, 236, 236)';
    };
    cadastrar.style.backgroundColor = "rgb(223, 219, 219)";
    // sem isso ele vai escrever uma vez e vai apagar
    var reg = `ID do usuário: ${numero++} \n`;
    reg += `Nome de usuário: ${n} \n`;
    reg += `E-mail do usuário: ${e} \n`;
    texto.value += reg;


}
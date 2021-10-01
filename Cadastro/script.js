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
const tempo = document.getElementById('timer');
var n;
var e;
var numero = 0;
var msg = new Date();
var t = 0
let reg;
// Aqui é o relógio
tempo.innerHTML = `${msg.getDate()} / ${msg.getMonth()+1} / ${msg.getFullYear()}`

// aqui quando apertar o bota vai pedir para cadastrar o nome
const nomeBotao = () => {
    nome.onmouseout = () => {
        nome.style.backgroundColor = 'rgb(241, 236, 236)';
    };
    nome.style.backgroundColor = "rgb(223, 219, 219)";
    n = prompt('Escreva seu nome aqui')
};


// aqui quando apertar o bota vai pedir para cadastrar o e-mail
const emailBotao = () => {
    email.onmouseout = () => {
        email.style.backgroundColor = 'rgb(241, 236, 236)';
    };
    email.style.backgroundColor = "rgb(223, 219, 219)";
    e = prompt('Escreva seu e-mail aqui') + '\n';
}


// Ao clicar nisso vai trazer para dentro do textarea o conteudo informado
const cadastrarBotao = () => {
    cadastrar.onmouseout = () => {
        cadastrar.style.backgroundColor = 'rgb(241, 236, 236)';
    };
    cadastrar.style.backgroundColor = "rgb(223, 219, 219)";
    // sem isso ele vai escrever uma vez e vai apagar
    reg = `ID do usuário: ${numero++} \n`;
    reg += `Nome do usuário: ${n} \n`;
    reg += `E-mail do usuário: ${e} \n`;
    texto.innerHTML = reg;
    console.log(`Cadastrado em: ${msg.getDate()} / ${msg.getMonth()+1} / ${msg.getFullYear()} ${t++}`);

};

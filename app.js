let listaSorteada = [];
let memeTentativa = [];
let memeBabu = boraLista();
console.log('O meme escolhido foi ' + memeBabu);
let tentativa = 1;

function boraLista() {
    lista = ['bora bill', 'la ele', 'amostradinho', 'skibidi', 'gugu'];
    let elemento = lista[Math.floor(Math.random() * lista.length)];
    let listaCheia = listaSorteada.length;

    if (listaCheia == 4) {
        listaSorteada = [];
    }

    if (listaSorteada.includes(elemento)) {
        return boraLista();
    } else {
        listaSorteada.push(elemento);
        console.log('A lista está da seguinte forma: ' + listaSorteada);
        return elemento;
    }

}

function coisasNaTela(tag, mensagem) {
   let campo = document.querySelector(tag);
   campo.innerHTML = mensagem;
}

function mensagemInicial(){
    coisasNaTela('h1', 'Tropa Do Babu Game');
    coisasNaTela('p', 'Advinhe o meme da tropa: bora bill, la ele, amostradinho, gugu ou skibidi?');
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    let respostaCerta = tentativa > 1 ? 'tentativas' : 'tentativa';
    let resposta = `Parabêns! Você acertou o meme da tropa em ${tentativa} ${respostaCerta}`

    if (chute == '' || chute == null) {
        alert('PREENCHA TODOS OS CAMPOS');
    } else {
        if (chute == memeBabu) {
        coisasNaTela('h1', 'Tropa Do Babu Game');
        document.querySelector('button').setAttribute('disabled', true);
        coisasNaTela('p', resposta);
        document.getElementById('reiniciar').removeAttribute('disabled');
        }   else {
                if (memeTentativa.includes(chute)) {
                coisasNaTela('h1', 'Você já tentou este...');
        }       else {
                    memeTentativa.push(chute);
                    coisasNaTela('h1', 'Errrouuuuu...');
                    console.log(memeTentativa);
            }
            limparCampo();
            }
        console.log('Tentativas: ' + tentativa);
        tentativa++;
    }
}

function limparCampo(){
    campo = document.querySelector('input');
    campo.value = '';
}

function restartGame() {
    memeBabu = boraLista();
    console.log('O meme escolhido foi ' + memeBabu);
    document.querySelector('button').removeAttribute('disabled');
    mensagemInicial();
    limparCampo();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    memeTentativa = [];
}
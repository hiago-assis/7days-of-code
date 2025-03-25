let tentativas = 3;
let limite = 10;
let numeroSecreto = gerarNumero();

console.log(numeroSecreto);

function enviar(){
    
    let chute = document.querySelector('input').value;

    while(tentativas > 0){
        if(chute == numeroSecreto){

            textoNaTela('textoResposta', `Você acertou o numero secreto! O jogo foi reiniciado.`);
            reiniciar();

            break;
        }
        else{
            tentativas--;
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            textoNaTela('textoResposta', `Errou, ainda restam ${tentativas} ${palavraTentativa}`);

            break;
        }
    }
        if(tentativas == 0){
            textoNaTela('textoResposta', `Você errou todas suas tentativas, o número secreto era ${numeroSecreto}. Um novo número foi gerado!`);
            reiniciar();
            
    }
}

function reiniciar(){
    numeroSecreto = gerarNumero();
    tentativas = 3;
    console.log(numeroSecreto);
}


function gerarNumero(){
        let numeroSecreto =  parseInt(Math.random() * limite + 1);
        return numeroSecreto;
}

function textoNaTela(tag, texto){

    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
    
}

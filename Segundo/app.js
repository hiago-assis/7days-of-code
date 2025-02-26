let nomeHTML = document.getElementById('nome');
let idadeHTML = document.getElementById('idade');
let langHTML = document.getElementById('linguagem');
let mensagem = document.querySelector('#mensagem');

function quest(){

  let langQuest = langHTML.value.trim(); //recupera o que foi digitado

  let linguagem = prompt(`Você gosta de estudar ${langQuest}? Responda com o número 1 para SIM ou 2 para NÃO.`);
  
 
  if(linguagem == '1'){
      alert('Muito bom! Continue estudando e você terá muito sucesso.');
  }
  if(linguagem == '2'){
    alert('Ahh que pena... Já tentou aprender outras linguagens?');
  }
  if(linguagem != '2' && linguagem != '1'){
  alert('Insira um número válido');
}

}


function enviar(){

  let nome = nomeHTML.value.trim(); //recupera o que foi digitado
  let idade = idadeHTML.value.trim(); //recupera o que foi digitado
  let lang = langHTML.value.trim(); //recupera o que foi digitado

  if(nome == "" || idade == "" || lang == ""){
    alert('Insira a informação no campo');
  }
  else{
    mensagem.innerHTML = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${lang}`;
  }
  quest();
  limpar();
}


function limpar(){ //limpar os campos de texto
  nomeHTML.value = '';
  idadeHTML.value = '';
  langHTML.value = '';
}





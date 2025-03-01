let botaoBack = document.getElementById('backEnd');
let botaoFront = document.getElementById('frontEnd');

let botaoCSharp = document.getElementById('CSharp');
let botaoJava = document.getElementById('java');

let botaoReact = document.getElementById('react');
let botaoVue = document.getElementById('vue');

let escolherArea = document.getElementById('escolherArea');
let mensagem = document.getElementById('mensagem');

let botaoEspecialista = document.getElementById('especialista');
let botaoFullstack = document.getElementById('fullstack');

let escolherTecnologia = document.getElementById('escolherTecnologia');
let campoTecnologia = document.getElementById('campoTecnologia');
let tecnologias = [];

let lista = document.querySelector('#listaTecnologia');

function escolhaFrontBack(area){

    if(area == botaoBack){
        botaoCSharp.removeAttribute('hidden');
        botaoJava.removeAttribute('hidden');
        botaoFront.style.display = 'none';
        console.log('back');
    }else if(area == botaoFront){

        botaoReact.removeAttribute('hidden');
        botaoVue.removeAttribute('hidden');
        botaoBack.style.display = 'none';
        console.log('front');
    }

    if(area == botaoCSharp){
        botaoJava.style.display = 'none';
        escolherArea.removeAttribute('hidden');
        console.log('C#');

    }else if(area == botaoJava){
        botaoCSharp.style.display = 'none';
        escolherArea.removeAttribute('hidden');
        console.log('java');
    }

    if(area == botaoReact){
        botaoVue.style.display = 'none';
        escolherArea.removeAttribute('hidden');
        console.log('React');
    }else if(area == botaoVue){
        botaoReact.style.display = 'none';
        escolherArea.removeAttribute('hidden');
        console.log('Vue');
    }
}
    
function desenvolver(stack){

    if(stack == botaoEspecialista){
        escolherTecnologia.removeAttribute('hidden');
        botaoFullstack.style.display = 'none';
        mensagem.innerHTML = 'Boa decisão! O especialista foca em uma área específica do desenvolvimento, adquirindo um conhecimento profundo'
    }else if(stack == botaoFullstack){
        escolherTecnologia.removeAttribute('hidden');
        botaoEspecialista.style.display = 'none';
        mensagem.innerHTML = 'Boa decisão! O desenvolvedor fullstack atua tanto no Back-End quanto no Front-End. Possui um conhecimento amplo sobre várias tecnologias e ferramentas, conseguindo desenvolver um sistema completo de ponta a ponta.'
    }
}

function adicionarTecnologia(){

    let novaTecnologia = campoTecnologia.value.trim();


    if(novaTecnologia == ""){
        alert('Insira um nome');
    }
    if(tecnologias.includes(novaTecnologia)){
        alert('Insira uma nova tecnologia');
        return;
    }

    tecnologias.push(novaTecnologia);
    atualizarLista();
}


function atualizarLista(){ // atualiza a lista que aparece no HTML

    lista.innerHTML = "";

    for(let i = 0; i < tecnologias.length; i++){ // percorre o array

            const attLista = document.createElement("li"); // cria a lista
            attLista.textContent = tecnologias[i];
            lista.appendChild(attLista);
    }
}

escolhaFrontBack();
escolherArea();






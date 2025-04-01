let inputCategoria = document.getElementById('input');
let div = document.getElementById('DivInput');
let divLista = document.getElementById('DivLista');


let arrayFruta = [];
let arrayLaticinios = [];
let arrayCongelados = [];
let arrayDoces = [];



let categorias = {
    frutas: arrayFruta,
    laticinios: arrayLaticinios,
    congelados: arrayCongelados,
    doces: arrayDoces
};

let categoriaSelecionada = "";


function botao(categoria){
        categoriaSelecionada = categoria;
        div.removeAttribute('hidden');   
}

function botaoEnvio(){

    let item = inputCategoria.value.trim();

    if(!item){
        alert('Insira um item.');
        return;
    }
    if(!categorias[categoriaSelecionada]){
        alert('Selecione uma categoria valida');
        return;

    }

    categorias[categoriaSelecionada].push(item);
    atualizarLista();

    function atualizarLista(){

        inputCategoria.value = "";
        divLista.removeAttribute('hidden');
        let lista = document.getElementById('listaItens'); 
        lista.innerHTML = "";
    
        for (let categoria in categorias) {
            categorias[categoria].forEach(item => {
                let li = document.createElement("li"); 
                li.textContent = `${item} (${categoria})`; 
                lista.appendChild(li); 
            });
        }
    }
    }
    

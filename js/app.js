let listaNomes = [];
let sorteados = [];
let listaSorteados = [];
function numeroAleatorio(max){
    return parseInt(Math.random() * max);
}

function adicionar(){
    let nome = document.getElementById("nome-amigo");
    if (nome.value != ""){
        if (!listaNomes.includes(nome.value)){
            let adicionados = document.getElementById("lista-amigos");
            listaNomes.push(nome.value);
            adicionados.innerHTML = listaNomes;
            nome.value = "";
        } else {
            alert("Erro! Nome ja adicionado");
        }
        
    } else {
        alert("Erro! Digite um nome");
    }
    
}

function preencherLista(){
    listaSorteados = [];
    let contador = 0;
    while (contador < listaNomes.length){
        listaSorteados.push(listaNomes[sorteados[contador]]);
        contador++;
    }
}

function resortear(){
    sorteados = [];
    listaSorteados = [];
    let mensagem = document.getElementById("lista-sorteio");
    mensagem.innerHTML = "";
}

function mensagemSorteados(){
    let mensagem = document.getElementById("lista-sorteio");
    let contador = 0;
    preencherLista();
    while (contador < sorteados.length){
        let paragrafo = document.createElement("p");
        paragrafo.innerHTML = `${listaNomes[contador]} => ${listaSorteados[contador]}`; 
        mensagem.appendChild(paragrafo);
        contador++;
    }
}

function sortear(){
    resortear();
    if (listaNomes.length > 1){
            let contador = 0;
        while (sorteados.length < listaNomes.length){
            let sorteado = numeroAleatorio(listaNomes.length);
            if (sorteado != contador && !sorteados.includes(sorteado)){
                sorteados.push(sorteado);
                contador++;
            }
        }
        let conferir = sorteados[sorteados.length - 1];
        if (conferir > sorteados.length - 1){
            sortear();
        } else {
            mensagemSorteados();
        }
    } else {
        alert("Erro! Não há nomes suficientes para o sorteio.")
    }

}

function reiniciar(){
    let nome = document.getElementById("nome-amigo")
    let mensagem = document.getElementById("lista-sorteio");
    let adicionados = document.getElementById("lista-amigos");
    listaNomes = [];
    listaSorteados = [];
    sorteados = [];
    mensagem.innerHTML = "";
    adicionados.innerHTML = "";
    nome.value = "";
}

function remover(){
    let nome = document.getElementById("nome-amigo").value;
    if (listaNomes.includes(nome)){
        listaNomes.splice(listaNomes.indexOf(nome), 1);
        let adicionados = document.getElementById("lista-amigos");
        adicionados.innerHTML = listaNomes;
    } else {
        alert("Erro! Digite um nome da lista para remover.");
    }

}
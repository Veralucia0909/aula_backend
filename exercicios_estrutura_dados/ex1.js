// ## Fila do Caixa Eletrônico Implemente uma fila com as operações: `enfileirar(valor)``desenfileirar()``verPrimeiro()``estaVazia()`Simule 5 pessoas chegando em um caixa eletrônico e sendo atendidas em ordem.

let filaCaixaEletronico = [];

// 1. Função para enfileirar (adicionar no fim)
function enfileirar(pessoa) {
    filaCaixaEletronico.push(pessoa);
    console.log(`-> ${pessoa} entrou na fila.`);
}

// 2. Função para desenfileirar (remover do início )
function desenfileirar() {
    if (estaVazia()) {
        console.log("A fila está vazia! Ninguém para atender.");
        return null;
    }
    const atendido = filaCaixaEletronico.shift();
    console.log(`<- ${atendido} foi atendido(a) e saiu da fila.`);
    return atendido;
}

// 3. Função para ver quem é o primeiro da fila
function verPrimeiro() {
    if (estaVazia()) {
        return "A fila está vazia.";
    }
    return filaCaixaEletronico[0];
}

// 4. Função para verificar se a fila está vazia
function estaVazia() {
    return filaCaixaEletronico.length === 0;
}

// SIMULAÇÃO: 5 pessoas chegando e sendo atendidas

console.log("--- INÍCIO DA SIMULAÇÃO DO CAIXA ELETRÔNICO ---");

// Chegada das 5 pessoas
enfileirar("Vera");
enfileirar("Carlos");
enfileirar("Beatriz");
enfileirar("Bruna");
enfileirar("Mariana");

console.log(`\nPrimeiro da fila agora: ${verPrimeiro()}\n`);

// Atendimento das pessoas em ordem (FIFO)
console.log("--- INICIANDO ATENDIMENTOS ---");
desenfileirar(); // Sai Vera
desenfileirar(); // Sai Carlos

console.log(`\nQuem ficou como primeiro da fila? ${verPrimeiro()}\n`);

desenfileirar(); // Sai Beatriz
desenfileirar(); // Sai Bruna
desenfileirar(); // Sai Mariana

// Tentando atender com a fila vazia
desenfileirar(); 

console.log(`\nA fila está vazia? ${estaVazia()}`);
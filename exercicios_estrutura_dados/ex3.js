// ## Fila com Prioridade para Idosos Implemente uma fila onde: Idosos entram na frente da fila, 
// Demais pessoas entram no final, Utilizar variaveis/ponteiros de apoio, guardando a posição que entra o idoso e também uma pessoa nao idosa
let fila = [];

// Função para adicionar pessoas na fila
function enfileirar(valor, idoso) {
    if (idoso) {
        // Idoso entra na frente da fila
        fila.unshift(valor);
    } else {
        // Demais pessoas entram no final da fila
        fila.push(valor);
    }
}

// Função para remover da fila (sempre remove o primeiro da fila)
function removerDaFila() {
    if (fila.length === 0) {
        return "Fila vazia";
    }
    // O método shift remove e retorna o primeiro elemento do array
    return fila.shift();
}

// Testando os exemplos:
enfileirar("Sebastiao", true);  // Entra na frente
enfileirar("Jose", true);       // Entra na frente (passa na frente do Sebastião)
enfileirar("Maria", false);     // Entra no final
enfileirar("Ana", true);        // Entra na frente
enfileirar("Carlos", false);    // Entra no final

console.log("Estado atual da fila:", fila);
// Saída esperada: [ 'Ana', 'Jose', 'Sebastiao', 'Maria', 'Carlos' ]

console.log("Removido:", removerDaFila()); // Remove a Ana
console.log("Fila após remoção:", fila);

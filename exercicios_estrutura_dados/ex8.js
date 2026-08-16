// Simula uma pilha clássica com tratamento de erro ao tentar remover de uma pilha vazia.

class PilhaDePratos {
    constructor() {
        this.pratos = [];
    }

    empilhar(prato) {
        this.pratos.push(prato);
    }

    desempilhar() {
        if (this.pratos.length === 0) {
            throw new Error("Erro: A pilha de pratos está vazia! Não é possível remover.");
        }
        return this.pratos.pop();
    }
}

const cozinha = new PilhaDePratos();
cozinha.empilhar("Prato de Porcelana #1");
cozinha.empilhar("Prato de Vidro #2");

console.log(cozinha.desempilhar()); // Retira o #2

try {
    cozinha.desempilhar();
    cozinha.desempilhar(); // Vai estourar o erro aqui
} catch (erro) {
    console.log(erro.message);
}
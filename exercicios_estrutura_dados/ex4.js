// ## Fila Circular Simples Implemente uma fila onde, ao chegar no fim do array, a próxima posição livre "volta" para o início (como uma roda-gigante). 
// Simule 3 voltas completas de inserção e remoção.

class FilaCircular {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.fila = new Array(capacidade);
        this.inicio = 0;
        this.fim = 0;
        this.tamanho = 0;
    }

    enfileirar(valor) {
        if (this.tamanho === this.capacidade) {
            return "Fila cheia!";
        }
        this.fila[this.fim] = valor;
        this.fim = (this.fim + 1) % this.capacidade; // Avança circularmente
        this.tamanho++;
    }

    desenfileirar() {
        if (this.tamanho === 0) {
            return "Fila vazia!";
        }
        const valor = this.fila[this.inicio];
        this.fila[this.inicio] = undefined;
        this.inicio = (this.inicio + 1) % this.capacidade; // Avança circularmente
        this.tamanho--;
        return valor;
    }
}

// Simulando inserções e remoções
const minhaFila = new FilaCircular(3);
minhaFila.enfileirar("A");
minhaFila.enfileirar("B");
minhaFila.enfileirar("C");
console.log(minhaFila.desenfileirar()); // Remove A
minhaFila.enfileirar("D");              // Dá a volta e insere na posição livre
console.log(minhaFila.fila);
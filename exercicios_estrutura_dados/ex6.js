// ## Inversão de Texto com Pilha Use uma pilha para inverter uma string, 
// empilhando cada letra e depois desempilhando tudo.

function inverterTexto(texto) {
    let pilha = [];
    
    // Empilha cada letra
    for (let letra of texto) {
        pilha.push(letra);
    }
    
    let textoInvertido = "";
    
    // Desempilha cada letra
    while (pilha.length > 0) {
        textoInvertido += pilha.pop();
    }
    
    return textoInvertido;
}

console.log(inverterTexto("JavaScript")); // tpircSavaJ
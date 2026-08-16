// ## Validador de Parênteses Verifique se uma expressão possui 
// parênteses balanceados, por exemplo: ((a+b)*c)

function validarParenteses(expressao) {
    let pilha = [];
    
    for (let char of expressao) {
        if (char === '(') {
            pilha.push(char);
        } else if (char === ')') {
            if (pilha.length === 0) return false; // Sobrou fecha-parêntese
            pilha.pop();
        }
    }
    
    return pilha.length === 0; // Se a pilha estiver vazia, está balanceado
}

console.log(validarParenteses("((a+b)*c)")); // true
console.log(validarParenteses("((a+b)*(c"));  // false

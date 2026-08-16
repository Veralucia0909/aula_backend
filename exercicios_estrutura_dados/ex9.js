// Verificador de Palíndromo com Pilha

function eh Palindromo(palavra) {
    let pilha = [];
    
    for (let i = 0; i < palavra.length; i++) {
        pilha.push(palavra[i]);
    }
    
    let palavraInvertida = "";
    for (let i = 0; i < palavra.length; i++) {
        palavraInvertida += pilha.pop();
    }
    
    return palavra === palavraInvertida;
}

console.log(ehPalindromo("arara")); // true
console.log(ehPalindromo("casa"));  // false
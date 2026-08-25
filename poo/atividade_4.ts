// Desafio: Criar um sistema de formas geométricas com classes abstratas e implementação de áreas específicas para cada forma.
//Tarefa: Criar uma classe abstrata FormaGeometrica com um método abstrato calcularArea().
// Criar classes concretas como Circulo, Quadrado e Retangulo que herdam de FormaGeometrica e implementam o método calcularArea() 
// de forma diferente. Calcular a área de diferentes formas geométricas utilizando o método polimórfico

abstract class FormaGeometrica{
    abstract calcularArea(): number;

}
 class Circulo extends FormaGeometrica {
    raio: number;

    constructor(raio: number){
        super();                    
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }
}

class Quadrado extends FormaGeometrica {
    lado: number;

    constructor(lado: number){
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado ** 2;
    }
}

class Retangulo extends FormaGeometrica {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number){
        super();
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }
}

// Polimorfismo

let forma: FormaGeometrica;

forma = new Circulo(5);
console.log(forma.calcularArea());

forma = new Quadrado(4);
console.log(forma.calcularArea());

forma = new Retangulo(3, 6);
console.log(forma.calcularArea());




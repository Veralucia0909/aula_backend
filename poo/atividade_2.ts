// Desafio: Criar um sistema com diferentes tipos de funcionários (exemplo: programador, designer) utilizando herança.
//  Criar uma classe Funcionario com atributos como nome, salario e um método calcularSalario().
//Criar classes específicas para cada tipo de funcionário, como Programador e Designer,
//  que herdam de Funcionario e implementam seu próprio cálculo de salário.

// class Funcionario {
//     nome: string;
//     salario: number;

//     constructor(nome: string, salario: number) {
//         this.nome = nome;
//         this.salario = salario;

//         calcularSalario() {
//             return this.salario;
//         }
//     }
//         class Programador extends funcionario {
//             constructor(nome: string, salario: number) {
//                 super(nome, salario);
//             }
//             calcularSalario() {
//                 return this.salario * 1.2; // E                                                                       
//      class Designer extends funcionario {
//             constructor(nome: string, salario: number) {
//                 super(nome, salario);
//             }
//             calcularSalario() {
//                 return this.salario * 1.1;    
//     };

 class Funcionario {
    nome:string;
    constructor(nome:string){
        this.nome = nome;
    }
   calcularSalario():number{
        return 0
   };
}

class Programador extends Funcionario {
    nivel:string;

    constructor(nome:string, nivel:string){
        super(nome)
        this.nivel = nivel;
    }
  calcularSalario(): number {
    return 5000;
  }
  mostrarNivel():string{
    return this.nivel;
  }
}

class Designer extends Funcionario {
  calcularSalario(): number {
    return 4000;
  }
}

const designer = new Designer("Claudio")
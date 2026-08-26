// Desafio: Criar um sistema de contas bancárias, com controle de acesso a saldo utilizando o encapsulamento.
// Tarefa: Criar uma classe ContaBancaria com atributos privados, como saldo.
// Adicionar métodos públicos para realizar depósito, saque e consulta de saldo.
// Impedir que o saldo seja alterado diretamente, utilizando encapsulamento.


class ContaBancaria {
    private saldo: number;  

    constructor() {
        this.saldo = 0;  
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;    
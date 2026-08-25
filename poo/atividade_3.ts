// Desafio: Criar um sistema de pagamento onde diferentes tipos de pagamento (Cartão de Crédito, Boleto, PayPal)
// implementam o mesmo método realizarPagamento() de maneiras diferentes.
// Tarefa: Criar uma classe abstrata Pagamento, com um método realizarPagamento().
// Criar classes concretas como CartaoCredito, Boleto e PayPal que herdam de Pagamento e implementam o método realizarPagamento() 
// de maneira distinta. Demonstrar o polimorfismo chamando o mesmo método para diferentes tipos de pagamento

abstract class Pagamento {
    abstract realizarPagamento(): void;

}
 
class cartaoCredito extends Pagamento {
realizarPagamento(): void {
    console.log("Pagamento realizado com cartão de crédito.");
}
}

class boletos extends Pagamento {
realizarPagamento(): void {
    console.log("Pagamento realizado com boleto.");
}
}

class paypal extends Pagamento {
realizarPagamento(): void {
    console.log("Pagamento realizado com PayPal.");
}
}

// Criando os objetos
const pagamentoCartao = new cartaoCredito();
pagamentoCartao.realizarPagamento();
const pagamentoBoleto = new boletos();
pagamentoBoleto.realizarPagamento();
const pagamentoPayPal = new paypal();
pagamentoPayPal.realizarPagamento();



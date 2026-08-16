// Fila de Espera do Consultório Simule uma fila de pacientes chegando para consulta. Imprima a ordem de atendimento conforme cada paciente é chamado.

// Array que representa a nossa Fila de Pacientes
let filaEsperaConsultorio = [];

// Funções base da fila
function enfileirar(paciente) {
    filaEsperaConsultorio.push(paciente);
    console.log(`+ Paciente ${paciente} entrou na sala de espera.`);
}

function estaVazia() {
    return filaEsperaConsultorio.length === 0;
}

// Função para chamar o próximo (simulando atendimento)
function chamarProximo() {
    if (estaVazia()) {
        return "Nenhum paciente na sala de espera.";
    }
    return filaEsperaConsultorio.shift();
}

// SIMULAÇÃO COM ASYNC/AWAIT
// Usamos uma função assíncrona para dar um "tempo" entre um atendimento e outro
async function iniciarAtendimento() {
    console.log("--- Consultório Aberto: Iniciando chamadas ---");

    // 1. Adicionando pacientes
    enfileirar("Vera");
    enfileirar("Bruna");
    enfileirar("Pedro");
    enfileirar("Ana");
    enfileirar("Clara");

    console.log(`\nLista de espera: ${filaEsperaConsultorio.join(", ")}\n`);

    // 2. Simulando atendimento médico (1 segundo por paciente)
    while (!estaVazia()) {
        const pacienteAtual = chamarProximo();
        
        console.log(`> Médico chamando: ${pacienteAtual}...`);
        
        // Simula o tempo de consulta/atendimento
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log(`  (Consulta de ${pacienteAtual} finalizada.)\n`);
    }

    console.log("--- Todos os pacientes foram atendidos. Consultório fechado. ---");
}

// Executando a simulação
iniciarAtendimento();
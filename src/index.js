import Cliente from './models/Cliente';
import ContaCorrente from './models/ContaCorrente';
import Movimentacao from './models/Movimentacao';

const IMovimentacao1 = {
    operacao: "Pizza Express",
    custo: 120.22,
    action: "remove"
}

const IMovimentacao2 = {
    operacao: "O Rei Merlin",
    custo: 40.22,
    action: "remove"
}

const movimentacoes = [
    new Movimentacao(IMovimentacao1), 
    new Movimentacao(IMovimentacao2)
]

const IContaCorente = {
    contaCorrenteId: "2h3i12uh-0ggh0d9h-93hb9fh",
    saldo: 253.22,
    movimentacoes
}

const contaCorrente = new ContaCorrente(IContaCorente);

const ICliente = {
    clienteID: "asd23423-sad3211-ssd546ad",
    clienteNome: "João Faria",
    clienteEmail: "joao@mail.com",
    clienteCPF: "222.222.222-22",
    contaPoupanca: 1500.00,
    contaCorrente
}


const cliente = new Cliente(ICliente);

console.log(cliente)
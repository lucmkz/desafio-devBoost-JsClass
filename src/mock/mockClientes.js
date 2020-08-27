import Cliente from "../models/Cliente";
import ContaCorrente from "../models/ContaCorrente";
import Movimentacao from "../models/Movimentacao";

//Cliente1
const IMovimentacao1Cliente1 = {
  operacao: "Pizza Express",
  custo: 120.22,
  action: "remove",
};

const IMovimentacao2Cliente1 = {
  operacao: "O Rei Merlin",
  custo: 120.22,
  action: "add",
};

const IMovimentacao3Cliente1 = {
  operacao: "Deposito Cliente",
  custo: 40.22,
  action: "remove",
};

const movimentacoesCliente1 = [
  new Movimentacao(IMovimentacao1Cliente1),
  new Movimentacao(IMovimentacao2Cliente1),
  new Movimentacao(IMovimentacao3Cliente1),
];

const IContaCorenteCliente1 = {
  contaCorrenteId: "2h3i12uh-0ggh0d9h-93hb9fh",
  saldo: 253.22,
  movimentacoes: movimentacoesCliente1
};

const contaCorrenteCliente1 = new ContaCorrente(IContaCorenteCliente1);

const IClienteCliente1 = {
  clienteID: "asd23423-sad3211-ssd546ad",
  clienteNome: "João Faria",
  clienteEmail: "joao@mail.com",
  clienteCPF: "222.222.222-22",
  contaPoupanca: 1500.0,
  contaCorrente: contaCorrenteCliente1
};

export const cliente1 = new Cliente(IClienteCliente1);

//Cliente2
const IMovimentacao1Cliente2 = {
  operacao: "Autoposto SuperGas",
  custo: 30.22,
  action: "remove",
};

const IMovimentacao2Cliente2 = {
  operacao: "Restaurante BoFood",
  custo: 230.22,
  action: "remove"
};

const IMovimentacao3Cliente2 = {
  operacao: "Fast soup",
  custo: 80.22,
  action: "remove"
};

const movimentacoesCliente2 = [
  new Movimentacao(IMovimentacao1Cliente2),
  new Movimentacao(IMovimentacao2Cliente2),
  new Movimentacao(IMovimentacao3Cliente2),
];

const IContaCorenteCliente2 = {
  contaCorrenteId: "2sadas12-123adhsadh-93hb23ra",
  saldo: 2253.22,
  movimentacoes: movimentacoesCliente2
};

const contaCorrenteCliente2 = new ContaCorrente(IContaCorenteCliente2);

const IClienteCliente2 = {
  clienteID: "aasd3f54ndc-09n5058376-29385029v8n",
  clienteNome: "Pedro Faria",
  clienteEmail: "pedro@mail.com",
  clienteCPF: "333.333.333-22",
  contaPoupanca: 200.00,
  contaCorrente: contaCorrenteCliente2
};

export const cliente2 = new Cliente(IClienteCliente2);


//Cliente3
const IMovimentacao1Cliente3 = {
  operacao: "Deposito Luiz da Silva",
  custo: 998.44,
  action: "add"
};

const IMovimentacao2Cliente3 = {
  operacao: "Deposito Mapple LTDA",
  custo: 575.89,
  action: "add"
};

const IMovimentacao3Cliente3 = {
  operacao: "Compra BestBuyer",
  custo: 1320.22,
  action: "remove"
};

const movimentacoesCliente3 = [
  new Movimentacao(IMovimentacao1Cliente3),
  new Movimentacao(IMovimentacao2Cliente3),
  new Movimentacao(IMovimentacao3Cliente3),
];

const IContaCorenteCliente3 = {
  id: "2saasd12-asdsad2312dh-45sdhb2ra",
  saldo: 253.22,
  movimentacoes:movimentacoesCliente3
};

const contaCorrenteCliente3 = new ContaCorrente(IContaCorenteCliente3);

const IClienteCliente3 = {
  clienteID: "bhj3b1pk2-hhad43287-8h9h9g873g94",
  clienteNome: "João Rubens de Souza",
  clienteEmail: "joao@mail.com",
  clienteCPF: "132.321.456-22",
  contaPoupanca: 1500.00,
  contaCorrente: contaCorrenteCliente3
};

export const cliente3 = new Cliente(IClienteCliente3);

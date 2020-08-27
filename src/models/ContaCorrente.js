export default class ContaCorrente {
  constructor({contaCorrenteId, saldo, movimentacoes}) {
    this.contaCorrenteId = contaCorrenteId;
    this.saldo = saldo;
    this.movimentacoes = movimentacoes;
  }
}